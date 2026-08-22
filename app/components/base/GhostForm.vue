<script setup lang="ts">
/**
 * Embeds the real capture form (the same one realtors send leads to) via
 * iframe, so a visitor can try the actual product rather than a mockup.
 *
 * NOTE: this previously built the URL by raw string interpolation with no
 * encoding — a bcrypt hash containing certain characters could corrupt the
 * query string. Now built with URLSearchParams, matching the fix already
 * applied to the dashboard's own copy of this component.
 */
const props = defineProps({
  category: { type: String, required: true },
  company: { type: String, required: true },
  email: { type: String, required: true },
  /** which question set to show: 'open_house' | 'on_market' | 'data_entry' */
  source: { type: String, default: 'data_entry' },
});

const ready = computed(() => Boolean(props.category && props.company && props.email));

const src = computed(() => {
  const params = new URLSearchParams();
  params.set('category', props.category);
  params.set('source', props.source);
  params.set('company_name', props.company);
  params.set('company_email', props.email);
  params.set('background_color', 'F7F4EF');
  params.set('font_color', '1F1B16');
  params.set('accent_color', 'B5563A');
  return `https://ghostform-zeta.vercel.app/?${params.toString()}`;
});
</script>

<template>
  <div class="relative max-w-md mx-auto">
    <div class="bg-[#EFEAE0] border border-[#DDD6C9] overflow-hidden">
      <div v-if="!ready" class="py-10 px-6 text-center">
        <p class="text-[14px] text-[#8A847C]">A category, company name, and email are needed to preview this form.</p>
      </div>
      <iframe
        v-else
        :src="src"
        style="width: 100%; height: 520px; border: none; background: transparent;"
        scrolling="no"
      />
    </div>
  </div>
</template>
