// Reminder type definitions
export interface ReminderSchedule {
  id: string;
  userId: string;
  cronExpression: string;
  message: string;
  isActive: boolean;
  createdAt: string;
}