import { NextResponse } from "next/server";

// Backend API (/api/getWeather) to fetch weather data
const fetchWeather = async () => {
  const weatherApiKey = process.env.WEATHER_API_KEY;
  const city = "Toronto";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
  const weatherResponse = await fetch(weatherUrl);
  const weatherData = await weatherResponse.json();
  if (!weatherResponse.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return weatherData;
};

export async function GET() {
  const weatherData = await fetchWeather();
  return NextResponse.json(weatherData);
}
