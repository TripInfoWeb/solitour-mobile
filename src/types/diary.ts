export interface Diary {
  title: string;
  startDate: Date | null;
  endDate: Date | null;
  location: string | null;
  feeling: string | null;
  image: string | null;
}

export interface DiaryDetail {
  diaryId: number;
  title: string;
  titleImage: string;
  startDatetime: string;
  endDatetime: string;
  diaryDayContentResponses: {
    diaryDayContentDetail: {
      content: string;
      feelingStatus: string;
      contentImage: 'EXCITED' | 'NICE' | 'SOSO' | 'SAD' | 'ANGRY';
      place: string;
    }[];
  };
}

export interface DiaryList {
  content: DiaryDetail[];
  page: {totalPages: number};
}
