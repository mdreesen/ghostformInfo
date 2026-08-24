<script setup lang="ts">
defineProps({
  text: { type: String, required: true, default: 'Header' },
  subText: { type: String },
});
</script>
<template>
  <h2 class="gf-display text-[19px] tracking-tight" v-html="text" />
  <span v-if="subText" class="text-[13px] text-[#8A847C]" v-html="subText" />
</template>
