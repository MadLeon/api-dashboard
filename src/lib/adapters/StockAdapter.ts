import {
  StockData,
  TopGainerLoserData,
  RawStockData,
  RawTopGainerLoserData,
} from "@/lib/types";

// Implementing Adapter Pattern (Structural Pattern)

// Changes the RawStockData type into the StockData type
// RawStockData = {
//   "Global Quote": {
//     "01. symbol": string;
//     "05. price": string;
//     "09. change": string;
//     "10. change percent": string;
//   };
// }
// StockData = {
//   symbol: string;
//   price: string;
//   change: string;
//   changePercent: string;
// }
export interface StockAdapter {
  adapt(data: RawStockData): StockData;
}

// Adapter for top gainer/loser data
// Changes the RawTopGainerLoserData type into the TopGainerLoserData type
// RawTopGainerLoserData = {
//   "Top Gainers": string[];
//   "Top Losers": string[];
// }
// TopGainerLoser = {
//   gainers: StockData[];
//   losers: StockData[];
// }
export interface TopGainerLoserAdapter {
  adapt(data: RawTopGainerLoserData): TopGainerLoserData;
}
