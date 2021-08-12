import React, { useState } from "react";
import Lane from "./components/Lane";
import Modal from "react-modal";

Modal.setAppElement("#modal");
if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = "initial";
}

import { ActivityProvider } from "./context/ActivitiesState";
import NewActivity from "./components/NewActivity";

function ActivityBoard() {

  const [isCreationModalOpen, setIsCreationModalOpen] = useState<boolean>(false);

  return (
    <ActivityProvider>
      <NewActivity isOpen={isCreationModalOpen} closeCallback={() => setIsCreationModalOpen(false)} />
      <div>
        <button onClick={() => setIsCreationModalOpen(true)} style={{height: '30px', margin: '10px 0'}}>Add a new task</button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Lane key={'lane-new'} activityState={"New"} canShrink={true} />
        <Lane key={'lane-committed'} activityState={"Committed"} />
        <Lane key={'lane-in-progress'} activityState={"In progress"} />
        <Lane key={'lane-in-review'} activityState={"In review"} />
        <Lane key={'lane-done'} activityState={"Done"} canShrink={true} />
      </div>
    </ActivityProvider>
  );
}

export default ActivityBoard;
