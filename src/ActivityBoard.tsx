import React from "react";
import Lane from "./components/Lane";

function ActivityBoard() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Lane activityState={"New"} canShrink={true} />
      <Lane activityState={"Committed"} />
      <Lane activityState={"In progress"} />
      <Lane activityState={"In review"} />
      <Lane activityState={"Done"} canShrink={true} />
    </div>
  );
}

export default ActivityBoard;
