import {
  ADD_ACTIVITY,
  REMOVE_ACTIVITY,
  EDIT_ACTIVITY,
} from "./ActivityConstants";

export default function ActivitiesReducer(state: any, action: ActionPayload) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };

    case REMOVE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          (activity: any) => activity.id !== action.payload
        ),
      };

    case EDIT_ACTIVITY:
      return {
        ...state,
        activities: state.activities.map((activity: any) => {
          if (activity.id !== (action.payload as Activity).id) {
            return activity;
          }
          return action.payload;
        }),
      };

    default:
      return state;
  }
}
