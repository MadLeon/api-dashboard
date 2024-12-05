'use client'

import { useRouter } from "next/navigation";
import Button from "./Button";

export default function StockPanel() {
  const router = useRouter();

  const handleClick = () => {
    router.push('./');
  }

  return (
    <div className="w-1/3 flex flex-col gap-4">
      <div className="px-4 py-4 flex flex-col gap-4 bg-blue-400/20 backdrop-blur-xl border">
        <div className="flex justify-between gap-2">
          <input type="text" className="flex-1 px-1 py-1 bg-transparent border-b border-white outline-none text-white"
            placeholder="Search for stocks"></input>
          <Button onClick={handleClick}>Search</Button>
        </div>
        <div className="text-3xl">AMZN</div>
        <div className="font-bold text-4xl">$438.892</div>
      </div>

      <div className="px-4 py-4 bg-blue-400/20 backdrop-blur-xl border">
        <div className="text-xl">TOP 5 GAINER</div>
        <div className="flex flex-col divide-y">
          <div className="py-2 flex justify-between">
            <div>DUBK</div>
            <div className="text-green-500">⬆ 0.388%</div>
          </div>
          <div className="py-2 flex justify-between">
            <div>BEMA</div>
            <div className="text-green-500">⬆ 2.021%</div>
          </div>
          <div className="py-2 flex justify-between">
            <div>QLMI</div>
            <div className="text-green-500">⬆ 0.938%</div>
          </div>
          <div className="py-2 flex justify-between">
            <div>BLDN</div>
            <div className="text-green-500">⬆ 2.021%</div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 bg-blue-400/20 backdrop-blur-xl border">
        <div className="text-xl">TOP 5 LOSER</div>
        <div className="flex flex-col divide-y">
          <div className="py-2 flex justify-between">
            <div>DUBK</div>
            <div className="text-red-500">⬇ 0.388%</div>
          </div>
          <div className="py-2 flex justify-between">
            <div>BEMA</div>
            <div className="text-red-500">⬇ 2.021%</div>
          </div>
          <div className="py-2 flex justify-between">
            <div>QLMI</div>
            <div className="text-red-500">⬇ 0.938%</div>
          </div>
          <div className="py-2 flex justify-between">
            <div>BLDN</div>
            <div className="text-red-500">⬇ 2.021%</div>
          </div>
        </div>
      </div>
    </div>
  );
}