<script setup lang="ts">
const DASHBOARD_URL = 'https://ghostform-dashboard.vercel.app';
</script>

<template>
  <footer class="border-t border-[#DDD6C9] pt-24 pb-14 px-6">
    <div class="max-w-4xl mx-auto text-center gf-depth">
      <p class="gf-eyebrow mb-6">Ready when you are</p>
      <h2 class="gf-display text-[clamp(34px,5vw,56px)] leading-[1.08] tracking-tight mb-10 max-w-[16ch] mx-auto">
        Bring your next open house. Try it free for 30 days.
      </h2>
      <a :href="`${DASHBOARD_URL}/signup`" class="inline-block px-8 py-4 bg-[#B5563A] text-[#F7F4EF] text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-[#9d4830] transition-colors">
        Start free trial
      </a>
      <p class="text-[12px] text-[#A9A39A] mt-4">Your card isn't charged until day 31. Cancel anytime.</p>
    </div>

    <div class="max-w-6xl mx-auto mt-24 pt-8 border-t border-[#DDD6C9] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#B5563A]"></span>
        <span class="text-[11px] uppercase tracking-[0.14em] text-[#A9A39A]">Built in the Flathead Valley, Montana</span>
      </div>
      <div class="flex items-center gap-6 text-[11px] uppercase tracking-[0.1em] text-[#A9A39A]">
        <NuxtLink to="/demo" class="hover:text-[#1F1B16] transition-colors">Live demo</NuxtLink>
        <a :href="`${DASHBOARD_URL}/login`" class="hover:text-[#1F1B16] transition-colors">Log in</a>
        <span>&copy; 2026 GhostForm</span>
      </div>
    </div>
  </footer>
</template>
