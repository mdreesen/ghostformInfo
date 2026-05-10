<script setup lang="ts">
definePageMeta({
    layout: 'form',
});

const { data: user } = useNuxtData('get_user');
</script>

<template>
    <div class="min-h-screen">

        <main class="max-w-7xl h-svh justify-center content-center mx-auto grid grid-cols-1 items-center">
            <div class="h-full relative group">
                <baseGhostForm
                    :category="user.category"
                    :company="user.company"
                    :email="user.email"
                />
            </div>
        </main>
    </div>
</template>