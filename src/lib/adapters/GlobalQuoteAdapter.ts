import { StockAdapter } from "./StockAdapter";
import { StockData, RawStockData } from "../types";

// Adapter for global quote data
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
export class GlobalQuoteAdapter implements StockAdapter {
  adapt(data: RawStockData): StockData {
    return {
      symbol: data["Global Quote"]["01. symbol"],
      price: data["Global Quote"]["05. price"],
      change: data["Global Quote"]["09. change"],
      changePercent: data["Global Quote"]["10. change percent"],
    };
  }
}
