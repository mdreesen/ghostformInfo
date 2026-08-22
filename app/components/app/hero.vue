<script setup lang="ts">
/**
 * The 3D terrain sits behind the hero copy, matching the dashboard's own
 * "Today" page. It's the strongest visual asset this brand has — leading
 * with it is what makes the site feel like the product, not a pitch deck
 * for the product.
 */
</script>

<template>
  <section class="relative pt-44 pb-28 px-6 overflow-hidden min-h-[86vh] flex items-center">
    <ClientOnly>
      <baseTerrain />
    </ClientOnly>
    <!-- Fade the terrain out behind the copy so text stays legible -->
    <div
      class="absolute inset-0 z-[1] pointer-events-none"
      style="background: linear-gradient(100deg, #F7F4EF 0%, #F7F4EF 24%, rgba(247,244,239,0.85) 40%, rgba(247,244,239,0.2) 60%, rgba(247,244,239,0) 75%);"
    />

    <div class="max-w-6xl mx-auto relative z-10 w-full">
      <p class="gf-eyebrow mb-6 gf-rise" style="--d:.05s">For Flathead Valley agents</p>

      <h1 class="gf-display text-[clamp(44px,7vw,84px)] leading-[1.02] tracking-tight max-w-[13ch] mb-7 gf-rise" style="--d:.14s">
        Never lose another lead to silence.
      </h1>

      <p class="text-[17px] md:text-[19px] text-[#8A847C] max-w-[42ch] leading-relaxed mb-11 gf-rise" style="--d:.22s">
        The buyer you meant to call back on Tuesday shouldn't sign with
        someone else by Friday. GhostForm captures the lead, tells you
        who to call every morning, and drafts the message — so nothing
        falls through.
      </p>

      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 gf-rise" style="--d:.3s">
        <baseButtonNavigate path="/demo" text="See a live demo" />
        <a href="https://ghostform-dashboard.vercel.app/signup" class="text-[12px] uppercase tracking-[0.1em] text-[#8A847C] hover:text-[#1F1B16] transition-colors px-2 py-4">
          Start free trial — 30 days →
        </a>
      </div>
    </div>
  </section>
</template>
