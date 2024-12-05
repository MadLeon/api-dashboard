import { WeatherData } from "@/lib/types";

// Custom component for the weather panel
export default function WeatherPanel({
  weatherData,
}: {
  weatherData: WeatherData;
}) {
  return (
    weatherData && (
      <div className="w-1/3 h-fit flex flex-col gap-4 p-4 bg-blue-400/20 backdrop-blur-xl border">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-lg">{weatherData.name}</div>
            <div className="text-sm">{weatherData.sys.country}</div>
          </div>
          <div className="text-sm">
            <div>{new Date().toLocaleDateString()}</div>
            <div>
              {new Date()
                .toLocaleDateString("en-US", { weekday: "long" })
                .toUpperCase()}
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center py-5 border-y">
          <div className="text-6xl">
            <span className="font-bold">{weatherData.main.temp}</span>
            <span className="font-light">°</span>
          </div>
          <div className="font-bold text-5xl">
            {weatherData.weather[0].main}
          </div>
        </div>
        <div className="flex justify-between">
          <div>Feels like: {weatherData.main.feels_like}°</div>
          <div>Humidity: {weatherData.main.humidity}</div>
          <div>Pressure: {weatherData.main.pressure}</div>
        </div>
      </div>
    )
  );
}
