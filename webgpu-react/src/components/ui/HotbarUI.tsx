import React from "react";
import { Tabs, Tab } from "react-bootstrap";

export default function HotbarUI() {
  const tabStyle: React.CSSProperties = {
    borderRadius: "20px 20px 0px 0px",
    backgroundColor: "slategray",
    padding: "10px",
    color: "black",
    minHeight: "100px",
    pointerEvents: "none",
    userSelect: "none",
  };

  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        style={{ color: "black" }}
      >
        <Tab eventKey="home" title="Home" style={tabStyle}>
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
      </Tabs>
    </>
  );
}
