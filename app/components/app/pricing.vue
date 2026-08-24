<script setup lang="ts">
/**
 * Pricing mirrors the in-app dashboard tiers exactly (Shadow $29 / Phantom
 * $59) — a mismatch between the marketing site and what checkout actually
 * charges is the fastest way to lose someone's trust.
 *
 * IMPORTANT: buttons link to /signup, NOT directly to a Stripe price. The
 * real checkout flow needs a Mongo user _id first (Stripe's
 * client_reference_id, set from inside the dashboard once an account
 * exists) — a marketing-site visitor has no account yet, so a direct Stripe
 * link here would create a payment the webhook can't attribute to anyone.
 */
const DASHBOARD_URL = 'https://ghostform-dashboard.vercel.app';

const tiers = [
  {
    name: 'Shadow',
    subtitle: 'Solo agent',
    price: '29',
    description: 'Everything you need to stop losing leads between the open house and the follow-up.',
    features: [
      'Unlimited leads and QR sign-ins',
      'Captures leads with no cell signal',
      'Tells you who to call each morning',
      'Instant alert the moment a lead comes in',
      'All three forms — open house, listing, quick entry',
      '1 automated follow-up campaign',
      '25 AI-written messages a month'
    ],
    highlighted: true
  },
  {
    name: 'Phantom',
    subtitle: 'High volume',
    price: '59',
    description: 'For agents running several listings at once who need the follow-up to happen without them.',
    features: [
      { text: 'Everything in Shadow' },
      { text: 'Unlimited follow-up campaigns', upgrade: true },
      { text: 'Unlimited AI-written messages', upgrade: true },
      { text: 'A separate QR code for every listing', upgrade: true },
      { text: 'Export your whole database anytime', upgrade: true },
      { text: 'Same-day help from the developer', upgrade: true }
    ],
    highlighted: false
  }
];

const asFeature = (f: any) => (typeof f === 'string' ? { text: f, upgrade: false } : f);
</script>

<template>
  <section id="pricing" class="py-28 px-6 relative">
    <div class="max-w-3xl mx-auto text-center mb-20 gf-depth">
      <p class="gf-eyebrow mb-4">Choose your plan</p>
      <h2 class="gf-display text-[clamp(28px,3.6vw,42px)] leading-[1.15] tracking-tight mb-4">
        One saved deal pays for the year.
      </h2>
      <p class="text-[14px] text-[#8A847C]">
        Free for 30 days — your card isn't charged until day 31.
      </p>
    </div>

    <div class="max-w-4xl mx-auto flex flex-wrap gap-8 items-stretch justify-center">
      <div
        v-for="(tier, i) in tiers" :key="tier.name"
        class="gf-depth relative p-8 border max-w-sm w-full flex flex-col"
        :class="tier.highlighted ? 'bg-[#F7F4EF] border-[#B5563A] lg:scale-105 z-10' : 'bg-[#EFEAE0] border-[#DDD6C9]'"
        :style="`--d:${0.08 * i}s`"
      >
        <div v-if="tier.highlighted" class="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#B5563A] text-[#F7F4EF] text-[10px] font-semibold uppercase tracking-[0.14em] px-4 py-1 rounded-full">
          Most Popular
        </div>

        <div class="mb-8">
          <h3 class="gf-display text-xl font-bold mb-1">{{ tier.name }}</h3>
          <span class="block text-[10.5px] uppercase tracking-[0.14em] text-[#A9A39A] mb-3">{{ tier.subtitle }}</span>
          <div class="flex items-baseline gap-1">
            <span class="gf-display text-4xl tracking-tight">$</span>
            <span class="gf-display text-6xl tracking-tight leading-none tabular-nums">{{ tier.price }}</span>
            <span class="text-[#8A847C] text-sm">/mo</span>
          </div>
          <p class="mt-4 text-[#8A847C] text-sm leading-relaxed">{{ tier.description }}</p>
        </div>

        <ul class="space-y-4 mb-10 flex-1">
          <li
            v-for="feature in tier.features" :key="asFeature(feature).text"
            class="flex items-start gap-3 text-[14px]"
            :class="asFeature(feature).upgrade ? 'text-[#1F1B16] font-medium' : 'text-[#1F1B16]'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mt-1 shrink-0"
              :stroke="asFeature(feature).upgrade ? '#B5563A' : '#A9A39A'">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {{ asFeature(feature).text }}
          </li>
        </ul>

        <a :href="`${DASHBOARD_URL}/signup`" class="mt-auto">
          <button
            class="w-full py-4 text-[11px] uppercase tracking-[0.12em] font-semibold transition-colors active:scale-[0.98]"
            :class="tier.highlighted ? 'bg-[#B5563A] text-[#F7F4EF] hover:bg-[#9d4830]' : 'bg-transparent text-[#1F1B16] hover:bg-[#DDD6C9] border border-[#A9A39A]'"
          >
            Start free trial
          </button>
        </a>
      </div>
    </div>

    <p class="text-center text-[12.5px] text-[#A9A39A] mt-10">
      Cancel anytime. Built and supported in Kalispell, Montana.
    </p>
  </section>
</template>
