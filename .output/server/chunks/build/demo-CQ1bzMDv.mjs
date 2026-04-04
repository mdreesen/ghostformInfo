import { a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative group max-w-md mx-auto" }, _attrs))} data-v-54e664a8><div class="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" data-v-54e664a8></div><div class="relative bg-[#0d0d0d] rounded-[2.5rem] overflow-hidden border border-white/10" data-v-54e664a8><div class="absolute inset-0 pointer-events-none opacity-20" data-v-54e664a8><div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500 rounded-full blur-[80px] animate-pulse" data-v-54e664a8></div><div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[80px] animate-pulse" style="${ssrRenderStyle({ "animation-delay": "1s" })}" data-v-54e664a8></div></div><iframe src="https://ghostform-zeta.vercel.app/?category=construction&amp;company_name=White+Raven+Development&amp;company_email=whiteravendev90@gmail.com&amp;background_color=252525&amp;font_color=FFFFFF" style="${ssrRenderStyle({ "width": "100%", "height": "500px", "border": "none", "background": "transparent", "border-radius": "20px" })}" allowtransparency="true" scrolling="no" data-v-54e664a8></iframe></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/demo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-54e664a8"]]), { __name: "AppDemo" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "demo",
  __ssrInlineRender: true,
  setup(__props) {
    const step = ref(1);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      const _component_appDemo = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))} data-v-b269157d><header class="text-center py-16 px-4" data-v-b269157d><h1 class="text-5xl font-black my-4" data-v-b269157d>Demo</h1><p class="text-zinc-400 max-w-2xl mx-auto leading-relaxed" data-v-b269157d> Welcome to the GhostForm Interactive Demo! </p><ol class="mt-8 flex flex-col items-center gap-2 text-sm text-zinc-500" data-v-b269157d><li class="${ssrRenderClass({ "text-cyan-400": unref(step) === 1 })}" data-v-b269157d>1. Tell us your need</li><li class="${ssrRenderClass({ "text-cyan-400": unref(step) === 2 })}" data-v-b269157d>2. Upload your image</li><li class="${ssrRenderClass({ "text-cyan-400": unref(step) === 3 })}" data-v-b269157d>3. Add final details</li></ol></header><main class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pb-24" data-v-b269157d><div class="group h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500" data-v-b269157d><div class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6" data-v-b269157d>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shield-check",
        class: "text-cyan-400 w-6 h-6"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3" data-v-b269157d>Secure Data Collection</h3><p class="text-zinc-400 text-sm leading-relaxed" data-v-b269157d> Your data is protected with industry-standard encryption, ensuring complete security and privacy at every step. </p></div><div class="relative group" data-v-b269157d>`);
      _push(ssrRenderComponent(_component_appDemo, null, null, _parent));
      _push(`</div><div class="group h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500" data-v-b269157d><div class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6" data-v-b269157d>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:cloud-upload",
        class: "text-cyan-400 w-6 h-6"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3" data-v-b269157d>Real-time Uploads</h3><p class="text-zinc-400 text-sm leading-relaxed" data-v-b269157d> Experience seamless image and document uploads with immediate cloud synchronization and processing. </p></div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b269157d"]]);

export { demo as default };
//# sourceMappingURL=demo-CQ1bzMDv.mjs.map
