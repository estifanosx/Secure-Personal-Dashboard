export function renderWeatherPage() {
  const Container = document.querySelector(".stat-cards")

  Container.innerHTML = `
<div class="min-h-screen bg-slate-900 text-white> 
 <div class="mx-auto max-w-7xl p-4 sm:p-6 space-y-6">
  <!--header content -->
  <div class="flex flex-col gap-1 border border-slate-800 pb-4" >
  <h1 class="text-2xl sm:text-3xl font-bold tracking-tight">Weather Environment </h1>
<p class="text-xs text-slate-400"> Real Time Localized Fetch from open-source</P>
  </div>




  </div
 </div>
  
  
  
  
  
  `
}
