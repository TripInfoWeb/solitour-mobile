type FEELING_IMAGE_TYPE = {
  [feeling: string]: any;
};

export const FEELING_IMAGE: FEELING_IMAGE_TYPE = {
  EXCITED: require('@src/assets/diary/feeling1.png'),
  NICE: require('@src/assets/diary/feeling2.png'),
  SOSO: require('@src/assets/diary/feeling3.png'),
  SAD: require('@src/assets/diary/feeling4.png'),
  ANGRY: require('@src/assets/diary/feeling5.png'),
} as const;
