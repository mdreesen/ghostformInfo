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

const { data: user } = useNuxtData('get_user');

const agents = ref([
  { name: 'Michael Dreesen', email: 'mdreesen@gmail.com', status: 'new' },
  { name: 'Sarah Thorne', email: 'sthorn@gmail.com', status: 'active' },
  { name: 'James Vane', email: 'jvane@gmail.com', status: 'closed' }
]);
</script>

<template>
  <div class="min-h-screen py-20 p-6 lg:py-18 relative overflow-hidden">

    <div class="absolute top-0 right-0 w-150 h-150 bg-cyan-400 rounded-full blur-[200px] opacity-[0.03]"></div>

    <header
      class="max-w-350 mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 relative z-10">
      <div>
        <div class="flex items-center gap-3 mb-2">
          <baseEngineActive />
          <!-- <div class="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#30cf43]"></div>
          <span class="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">Ghost-Node Network</span> -->
        </div>
        <h1 class="text-4xl md:text-5xl font-bold tracking-tighter">{{ user?.company }}</h1>
        <span class="font-bold tracking-tighter">{{ user?.category }}</span>
      </div>

      <div class="flex gap-4">

        <UModal fullscreen title="QR Code">
          <UButton label="QR Code" color="neutral" variant="subtle" 
          class="bg-cyan-400 text-black px-6 py-3 rounded-xl text-xs font-bold hover:shadow-[0_0_20px_rgba(48,207,67,0.4)] transition-all" />

          <template #body>
            <div class="p-60 h-svh">
              <baseQrCode
                :value="`https://ghostform-zeta.vercel.app/?category=${user?.category}&company_name=${user?.company}&company_email=${user?.email}&background_color=0f0b0b&font_color=FFFFFF`" />
            </div>
          </template>
        </UModal>

      </div>
    </header>

    <main class="max-w-350 mx-auto relative z-10">

      <section class="flex flex-wrap justify-around gap-6 mb-12">
        <div v-for="(val, label) in { 'Total Intake': '1,284', 'Active Leads': '42', 'Conversion': '24.2%' }"
          :key="label" class="backdrop-blur-xl bg-white/2 border border-white/8 p-8 rounded-3xl w-full sm:w-62.5">
          <p class="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">{{ label }}</p>
          <p class="text-3xl font-bold tabular-nums">{{ val }}</p>
        </div>
      </section>

      <div class="flex w-full">

        <div class="space-y-6 w-full">
          <div class="flex justify-between items-end mb-4">
            <h2 class="text-lg font-bold">Individual Personnel Tracking</h2>
            <span class="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Real-time Sync</span>
          </div>

          <div class="backdrop-blur-xl bg-white/2 border border-white/8 rounded-[2.5rem] overflow-hidden w-full">
            <baseTable :data="agents" />
          </div>
        </div>
      </div>
    </main>

    <!-- <footer
      class="max-w-350 mx-auto mt-24 border-t border-white/5 pt-8 flex justify-between items-center text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em]">
      <span>GhostForm // Global Lead Archive</span>
      <span class="font-mono">Status: Spectral-Encrypted</span>
    </footer> -->
  </div>
</template>

<style scoped>
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>