<script setup lang="ts">
import { computed } from 'vue';

definePageMeta({
    layout: 'authenticated',
});

useHead({
    title: 'GhostForm | Main',
    meta: [
        { name: 'description', content: 'GhostForm Main Dashboard.' },
    ],
});

</script>

<template>
    <div>HELLO WORLD LOGGED IN</div>
</template>