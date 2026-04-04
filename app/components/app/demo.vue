<script setup lang="ts">
// Inject the bridge script onto this page only
// useHead({
//   script: [
//     { src: 'http://localhost:3001/embed.js', async: true }
//   ]
// })
</script>

<template>
        <div class="flex h-full w-full">
            <iframe 
                src="https://ghostform-zeta.vercel.app/?category=construction&company_name=White+Raven+Development&company_email=whiteravendev90@gmail.com&background_color=020203&font_color=FFFFFF" 
                style="width: 100%; height: 100vh; border: none; background: transparent;"
                allowtransparency="true" 
                scrolling="no" />
        </div>
</template>