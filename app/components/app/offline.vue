<script setup lang="ts">
/**
 * "Built for the rugged" — the offline story.
 *
 * This is GhostForm's strongest differentiator for this market and it was
 * buried as one line in the features grid. Half of the Flathead has no bars:
 * a cabin on Whitefish Stage, a property up the North Fork, most of the
 * valley floor on the wrong carrier. Every competing CRM silently fails
 * there, which is precisely when a realtor is standing in front of a buyer.
 *
 * Deliberately concrete rather than a spec claim — a realtor should recognise
 * the situation, not read a feature bullet.
 */
const steps = [
  {
    label: 'No bars',
    title: 'They sign in anyway',
    body: 'The form opens from your home screen and works with zero signal. Your guest never sees an error, a spinner, or a page that won\'t load.'
  },
  {
    label: 'Saved on the device',
    title: 'Nothing is riding on the network',
    body: 'The lead is written to the phone itself the moment they hit send — not held in a browser tab hoping for a connection.'
  },
  {
    label: 'Back in range',
    title: 'It sends itself',
    body: 'Drive back toward town and it syncs on its own. By the time you\'re at your desk the lead is already on your morning call list.'
  }
];
</script>

<template>
  <section id="offline" class="relative py-28 px-6 overflow-hidden border-y border-[#DDD6C9] bg-[#EFEAE0]/40">
    <div class="max-w-5xl mx-auto">

      <div class="gf-anim-pivot max-w-2xl mb-16">
        <p class="gf-eyebrow mb-4">Built for the rugged</p>
        <h2 class="gf-display text-[clamp(28px,3.8vw,44px)] leading-[1.12] tracking-tight mb-6">
          Half the valley has no signal. Your form works anyway.
        </h2>
        <p class="text-[15.5px] text-[#8A847C] leading-relaxed max-w-[52ch]">
          A cabin on Whitefish Stage. A property up the North Fork. Most
          CRMs quietly stop working out there — right when you're standing
          in front of someone ready to give you their number.
        </p>
      </div>

      <!-- Three beats, alternating 3D entrance direction -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(s, i) in steps"
          :key="s.label"
          class="p-8 bg-[#F7F4EF] border border-[#DDD6C9]"
          :class="i % 2 === 0 ? 'gf-anim-swing-l' : 'gf-anim-swing-r'"
          :style="`--d:${0.07 * i}s`"
        >
          <span class="block text-[10.5px] uppercase tracking-[0.16em] text-[#B5563A] font-bold mb-5">
            {{ s.label }}
          </span>
          <h3 class="gf-display text-[18px] leading-snug mb-3">{{ s.title }}</h3>
          <p class="text-[13.5px] text-[#8A847C] leading-relaxed">{{ s.body }}</p>
        </div>
      </div>

      <p class="gf-anim-pivot text-[13px] text-[#A9A39A] mt-10 max-w-[56ch] leading-relaxed">
        Add it to your phone's home screen once, with signal, and it opens
        like any other app from then on — no link to find, nothing to type.
      </p>

    </div>
  </section>
</template>
