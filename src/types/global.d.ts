declare interface Task {
  title: string;
  completed: boolean;
}

declare type ActivityState =
  | "Committed"
  | "In progress"
  | "In review"
  | "New"
  | "Done";

declare type Priority = 1 | 2 | 3 | 4 | 5;

declare interface Activity {
  activityState: ActivityState;
  id: string;
  title: string;
  priority: Priority;
  originalEsimate?: number;
  remainingWork?: number;
  tags?: string[];
  tasks?: Task[];
}

declare interface GlobalStateObject {
  activities: Activity[];
  addActivity(activity: Activity): void;
  removeActivity(activityId: string): void;
}

interface BaseActionPayload {
  type?: string;
}

interface CreateActionPayload extends BaseActionPayload {
  payload: Activity;
}

interface RemoveActionPayload extends BaseActionPayload {
  payload: string;
}

declare type ActionPayload = CreateActionPayload | RemoveActionPayload;
