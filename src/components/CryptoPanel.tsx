import { CryptoData } from "@/lib/types";

// Custom component for the crypto panel
export default function CryptoPanel({
  cryptoData,
}: {
  cryptoData: CryptoData;
}) {
  return (
    <div className="w-1/3 h-fit flex flex-col gap-4">
      <div className="px-4 py-4 flex flex-col gap-4 bg-blue-400/20 backdrop-blur-xl border">
        {cryptoData.data.slice(0, 5).map((crypto, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <div>{crypto.name}</div>
              <div>{crypto.symbol}</div>
            </div>
            <div>
              <div className="text-2xl text-right">
                ${parseFloat(crypto.priceUsd).toFixed(2)}
              </div>
              <div className="flex justify-end gap-2">
                <div className="text-neutral-400">
                  $
                  {(
                    parseFloat(crypto.priceUsd) - parseFloat(crypto.vwap24Hr)
                  ).toFixed(2)}
                </div>
                <div
                  className={
                    parseFloat(crypto.changePercent24Hr) > 0
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
