<script setup lang="ts">
defineProps({
  iconName: { type: String, default: '', required: false },
  styles: { type: String, default: '' },
  size: { type: String, default: '22' },
});
</script>
<template>
  <Icon :class="styles" :name="iconName" :size="size" />
</template>
