type ACTIVITY_TYPE = {
  title: string;
  activity:
    | 'CULTURAL_FACILITY'
    | 'NOVELTY_EXPERIENCE'
    | 'NATURAL_PLACE'
    | 'HISTORICAL_PLACE'
    | 'MARKET';
};

export const ACTIVITY: ACTIVITY_TYPE[] = [
  {
    title: '문화시설',
    activity: 'CULTURAL_FACILITY',
  },
  {
    title: '이색체험',
    activity: 'NOVELTY_EXPERIENCE',
  },
  {
    title: '자연관광지',
    activity: 'NATURAL_PLACE',
  },
  {
    title: '역사관광지',
    activity: 'HISTORICAL_PLACE',
  },
  {
    title: '시장',
    activity: 'MARKET',
  },
] as const;
