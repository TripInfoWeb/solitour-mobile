declare interface IDiscoveryRecommendationItem {
  title: string;
  imageUrl: string;
  articleTitle: string;
}

declare interface IDiscoveryItem {
  title: string;
  imageUrl: string;
  articleTitle: string;
  articleDescription: string;
  places: [
    {
      name: string;
      imageUrl: string;
      description: string;
      xAxis: string | number;
      yAxis: string | number;
    },
  ];
}
