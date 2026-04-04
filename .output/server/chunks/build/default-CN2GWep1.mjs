import { b as useRoute, u as useHead, _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, ref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "nav",
  __ssrInlineRender: true,
  setup(__props) {
    const isScrolled = ref(false);
    const isMobileMenuOpen = ref(false);
    const navLinks = [
      { name: "Main", href: "/" },
      { name: "Demo", href: "/demo" }
      // { name: 'How it Works', href: '#how' },
      // { name: 'Pricing', href: '#pricing' },
      // { name: 'Docs', href: 'https://github.com/your-repo' },
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 w-full z-100 transition-all duration-300 border-b",
          isScrolled.value ? "bg-black/60 backdrop-blur-xl border-white/10 py-3" : "bg-transparent border-transparent py-5"
        ]
      }, _attrs))}><div class="max-w-7xl mx-auto px-6 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-10 h-10 flex items-center justify-center"${_scopeId}><div class="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full group-hover:bg-cyan-500/40 transition-all"${_scopeId}></div><div class="relative w-8 h-8 bg-linear-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform"${_scopeId}><span class="text-white font-black text-lg"${_scopeId}>G</span></div></div><span class="text-xl font-black tracking-tighter text-white"${_scopeId}>GhostForm</span>`);
          } else {
            return [
              createVNode("div", { class: "relative w-10 h-10 flex items-center justify-center" }, [
                createVNode("div", { class: "absolute inset-0 bg-cyan-500/20 blur-lg rounded-full group-hover:bg-cyan-500/40 transition-all" }),
                createVNode("div", { class: "relative w-8 h-8 bg-linear-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform" }, [
                  createVNode("span", { class: "text-white font-black text-lg" }, "G")
                ])
              ]),
              createVNode("span", { class: "text-xl font-black tracking-tighter text-white" }, "GhostForm")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center gap-8"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors">${ssrInterpolate(link.name)}</a>`);
      });
      _push(`<!--]--></div><div class="flex items-center gap-4"><button class="md:hidden text-zinc-400 hover:text-white transition-colors">`);
      if (!isMobileMenuOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`);
      }
      _push(`</button></div></div>`);
      if (isMobileMenuOpen.value) {
        _push(`<div class="absolute top-full left-0 w-full bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl"><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(`<a${ssrRenderAttr("href", link.href)} class="text-lg font-bold text-zinc-300 hover:text-cyan-400">${ssrInterpolate(link.name)}</a>`);
        });
        _push(`<!--]--><button class="w-full py-4 bg-white text-black font-black rounded-2xl"> Get Started — Free </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/nav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "BaseNav" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useHead({
      meta: [{ property: "og:title", content: `Ascend - ${route.meta.title}` }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseNav = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "bg-[#020203] text-zinc-100 selection:bg-cyan-500/30 font-sans" }, _attrs))}><div class="fixed inset-0 pointer-events-none"><div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full"></div><div class="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div></div>`);
      _push(ssrRenderComponent(_component_baseNav, null, null, _parent));
      _push(`<div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CN2GWep1.mjs.map
