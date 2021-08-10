declare interface Task {
    title: string;
    completed: boolean;
}

declare interface Activity {
    id: string;
    title: string;
    activityState: string;
    priority: number;
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