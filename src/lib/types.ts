// Types for all the data

export type WeatherData = {
  name: string;
  weather: [{ description: string; icon: string; main: string }];
  sys: { country: string; sunrise: number; sunset: number };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };
  coord: { lat: number; lon: number };
};

export type NewsData = {
  articles: [
    { title: string; description: string; url: string; urlToImage: string },
    { title: string; description: string; url: string; urlToImage: string },
    { title: string; description: string; url: string; urlToImage: string },
    { title: string; description: string; url: string; urlToImage: string },
    { title: string; description: string; url: string; urlToImage: string },
    ...{ title: string; description: string; url: string; urlToImage: string }[]
  ];
};

export type StockDataWrapper = {
  stock: StockData;
  topGainerLoser: TopGainerLoserData;
};

export type RawStockData = {
  "Global Quote": {
    "01. symbol": string;
    "05. price": string;
    "09. change": string;
    "10. change percent": string;
  };
};

export type StockData = {
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
};

export type RawGainerLoser = {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
};

export type RawTopGainerLoserData = {
  top_gainers: [
    {
      ticker: string;
      price: string;
      change_amount: string;
      change_percentage: string;
    },
    ...{
      ticker: string;
      price: string;
      change_amount: string;
      change_percentage: string;
    }[]
  ];
  top_losers: [
    {
      ticker: string;
      price: string;
      change_amount: string;
      change_percentage: string;
    },
    ...{
      ticker: string;
      price: string;
      change_amount: string;
      change_percentage: string;
    }[]
  ];
};

export type TopGainerLoserData = {
  gainers: StockData[];
  losers: StockData[];
};

export type CryptoData = {
  data: [
    {
      symbol: string;
      rank: string;
      name: string;
      priceUsd: string;
      changePercent24Hr: string;
      vwap24Hr: string;
    },
    ...{
      symbol: string;
      rank: string;
      name: string;
      priceUsd: string;
      changePercent24Hr: string;
      vwap24Hr: string;
    }[]
  ];
};

export type PanelState = {
  weather: boolean;
  news: boolean;
  stock: boolean;
  crypto: boolean;
};

export type UserPanel = {
  weather: boolean;
  news: boolean;
  stock: boolean;
  crypto: boolean;
};
