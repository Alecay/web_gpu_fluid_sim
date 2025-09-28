import { CursorQuery } from "@/interfaces/CursorQuery";

interface HeightDisplayProps {
  cursorQuery: CursorQuery;
}

export default function HeightDisplay({ cursorQuery }: HeightDisplayProps) {
  const maxCellValue = 200.0;
  const maxHeight = 150.0;
  const width = 50.0;
  const fontSize = 20;
  const height = Math.ceil(cursorQuery.height);
  const fAmount = Math.ceil(cursorQuery.fAmount);

  const heightPX = (height / maxCellValue) * maxHeight;
  const fAmountPX = (fAmount / maxCellValue) * maxHeight;
  return (
    <div
      style={{
        position: "absolute",
        bottom: "1px",
        right: "1px",
        fontSize: `${fontSize}px`,
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          width: `${width}px`,
          height: `${maxHeight}px`,
          border: "solid 4px white",
          borderRadius: "5px 5px 0px 0px",
          zIndex: 2,
        }}
      />
      <div
        style={{
          width: `${width}px`,
          height: `${fAmountPX}px`,
          backgroundColor: "rgba(26, 39, 187, 0.46)",
          position: "relative",
          borderRadius: "5px 5px 0px 0px",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            height: `${fontSize * 2.5}px`,
            textAlign: "center",
          }}
        >
          {cursorQuery.fAmount > 0 ? `${fAmount}` : ""}
        </div>
      </div>
      <div
        style={{
          width: `${width}px`,
          height: `${heightPX}px`,
          backgroundColor: "rgba(15, 84, 9, 0.46)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {cursorQuery.height > 0 ? `${height}` : ""}
        </div>
      </div>
    </div>
  );
}
