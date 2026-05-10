import { i as inputVarient, _ as __nuxt_component_0 } from './varients-BuwxFdnl.mjs';
import { _ as __nuxt_component_1 } from './ButtonSubmit-DXjXto94.mjs';
import { b as useUserSession, _ as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, reactive, ref, resolveDirective, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrGetDirectiveProps, ssrRenderComponent } from 'vue/server-renderer';
import { u as useToast } from './useToast-CxOurBVI.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signup",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    const credentials = reactive({
      organization: "",
      category: "",
      email: "",
      password: "",
      confirm_password: "",
      privacy_policy: false
    });
    const isLoading = ref(false);
    ref("");
    useUserSession();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseLabel = __nuxt_component_0;
      const _component_baseButtonSubmit = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center py-20 relative overflow-hidden" }, _attrs))} data-v-1ad59d0c><main class="w-full max-w-120 z-10" data-v-1ad59d0c><div class="backdrop-blur-2xl bg-white/2 border border-white/8 rounded-[2.5rem] p-10 shadow-2xl" data-v-1ad59d0c><header class="mb-10" data-v-1ad59d0c><div class="flex items-center gap-3 mb-6" data-v-1ad59d0c><div class="w-10 h-10 rounded-xl bg-linear-to-br from-[#30cf43] to-[#15a327] flex items-center justify-center shadow-[0_0_20px_rgba(48,207,67,0.3)]" data-v-1ad59d0c><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-1ad59d0c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" data-v-1ad59d0c></path></svg></div><h1 class="text-2xl font-bold tracking-tight" data-v-1ad59d0c>Initialize Account</h1></div><p class="text-zinc-400 text-sm italic-none" data-v-1ad59d0c>Join the network of high-velocity intelligence.</p></header><div class="space-y-6" data-v-1ad59d0c><form class="space-y-6" data-v-1ad59d0c><div class="space-y-4" data-v-1ad59d0c><div data-v-1ad59d0c><label class="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1 mb-2 block" data-v-1ad59d0c>Organization Name</label><input${ssrRenderAttr("value", unref(credentials).organization)} type="text" placeholder="e.g. Company name" required class="w-full bg-white/3 border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-700 text-ellipsis" data-v-1ad59d0c></div><div data-v-1ad59d0c><label class="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1 mb-2 block" data-v-1ad59d0c>Primary Category</label><select class="w-full bg-white/3 border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-700 text-ellipsis" data-v-1ad59d0c><option value="realtor" data-v-1ad59d0c${ssrIncludeBooleanAttr(Array.isArray(unref(credentials).category) ? ssrLooseContain(unref(credentials).category, "realtor") : ssrLooseEqual(unref(credentials).category, "realtor")) ? " selected" : ""}>Realtor</option><option value="construction" data-v-1ad59d0c${ssrIncludeBooleanAttr(Array.isArray(unref(credentials).category) ? ssrLooseContain(unref(credentials).category, "construction") : ssrLooseEqual(unref(credentials).category, "construction")) ? " selected" : ""}>Construction</option></select></div></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-1ad59d0c>`);
      _push(ssrRenderComponent(_component_baseLabel, { text: "Email" }, null, _parent));
      _push(`<input id="email" type="email"${ssrRenderAttr("value", unref(credentials).email)} placeholder="Email" required class="w-full bg-white/3 border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-700 text-ellipsis" data-v-1ad59d0c></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-1ad59d0c>`);
      _push(ssrRenderComponent(_component_baseLabel, { text: "Password" }, null, _parent));
      _push(`<input id="password" type="password"${ssrRenderAttr("value", unref(credentials).password)} placeholder="Password" required class="w-full bg-white/3 border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-700 text-ellipsis" data-v-1ad59d0c></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() }))} data-v-1ad59d0c>`);
      _push(ssrRenderComponent(_component_baseLabel, { text: "Confirm password" }, null, _parent));
      _push(`<input id="confirm_password" type="password"${ssrRenderAttr("value", unref(credentials).confirm_password)} placeholder="Password" required class="w-full bg-white/3 border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-700 text-ellipsis" data-v-1ad59d0c></div><div${ssrRenderAttrs(mergeProps({ class: "flex items-center space-x-2" }, ssrGetDirectiveProps(_ctx, _directive_motion, { ...("inputVarient" in _ctx ? _ctx.inputVarient : unref(inputVarient))() })))} data-v-1ad59d0c><label class="flex items-start gap-3 cursor-pointer group mt-4" data-v-1ad59d0c><div class="relative flex items-center" data-v-1ad59d0c><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(credentials).privacy_policy) ? ssrLooseContain(unref(credentials).privacy_policy, null) : unref(credentials).privacy_policy) ? " checked" : ""} class="sr-only peer" required data-v-1ad59d0c><div class="w-5 h-5 border border-white/20 rounded-md peer-checked:bg-[#30cf43] peer-checked:border-[#30cf43] transition-all" data-v-1ad59d0c></div><svg class="absolute w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform left-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-1ad59d0c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" data-v-1ad59d0c></path></svg></div><span class="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors leading-snug" data-v-1ad59d0c> I accept the data processing protocols and AI analysis terms. </span></label></div>`);
      _push(ssrRenderComponent(_component_baseButtonSubmit, {
        text: "Save",
        isLoading: unref(isLoading)
      }, null, _parent));
      _push(`</form><p class="text-center text-xs text-zinc-500" data-v-1ad59d0c> Already have a node? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-cyan-400 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Access Login `);
          } else {
            return [
              createTextVNode("Access Login ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(authentication)/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ad59d0c"]]);

export { signup as default };
//# sourceMappingURL=signup-B1lax7Q0.mjs.map
