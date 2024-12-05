import { TopGainerLoserAdapter } from "./StockAdapter";
import {
  RawTopGainerLoserData,
  StockData,
  TopGainerLoserData,
  RawGainerLoser,
} from "../types";

// Adapter for top gainer/loser data
// Changes the RawTopGainerLoserData type into the TopGainerLoserData type
// RawTopGainerLoserData = {
//   top_gainers: RawGainerLoser[];
//   top_losers: RawGainerLoser[];
// }
// TopGainerLoserData = {
//   gainers: StockData[];
//   losers: StockData[];
// }
export class GainerLoserAdapter implements TopGainerLoserAdapter {
  adapt(data: RawTopGainerLoserData): TopGainerLoserData {
    const adaptStockData = (item: RawGainerLoser): StockData => ({
      symbol: item.ticker,
      price: item.price,
      change: item.change_amount,
      changePercent: item.change_percentage,
    });

    return {
      gainers: data.top_gainers.map(adaptStockData),
      losers: data.top_losers.map(adaptStockData),
    };
  }
}
