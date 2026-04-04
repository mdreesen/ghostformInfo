<script setup lang="ts">
// State for the form steps
const step = ref(1);
const name = ref('');

const nextStep = () => {
    if (step.value < 3) step.value++;
};
</script>

<template>
    <div class="min-h-screen">

        <header class="text-center py-16 px-4">
            <h1 class="text-5xl font-black my-4">Demo</h1>
            <p class="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Welcome to the GhostForm Interactive Demo!
            </p>

            <ol class="mt-8 flex flex-col items-center gap-2 text-sm text-zinc-500">
                <li :class="{ 'text-cyan-400': step === 1 }">1. Tell us your need</li>
                <li :class="{ 'text-cyan-400': step === 2 }">2. Upload your image</li>
                <li :class="{ 'text-cyan-400': step === 3 }">3. Add final details</li>
            </ol>
        </header>

        <main class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pb-24">

            <div
                class="group h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                    <Icon name="lucide:shield-check" class="text-cyan-400 w-6 h-6" />
                </div>
                <h3 class="text-xl font-bold mb-3">Secure Data Collection</h3>
                <p class="text-zinc-400 text-sm leading-relaxed">
                    Your data is protected with industry-standard encryption, ensuring complete security and privacy at
                    every step.
                </p>
            </div>

            <div class="relative group">
                <!-- <div class="absolute -top-6 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow"> -->
                <!-- <img src="/ghost-logo.png" class="w-10 h-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" /> -->
                <!-- <NuxtImg class="relative z-10 h-20 w-full object-contain drop-shadow-md" :src="'/images/logo-icon.png'" format="webp"
                    preload loading="eager" fetch-priority="high" /> -->
                <!-- </div> -->

                <appDemo />
            </div>

            <div
                class="group h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                    <Icon name="lucide:cloud-upload" class="text-cyan-400 w-6 h-6" />
                </div>
                <h3 class="text-xl font-bold mb-3">Real-time Uploads</h3>
                <p class="text-zinc-400 text-sm leading-relaxed">
                    Experience seamless image and document uploads with immediate cloud synchronization and processing.
                </p>
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