// Gift type definitions
export interface GiftItem {
  id: string;
  name: string;
  rarity: 'common' | 'uncommon' | 'rare';
  affinity: number;
  description: string;
}

export interface GiftHistory {
  id: string;
  userId: string;
  giftId: string;
  giftedAt: string;
  affinityGained: number;
}