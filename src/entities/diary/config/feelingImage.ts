type FEELING_IMAGE_TYPE = {
  [feeling: string]: any;
};

export const FEELING_IMAGE: FEELING_IMAGE_TYPE = {
  EXCITED: require('@assets/diary/feeling1.png'),
  NICE: require('@assets/diary/feeling2.png'),
  SOSO: require('@assets/diary/feeling3.png'),
  SAD: require('@assets/diary/feeling4.png'),
  ANGRY: require('@assets/diary/feeling5.png'),
} as const;
