export type TaskType = {
  id: string;
  description: string;
  priority: PriorityType;
  completed: boolean;
  dueDate?: Date | null;
};

export enum PriorityType {
  ImportantAndUrgent = "Important/Urgent",
  ImportantButNotUrgent = "Important/Not Urgent",
  NotImportantButUrgent = "Not Important/Urgent",
  NotImportantAndNotUrgent = "Not Important/Not Urgent",
}
