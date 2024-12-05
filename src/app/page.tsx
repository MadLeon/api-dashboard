"use client";

import { useState, useEffect } from "react";

// Custom components
import Button from "@/components/Button";
import Popover from "@/components/Popover";
import WeatherPanel from "@/components/WeatherPanel";
import NewsPanel from "@/components/NewsPanel";
import StockPanel from "@/components/StockPanel";
import CryptoPanel from "@/components/CryptoPanel";

// Utility functions and types
import { getDashboardData } from "@/lib/utils";
import { StockApiClient } from "@/lib/clients/ApiClient";
import {
  PanelState,
  WeatherData,
  NewsData,
  CryptoData,
  StockDataWrapper,
} from "@/lib/types";

export default function Home(): JSX.Element {
  // State variables
  const [isOpen, setIsOpen] = useState(true); // Whether the popover is open
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [stockData, setStockData] = useState<StockDataWrapper | null>(null);
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);
  const [selectedPanels, setSelectedPanels] = useState<PanelState | null>(null);

  // Run once on the first render
  useEffect(() => {
    const fetchUserPanel = async () => {
      try {
        // Fetch user panel data from the backend API
        const response = await fetch("/api/getUserPanel");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const res = await response.json();
        const data = res.rows[0];

        // Set the selected panels state
        setSelectedPanels({
          weather: data.weather ?? true,
          news: data.news ?? true,
          stock: data.stock ?? false,
          crypto: data.crypto ?? false,
        });
      } catch (error) {
        console.error("Failed to fetch user panel data:", error);
      }
    };
    fetchUserPanel();
  }, []);

  // Run whenever the selected panels state changes
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch the dashboard data
        const data = await getDashboardData(selectedPanels);

        // Set the dashboard data
        setWeatherData(data.weather as WeatherData);
        setNewsData(data.news as NewsData);
        setStockData(data.stock as StockDataWrapper);
        setCryptoData(data.crypto as CryptoData);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };
    if (selectedPanels) {
      fetchDashboardData();
    }
  }, [selectedPanels]);

  // Toggle the popover
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Fetch stock data from the backend API
  const handleSearch = async (symbol: string) => {
    try {
      const response = await new StockApiClient().fetchData(symbol);
      setStockData(response as StockDataWrapper);
    } catch (error) {
      console.error("Failed to fetch stock data:", error);
    }
  };

  // Update the selected panels state
  const handlePanelChange = (panel: string, value: boolean) => {
    setSelectedPanels((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        [panel]: value,
      };
    });
  };

  // Update the user panel data in the database
  const handleSave = async () => {
    try {
      const response = await fetch("/api/setUserPanel", {
        method: "POST",
        body: JSON.stringify(selectedPanels),
      });
      if (!response.ok) {
        throw new Error("Failed to set data");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Failed to set data:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-white relative">
      <div className="absolute top-4 right-4 flex flex-col gap-4 text-right">
        <div>
          <Button onClick={handleClick}>Config</Button>
        </div>
        <div>
          {selectedPanels && (
            <Popover
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              selectedPanels={selectedPanels}
              onPanelChange={handlePanelChange}
              onSave={handleSave}
            />
          )}
        </div>
      </div>

      <div className="min-h-screen flex flex-wrap items-center justify-center gap-4">
        {selectedPanels && (
          <>
            {selectedPanels.weather && weatherData && (
              <WeatherPanel weatherData={weatherData} />
            )}
            {selectedPanels.news && newsData && (
              <NewsPanel newsData={newsData} />
            )}
            {selectedPanels.stock && stockData && stockData.topGainerLoser && (
              <StockPanel stockData={stockData} onSearch={handleSearch} />
            )}
            {selectedPanels.crypto && cryptoData && (
              <CryptoPanel cryptoData={cryptoData} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
