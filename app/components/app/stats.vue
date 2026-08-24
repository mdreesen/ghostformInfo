<script setup lang="ts">
/**
 * Repurposed from a fake-stats strip ("2.4x Conversion Boost", "90% Payload
 * Reduction" — numbers with no basis) into an honest four-step walkthrough of
 * the actual product loop. No invented metrics anywhere on this site.
 */
const steps = [
  {
    n: '1',
    title: 'A lead comes in',
    body: 'A QR scan at your open house, a listing enquiry, or you add someone yourself. Works with no cell signal — it saves and sends the moment signal returns.'
  },
  {
    n: '2',
    title: "You're told immediately",
    body: 'An alert lands the moment it happens — email and in-app. Speed-to-lead is the single biggest thing that separates a close from a "they went with someone else."'
  },
  {
    n: '3',
    title: 'Every morning, a short list',
    body: 'New leads, cold leads, and anyone overdue for a follow-up — ranked, so you know exactly where to start.'
  },
  {
    n: '4',
    title: 'One tap to reach out',
    body: 'A message is already drafted from what that lead told you. Send it by text or email, and they come off today\'s list.'
  }
];
</script>

<template>
  <section id="how-it-works" class="py-28 px-6 border-y border-[#DDD6C9] bg-[#EFEAE0]/50">
    <div class="max-w-5xl mx-auto">
      <div class="gf-depth mb-16 max-w-xl">
        <p class="gf-eyebrow mb-4">How it works</p>
        <h2 class="gf-display text-[clamp(28px,3.6vw,42px)] leading-[1.15] tracking-tight">
          One loop. It runs every day whether you open the app or not.
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 gap-px bg-[#DDD6C9] border border-[#DDD6C9]">
        <div
          v-for="(s, i) in steps" :key="s.n"
          class="gf-depth bg-[#F7F4EF] p-8 sm:p-9"
          :style="`--d:${0.06 * i}s`"
        >
          <span class="gf-display text-[13px] border border-[#B5563A] text-[#B5563A] w-7 h-7 inline-flex items-center justify-center mb-5">
            {{ s.n }}
          </span>
          <h3 class="gf-display text-[18px] mb-2.5">{{ s.title }}</h3>
          <p class="text-[13.5px] text-[#8A847C] leading-relaxed">{{ s.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
