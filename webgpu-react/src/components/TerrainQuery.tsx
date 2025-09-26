import { CursorQuery } from "@/interfaces/CursorQuery";
import { Input } from "@/interfaces/Input";
import { Tabs, Tab } from "react-bootstrap";

interface TerrainQueryProps {
  input: Input;
  cursorQuery: CursorQuery;
}

export default function TerrainQuery({
  input,
  cursorQuery,
}: TerrainQueryProps) {
  const maxCellValue = 200.0;
  const maxHeight = 100.0;
  const height = Math.ceil(cursorQuery.height);
  const fAmount = Math.ceil(cursorQuery.fAmount);

  const heightPX = (height / maxCellValue) * maxHeight;
  const fAmountPX = (fAmount / maxCellValue) * maxHeight;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        color: "white",
        fontSize: "14px",
      }}
    >
      <div style={{ position: "absolute", bottom: "5px", left: "5px" }}>
        {`(${input.mousePosition.x}, ${input.mousePosition.y})`}
      </div>
      {/* <div
        style={{
          position: "absolute",
          bottom: "1px",
          left: "50%",
          transform: "translate(-50%, 0%)",
          pointerEvents: "all",
        }}
      >
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          style={{ color: "black" }}
        >
          <Tab
            eventKey="home"
            title="Home"
            style={{
              backgroundColor: "slategray",
              padding: "10px",
              color: "black",
              minHeight: "100px",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            Tab content for Home
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab content for Profile
          </Tab>
        </Tabs>
      </div> */}
      <div
        style={{
          position: "absolute",
          bottom: "1px",
          right: "1px",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            width: "30px",
            height: `${maxHeight}px`,
            border: "solid 1px black",
            borderRadius: "5px 5px 0px 0px",
          }}
        ></div>
        <div
          style={{
            width: "30px",
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
              height: "40px",
              textAlign: "center",
            }}
          >
            {cursorQuery.fAmount > 0 ? `${fAmount}` : ""}
          </div>
        </div>
        <div
          style={{
            width: "30px",
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
    </div>
  );
}
