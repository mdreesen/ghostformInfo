<script setup lang="ts">
defineProps({ text: { type: String, required: true, default: 'Header' } });
</script>
<template>
  <h2 class="gf-display text-[clamp(30px,4vw,44px)] leading-[1.1] tracking-tight text-center mb-4">{{ text }}</h2>
</template>
