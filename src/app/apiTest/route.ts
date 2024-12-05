import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get weather data
    const weatherApiKey = process.env.WEATHER_API_KEY;
    const city = 'Toronto';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    if (!weatherResponse.ok) {
      throw new Error('Failed to fetch weather data');
    }

    // Get Canada news data
    const newsApiKey = process.env.NEWS_API_KEY;
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`;
    const newsResponse = await fetch(newsUrl);
    const newsData = await newsResponse.json();
    const filteredNewsData = {
      ...newsData,
      articles: newsData.articles.slice(0, 5)
    };

    if (!newsResponse.ok) {
      throw new Error('Failed to fetch news data');
    }

    // Get US stock data
    const alphaVintageKey = process.env.ALPHA_VANTAGE_KEY;
    const stockSymbol = 'IBM'; // Example stock symbol
    const stockUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${alphaVintageKey}`;
    const stockResponse = await fetch(stockUrl);
    const stockData = await stockResponse.json();

    if (!stockResponse.ok) {
      throw new Error('Failed to fetch stock data');
    }

    // Get Bitcoin price data
    const cryptoUrl = 'https://api.coincap.io/v2/assets/bitcoin';
    const cryptoResponse = await fetch(cryptoUrl);
    const cryptoData = await cryptoResponse.json();

    if (!cryptoResponse.ok) {
      throw new Error('Failed to fetch cryptocurrency data');
    }

    return NextResponse.json({
      weather: {
        title: 'Toronto Weather Forecast',
        data: weatherData
      },
      news: {
        title: 'Canada Top Headlines',
        data: filteredNewsData
      },
      stock: {
        title: 'US Stock Market Data',
        data: stockData
      },
      crypto: {
        title: 'Bitcoin Price Data',
        data: cryptoData
      }
    });

  } catch (error) {
    console.error('API request error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

