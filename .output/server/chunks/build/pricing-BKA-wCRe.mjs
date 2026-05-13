import { _ as __nuxt_component_0 } from './Base-nVsy7JGX.mjs';
import { c as useNuxtData, _ as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pricing",
  __ssrInlineRender: true,
  props: {
    stripe: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const tiers = [
      {
        name: "Shadow",
        price: "49",
        description: "Light, entry-level, perfect for the solo agent just starting with QR capture.",
        features: ["Unlimited leads", "Advanced 90% Compression", "Custom Branding", "Conditional Logic", "Priority Email Support"],
        cta: "Get Started",
        color: "cyan-500",
        stripe: "price_1TW2I0Bww0ljz1NXrIJdf4r0",
        highlighted: true
      },
      {
        name: "Phantom",
        price: "99",
        description: 'Powerful, ever-present, the "standard" for high-volume producers.',
        features: ["Unlimited leads", "Advanced 90% Compression", "Custom Branding", "Conditional Logic", "Priority Email Support"],
        cta: "Get Started",
        color: "blue-500",
        stripe: "price_1TW3reBww0ljz1NXA3mKGjlh",
        highlighted: false
      }
    ];
    useNuxtData("get_user");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeaderBase = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "pricing",
        class: "py-32 px-6 relative overflow-hidden"
      }, _attrs))}><div class="max-w-4xl mx-auto text-center mb-20 reveal">`);
      _push(ssrRenderComponent(_component_baseHeaderBase, { text: "Choose your level of presence." }, null, _parent));
      _push(`<p class="text-zinc-400 text-lg">No hidden fees. Just weightless data and spectral speed.</p></div><div class="max-w-4xl mx-auto flex flex-wrap gap-8 items-center justify-center"><!--[-->`);
      ssrRenderList(tiers, (tier) => {
        _push(`<div class="${ssrRenderClass([
          "relative p-8 rounded-[2.5rem] transition-all duration-500 border reveal max-w-sm",
          tier.highlighted ? "bg-zinc-900 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.15)] scale-105 z-10" : "bg-zinc-950/50 border-white hover:border-white/20"
        ])}"><div class="mb-8"><h3 class="text-xl font-bold mb-2">${ssrInterpolate(tier.name)}</h3><div class="flex items-baseline gap-1"><span class="text-4xl font-black tracking-tight">$</span><span class="text-6xl font-black tracking-tight">${ssrInterpolate(tier.price)}</span><span class="text-zinc-500 text-sm">/mo</span></div><p class="mt-4 text-zinc-400 text-sm leading-relaxed">${ssrInterpolate(tier.description)}</p></div><ul class="space-y-4 mb-10"><!--[-->`);
        ssrRenderList(tier.features, (feature) => {
          _push(`<li class="flex items-center gap-3 text-sm text-zinc-300"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"${ssrRenderAttr("stroke", tier.highlighted ? "#22d3ee" : "#52525b")} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg> ${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul>`);
        if (__props.stripe) {
          _push(`<button class="${ssrRenderClass([
            "w-full py-4 rounded-2xl font-black transition-all transform active:scale-95",
            tier.highlighted ? "bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
          ])}">${ssrInterpolate(tier.cta)}</button>`);
        } else {
          _push(ssrRenderComponent(_component_nuxt_link, { to: "/signup" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button class="${ssrRenderClass([
                  "w-full py-4 rounded-2xl font-black transition-all transform active:scale-95",
                  tier.highlighted ? "bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                ])}"${_scopeId}>${ssrInterpolate(tier.cta)}</button>`);
              } else {
                return [
                  createVNode("button", {
                    class: [
                      "w-full py-4 rounded-2xl font-black transition-all transform active:scale-95",
                      tier.highlighted ? "bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    ]
                  }, toDisplayString(tier.cta), 3)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "AppPricing" });

export { __nuxt_component_4 as _ };
//# sourceMappingURL=pricing-BKA-wCRe.mjs.map
