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
  <div>

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

    <section class="reveal">
      <appPricing />
    </section>
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