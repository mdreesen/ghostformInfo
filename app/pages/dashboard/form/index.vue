<script setup lang="ts">
definePageMeta({
    layout: 'form',
});

const { data: user } = useNuxtData('get_user');

</script>

<template>
    <div class="min-h-screen">

        <main class="max-w-7xl mx-auto h-svh px-4 grid grid-cols-1 items-center content-center">

            <div class="relative">
                <baseGhostForm
                    :category="user.category"
                    :company="user.company"
                    :email="user.email"
                />
            </div>
        </main>
    </div>
</template>

<style scoped>
@keyframes bounce-slow {

    0%,
    100% {
        transform: translate(-50%, 0);
    }

    50% {
        transform: translate(-50%, -10px);
    }
}

.animate-bounce-slow {
    animation: bounce-slow 3s ease-in-out infinite;
}
</style>