// Chat type definitions
export interface ChatMessage {
  id: string;
  userId: string;
  role: 'user' | 'kawada';
  text: string;
  trigger?: string;
  createdAt: string;
}

export interface CannedConversation {
  id: string;
  trigger: string;
  affinityMin: number;
  affinityMax: number;
  lines: Array<{
    role: 'kawada';
    text: string;
  }>;
}