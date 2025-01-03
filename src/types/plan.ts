export interface Plan {
  id: number;
  title: string;
  createdDate: string;
  days: {
    id: number;
    placeName: string;
    latitude: number;
    longitude: number;
  }[][];
}
