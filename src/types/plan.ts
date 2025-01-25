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

export interface SavedPlan {
  plan: {
    planId: number;
    title: string;
    createdDate: string;
    days: {
      id: number;
      dayNumber: number;
      daysDetailResponses: {
        id: number;
        address: string;
        placeName: string;
        latitude: number;
        longitude: number;
      }[];
    }[];
  };
}
