import { c as create_ssr_component, d as escape } from "./ssr.js";
const css = {
  code: "header.svelte-1339wt0{background-color:#008073;color:white;font-size:32px;padding:16px}@media(max-width: 425px){header.svelte-1339wt0{display:none}}",
  map: '{"version":3,"file":"SectionHeader.svelte","sources":["SectionHeader.svelte"],"sourcesContent":["<script>\\n\\texport let title;\\n<\/script>\\n<style>\\n    header{\\n\\t\\tbackground-color: #008073;\\n\\t\\tcolor: white;\\n\\t\\tfont-size: 32px;\\n\\t\\tpadding: 16px;\\n    }\\n    @media (max-width: 425px){\\n\\t\\theader{\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}\\n</style>\\n<header>{title}</header>\\n"],"names":[],"mappings":"AAII,qBAAM,CACR,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IACP,CACA,MAAO,YAAY,KAAK,CAAC,CAC3B,qBAAM,CACL,OAAO,CAAE,IACV,CACD"}'
};
const SectionHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  $$result.css.add(css);
  return `<header class="svelte-1339wt0">${escape(title)}</header>`;
});
export {
  SectionHeader as S
};
