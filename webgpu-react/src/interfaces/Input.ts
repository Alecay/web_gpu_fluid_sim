import { VisibleRect } from "./VisibleRect";

export interface Input {
  mouse0Held: boolean;
  mouse1Held: boolean;
  mouse2Held: boolean;

  mouse0Pressed: boolean;
  mouse1Pressed: boolean;
  mouse2Pressed: boolean;

  mouseRadius: number;
  mouseMoved: boolean;
  cursorVisible: boolean;
  mousePosition: { x: number; y: number };
  visibleRect: VisibleRect;
  visibleRectChanged: boolean;
  simulationSubSteps: number;
}

export function inputsEqual(a: Input, b: Input): boolean {
  return (
    a.mouse0Held === b.mouse0Held &&
    a.mouse1Held === b.mouse1Held &&
    a.mouse2Held === b.mouse2Held &&
    a.mouse0Pressed === b.mouse0Pressed &&
    a.mouse1Pressed === b.mouse1Pressed &&
    a.mouse2Pressed === b.mouse2Pressed &&
    a.mouseRadius === b.mouseRadius &&
    a.mouseMoved === b.mouseMoved &&
    a.cursorVisible === b.cursorVisible &&
    a.mousePosition.x === b.mousePosition.x &&
    a.mousePosition.y === b.mousePosition.y &&
    a.visibleRect.x0 === b.visibleRect.x0 &&
    a.visibleRect.y0 === b.visibleRect.y0 &&
    a.visibleRect.x1 === b.visibleRect.x1 &&
    a.visibleRect.y1 === b.visibleRect.y1 &&
    a.visibleRect.width === b.visibleRect.width &&
    a.visibleRect.height === b.visibleRect.height &&
    a.visibleRectChanged === b.visibleRectChanged &&
    a.simulationSubSteps === b.simulationSubSteps
  );
}

export const DefaultInput: Input = {
  mouse0Held: false,
  mouse1Held: false,
  mouse2Held: false,
  mouse0Pressed: false,
  mouse1Pressed: false,
  mouse2Pressed: false,
  mouseRadius: 30,
  mouseMoved: false,
  cursorVisible: true,
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
