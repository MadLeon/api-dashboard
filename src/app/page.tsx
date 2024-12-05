"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Popover from "@/components/Popover";

import WeatherPanel from "@/components/WeatherPanel";
import NewsPanel from "@/components/NewsPanel";
import StockPanel from "@/components/StockPanel";
import CryptoPanel from "@/components/CryptoPanel";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedPanels, setSelectedPanels] = useState({
    weather: true,
    news: true,
    stock: false,
    crypto: false,
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handlePanelChange = (panel: string, value: boolean) => {
    setSelectedPanels((prev) => ({ ...prev, [panel]: value }));
  };

  const handleSave = () => {
    setIsOpen(false);
    const fetchUsers = async () => {
      const response = await fetch("/seed");
      const data = await response.json();
      console.log(data);
    };

    fetchUsers();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-white relative">
      <div className="absolute top-4 right-4 flex flex-col gap-4 text-right">
        <div>
          <Button onClick={handleClick}>Config</Button>
        </div>
        <div>
          <Popover
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            selectedPanels={selectedPanels}
            onPanelChange={handlePanelChange}
            onSave={handleSave}
          />
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center gap-5">
        <WeatherPanel />
        <NewsPanel />
        <StockPanel />
        <CryptoPanel />
      </div>
    </div>
  );
}
