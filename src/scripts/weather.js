const lat = 9.145;
const lon = 40.4897;

export function renderWeatherPage() {
  // FIX 1: Mount directly to the unified root app shell container
  const container = document.querySelector(".stat-cards");

  container.innerHTML = `
  <div class="min-h-screen bg-slate-900 text-white antialiased">
    <div class="mx-auto max-w-7xl p-4 sm:p-6 space-y-6">
      
      <div class="flex flex-col gap-1 border-b border-slate-800 pb-4"> 
         <h1 class="text-2xl sm:text-3xl font-bold tracking-tight">Weather Dashboard</h1>
         <p class="text-xs text-slate-400">Monitor current conditions and upcoming forecasts in real time</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div class="lg:col-span-1 rounded-xl bg-slate-800/50 border border-slate-700/60 p-6 flex flex-col justify-between shadow-xl">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h2 id="weather-city" class="text-2xl font-bold tracking-tight">Neo-Tokyo, JP</h2>
                <p id="weather-condition" class="text-xs text-slate-400 font-mono tracking-wider uppercase">Fetching weather data</p>
              </div>
              <div id="weather-icon-slot" class="text-4xl">⏳</div>
            </div>
            <div class="py-4">
              <span id="weather-temp" class="text-6xl font-black tracking-tighter text-emerald-400">°C</span>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-2 border-t border-slate-700/50 pt-4 text-center">
            <div>
              <p class="text-[10px] uppercase font-semibold text-slate-500">Wind Speed</p>
              <p id="weather-wind" class="text-sm font-bold text-slate-200"></p>
            </div>
            <div>
              <p class="text-[10px] uppercase font-semibold text-slate-500">Wind Direction</p>
              <p id="weather-wind-dir" class="text-sm font-bold text-slate-200"></p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 rounded-xl bg-slate-800/50 border border-slate-700/60 p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-slate-300 uppercase tracking-wider border-b border-slate-700/50 pb-2">
               Weather Details
            </h3>
            <div class="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-400">
               <div class="space-y-3">
                  <div class="flex justify-between border-b border-slate-900 pb-1">
                    <span class="text-slate-500">Humidity</span>
                    <span id="weather-humidity" class="text-slate-200 font-semibold">45%</span>
                  </div>
                  <div class="flex justify-between border-b border-slate-900 pb-1">
                    <span class="text-slate-500">Pressure</span>
                    <span id="weather-pressure" class="text-slate-200 font-semibold">1015 hPa</span>
                  </div>
                  <div class="flex justify-between border-b border-slate-900 pb-1">
                    <span class="text-slate-500">Feels Like</span>
                    <span id="weather-feels" class="text-slate-200 font-semibold">26°C</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-500">Visibility</span>
                    <span id="weather-visibility" class="text-slate-200 font-semibold">10km</span>
                  </div>
              </div>
            </div>
          </div>
          
          <div class="text-right pt-4">
            <button id="sync-weather-btn" class="px-4 py-2 bg-slate-900 hover:bg-slate-700 text-slate-300 font-mono text-xs font-semibold rounded-lg border border-slate-700/80 transition cursor-pointer">
              Execute-Fetch
            </button>
          </div>
        </div>
      </div>

      <div class="rounded-xl bg-slate-800/50 border border-slate-700/60 p-6 space-y-4">
         <h3 class="text-sm font-semibold text-slate-300 uppercase tracking-wider border-b border-slate-700/50 pb-2">
            Weekly Forecast Block Arrays
         </h3>

         <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
             
             <div class="flex flex-col items-center justify-between p-3 bg-slate-900/40 border border-slate-800 rounded-xl space-y-2">
                 <span class="font-bold text-sm text-slate-300">Mon</span>
                 <div class="text-2xl">☀️</div>
                 <p class="font-mono text-sm font-bold text-emerald-400">24°C</p>
             </div>
             
             <div class="flex flex-col items-center justify-between p-3 bg-slate-900/40 border border-slate-800 rounded-xl space-y-2">
                 <span class="font-bold text-sm text-slate-300">Tue</span>
                 <div class="text-2xl">🌤️</div>
                 <p class="font-mono text-sm font-bold text-emerald-400">24°C</p>
             </div>
             
             <div class="flex flex-col items-center justify-between p-3 bg-slate-900/40 border border-slate-800 rounded-xl space-y-2">
                 <span class="font-bold text-sm text-slate-300">Wed</span>
                 <div class="text-2xl">🌧️</div>
                 <p class="font-mono text-sm font-bold text-emerald-400">24°C</p>
             </div>
             
             <div class="flex flex-col items-center justify-between p-3 bg-slate-900/40 border border-slate-800 rounded-xl space-y-2">
                 <span class="font-bold text-sm text-slate-300">Thu</span>
                 <div class="text-2xl">☁️</div>
                 <p class="font-mono text-sm font-bold text-emerald-400">24°C</p>
             </div>
             
             <div class="flex flex-col items-center justify-between p-3 bg-slate-900/40 border border-slate-800 rounded-xl space-y-2">
                 <span class="font-bold text-sm text-slate-300">Fri</span>
                 <div class="text-2xl">☀️</div>
                 <p class="font-mono text-sm font-bold text-emerald-400">24°C</p>
             </div>

         </div>
      </div>

    </div>
  </div>
  `;

  document.getElementById("weather-condition");
  document.getElementById("weather-icon-slot");


  document.getElementById("weather-humidity");
  document.getElementById("weather-pressure");
  document.getElementById("weather-feels");
  document.getElementById("weather-visibility");

  document.getElementById("sync-weather-btn").addEventListener("click", () => {
    async function fetchWeather() {
      const btn = document.getElementById("sync-weather-btn");
      btn.textContent = "FETCHING...";

      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
        );
        const data = await response.json();
        console.log("Live API Payload:", data);



     const current = data.current_weather;

        document.getElementById("weather-temp").textContent =
          `${current.temperature}°C`;
        document.getElementById("weather-wind").textContent =
          `${current.windspeed}Km/h`;
            document.getElementById("weather-wind-dir").textContent =
              `${current.winddirection}`;
      } 
      catch(error) {
      console.log("fetch error" , error)
      }finally {
        btn.textContent = `Execute-Fetch`;
      }
    }
    fetchWeather();
  });
}
