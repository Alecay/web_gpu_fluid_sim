export interface Input {
  mouse0Held: boolean;
  mouse1Held: boolean;
  mouse2Held: boolean;
  mouseRadius: number;
  mouseMoved: boolean;
  mousePosition: { x: number; y: number };
}

export const DefaultInput: Input = {
  mouse0Held: false,
  mouse1Held: false,
  mouse2Held: false,
  mouseRadius: 30,
  mouseMoved: false,
  mousePosition: { x: 0, y: 0 },
};
