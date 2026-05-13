import { _ as __nuxt_component_0 } from "./Base-nVsy7JGX.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GhostForm",
  __ssrInlineRender: true,
  props: {
    category: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeaderBase = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative group max-w-md mx-auto" }, _attrs))} data-v-62d16c72><div class="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" data-v-62d16c72></div><div class="relative bg-[#0d0d0d] rounded-[2.5rem] overflow-hidden border border-white/10" data-v-62d16c72><div class="absolute inset-0 pointer-events-none opacity-20" data-v-62d16c72><div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500 rounded-full blur-[80px] animate-pulse" data-v-62d16c72></div><div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[80px] animate-pulse" style="${ssrRenderStyle({ "animation-delay": "1s" })}" data-v-62d16c72></div></div>`);
      if (!__props.category && !__props.company && !__props.email) {
        _push(`<div data-v-62d16c72>`);
        _push(ssrRenderComponent(_component_baseHeaderBase, {
          class: "py-8 flex content-center justify-center",
          text: "The category, company name, and email are needed."
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<iframe${ssrRenderAttr("src", `https://ghostform-zeta.vercel.app/?category=${props.category}&company_name=${props.company}&company_email=${props.email}&background_color=0f0b0b&font_color=FFFFFF`)} style="${ssrRenderStyle({ "width": "100%", "height": "500px", "border": "none", "background": "transparent", "border-radius": "20px" })}" allowtransparency="true" scrolling="no" data-v-62d16c72></iframe>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/GhostForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-62d16c72"]]), { __name: "BaseGhostForm" });
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=GhostForm-DmnN4hqK.js.map
