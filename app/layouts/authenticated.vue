<script setup lang="ts">
await useFetch('/api/user', { key: 'get_user', lazy: true });
const { data: user } = useNuxtData('get_user');
</script>

<template>
    <main>
        <template v-if="user">
            <baseNavigationAuth v-if="user.paid" />
            <slot />
        </template>

        <template v-else>
            <appAccess />
        </template>

    </main>
</template>