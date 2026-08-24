<script setup lang="ts">
defineProps({
  text: { type: String, required: true, default: 'Button' },
  variant: { type: String, default: 'primary' },
});
</script>
<template>
  <button
    v-if="variant === 'primary'"
    class="inline-flex items-center gap-1.5 bg-[#B5563A] text-[#F7F4EF] px-6 py-3 text-[11px] uppercase tracking-[0.1em] font-semibold hover:bg-[#9d4830] transition-colors"
  >
    {{ text }}
  </button>
  <button
    v-else
    class="inline-flex items-center gap-1.5 border border-[#DDD6C9] text-[#8A847C] px-6 py-3 text-[11px] uppercase tracking-[0.1em] font-semibold hover:border-[#1F1B16] hover:text-[#1F1B16] transition-colors"
  >
    {{ text }}
  </button>
</template>
