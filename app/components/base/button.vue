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
    <button
    class="w-full md:w-auto px-10 py-5 bg-cyan-500 hover:bg-cyan-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900'} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out">
    {{ text }}
    </button>
</template>