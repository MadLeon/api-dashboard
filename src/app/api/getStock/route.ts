import { NextResponse } from "next/server";

// Backend API (/api/getStock) to fetch stock data
const fetchStock = async (symbol: string) => {
  // The free Alpha Vintage API key has a limit of 10 calls per day, so we'll use a demo key for now
  const stockUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`;
  const stockResponse = await fetch(stockUrl);
  const stockData = await stockResponse.json();
  if (!stockResponse.ok) {
    throw new Error("Failed to fetch stock data");
  }
  return stockData;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol") || "";
  const stockData = await fetchStock(symbol);
  return NextResponse.json(stockData);
}
