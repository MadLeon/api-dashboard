"use client";

import { useState } from "react";
import Button from "./Button";
import { StockDataWrapper } from "@/lib/types";

export default function StockPanel({
  stockData,
  onSearch,
}: {
  stockData: StockDataWrapper;
  onSearch: (symbol: string) => void;
}) {
  const [searchSymbol, setSearchSymbol] = useState("");
  return (
    stockData && (
      <div className="w-1/3 h-fit flex flex-col gap-4">
        <div className="px-4 py-4 flex flex-col gap-4 bg-blue-400/20 backdrop-blur-xl border">
          <div className="flex justify-between gap-2">
            <input
              type="text"
              className="flex-1 px-1 py-1 bg-transparent border-b border-white outline-none text-white"
              placeholder="Search for stocks"
              onChange={(e) => setSearchSymbol(e.target.value)}
            ></input>
            <Button onClick={() => onSearch(searchSymbol)}>Search</Button>
          </div>
          <div className="text-3xl">{stockData.stock.symbol}</div>
          <div className="font-bold text-4xl">
            ${parseFloat(stockData.stock.price).toFixed(2)}
          </div>
        </div>

        <div className="px-4 py-4 bg-blue-400/20 backdrop-blur-xl border">
          <div className="text-xl">TOP 5 GAINER</div>
          <div className="flex flex-col divide-y">
            {stockData.topGainerLoser.gainers
              .slice(0, 5)
              .map((gainer, index) => (
                <div key={index} className="py-2 flex justify-between">
                  <div>{gainer.symbol}</div>
                  <div className="text-red-500">
                    ⬆ {parseFloat(gainer.changePercent).toFixed(1)}%
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="px-4 py-4 bg-blue-400/20 backdrop-blur-xl border">
          <div className="text-xl">TOP 5 LOSER</div>
          <div className="flex flex-col divide-y">
            {stockData.topGainerLoser.losers.slice(0, 5).map((loser, index) => (
              <div key={index} className="py-2 flex justify-between">
                <div>{loser.symbol}</div>
                <div className="text-green-500">
                  ⬇ {parseFloat(loser.changePercent).toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
