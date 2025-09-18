// Application constants
export const AFFINITY_RULES = {
  CHAT_BONUS: 1,
  QUIZ_CORRECT: 5,
  QUIZ_WRONG: -2,
  DAILY_LOGIN: 1,
  REMINDER_COMPLETE: 2,
  MIN_AFFINITY: 0,
  MAX_AFFINITY: 100,
} as const;

export const AFFINITY_THRESHOLDS = {
  LEVEL_50: 50,
  LEVEL_80: 80,
  LEVEL_100: 100,
} as const;