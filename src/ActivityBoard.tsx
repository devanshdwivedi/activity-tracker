import React from "react";
import Lane from "./components/Lane";

import { ActivityProvider } from "./context/ActivitiesState";

function ActivityBoard() {
  return (
    <ActivityProvider>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Lane activityState={"New"} canShrink={true} />
        <Lane activityState={"Committed"} />
        <Lane activityState={"In progress"} />
        <Lane activityState={"In review"} />
        <Lane activityState={"Done"} canShrink={true} />
      </div>
    </ActivityProvider>
  );
}

export default ActivityBoard;
