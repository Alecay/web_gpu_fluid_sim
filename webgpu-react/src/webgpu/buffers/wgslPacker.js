// wgslPacker.js
// @ts-check

/** @typedef {'f32'|'u32'|'i32'|'bool'
 *           |'vec2f'|'vec3f'|'vec4f'
 *           |'vec2u'|'vec3u'|'vec4u'
 *           |'vec2i'|'vec3i'|'vec4i'
 *           |`pad${number}`} WGSLType */

/** @typedef {{ name: string, type: WGSLType }} FieldDesc */
/** @typedef {{ name:string,type:WGSLType,offset:number,size:number,align:number }} FieldInfo */
/** @typedef {{ fields: FieldInfo[], size:number }} StructLayout */

// Safe alignment: coerces to integers, validates 'a', and works with non-power-of-two too.
/**
 * Align n up to the next multiple of a (a > 0). Coerces to uint32.
 * @param {number} n
 * @param {number} a
 */
function alignTo(n, a) {
  const nn = n >>> 0; // coerce to uint32
  const aa = a >>> 0 || 1; // prevent 0; default to 1
  // Fast path for power-of-two a
  if ((aa & (aa - 1)) === 0) {
    return (nn + (aa - 1)) & ~(aa - 1);
  }
  // Generic path (handles non-power-of-two)
  return (Math.ceil(nn / aa) * aa) >>> 0;
}

/**
 * Normalize WGSL type tokens. Accepts 'vec2<f32>' and 'vec2f' etc.
 * @param {unknown} t
 * @returns {WGSLType | ''}   // <-- changed
 */
function normalizeType(t) {
  if (typeof t !== "string") return "";
  const s = t.trim().toLowerCase();

  if (/^(f32|u32|i32|bool|vec[234][fui]|pad\d+)$/.test(s)) {
    return /** @type {WGSLType} */ (s);
  }

  const m = s.match(/^vec([234])<\s*(f32|u32|i32)\s*>$/);
  if (m) {
    return /** @type {WGSLType} */ (`vec${m[1]}${m[2][0]}`);
  }

  const p = s.match(/^pad[_\s]*([0-9]+)$/);
  if (p) return /** @type {WGSLType} */ (`pad${p[1]}`);

  return "";
}

const TYPE_INFO = {
  f32: { size: 4, align: 4 },
  u32: { size: 4, align: 4 },
  i32: { size: 4, align: 4 },
  bool: { size: 4, align: 4 },

  vec2f: { size: 8, align: 8 },
  vec3f: { size: 12, align: 16 },
  vec4f: { size: 16, align: 16 },

  vec2u: { size: 8, align: 8 },
  vec3u: { size: 12, align: 16 },
  vec4u: { size: 16, align: 16 },

  vec2i: { size: 8, align: 8 },
  vec3i: { size: 12, align: 16 },
  vec4i: { size: 16, align: 16 },
};

/**
 * Define a WGSL-like struct layout (uniform/storage rules for scalars/vecs).
 * @param {FieldDesc[]} fields
 * @returns {StructLayout}
 */
export function defineStructLayout(fields) {
  /** @type {StructLayout} */
  const layout = { fields: [], size: 0 };
  let offset = 0;
  let maxAlign = 1;

  for (const f of fields) {
    /** @type {WGSLType | ''} */
    const maybe = normalizeType(f.type);
    if (!maybe) throw new Error(`Unsupported type: ${f.type}`);

    // ✅ now it's safe to assert the union
    const type = /** @type {WGSLType} */ (maybe);

    if (type.startsWith("pad")) {
      const bytes = parseInt(type.slice(3), 10) || 0;
      if (bytes <= 0) throw new Error(`Invalid padding: ${type}`);

      /** @type {FieldInfo} */
      const padField = { name: f.name, type, offset, size: bytes, align: 1 };
      layout.fields.push(padField);
      offset += bytes;
      continue;
    }

    // TYPE_INFO only has non-pad keys; type is one of them now
    /** @type {keyof typeof TYPE_INFO} */
    const key = /** @type {any} */ (type);
    const info = TYPE_INFO[key];
    if (!info) throw new Error(`Unsupported non-pad type: ${type}`);

    offset = alignTo(offset, info.align);

    /** @type {FieldInfo} */
    const fi = {
      name: f.name,
      type,
      offset,
      size: info.size,
      align: info.align,
    };
    layout.fields.push(fi);

    offset += info.size;
    if (info.align > maxAlign) maxAlign = info.align;
  }

  layout.size = alignTo(offset, Math.max(16, maxAlign)); // keep uniform-friendly
  return layout;
}

/**
 * Packs a JS object into an ArrayBuffer according to layout.
 * @param {StructLayout} layout
 * @param {Record<string, any>} data
 */
export function packStruct(layout, data) {
  const buf = new ArrayBuffer(layout.size);
  const dv = new DataView(buf);

  for (const f of layout.fields) {
    if (f.type.startsWith("pad")) continue;
    const v = data[f.name];
    if (v == null) throw new Error(`Missing field '${f.name}'`);

    switch (f.type) {
      case "f32":
        dv.setFloat32(f.offset, +v, true);
        break;
      case "u32":
        dv.setUint32(f.offset, v >>> 0, true);
        break;
      case "i32":
        dv.setInt32(f.offset, v | 0, true);
        break;
      case "bool":
        dv.setUint32(f.offset, v ? 1 : 0, true);
        break;

      case "vec2f":
        dv.setFloat32(f.offset, v[0], true);
        dv.setFloat32(f.offset + 4, v[1], true);
        break;
      case "vec3f":
        dv.setFloat32(f.offset, v[0], true);
        dv.setFloat32(f.offset + 4, v[1], true);
        dv.setFloat32(f.offset + 8, v[2], true);
        break;
      case "vec4f":
        dv.setFloat32(f.offset, v[0], true);
        dv.setFloat32(f.offset + 4, v[1], true);
        dv.setFloat32(f.offset + 8, v[2], true);
        dv.setFloat32(f.offset + 12, v[3], true);
        break;

      case "vec2u":
        dv.setUint32(f.offset, v[0] >>> 0, true);
        dv.setUint32(f.offset + 4, v[1] >>> 0, true);
        break;
      case "vec3u":
        dv.setUint32(f.offset, v[0] >>> 0, true);
        dv.setUint32(f.offset + 4, v[1] >>> 0, true);
        dv.setUint32(f.offset + 8, v[2] >>> 0, true);
        break;
      case "vec4u":
        dv.setUint32(f.offset, v[0] >>> 0, true);
        dv.setUint32(f.offset + 4, v[1] >>> 0, true);
        dv.setUint32(f.offset + 8, v[2] >>> 0, true);
        dv.setUint32(f.offset + 12, v[3] >>> 0, true);
        break;

      case "vec2i":
        dv.setInt32(f.offset, v[0] | 0, true);
        dv.setInt32(f.offset + 4, v[1] | 0, true);
        break;
      case "vec3i":
        dv.setInt32(f.offset, v[0] | 0, true);
        dv.setInt32(f.offset + 4, v[1] | 0, true);
        dv.setInt32(f.offset + 8, v[2] | 0, true);
        break;
      case "vec4i":
        dv.setInt32(f.offset, v[0] | 0, true);
        dv.setInt32(f.offset + 4, v[1] | 0, true);
        dv.setInt32(f.offset + 8, v[2] | 0, true);
        dv.setInt32(f.offset + 12, v[3] | 0, true);
        break;

      default:
        throw new Error(`Unhandled type ${f.type}`);
    }
  }

  return buf;
}

/**
 * Creates (or updates) a GPUBuffer from a packed struct.
 * @param {GPUDevice} device
 * @param {StructLayout} layout
 * @param {Record<string, any>} data
 * @param {number} usage e.g., GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
 * @param {string=} label
 * @param {GPUBuffer=} existing
 */
export function createOrUpdateBuffer(
  device,
  layout,
  data,
  usage,
  label,
  existing
) {
  const packed = packStruct(layout, data);
  const buf =
    existing ?? device.createBuffer({ size: layout.size, usage, label: label });
  device.queue.writeBuffer(buf, 0, packed);
  return buf;
}
