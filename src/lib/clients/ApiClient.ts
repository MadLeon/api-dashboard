import { GlobalQuoteAdapter } from "../adapters/GlobalQuoteAdapter";
import { GainerLoserAdapter } from "../adapters/TopGainerLoserAdapter";
import { WeatherData, NewsData, StockDataWrapper, CryptoData } from "../types";

// Implementing Factory Pattern (Creational Pattern)

// The factory will create the appropriate API client based on the type
export class ApiClientFactory {
  static createApiClient<T>(type: string): ApiClient<T> {
    switch (type) {
      case "weather":
        return new WeatherApiClient() as ApiClient<T>;
      case "news":
        return new NewsApiClient() as ApiClient<T>;
      case "stock":
        return new StockApiClient() as ApiClient<T>;
      case "crypto":
        return new CryptoApiClient() as ApiClient<T>;
      default:
        throw new Error("Unknown API client type");
    }
  }
}

// Interface for the API client
export interface ApiClient<T> {
  fetchData(symbol?: string): Promise<T>;
}

// API client for weather data
export class WeatherApiClient implements ApiClient<WeatherData> {
  async fetchData(): Promise<WeatherData> {
    const response = await fetch("/api/getWeather");
    const data = await response.json();
    return data;
  }
}

// API client for news data
export class NewsApiClient implements ApiClient<NewsData> {
  async fetchData(): Promise<NewsData> {
    const response = await fetch("/api/getNews");
    const data = await response.json();
    return data;
  }
}

// API client for stock data
export class StockApiClient implements ApiClient<StockDataWrapper> {
  async fetchData(symbol: string): Promise<StockDataWrapper> {
    const [stockResponse, topGainerLoserResponse] = await Promise.all([
      fetch(`/api/getStock?symbol=${symbol}`),
      fetch("/api/getStock/getTopGainerLoser"),
    ]);

    const stockData = await stockResponse.json();
    const globalQuoteAdapter = new GlobalQuoteAdapter();
    const stock = globalQuoteAdapter.adapt(stockData);
    const topGainerLoserData = await topGainerLoserResponse.json();
    const gainerLoserAdapter = new GainerLoserAdapter();
    const topGainerLoser = gainerLoserAdapter.adapt(topGainerLoserData);

    return {
      stock: stock,
      topGainerLoser: topGainerLoser,
    };
  }
}

// API client for crypto data
export class CryptoApiClient implements ApiClient<CryptoData> {
  async fetchData(): Promise<CryptoData> {
    const response = await fetch("/api/getCrypto");
    const data = await response.json();
    return data;
  }
}
