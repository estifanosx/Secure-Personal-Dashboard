export function renderWeatherPage() {
  const Container = document.querySelector(".stat-cards");

  Container.innerHTML = `
<div class="min-h-screen bg-slate-900 text-white> 
 <div class="mx-auto max-w-7xl p-4 sm:p-6 space-y-6">
  <!--header content -->
 <div class="flex flex-col gap-1 border border-slate-800   pb-4" >
<h1 class="text-2xl sm:text-3xl font-bold tracking-tight">Weather Environment </h1>
     <p class="text-xs text-slate-400"> Real Time Localized Fetch from open-source</P>
  </div>
<!--main container  -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6>
<!--first container -->
   <div class="lg:col-span-1 rounded-xl bg-slate-800/50 border border-slate-700/60 p-6 flex flex-col justify-between shadow-xl">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h2 id="weather-city" class="text-2xl font-bold tracking-tight">Harar ,Ethiopia</h2>
                <p id="weather-condition" class="text-xs text-slate-400 font-mono tracking-wider uppercase">Loading streams...</p>
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



  </div
 </div>
  
  
  
  
  
  `;
}
