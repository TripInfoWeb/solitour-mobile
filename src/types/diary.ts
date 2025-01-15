export interface Diary {
  title: string;
  startDate: Date | null;
  endDate: Date | null;
  location: string | null;
  feeling: string | null;
  image: string | null;
}

export interface DiaryList {
  content: {
    diaryId: number;
    title: string;
    titleImage: string;
    startDatetime: Date;
    endDatetime: Date;
    diaryDayContentResponses: {
      diaryDayContentDetail: {
        content: string;
        feelingStatus: string;
        contentImage: string;
        place: string;
      }[];
    };
  }[];
  page: {
    totalPages: number;
  };
}
