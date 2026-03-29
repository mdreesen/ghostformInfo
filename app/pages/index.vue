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

    <section class="reveal">
      <appComparison />
    </section>

    <baseFooter />

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