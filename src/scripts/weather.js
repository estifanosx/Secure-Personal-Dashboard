export function renderWeatherPage() {
  const Container = document.querySelector(".stat-cards");

  Container.innerHTML = `
<div class="min-h-screen bg-slate-900 text-white antialiased">
    <div class="mx-auto max-w-7xl p-4 sm:p-6 space-y-6">
      
      <div class="flex flex-col gap-1 border-b border-slate-800 pb-4"> 
         <h1 class="text-2xl sm:text-3xl font-bold tracking-tight">Weather Dashboard</h1>
         <p class="text-xs text-slate-400"> Monitor current conditions and upcoming forecasts in real time</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div class="lg:col-span-1 rounded-xl bg-slate-800/50 border border-slate-700/60 p-6 flex flex-col justify-between shadow-xl">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h2 id="weather-city" class="text-2xl font-bold tracking-tight">Neo-Tokyo, JP</h2>
                <p id="weather-condition" class="text-xs text-slate-400 font-mono tracking-wider uppercase">Fetching weather data...</p>
              </div>
              <div id="weather-icon-slot" class="text-4xl">⏳</div>
            </div>
            <div class="py-4">
              <span id="weather-temp" class="text-6xl font-black tracking-tighter text-emerald-400">--°C</span>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-2 border-t border-slate-700/50 pt-4 text-center">
            <div>
              <p class="text-[10px] uppercase font-semibold text-slate-500">Wind Speed</p>
              <p id="weather-wind" class="text-sm font-bold text-slate-200">--</p>
            </div>
            <div>
              <p class="text-[10px] uppercase font-semibold text-slate-500">Wind Direction</p>
              <p id="weather-wind-dir" class="text-sm font-bold text-slate-200">--</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 rounded-xl bg-slate-800/50 border border-slate-700/60 p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-slate-300 uppercase tracking-wider border-b border-slate-700/50 pb-2">
         Weather Updates
            </h3>
            <div class="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-400 space-y-2">
              <p class="text-emerald-500">Connected to weather provider</p>
              <p id="telemetry-log">Waiting for latest forecast data...</p>
            </div>
          </div>
          
          <div class="text-right pt-4">
            <button id="sync-weather-btn" class="px-4 py-2 bg-slate-900 hover:bg-slate-700 text-slate-300 font-mono text-xs font-semibold rounded-lg border border-slate-700/80 transition cursor-pointer">
              EXECUTE_LIVE_FETCH
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
  
  
  
  `;
}
