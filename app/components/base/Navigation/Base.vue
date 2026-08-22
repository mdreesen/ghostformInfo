<script setup lang="ts">
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => { isScrolled.value = window.scrollY > 20; };
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));

const navLinks = [
  { name: 'How it works', href: '/#how-it-works' },
  { name: 'Features', href: '/#features' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Live demo', href: '/demo' },
];

// The real product lives on a separate domain — the marketing site links
// out to it rather than hosting a second, non-functional copy of the app.
const DASHBOARD_URL = 'https://ghostform-dashboard.vercel.app';
</script>

<template>
  <nav
    class="fixed top-0 w-full z-100 transition-colors duration-300 border-b"
    :class="isScrolled ? 'bg-[#F7F4EF]/90 backdrop-blur-md border-[#DDD6C9] py-3' : 'bg-transparent border-transparent py-5'"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2.5">
        <NuxtImg class="h-8 w-8 object-contain" :src="'/images/logo-icon.webp'" format="webp" preload loading="eager" fetch-priority="high" />
        <span class="gf-display text-[18px] tracking-tight">GhostForm</span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-9">
        <NuxtLink
          v-for="link in navLinks" :key="link.name" :to="link.href"
          class="text-[11.5px] uppercase tracking-[0.12em] text-[#8A847C] hover:text-[#1F1B16] transition-colors"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <a :href="`${DASHBOARD_URL}/login`" class="hidden sm:block text-[11.5px] uppercase tracking-[0.12em] text-[#8A847C] hover:text-[#1F1B16] transition-colors">
          Log in
        </a>
        <a :href="`${DASHBOARD_URL}/signup`" class="hidden sm:inline-block px-5 py-2.5 bg-[#B5563A] text-[#F7F4EF] text-[11px] uppercase tracking-[0.1em] font-semibold hover:bg-[#9d4830] transition-colors">
          Start free trial
        </a>

        <button class="md:hidden text-[#1F1B16]" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in" leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden bg-[#F7F4EF] border-b border-[#DDD6C9] px-6 py-5 flex flex-col gap-5">
        <NuxtLink v-for="link in navLinks" :key="link.name" :to="link.href" class="text-[13px] uppercase tracking-[0.1em] text-[#8A847C]" @click="isMobileMenuOpen = false">
          {{ link.name }}
        </NuxtLink>
        <a :href="`${DASHBOARD_URL}/signup`" class="mt-2 text-center px-5 py-3 bg-[#B5563A] text-[#F7F4EF] text-[11px] uppercase tracking-[0.1em] font-semibold">
          Start free trial
        </a>
      </div>
    </Transition>
  </nav>
</template>
