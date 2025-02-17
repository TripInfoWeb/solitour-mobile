export interface SurveyContent {
  id: number;
  mediaName: string;
  mediaImage: string;
}

export interface SurveyContentList {
  content: SurveyContent[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
}
