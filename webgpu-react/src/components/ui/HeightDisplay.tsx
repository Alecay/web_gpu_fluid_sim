import { CursorQuery } from "@/interfaces/CursorQuery";
import { Flag } from "react-bootstrap-icons";

interface HeightDisplayProps {
  cursorQuery: CursorQuery;
}

export default function HeightDisplay({ cursorQuery }: HeightDisplayProps) {
  const maxCellValue = 200.0;
  const maxHeight = 150.0;
  const width = 50.0;
  const fontSize = 20;
  var height = Math.ceil(cursorQuery.height);
  var fAmount = Math.abs(
    cursorQuery.fAmount < 0
      ? Math.floor(cursorQuery.fAmount)
      : Math.ceil(cursorQuery.fAmount)
  );

  if (fAmount + height > maxCellValue) {
    fAmount = maxCellValue - height;
  }

  const heightPX = (height / maxCellValue) * maxHeight;
  const fAmountPX = (fAmount / maxCellValue) * maxHeight;

  var fLabel = ""; //fAmount > 0 ? (fAmount < 1 ? `< 1` : `${fAmount}`) : "";
  if (fAmount > 0) {
    if (Math.abs(cursorQuery.fAmount) < 1) fLabel = " < 1";
    else fLabel = `${fAmount}`;
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: "5px",
        right: "5px",
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
          // borderRadius: "5px 5px 0px 0px",
          zIndex: 2,
        }}
      />
      <div
        style={{
          width: `${width}px`,
          height: `${fAmountPX}px`,
          backgroundColor:
            cursorQuery.fAmount < 0
              ? "rgba(196, 196, 199, 1)"
              : "rgba(26, 39, 187, 1)",
          position: "relative",
          borderRadius: "0px",
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
          {fLabel}
        </div>
      </div>
      <div
        style={{
          width: `${width}px`,
          height: `${heightPX}px`,
          backgroundColor: "rgba(15, 84, 9, 1)",
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
