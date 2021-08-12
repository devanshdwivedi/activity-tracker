import React, { useContext, useState } from "react";
import { ActvityContext } from "../context/ActivitiesState";
import Activity from "./Activity";

interface LaneProps {
  activityState: ActivityState;
  canShrink?: boolean;
}

interface LaneHeaderProps {
  title: string;
  canShrink?: boolean;
  expandCallback: any;
  expanded?: boolean;
}

function LaneHeader({
  title,
  canShrink,
  expandCallback,
  expanded,
}: LaneHeaderProps) {
  return (
    <div
      style={{
        borderBottom: expanded ? "2px solid black" : "",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {expanded ? <div style={{ margin: "0 0 0 10px" }}>{title}</div> : null}
      {canShrink ? (
        <div
          onClick={expandCallback}
          style={{ cursor: "pointer", padding: "0 10px" }}
        >
          {expanded ? "<" : ">"}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function Lane({ activityState, canShrink }: LaneProps) {
  const { activities } = useContext(ActvityContext);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const expandCallback = () => {
    setIsExpanded(!isExpanded);
  };

  const contractedMarkup = () => {
    return (
      <div
        style={{
          height: "100vh",
          width: "30px",
          margin: "2px",
          border: "1px solid black",
        }}
      >
        <LaneHeader
          expanded={isExpanded}
          expandCallback={expandCallback}
          canShrink={canShrink}
          title={activityState.toString()}
        />
        {
          <div
            style={{
              paddingTop: "30px",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              position: "relative",
              left: "5px",
            }}
          >
            {activityState}
          </div>
        }
      </div>
    );
  };

  const expandedMarkup = () => {
    return (
      <div
        style={{
          height: "100vh",
          flex: "1",
          margin: "2px",
          border: "1px solid black",
        }}
      >
        <LaneHeader
          expanded={isExpanded}
          expandCallback={expandCallback}
          canShrink={canShrink}
          title={activityState.toString()}
        />
        {activities &&
          activities.length > 0 &&
          activities.map((activity: Activity, index: number) => {
            if (
              activity.activityState.toString() === activityState.toString()
            ) {
              return (
                <Activity
                  key={activity.id + "-index-" + index}
                  title={activity.title}
                  id={activity.id}
                  activityState={activityState}
                  priority={activity.priority}
                  tags={activity.tags}
                  tasks={activity.tasks}
                />
              );
            }
            return null;
          })}
      </div>
    );
  };

  return isExpanded ? expandedMarkup() : contractedMarkup();
}
