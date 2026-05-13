<script setup lang="ts">
import type { Lead } from '~/types/lead';
definePageMeta({
  layout: 'authenticated',
});

const route = useRoute();

const { data: data, pending: pending_data } = await useFetch<Lead>(`/api/leads/${route.params.id}`);
console.log(data.value)

// Simulated lead data fetch based on our previous logic
const lead = ref(data.value);

const getTierColor = (tier: number) => {
  if (tier === 1) return 'text-[#30cf43] shadow-[0_0_15px_rgba(48,207,67,0.3)]';
  return 'text-zinc-500';
};
</script>

<template>
  <div v-if="!pending_data" class="min-h-screen py-20 p-6 lg:py-18 relative overflow-hidden">
    
    <div class="absolute top-[-20%] right-[-10%] w-200 h-200 bg-[#30cf43] rounded-full blur-[200px] opacity-[0.04]"></div>

    <main class="max-w-5xl mx-auto relative z-10">
      
      <nav class="mb-12 flex justify-between items-center">
        <NuxtLink to="/dashboard/leads" class="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
          <span class="group-hover:-translate-x-1 transition-transform">←</span>
          <span class="text-[10px] font-black uppercase tracking-widest">Back to Archive</span>
        </NuxtLink>
        <div class="flex gap-4">
          <button class="px-6 py-2 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/5">Archive Lead</button>
          <button class="px-6 py-2 bg-[#30cf43] text-black rounded-xl text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(48,207,67,0.3)]">Push to CRM</button>
        </div>
      </nav>

      <section class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div class="md:col-span-2">
          <h1 class="text-6xl font-black tracking-tighter mb-4">{{ lead.name }}</h1>
          <div class="flex flex-wrap gap-6 text-zinc-400">
            <div class="flex flex-col">
              <span class="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-1">Email</span>
              <span class="text-sm font-mono">{{ lead.email }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-1">Phone</span>
              <span class="text-sm font-mono">{{ lead.phone }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-1">Address</span>
              <span class="text-sm">{{ lead.address }}</span>
            </div>
          </div>
        </div>
        
        <div class="backdrop-blur-2xl bg-white/3 border border-white/8 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
          <span class="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-2">Quality Score</span>
          <!-- <div class="text-7xl font-black tabular-nums leading-none mb-2" :class="getTierColor(lead.tier)">
            {{ lead.score }}
          </div> -->
          <!-- <span class="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-700">Tier {{ lead.tier }}</span> -->
        </div>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-4 space-y-8">
          <div class="backdrop-blur-xl bg-white/2 border border-white/8 rounded-3xl p-8">
            <h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-[#30cf43] mb-8">Lead Submission</h3>
            <div class="space-y-6">
              <div v-for="(val, label) in { 
                'Est. Value': `$${lead.price.toLocaleString()}`, 
                'Budget': `$${lead.budget.toLocaleString()}`,
                'Sq Footage': `${lead.sqft} ft²`,
                // 'Timeline': lead.timeline,
                'Intent (Buy, Sell, or Both)': lead.buy_sell_both 
              }" :key="label" class="flex justify-between items-end border-b border-white/5 pb-2">
                <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{{ label }}</span>
                <span class="text-sm font-bold">{{ val }}</span>
              </div>
            </div>
          </div>

          <div class="backdrop-blur-xl bg-white/2 border border-white/8 rounded-3xl p-8">
            <h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-4">Other details</h3>
            <p class="text-sm text-zinc-300 leading-relaxed italic-none">"{{ lead.message ? lead.message : 'No other details' }}"</p>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-8">
          <div class="backdrop-blur-xl bg-white/4 border border-[#30cf43]/20 rounded-3xl p-10 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4">
              <span class="text-[8px] font-black bg-[#30cf43]/20 text-[#30cf43] px-2 py-1 rounded tracking-widest">AI GEN-4</span>
            </div>
            
            <h3 class="text-[11px] font-black uppercase tracking-[0.4em] text-[#30cf43] mb-8">Strategic Intelligence Brief</h3>
            <p class="text-sm font-bold leading-relaxed" v-html="lead.ai_analysis" />

            
            <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 class="text-[9px] font-black uppercase text-zinc-500 mb-3 tracking-widest">Executive Summary</h4>
                <p class="text-sm font-bold leading-relaxed">{{ lead.aiAnalysis.summary }}</p>
              </div>
              <div>
                <h4 class="text-[9px] font-black uppercase text-zinc-500 mb-3 tracking-widest">Financial Logic</h4>
                <p class="text-sm font-bold leading-relaxed">{{ lead.aiAnalysis.financialLogic }}</p>
              </div>
            </div>

            <div class="border-t border-white/5 pt-8">
              <h4 class="text-[9px] font-black uppercase text-[#30cf43] mb-4 tracking-widest">Recommended Dispatch Script</h4>
              <div class="bg-black/40 p-6 rounded-2xl border border-white/5 font-mono text-sm text-[#30cf43] leading-relaxed">
                "{{ lead.aiAnalysis.dispatchScript }}"
              </div>
              <button class="mt-4 text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Copy to clipboard</button>
            </div> -->
          </div>
        </div>

      </div>
    </main>
  </div>
</template>