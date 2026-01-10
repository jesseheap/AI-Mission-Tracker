
export interface Task {
  id: number;
  week: string;
  title: string;
  description: string;
  icon: string;
  completed: boolean;
  completedDate: string | null;
}

export interface AppState {
  tasks: Task[];
  userName: string;
}
