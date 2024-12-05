import { PanelState } from "@/lib/types";
import { ApiClientFactory } from "./clients/ApiClient";
import { CacheManager } from "./CacheManager";

// Implementing Facade Pattern (Structural Pattern)

// The facade will provide a simple interface to the complex system of APIs
// It will also handle the caching of the data
export const getDashboardData = async (selectedPanels: PanelState | null) => {
  try {
    const cacheManager = CacheManager.getInstance();
    const promises = [];

    // Fetch weather data
    if (selectedPanels?.weather) {
      // Check if the weather data is in the cache
      const cachedWeather = cacheManager.get("weather");
      // If the weather data is in the cache, return the cached data
      if (cachedWeather) {
        promises.push(Promise.resolve(cachedWeather));
        // console.log("Returning cached weather data", cachedWeather);
      } else {
        // If the weather data is not in the cache, fetch the data from the API using the api client
        const weatherClient = ApiClientFactory.createApiClient("weather");
        const weatherPromise = weatherClient.fetchData().then((data) => {
          // Set the weather data in the cache
          cacheManager.set("weather", data, 60000);
          return data;
        });
        // Add the promise to the promises array
        promises.push(weatherPromise);
      }
    } else {
      // If the weather panel is not selected, add a null promise to the promises array
      promises.push(Promise.resolve(null));
    }

    // Fetch news data
    if (selectedPanels?.news) {
      // Check if the news data is in the cache
      const cachedNews = cacheManager.get("news");
      // If the news data is in the cache, return the cached data
      if (cachedNews) {
        promises.push(Promise.resolve(cachedNews));
        // console.log("Returning cached news data", cachedNews);
      } else {
        // If the news data is not in the cache, fetch the data from the API using the api client
        const newsClient = ApiClientFactory.createApiClient("news");
        const newsPromise = newsClient.fetchData().then((data) => {
          // Set the news data in the cache
          cacheManager.set("news", data, 60000);
          return data;
        });
        // Add the promise to the promises array
        promises.push(newsPromise);
      }
    } else {
      // If the news panel is not selected, add a null promise to the promises array
      promises.push(Promise.resolve(null));
    }

    // Fetch stock data
    if (selectedPanels?.stock) {
      // Check if the stock data is in the cache
      const cachedStock = cacheManager.get("stock");
      // If the stock data is in the cache, return the cached data
      if (cachedStock) {
        promises.push(Promise.resolve(cachedStock));
        // console.log("Returning cached stock data", cachedStock);
      } else {
        // If the stock data is not in the cache, fetch the data from the API using the api client
        const stockClient = ApiClientFactory.createApiClient("stock");
        const stockPromise = stockClient.fetchData("IBM").then((data) => {
          // Set the stock data in the cache
          cacheManager.set("stock", data, 60000);
          return data;
        });
        // Add the promise to the promises array
        promises.push(stockPromise);
      }
    } else {
      // If the stock panel is not selected, add a null promise to the promises array
      promises.push(Promise.resolve(null));
    }

    // Fetch crypto data
    if (selectedPanels?.crypto) {
      // Check if the crypto data is in the cache
      const cachedCrypto = cacheManager.get("crypto");
      // If the crypto data is in the cache, return the cached data
      if (cachedCrypto) {
        promises.push(Promise.resolve(cachedCrypto));
        // console.log("Returning cached crypto data", cachedCrypto);
      } else {
        // If the crypto data is not in the cache, fetch the data from the API using the api client
        const cryptoClient = ApiClientFactory.createApiClient("crypto");
        const cryptoPromise = cryptoClient.fetchData().then((data) => {
          // Set the crypto data in the cache
          cacheManager.set("crypto", data, 60000);
          return data;
        });
        // Add the promise to the promises array
        promises.push(cryptoPromise);
      }
    } else {
      // If the crypto panel is not selected, add a null promise to the promises array
      promises.push(Promise.resolve(null));
    }

    // Wait for all the promises to resolve
    const [weatherData, newsData, stockData, cryptoData] = await Promise.all(
      promises
    );

    // Return the data
    return {
      weather: weatherData,
      news: newsData,
      stock: stockData,
      crypto: cryptoData,
    };
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    throw error;
  }
};
