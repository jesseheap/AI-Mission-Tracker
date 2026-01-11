
export interface Task {
  id: number;
  week: string;
  title: string;
  description: string;
  icon: string;
  completed: boolean;
  completedDate: string | null;
  notes: string;
  briefing: string;
  tips: string[];
}

export interface AppState {
  tasks: Task[];
  userName: string;
}
