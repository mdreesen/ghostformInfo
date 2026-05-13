<script setup lang="ts">
await useFetch('/api/user', { key: 'user', lazy: true });
await useFetch('/api/leads', { key: 'leads', lazy: true });
const { data: user } = useNuxtData('user');
</script>

<template>
    <main>
        <template v-if="user">
            <baseNavigationAuth />
            <slot />
        </template>

        <template v-else>
            <appAccess />
        </template>

    </main>
</template>