import React, { createContext, useEffect, useReducer } from "react";
import ActivitiesReducer from "./ActivitiesReducer";
import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "./ActivityConstants";

const localStorageKey = "activities";

const getActivitiesFromLocalStorage = () => {
  let activitiesStr: string | null = window.localStorage.getItem(localStorageKey);
  let activities: Activity[];
  if (!activitiesStr) {
    activities = [
        {
            id: '1',
            activityState: 'New',
            title: 'Event 1',
            priority: 4
        },
        {
            id: '2',
            activityState: 'Committed',
            title: 'Event 2',
            priority: 2
        }
    ];
  } else {
    activities = JSON.parse(activitiesStr);
  }
  return activities;
};

const initialState: GlobalStateObject = {
  activities: getActivitiesFromLocalStorage(),
  addActivity: (activity: Activity) => {},
  removeActivity: () => {},
};

export const ActvityContext = createContext(initialState);

export const ActivityProvider = (props: any) => {
  const [state, dispatch] = useReducer(ActivitiesReducer, initialState);

  /*useEffect(() => {
    if (state && state.events) {
      window.localStorage.setItem(
        localStorageKey,
        JSON.stringify(state.events)
      );
    }
  }, [state]);*/

  function addActivity(event: Activity) {
    dispatch({
      type: ADD_ACTIVITY,
      payload: event,
    });
  }

  function removeActivity(id: string) {
    dispatch({
      type: REMOVE_ACTIVITY,
      payload: id,
    });
  }

  return (
    <ActvityContext.Provider
      value={{
        activities: state.activities,
        addActivity,
        removeActivity
      }}
    >
      {props.children}
    </ActvityContext.Provider>
  );
};
