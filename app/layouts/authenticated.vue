<script setup lang="ts">
await useFetch('/api/user', { key: 'user', lazy: true });
await useFetch('/api/leads', { key: 'leads', lazy: true });
await useFetch('/api/leads/status', { key: 'status', lazy: true });

const { data: user } = useNuxtData('user');

const authenticated = computed(() => {
    if (user) return true;
    else {
        return navigateTo(`/login`);
    }
});
</script>

<template>
    <main>
        <template v-if="authenticated">
            <baseNavigationAuth />
            <slot />
        </template>

        <template v-else>
            <appAccess />
        </template>

    </main>
</template>