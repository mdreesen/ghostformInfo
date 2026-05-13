import { a as useRoute, b as useFetch, _ as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, withAsyncContext, ref, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'jose';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'vue-router';
import '@iconify/vue';
import 'perfect-debounce';
import '@vue/shared';
import 'tailwindcss/colors';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "details",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data, pending: pending_data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/user/leads/${route.params.id}`,
      "$ZcvC1y7ZwX"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    console.log(data.value);
    const lead = ref({
      name: "Marcus Sterling",
      email: "m.sterling@example.com",
      phone: "406-555-0192",
      address: "123 Pinecrest Dr, Kalispell, MT",
      tier: 1,
      score: 94,
      budget: 12e5,
      homeWorth: 11e5,
      sqft: 3200,
      timeline: "Within 3 months",
      intent: "Buy and Sell",
      message: "Looking to downsize but want high-end finishes. Need to move before school starts.",
      aiAnalysis: {
        summary: "High-intent lead with realistic market expectations. The budget-to-value ratio suggests significant equity position.",
        motivation: "CRITICAL. Driven by educational calendar and lifestyle transition.",
        financialLogic: "VERIFIED. Budget is sufficient for the target area and square footage requirements.",
        dispatchScript: "I noticed you are looking to transition before the school year. I have two off-market properties that fit your 3,200 sqft requirement perfectly. Can we walk through them Thursday?"
      }
    });
    const getTierColor = (tier) => {
      if (tier === 1) return "text-[#30cf43] shadow-[0_0_15px_rgba(48,207,67,0.3)]";
      return "text-zinc-500";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      if (!unref(pending_data)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-20 p-6 lg:py-18 relative overflow-hidden" }, _attrs))}><div class="absolute top-[-20%] right-[-10%] w-200 h-200 bg-[#30cf43] rounded-full blur-[200px] opacity-[0.04]"></div><main class="max-w-5xl mx-auto relative z-10"><nav class="mb-12 flex justify-between items-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dashboard/leads",
          class: "group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="group-hover:-translate-x-1 transition-transform"${_scopeId}>\u2190</span><span class="text-[10px] font-black uppercase tracking-widest"${_scopeId}>Back to Archive</span>`);
            } else {
              return [
                createVNode("span", { class: "group-hover:-translate-x-1 transition-transform" }, "\u2190"),
                createVNode("span", { class: "text-[10px] font-black uppercase tracking-widest" }, "Back to Archive")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex gap-4"><button class="px-6 py-2 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/5">Archive Lead</button><button class="px-6 py-2 bg-[#30cf43] text-black rounded-xl text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(48,207,67,0.3)]">Push to CRM</button></div></nav><section class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"><div class="md:col-span-2"><h1 class="text-6xl font-black tracking-tighter mb-4">${ssrInterpolate(unref(lead).name)}</h1><div class="flex flex-wrap gap-6 text-zinc-400"><div class="flex flex-col"><span class="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-1">Email</span><span class="text-sm font-mono">${ssrInterpolate(unref(lead).email)}</span></div><div class="flex flex-col"><span class="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-1">Phone</span><span class="text-sm font-mono">${ssrInterpolate(unref(lead).phone)}</span></div><div class="flex flex-col"><span class="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-1">Address</span><span class="text-sm">${ssrInterpolate(unref(lead).address)}</span></div></div></div><div class="backdrop-blur-2xl bg-white/3 border border-white/8 rounded-3xl p-8 flex flex-col items-center justify-center text-center"><span class="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-2">Quality Score</span><div class="${ssrRenderClass([getTierColor(unref(lead).tier), "text-7xl font-black tabular-nums leading-none mb-2"])}">${ssrInterpolate(unref(lead).score)}</div><span class="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-700">Tier ${ssrInterpolate(unref(lead).tier)}</span></div></section><div class="grid grid-cols-1 lg:grid-cols-12 gap-8"><div class="lg:col-span-4 space-y-8"><div class="backdrop-blur-xl bg-white/2 border border-white/8 rounded-3xl p-8"><h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-[#30cf43] mb-8">Lead Submission</h3><div class="space-y-6"><!--[-->`);
        ssrRenderList({
          "Est. Value": `$${unref(lead).homeWorth.toLocaleString()}`,
          "Budget": `$${unref(lead).budget.toLocaleString()}`,
          "Sq Footage": `${unref(lead).sqft} ft\xB2`,
          "Timeline": unref(lead).timeline,
          "Goal": unref(lead).intent
        }, (val, label) => {
          _push(`<div class="flex justify-between items-end border-b border-white/5 pb-2"><span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">${ssrInterpolate(label)}</span><span class="text-sm font-bold">${ssrInterpolate(val)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="backdrop-blur-xl bg-white/2 border border-white/8 rounded-3xl p-8"><h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-4">Original Message</h3><p class="text-sm text-zinc-300 leading-relaxed italic-none">&quot;${ssrInterpolate(unref(lead).message)}&quot;</p></div></div><div class="lg:col-span-8 space-y-8"><div class="backdrop-blur-xl bg-white/4 border border-[#30cf43]/20 rounded-3xl p-10 relative overflow-hidden"><div class="absolute top-0 right-0 p-4"><span class="text-[8px] font-black bg-[#30cf43]/20 text-[#30cf43] px-2 py-1 rounded tracking-widest">AI GEN-4</span></div><h3 class="text-[11px] font-black uppercase tracking-[0.4em] text-[#30cf43] mb-8">Strategic Intelligence Brief</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"><div><h4 class="text-[9px] font-black uppercase text-zinc-500 mb-3 tracking-widest">Executive Summary</h4><p class="text-sm font-bold leading-relaxed">${ssrInterpolate(unref(lead).aiAnalysis.summary)}</p></div><div><h4 class="text-[9px] font-black uppercase text-zinc-500 mb-3 tracking-widest">Financial Logic</h4><p class="text-sm font-bold leading-relaxed">${ssrInterpolate(unref(lead).aiAnalysis.financialLogic)}</p></div></div><div class="border-t border-white/5 pt-8"><h4 class="text-[9px] font-black uppercase text-[#30cf43] mb-4 tracking-widest">Recommended Dispatch Script</h4><div class="bg-black/40 p-6 rounded-2xl border border-white/5 font-mono text-sm text-[#30cf43] leading-relaxed"> &quot;${ssrInterpolate(unref(lead).aiAnalysis.dispatchScript)}&quot; </div><button class="mt-4 text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Copy to clipboard</button></div></div></div></div></main></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/leads/[id]/details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=details-32nTh00C.mjs.map
