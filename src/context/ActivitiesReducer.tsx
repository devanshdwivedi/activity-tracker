import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "./ActivityConstants";

export default function ActivitiesReducer(
  state: any,
  action: ActionPayload
) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case REMOVE_ACTIVITY:
      return {
        ...state,
        events: state.events.filter(
          (event: any) => event.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
