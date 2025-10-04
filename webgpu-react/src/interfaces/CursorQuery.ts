export interface CursorQuery {
  height: number;
  fAmount: number;
  normal: { x: number; y: number; z: number };
  fluidTotal: number;
  antiFluidTotal: number;
  chunkUpdates: number;
}

export const DefaultCursorQuery: CursorQuery = {
  height: 0,
  fAmount: 0,
  normal: { x: 0, y: 0, z: 0 },
  fluidTotal: 0,
  antiFluidTotal: 0,
  chunkUpdates: 0,
};
