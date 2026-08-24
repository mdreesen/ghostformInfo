<script setup lang="ts">
defineProps({
  text: { type: String, required: true, default: 'Button' },
  isLoading: { type: Boolean, default: false },
  path: { type: String, default: '/' },
});
</script>
<template>
  <NuxtLink :to="path">
    <button
      class="w-full sm:w-auto px-9 py-4 bg-[#B5563A] text-[#F7F4EF] text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-[#9d4830] transition-colors active:scale-[0.98]"
    >
      {{ text }}
    </button>
  </NuxtLink>
</template>
