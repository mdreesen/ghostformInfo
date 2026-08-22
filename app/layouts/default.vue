<script setup lang="ts">
const route = useRoute();

useHead({
  meta: [{ property: 'og:title', content: `GhostForm — ${route.meta.title || 'Never lose another lead to silence'}` }],
});
</script>

<template>
  <main class="bg-[#F7F4EF] text-[#1F1B16] selection:bg-[#B5563A]/15 font-sans min-h-screen">
    <baseNavigationBase />
    <div class="gf-stage">
      <slot />
    </div>
    <baseFooter />
  </main>
</template>
