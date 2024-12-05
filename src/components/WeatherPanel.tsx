export default function WeatherPanel() {
  return (
    <div className="w-1/3 h-1/2 flex flex-col gap-4 p-4 bg-blue-400/20 backdrop-blur-xl border">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-lg">TORONTO</div>
          <div className="text-sm">ON, CA</div>
        </div>
        <div className="text-sm">
          <div>NOV 28</div>
          <div>THURSDAY</div>
        </div>
      </div>
      <div className="flex justify-around items-center py-5 border-y">
        <div className="text-8xl"><span className="font-bold">12</span><span className="font-light">°</span></div>
        <div className="font-bold">CLOUDY</div>
      </div>
      <div className="flex justify-between">
        <div>25%</div>
        <div>13 mph</div>
        <div>C°/F°</div>
      </div>
    </div>
  )
}