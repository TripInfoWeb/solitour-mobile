export interface Plan {
  id: number;
  title: string;
  createdDate: string;
  days: {
    id: number;
    address: string;
    placeName: string;
    latitude: number;
    longitude: number;
  }[][];
}
