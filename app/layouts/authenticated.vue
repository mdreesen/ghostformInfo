<script setup lang="ts">
await useFetch('/api/user', { key: 'get_user', lazy: true });
const { data: user } = useNuxtData('get_user');
</script>

<template>
    <baseNavigationAuth v-if="user" />
    <main>
        <slot />
    </main>
</template>