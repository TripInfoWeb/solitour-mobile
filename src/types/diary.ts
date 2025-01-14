export interface Diary {
  title: string;
  startDate: Date | null;
  endDate: Date | null;
  location: string | null;
  feeling: string | null;
  content: string;
  image: string | null;
}
