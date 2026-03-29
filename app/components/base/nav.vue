<template>
    <nav class="fixed top-0 w-full z-50 text-zinc-100 border-b border-white/5 bg-black/40 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <NuxtImg class="w-8 h-8 drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]" :src="'/images/logo.jpg'"
                    format="webp" preload loading="eager" fetch-priority="high" />
                <span class="text-2xl font-black tracking-tighter">GhostForm</span>
            </div>
            <button
                class="hidden md:block bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-cyan-400 transition-colors">
                Get Started — It's Free
            </button>
        </div>
    </nav>
</template>