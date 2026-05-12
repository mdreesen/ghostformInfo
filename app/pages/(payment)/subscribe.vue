<script setup lang="ts">
definePageMeta({
  layout: 'payment',
});

useHead({
  title: 'GhostForm | Subscribe',
  meta: [
    { name: 'Subscribe', content: 'GhostForm Subscribe' },
  ],
});

// const { data: user } = useNuxtData('get_user');
</script>

<template>
    <div>
        <appPricing stripe />
    </div>
</template>