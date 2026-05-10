<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

useHead({
    title: 'GhostForm | Main',
    meta: [
        { name: 'description', content: 'GhostForm Main Dashboard.' },
    ],
});

const companyData = ref({
  name: 'Ironclad Realty',
  totalLeads: 1284,
  activeAgents: 12,
  globalConversion: '24.2%'
});

const agents = ref([
  { name: 'Michael Dreesen', role: 'Lead Developer/Agent', status: 'ACTIVE', leads: 42, tier1: 12 },
  { name: 'Sarah Thorne', role: 'Broker', status: 'ACTIVE', leads: 89, tier1: 34 },
  { name: 'James Vane', role: 'Associate', status: 'PAUSED', leads: 12, tier1: 2 }
]);

const generateQR = (id: string) => {
  console.log(`Generating unique Ghost-Node for: ${id}`);
  // Logic to trigger QR generation via API
};
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0c] text-white font-sans p-6 lg:p-12 relative overflow-hidden">
    
    <div class="absolute top-0 right-0 w-150 h-150 bg-[#30cf43] rounded-full blur-[200px] opacity-[0.03]"></div>

    <header class="max-w-350 mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 relative z-10">
      <div>
        <div class="flex items-center gap-3 mb-2">
          <div class="w-2 h-2 rounded-full bg-[#30cf43] shadow-[0_0_10px_#30cf43]"></div>
          <span class="text-[10px] font-black uppercase tracking-[0.4em] text-[#30cf43]">Ghost-Node Network</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold tracking-tighter">LEAD ARCHITECT</h1>
      </div>
      
      <div class="flex gap-4">
        <button class="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-xs font-bold hover:bg-white/10 transition-all backdrop-blur-md">
          Global Analytics
        </button>
        <button class="bg-[#30cf43] text-black px-6 py-3 rounded-xl text-xs font-bold hover:shadow-[0_0_20px_rgba(48,207,67,0.4)] transition-all">
          + New Capture Node
        </button>
      </div>
    </header>

    <main class="max-w-350 mx-auto relative z-10">
      
      <section class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div v-for="(val, label) in { 'Total Intake': '1,284', 'Conversion': '24.2%', 'Active Nodes': '42', 'AI Confidence': '98%' }" :key="label"
          class="backdrop-blur-xl bg-white/2 border border-white/8 p-8 rounded-3xl">
          <p class="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">{{ label }}</p>
          <p class="text-3xl font-bold tabular-nums">{{ val }}</p>
        </div>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-8 space-y-6">
          <div class="flex justify-between items-end mb-4">
            <h2 class="text-lg font-bold">Individual Personnel Tracking</h2>
            <span class="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Real-time Sync</span>
          </div>

          <div class="backdrop-blur-xl bg-white/2 border border-white/8 rounded-[2.5rem] overflow-hidden">
            <table class="w-full text-left">
              <thead class="bg-white/3 text-[10px] uppercase tracking-widest text-zinc-500">
                <tr>
                  <th class="p-6">Agent Entity</th>
                  <th class="p-6 text-center">Status</th>
                  <th class="p-6 text-center">Intake</th>
                  <th class="p-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5">
                <tr v-for="agent in agents" :key="agent.name" class="hover:bg-white/2 transition-colors group">
                  <td class="p-6">
                    <p class="font-bold text-lg leading-none mb-1">{{ agent.name }}</p>
                    <p class="text-xs text-zinc-500">{{ agent.role }}</p>
                  </td>
                  <td class="p-6">
                    <div class="flex justify-center">
                      <span :class="agent.status === 'ACTIVE' ? 'bg-[#30cf43]/20 text-[#30cf43]' : 'bg-zinc-800 text-zinc-500'" 
                        class="text-[9px] font-black px-3 py-1 rounded-full">
                        {{ agent.status }}
                      </span>
                    </div>
                  </td>
                  <td class="p-6 text-center">
                    <p class="font-mono text-sm">{{ agent.leads }}</p>
                    <p class="text-[8px] text-[#30cf43] font-bold">Tier 1: {{ agent.tier1 }}</p>
                  </td>
                  <td class="p-6 text-right">
                    <button @click="generateQR(agent.name)" class="opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 p-2 rounded-lg hover:bg-[#30cf43] hover:text-black">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="lg:col-span-4 space-y-6">
          <h2 class="text-lg font-bold">Company Asset Generator</h2>
          <div class="backdrop-blur-xl bg-white/2 border border-white/8 rounded-[2.5rem] p-8">
            <p class="text-xs text-zinc-400 mb-8 leading-relaxed">
              Generate a high-velocity QR node for physical signage (Yard Signs, Open Houses). 
              Leads will be analyzed by AI and dispatched to the global queue.
            </p>
            
            <div class="space-y-4">
              <input type="text" placeholder="Site Name (e.g. Whitefish Ridge)" class="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-sm focus:border-[#30cf43]/50 focus:outline-none transition-all" />
              
              <button class="w-full bg-linear-to-r from-[#30cf43] to-[#15a327] text-black font-bold py-4 rounded-xl shadow-[0_0_30px_rgba(48,207,67,0.2)] hover:scale-[1.02] transition-all">
                Generate Site Node
              </button>
            </div>

            <div class="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
              <span class="text-[10px] font-bold text-zinc-500 uppercase">Recent Assets</span>
              <div class="flex -space-x-2">
                <div v-for="i in 3" :key="i" class="w-8 h-8 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-[8px]">QR</div>
              </div>
            </div>
          </div>

          <baseQrCode value="www.mdreesen.com" />
        </div>

      </div>
    </main>

    <footer class="max-w-350 mx-auto mt-24 border-t border-white/5 pt-8 flex justify-between items-center text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em]">
      <span>GhostForm // Global Lead Archive</span>
      <span class="font-mono">Status: Spectral-Encrypted</span>
    </footer>
  </div>
</template>

<style scoped>
.tabular-nums { font-variant-numeric: tabular-nums; }
</style>