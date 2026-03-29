<script setup lang="ts">

// Scroll Reveal Logic
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('reveal-active');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="bg-[#020203] text-zinc-100 selection:bg-cyan-500/30 font-sans">

    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
    </div>

    <section class="reveal">
      <appHero />
    </section>

    <section class="reveal">
      <appStats />
    </section>

    <section class="reveal">
      <appFeatures />
    </section>

    <section class="py-32 px-6 bg-cyan-500/5">
      <div class="max-w-4xl mx-auto bg-zinc-950 border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl reveal">
        <h2 class="text-4xl font-black mb-12 text-center">Stop the Leak.</h2>
        <div class="space-y-8">
          <div class="flex items-start gap-6">
            <div
              class="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex-shrink-0 flex items-center justify-center font-bold">
              ✕</div>
            <div>
              <h4 class="font-bold text-lg">Traditional Forms</h4>
              <p class="text-zinc-500">Break on 12MB photos, boring UI, 20% conversion rate, requires database
                management.</p>
            </div>
          </div>
          <div class="flex items-start gap-6">
            <div
              class="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-500 flex-shrink-0 flex items-center justify-center font-bold">
              ✓</div>
            <div>
              <h4 class="font-bold text-lg text-cyan-400">GhostForm</h4>
              <p class="text-zinc-300">Auto-compressing tech, adaptive multi-step flow, 65% conversion rate, inbox
                delivery via Resend.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-32 px-6 text-center border-t border-white/5">
      <h2 class="text-5xl font-black mb-8">Ready to possess the inbox?</h2>
      <button
        class="px-12 py-6 bg-white text-black font-black rounded-3xl text-xl hover:scale-110 transition-transform">
        Get GhostForm Now
      </button>
      <div class="flex items-center justify-center gap-2 text-zinc-500 text-[10px] uppercase tracking-widest mt-4">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Engine Status: Spectral & Active
      </div>
      <div class="mt-12 text-zinc-600 font-mono text-xs uppercase tracking-[0.3em]">
        Designed for High-Performance Teams &copy; 2026
      </div>
    </footer>

  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
  will-change: transform, opacity;
}

.reveal.reveal-active {
  opacity: 1;
  transform: translateY(0);
}

/* Glassmorphism card effect */
.bg-zinc-900\/40 {
  backdrop-filter: blur(10px);
}
</style>