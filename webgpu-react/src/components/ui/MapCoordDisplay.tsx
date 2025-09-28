import { Input } from "@/interfaces/Input";

interface MapCoordDisplayProps {
  input: Input;
}

export default function MapCoordDisplay({ input }: MapCoordDisplayProps) {
  return (
    <div style={{ position: "absolute", bottom: "5px", left: "5px" }}>
      {`(${input.mousePosition.x}, ${input.mousePosition.y})`}
    </div>
  );
}
