<script setup lang="ts">
// Nuxt 4 uses the app/ directory, but logic stays clean here
const stats = [
  { label: 'Payload Reduction', value: '90%' },
  { label: 'Conversion Boost', value: '2.4x' },
  { label: 'Setup Time', value: '< 5m' }
];

const features = [
  { 
    title: 'The Ghost Compress', 
    desc: 'Stop crashing your server. Our engine shrinks 10MB mobile photos into 400KB specters instantly in the browser.',
    icon: '🖼️'
  },
  { 
    title: 'Vanishing Logic', 
    desc: 'Smart multi-step flows that adapt to user answers. One question at a time. Zero friction.',
    icon: '🪄'
  },
  { 
    title: 'Inbox Possession', 
    desc: 'No database middleman. Leads possess your inbox instantly via Resend with high-res attachments.',
    icon: '📥'
  }
];

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

    <nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <NuxtImg class="w-8 h-8 drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]" :src="'/images/logo.jpg'" format="webp"
          preload loading="eager" fetch-priority="high" />
          <span class="text-2xl font-black tracking-tighter">GhostForm</span>
        </div>
        <button class="hidden md:block bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-cyan-400 transition-colors">
          Get Started — It's Free
        </button>
      </div>
    </nav>

    <section class="relative pt-40 pb-20 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <div class="reveal inline-block mb-6 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-widest">
          The Future of Lead Capture
        </div>
        <h1 class="reveal text-6xl md:text-8xl font-black tracking-tighter leading-tight mb-8">
          Forms that <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            simply haunt.
          </span>
        </h1>
        <p class="reveal text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12" style="transition-delay: 200ms">
          Stop losing customers to "File Too Large" errors. GhostForm shrinks massive uploads and delivers perfect leads straight to your inbox.
        </p>
        <div class="reveal flex flex-col md:flex-row items-center justify-center gap-4" style="transition-delay: 400ms">
          <button class="w-full md:w-auto px-10 py-5 bg-cyan-500 text-black font-black rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform">
            Start Building
          </button>
          <button class="w-full md:w-auto px-10 py-5 bg-zinc-900 border border-zinc-800 rounded-2xl font-bold hover:bg-zinc-800 transition-colors">
            View Live Demo
          </button>
        </div>
      </div>
    </section>

    <section class="reveal py-12 border-y border-white/5 bg-white/[0.02]">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div v-for="s in stats" :key="s.label">
          <div class="text-4xl font-black text-white mb-1">{{ s.value }}</div>
          <div class="text-xs font-bold text-zinc-500 uppercase tracking-widest">{{ s.label }}</div>
        </div>
      </div>
    </section>

    <section id="features" class="py-32 px-6 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(f, i) in features" :key="f.title" 
          class="reveal p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-cyan-500/30 transition-all group"
          :style="{ transitionDelay: `${i * 150}ms` }">
          <div class="text-5xl mb-6 group-hover:scale-110 transition-transform">{{ f.icon }}</div>
          <h3 class="text-2xl font-bold mb-4">{{ f.title }}</h3>
          <p class="text-zinc-400 leading-relaxed">{{ f.desc }}</p>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-cyan-500/5">
      <div class="max-w-4xl mx-auto bg-zinc-950 border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl reveal">
        <h2 class="text-4xl font-black mb-12 text-center">Stop the Leak.</h2>
        <div class="space-y-8">
          <div class="flex items-start gap-6">
            <div class="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex-shrink-0 flex items-center justify-center font-bold">✕</div>
            <div>
              <h4 class="font-bold text-lg">Traditional Forms</h4>
              <p class="text-zinc-500">Break on 12MB photos, boring UI, 20% conversion rate, requires database management.</p>
            </div>
          </div>
          <div class="flex items-start gap-6">
            <div class="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-500 flex-shrink-0 flex items-center justify-center font-bold">✓</div>
            <div>
              <h4 class="font-bold text-lg text-cyan-400">GhostForm</h4>
              <p class="text-zinc-300">Auto-compressing tech, adaptive multi-step flow, 65% conversion rate, inbox delivery via Resend.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-32 px-6 text-center border-t border-white/5">
      <h2 class="text-5xl font-black mb-8">Ready to possess the inbox?</h2>
      <button class="px-12 py-6 bg-white text-black font-black rounded-3xl text-xl hover:scale-110 transition-transform">
        Get GhostForm Now
      </button>
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