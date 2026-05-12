<script setup lang="ts">
await useFetch('/api/user', { key: 'get_user', lazy: true });
const { data: user } = useNuxtData('get_user');
console.log(user.value)
</script>

<template>
    <main>
        <template v-if="user">
            <baseNavigationAuth v-if="user" />
            <slot />
        </template>

        <template v-else>
            <appAccess />
        </template>

    </main>
</template>