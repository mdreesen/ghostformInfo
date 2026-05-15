import { X as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './GhostForm-DmnN4hqK.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './Base-nVsy7JGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "demo",
  __ssrInlineRender: true,
  setup(__props) {
    const step = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_baseGhostForm = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))} data-v-127334d9><header class="text-center py-16 px-4" data-v-127334d9><h1 class="text-5xl font-black my-4" data-v-127334d9>Demo</h1><p class="text-zinc-400 max-w-2xl mx-auto leading-relaxed" data-v-127334d9> Welcome to the GhostForm Interactive Demo! </p><ol class="mt-8 flex flex-col items-center gap-2 text-sm text-zinc-500" data-v-127334d9><li class="${ssrRenderClass({ "text-cyan-400": unref(step) === 1 })}" data-v-127334d9>1. Tell us your need</li><li class="${ssrRenderClass({ "text-cyan-400": unref(step) === 2 })}" data-v-127334d9>2. Upload your image</li><li class="${ssrRenderClass({ "text-cyan-400": unref(step) === 3 })}" data-v-127334d9>3. Add final details</li></ol></header><main class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pb-24" data-v-127334d9><div class="group h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500" data-v-127334d9><div class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6" data-v-127334d9>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shield-check",
        class: "text-cyan-400 w-6 h-6"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3" data-v-127334d9>Secure Data Collection</h3><p class="text-zinc-400 text-sm leading-relaxed" data-v-127334d9> Your data is protected with industry-standard encryption, ensuring complete security and privacy at every step. </p></div><div class="relative group" data-v-127334d9>`);
      _push(ssrRenderComponent(_component_baseGhostForm, {
        category: "realtor",
        company: "$2b$15$W0Z4XHFsFAP41TiT39nACeEtnrSO6yoXvDLZWQ.fmIFKNdLa4QMqa",
        email: "$2b$15$YFJokoSx/VCflVhQyToimecUYOoDitA0oBVHBqUmFUYq.RW0Kpo/m"
      }, null, _parent));
      _push(`</div><div class="group h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500" data-v-127334d9><div class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6" data-v-127334d9>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:cloud-upload",
        class: "text-cyan-400 w-6 h-6"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3" data-v-127334d9>Real-time Uploads</h3><p class="text-zinc-400 text-sm leading-relaxed" data-v-127334d9> Experience seamless image and document uploads with immediate cloud synchronization and processing. </p></div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-127334d9"]]);

export { demo as default };
//# sourceMappingURL=demo-D4R7tdKL.mjs.map
