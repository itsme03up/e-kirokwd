// Quiz type definitions
export interface Quiz {
  id: string;
  question: string;
  choices: string[];
  correctAnswer: number;
  category: string;
}

export interface QuizResult {
  id: string;
  userId: string;
  quizId: string;
  userAnswer: number;
  correct: boolean;
  affinityChange: number;
  completedAt: string;
}