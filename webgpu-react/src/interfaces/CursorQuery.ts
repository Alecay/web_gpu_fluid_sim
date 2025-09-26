export interface CursorQuery {
  height: number;
  fAmount: number;
  normal: { x: number; y: number; z: number };
}

export const DefaultCursorQuery: CursorQuery = {
  height: 0,
  fAmount: 0,
  normal: { x: 0, y: 0, z: 0 },
};
