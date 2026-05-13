import { W as __nuxt_component_1$2, S as __nuxt_component_0$2 } from "../server.mjs";
import { _ as __nuxt_component_1$3 } from "./ButtonNavigate-DPMXX9Z_.js";
import { mergeProps, useSSRContext, defineComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as __nuxt_component_0$1 } from "./Base-nVsy7JGX.js";
import { _ as __nuxt_component_4 } from "./pricing-BKA-wCRe.js";
import "/Users/mdreesen/Documents/Programming/projects/ghostformInfo/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mdreesen/Documents/Programming/projects/ghostformInfo/node_modules/hookable/dist/index.mjs";
import "/Users/mdreesen/Documents/Programming/projects/ghostformInfo/node_modules/unctx/dist/index.mjs";
import "/Users/mdreesen/Documents/Programming/projects/ghostformInfo/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "/Users/mdreesen/Documents/Programming/projects/ghostformInfo/node_modules/defu/dist/defu.mjs";
import "/Users/mdreesen/Documents/Programming/projects/ghostformInfo/node_modules/ufo/dist/index.mjs";
import "/Users/mdreesen/Documents/Programming/projects/ghostformInfo/node_modules/h3/dist/index.mjs";
import "@iconify/vue";
import "/Users/mdreesen/Documents/Programming/projects/ghostformInfo/node_modules/klona/dist/index.mjs";
import "/Users/mdreesen/Documents/Programming/projects/ghostformInfo/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/mdreesen/Documents/Programming/projects/ghostformInfo/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "tailwindcss/colors";
import "/Users/mdreesen/Documents/Programming/projects/ghostformInfo/node_modules/@unhead/vue/dist/index.mjs";
import "framesync";
import "popmotion";
import "style-value-types";
import "tailwind-variants";
import "@iconify/utils/lib/css/icon";
import "ohash/utils";
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_1$2;
  const _component_baseButtonNavigate = __nuxt_component_1$3;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative pt-40 pb-20 px-6" }, _attrs))} data-v-f4825f21><div class="max-w-5xl mx-auto text-center" data-v-f4825f21><div class="reveal inline-block mb-6 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-widest" data-v-f4825f21> The Future of Lead Capture </div><span class="relative z-10 animate-bounce-slow flex items-center" data-v-f4825f21>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "relative z-10 h-20 w-full object-contain drop-shadow-md",
    src: "/images/logo-icon.webp",
    format: "webp",
    preload: "",
    loading: "eager",
    "fetch-priority": "high"
  }, null, _parent));
  _push(`</span><h1 class="reveal text-6xl md:text-8xl font-black tracking-tight leading-tight mb-4" data-v-f4825f21><span class="inline-flex items-center" data-v-f4825f21> Ghost </span><span class="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600" data-v-f4825f21> Form</span></h1><h2 class="reveal text-4xl md:text-4xl font-black tracking-tighter leading-tight mb-8" data-v-f4825f21><span data-v-f4825f21> Weightless data </span><span class="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600" data-v-f4825f21> Spectral speed. </span></h2><p class="reveal text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12" style="${ssrRenderStyle({ "transition-delay": "200ms" })}" data-v-f4825f21> The light-weight multi-step form engine. </p><div class="reveal flex flex-col md:flex-row items-center justify-center gap-4" style="${ssrRenderStyle({ "transition-delay": "400ms" })}" data-v-f4825f21>`);
  _push(ssrRenderComponent(_component_baseButtonNavigate, {
    path: "/demo",
    text: "View Live Demo"
  }, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f4825f21"]]), { __name: "AppHero" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "stats",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { label: "Payload Reduction", value: "90%" },
      { label: "Conversion Boost", value: "2.4x" },
      { label: "Setup Time", value: "< 5m" },
      { label: "'Payload Too Large' Errors", value: "0%" },
      { label: "Instant Interaction", value: "< 200ms" },
      { label: "Mobile-First Design", value: "80%" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeaderBase = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 border-y border-white/5 bg-white/2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_baseHeaderBase, { text: "Stats" }, null, _parent));
      _push(`<div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-center"><!--[-->`);
      ssrRenderList(stats, (s) => {
        _push(`<div><div class="text-4xl font-black text-white mb-1">${ssrInterpolate(s.value)}</div><div class="text-xs font-bold text-zinc-500 uppercase tracking-widest">${ssrInterpolate(s.label)}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/stats.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$4, { __name: "AppStats" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "icon",
  __ssrInlineRender: true,
  props: {
    iconName: {
      type: String,
      default: "",
      required: false
    },
    styles: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "50"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_Icon, mergeProps({
        class: props.styles,
        name: props.iconName,
        size: props.size
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/icon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "BaseIcon" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "features",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        title: "Image Compression",
        desc: "Stop crashing your server. Our engine shrinks 10MB mobile photos into 400KB specters instantly in the browser.",
        icon: "line-md:image"
      },
      {
        title: "Vanishing Logic",
        desc: "Smart multi-step flows that adapt to user answers. One question at a time. Zero friction.",
        icon: "line-md:briefcase"
      },
      {
        title: "Direct Inbox",
        desc: "No database middleman. Leads transfer to your inbox instantly via Resend with high-res attachments.",
        icon: "line-md:email"
      },
      {
        title: "Metadata Extraction",
        desc: "Automatically strip hidden GPS and camera bloat from images to protect user privacy and save space.",
        icon: "line-md:cog-loop"
      },
      {
        title: "Auto-Confirmation Echo",
        desc: 'Send a beautiful, automated "Success" email back to the customer the moment they finish.',
        icon: "line-md:person"
      },
      {
        title: "Smart-Crop Preview",
        desc: "Give users an instant thumbnail preview of their uploads before they hit submit.",
        icon: "line-md:cloud-alt-tags-loop"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeaderBase = __nuxt_component_0$1;
      const _component_baseIcon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "features",
        class: "py-32 px-6 max-w-7xl mx-auto"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_baseHeaderBase, { text: "Features" }, null, _parent));
      _push(`<div class="grid md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(features, (f, i) => {
        _push(`<div class="reveal p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-cyan-500/30 transition-all group" style="${ssrRenderStyle({ transitionDelay: `${i * 150}ms` })}">`);
        _push(ssrRenderComponent(_component_baseIcon, {
          class: "bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600",
          iconName: f.icon
        }, null, _parent));
        _push(`<h3 class="text-2xl font-bold mb-4">${ssrInterpolate(f.title)}</h3><p class="text-zinc-400 leading-relaxed">${ssrInterpolate(f.desc)}</p></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/features.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "AppFeatures" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "comparison",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      {
        icon: "x",
        title: "Traditional Forms",
        desc: "Break on 12MB photos, boring UI, 20% conversion rate, requires database management."
      },
      {
        icon: "✓",
        title: "GhostForm",
        desc: "Auto-compressing tech, adaptive multi-step flow, 65% conversion rate, inbox delivery via Resend."
      },
      {
        icon: "x",
        title: "Traditional Image Sending",
        desc: 'Most standard web servers have a "Maximum Payload Size." If a user tries to upload three 8MB photos from their mobile devices, the server simply hangs or crashes with a 413 Request Entity Too Large error.'
      },
      {
        icon: "✓",
        title: "GhostForm Image Sending",
        desc: "By shrinking those 24MB of photos down to 1.5MB before they are sent, we bypass the server's limit entirely. We 'plug the leak' by ensuring the door is always wide enough for their data."
      },
      {
        icon: "x",
        title: "Traditional Form Questions",
        desc: "Standard forms show all 15 questions at once. It looks like a tax document."
      },
      {
        icon: "✓",
        title: "GhostForm Questions",
        desc: "Our 'Spectral Speed' multi-step flow feels like a text message conversation. It’s low-friction, high-engagement."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-32 px-6 bg-cyan-500/5" }, _attrs))}><div class="max-w-4xl mx-auto bg-zinc-950 border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl reveal"><h2 class="text-4xl font-black mb-12 text-center">Stop the Leak.</h2><div class="space-y-8"><!--[-->`);
      ssrRenderList(data, (item, index2) => {
        _push(`<div><div class="${ssrRenderClass(`${index2 % 2 && index2 !== data.length - 1 && "border-b-4 border-white/10 border-solid pb-7.5"} flex items-start gap-6`)}"><div class="${ssrRenderClass(`w-8 h-8 rounded-full ${item.icon.includes("x") ? "bg-red-500/20 text-red-500" : "bg-cyan-500/20 text-cyan-500"} shrink-0 flex items-center justify-center font-bold`)}">${ssrInterpolate(item.icon)}</div><div><h4 class="font-bold text-lg">${ssrInterpolate(item.title)}</h4><p class="text-zinc-500">${ssrInterpolate(item.desc)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/comparison.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "AppComparison" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appHero = __nuxt_component_0;
      const _component_appStats = __nuxt_component_1$1;
      const _component_appFeatures = __nuxt_component_2;
      const _component_appComparison = __nuxt_component_3;
      const _component_appPricing = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-56a3a593><section class="reveal" data-v-56a3a593>`);
      _push(ssrRenderComponent(_component_appHero, null, null, _parent));
      _push(`</section><section class="reveal" data-v-56a3a593>`);
      _push(ssrRenderComponent(_component_appStats, null, null, _parent));
      _push(`</section><section class="reveal" data-v-56a3a593>`);
      _push(ssrRenderComponent(_component_appFeatures, null, null, _parent));
      _push(`</section><section class="reveal" data-v-56a3a593>`);
      _push(ssrRenderComponent(_component_appComparison, null, null, _parent));
      _push(`</section><section class="reveal" data-v-56a3a593>`);
      _push(ssrRenderComponent(_component_appPricing, null, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56a3a593"]]);
export {
  index as default
};
//# sourceMappingURL=index-Cz5uaVt1.js.map
