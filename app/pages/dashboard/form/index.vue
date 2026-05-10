<script setup lang="ts">
definePageMeta({
    layout: 'form',
});
</script>

<template>
    <div class="min-h-screen">

        <main class="max-w-7xl h-svh justify-center content-center mx-auto grid grid-cols-1 items-center">
            <div class="h-full relative group">
                <baseGhostForm />
            </div>
        </main>
    </div>
</template>