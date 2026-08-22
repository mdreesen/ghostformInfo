<script setup lang="ts">
/**
 * Real features that exist in the product, in outcome language — a realtor
 * doesn't buy "conditional logic" or "metadata extraction" (the old copy's
 * literal claims), they buy not losing deals.
 */
const features = [
  {
    title: 'Capture forms & QR codes',
    desc: 'Open house sign-in, listing enquiry, or quick manual entry — three forms for three moments, all landing in one place.',
    icon: 'lucide:qr-code'
  },
  {
    title: 'Works with no signal',
    desc: "A lot of the Flathead Valley doesn't have reliable coverage. Leads save on the device and send the moment signal returns.",
    icon: 'lucide:wifi-off'
  },
  {
    title: 'Your morning call list',
    desc: 'New, cold, and overdue leads — ranked, so you know exactly who to reach out to first, every day.',
    icon: 'lucide:list-checks'
  },
  {
    title: 'Instant lead alerts',
    desc: 'Email and in-app the moment someone comes in. The fastest agent to respond usually wins the deal.',
    icon: 'lucide:bell-ring'
  },
  {
    title: 'Messages written for you',
    desc: 'One tap drafts a text or email using what that lead actually told you — by text from your own number, or by branded email.',
    icon: 'lucide:message-square-text'
  },
  {
    title: 'Follow-up on autopilot',
    desc: 'Weekly, biweekly, or monthly campaigns that send themselves — branded with your name and photo, worded a little differently each time.',
    icon: 'lucide:repeat'
  }
];
</script>

<template>
  <section id="features" class="py-28 px-6 max-w-6xl mx-auto">
    <div class="gf-depth mb-16 max-w-xl">
      <p class="gf-eyebrow mb-4">What's included</p>
      <h2 class="gf-display text-[clamp(28px,3.6vw,42px)] leading-[1.15] tracking-tight">
        Everything you need to stop losing leads to silence.
      </h2>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <div
        v-for="(f, i) in features" :key="f.title"
        class="gf-depth p-8 border border-[#DDD6C9] bg-[#F7F4EF] hover:border-[#B5563A]/50 transition-colors"
        :style="`--d:${0.05 * i}s`"
      >
        <div class="w-10 h-10 flex items-center justify-center border border-[#B5563A]/30 text-[#B5563A] mb-6">
          <baseIcon :icon-name="f.icon" size="18" />
        </div>
        <h3 class="gf-display text-[17px] mb-3">{{ f.title }}</h3>
        <p class="text-[13.5px] text-[#8A847C] leading-relaxed">{{ f.desc }}</p>
      </div>
    </div>
  </section>
</template>
