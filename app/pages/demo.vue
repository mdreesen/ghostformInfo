<script setup lang="ts">
/**
 * Public live demo. The form embedded below is the REAL capture form — not a
 * mockup — so a visitor can see exactly what a lead experiences.
 *
 * The account it submits to comes from runtime config (see nuxt.config.ts),
 * not hardcoded here, so it can be pointed at a dedicated demo account via
 * env var. IMPORTANT: whoever owns that account's dashboard WILL see
 * whatever a visitor submits here — the banner below says so plainly.
 */
useHead({ title: 'GhostForm — Live demo' });

const config = useRuntimeConfig();
</script>

<template>
  <div class="pt-36 pb-24 px-6">
    <div class="max-w-2xl mx-auto text-center mb-14">
      <p class="gf-eyebrow mb-4 gf-rise" style="--d:.05s">Try it yourself</p>
      <h1 class="gf-display text-[clamp(32px,5vw,52px)] leading-[1.1] tracking-tight mb-5 gf-rise" style="--d:.12s">
        This is the actual form.
      </h1>
      <p class="text-[15px] text-[#8A847C] leading-relaxed gf-rise" style="--d:.2s">
        Not a mockup — the same capture form a lead fills out at an open
        house. Fill it in and see exactly what your leads will experience.
      </p>
    </div>

    <div class="max-w-md mx-auto mb-10 p-4 border border-[#DDD6C9] bg-[#EFEAE0] gf-rise" style="--d:.26s">
      <p class="text-[12px] text-[#8A847C] leading-relaxed text-center">
        This is a practice environment — anything you submit here is only
        for trying the app out, not a real inquiry.
      </p>
    </div>

    <div class="gf-depth">
      <baseGhostForm
        category="realtor"
        source="data_entry"
        :company="config.public.demoCompanyHash"
        :email="config.public.demoEmailHash"
      />
    </div>

    <div class="max-w-4xl mx-auto mt-24 grid sm:grid-cols-2 gap-6">
      <div class="p-8 border border-[#DDD6C9] bg-[#F7F4EF] gf-depth" style="--d:0s">
        <h3 class="gf-display text-[17px] mb-3">Works with no signal</h3>
        <p class="text-[13.5px] text-[#8A847C] leading-relaxed">
          A lot of the Flathead Valley has no reliable coverage. This form
          saves on the device and sends the moment signal returns — nothing
          is lost to a dead zone.
        </p>
      </div>
      <div class="p-8 border border-[#DDD6C9] bg-[#F7F4EF] gf-depth" style="--d:.08s">
        <h3 class="gf-display text-[17px] mb-3">Straight to your dashboard</h3>
        <p class="text-[13.5px] text-[#8A847C] leading-relaxed">
          No database to manage. The moment a lead submits, it's on your
          morning call list and you're alerted immediately.
        </p>
      </div>
    </div>

    <div class="text-center mt-20">
      <baseButtonNavigate path="/" text="Back to GhostForm" />
    </div>
  </div>
</template>
