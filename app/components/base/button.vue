<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
        default: 'Button'
    },
    isLoading: {
        type: Boolean,
        default: false
    },
    path: {
        type: String,
        default: "/"
    }
})
</script>

<template>
    <nuxt-link :to="path">
        <button
            class="w-full md:w-auto px-10 py-5 bg-cyan-500 border border-zinc-800 rounded-2xl font-bold hover:bg-zinc-800 transition-colors">
            {{ text }}
        </button>
    </nuxt-link>
</template>