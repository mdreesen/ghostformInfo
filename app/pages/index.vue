<script setup lang="ts">
/**
 * Section reveal is now handled globally by plugins/scroll-reveal.client.ts
 * (the same system the dashboard app uses) via the .gf-depth class applied
 * inside each section component — no local IntersectionObserver needed here.
 */
useHead({ title: 'GhostForm — Never lose another lead to silence' });
</script>

<template>
  <div>
    <appHero />
    <appStats />
    <appFeatures />
    <appComparison />
    <appPricing />
  </div>
</template>
