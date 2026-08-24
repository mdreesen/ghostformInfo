<script setup lang="ts">
/**
 * Reframed from generic "413 payload too large" web-dev copy (which had
 * nothing to do with real estate) into the actual workflows realtors use
 * today and where each one breaks down.
 */
const data = [
  {
    title: 'The paper sign-in sheet',
    desc: "Names you can't read, no way to reach anyone same-day, and a clipboard that never makes it back to your desk."
  },
  {
    title: 'The spreadsheet',
    desc: "Works fine until you've got forty leads across six stages — then nobody, including you, knows who needs a call today."
  },
  {
    title: 'Your memory',
    desc: "The one you're using right now. It's good, but it's not built to track forty people at once, forever."
  }
];
</script>

<template>
  <div class="py-28 px-6">
    <div class="max-w-3xl mx-auto text-center gf-depth mb-16">
      <p class="gf-eyebrow mb-4">The problem</p>
      <h2 class="gf-display text-[clamp(28px,3.6vw,42px)] leading-[1.15] tracking-tight max-w-[17ch] mx-auto">
        Most leads aren't lost to competition. They're lost to silence.
      </h2>
    </div>

    <div class="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
      <div
        v-for="(item, i) in data" :key="item.title"
        class="gf-depth p-7 bg-[#EFEAE0] border border-[#DDD6C9]"
        :style="`--d:${0.06 * i}s`"
      >
        <h3 class="gf-display text-[16px] mb-3">{{ item.title }}</h3>
        <p class="text-[13px] text-[#8A847C] leading-relaxed">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>
