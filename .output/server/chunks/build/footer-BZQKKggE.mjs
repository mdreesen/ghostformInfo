import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-32 px-6 text-center border-t border-white/5" }, _attrs))}><h2 class="text-5xl font-black mb-8">Manifest your leads. Instantly.</h2><button class="px-12 py-6 bg-white text-black font-black rounded-3xl text-xl hover:scale-110 transition-transform"> Get GhostForm Now </button><div class="flex items-center justify-center gap-2 text-zinc-500 text-[10px] uppercase tracking-widest mt-4"><span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span></span> Engine Status: Spectral &amp; Active </div><div class="mt-12 text-zinc-600 font-mono text-xs uppercase tracking-[0.3em]"> Designed for High-Performance Teams © 2026 </div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "BaseFooter" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=footer-BZQKKggE.mjs.map
