type CONTENT_CATEGORY_TYPE = {
  title: string;
  category: 'MOVIE' | 'DRAMA' | 'ARTIST' | 'ENTERTAINMENT';
}[];

export const CONTENT_CATEGORY: CONTENT_CATEGORY_TYPE = [
  {
    title: '영화',
    category: 'MOVIE',
  },
  {
    title: '드라마',
    category: 'DRAMA',
  },
  {
    title: 'K-POP',
    category: 'ARTIST',
  },
  {
    title: '예능',
    category: 'ENTERTAINMENT',
  },
] as const;
