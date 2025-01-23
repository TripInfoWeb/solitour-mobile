export interface SurveyContentList {
  content: {id: number; mediaName: string; mediaImage: string}[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
}
