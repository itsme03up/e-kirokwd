// User type definitions
export interface UserProfile {
  userId: string;
  email: string;
  displayName: string;
  timezone: string;
  createdAt: string;
  lastLoginAt: string;
}

export interface AffinityData {
  userId: string;
  currentAffinity: number; // 0-100
  lastChatAt: string;
  dailyLoginCount: number;
  lastLoginDate: string;
}