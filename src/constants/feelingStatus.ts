type FEELING_STATUS_TYPE = {
  [feelingStatus: string]: string;
};

export const FEELING_STATUS: FEELING_STATUS_TYPE = {
  최고: 'EXCITED',
  좋아: 'NICE',
  무난: 'SOSO',
  슬퍼: 'SAD',
  화나: 'ANGRY',
  EXCITED: '최고',
  NICE: '좋아',
  SOSO: '무난',
  SAD: '슬퍼',
  ANGRY: '화나',
} as const;
