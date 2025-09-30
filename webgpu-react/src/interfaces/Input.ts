import { VisibleRect } from "./VisibleRect";

export interface Input {
  mouse0Held: boolean;
  mouse1Held: boolean;
  mouse2Held: boolean;
  mouseRadius: number;
  mouseMoved: boolean;
  mousePosition: { x: number; y: number };
  visibleRect: VisibleRect;
  visibleRectChanged: boolean;
  simulationSubSteps: number;
}

export const DefaultInput: Input = {
  mouse0Held: false,
  mouse1Held: false,
  mouse2Held: false,
  mouseRadius: 30,
  mouseMoved: false,
  mousePosition: { x: 0, y: 0 },
  visibleRect: {
    x0: 0,
    y0: 0,
    x1: 0,
    y1: 0,
    width: 0,
    height: 0,
  },
  visibleRectChanged: false,
  simulationSubSteps: 1,
};
