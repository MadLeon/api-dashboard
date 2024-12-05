import { NextResponse } from "next/server";

// Backend API (/api/getStock/getTopGainerLoser) to fetch stock data
const fetchStock = async () => {
  // The free Alpha Vintage API key has a limit of 10 calls per day, so we'll use a demo key for now
  const stockUrl = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`;
  const stockResponse = await fetch(stockUrl);
  const stockData = await stockResponse.json();
  if (!stockResponse.ok) {
    throw new Error("Failed to fetch stock data");
  }
  return stockData;
};

export async function GET() {
  const stockData = await fetchStock();
  return NextResponse.json(stockData);
}
