export type TaskType = 'bug' | 'task';
export type Priority = 'critical' | 'high' | 'medium' | 'low';
export type Status = 'open' | 'in-progress' | 'done' | 'closed';

export interface Task {
  id: number;
  type: TaskType;
  priority: Priority;
  status: Status;
  title: string;
  description: string | null;
  assignee?: string | null;
  creator: string;
  createdAt: Date;
  updatedAt: Date;
}