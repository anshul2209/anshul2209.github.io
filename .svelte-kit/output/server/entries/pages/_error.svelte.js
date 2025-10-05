import { c as create_ssr_component, g as subscribe, d as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const css = {
  code: "h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script>\\n\\timport { page } from '$app/stores';\\n\\timport { dev } from '$app/environment';\\n\\n\\t$: status = $page.status;\\n\\t$: error = $page.error;\\n<\/script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error?.message || 'An error occurred'}</p>\\n\\n{#if dev && error?.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n"],"names":[],"mappings":"AASC,gBAAE,CAAE,eAAE,CACL,MAAM,CAAE,CAAC,CAAC,IACX,CAEA,gBAAG,CACF,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CACnB,CAEA,eAAE,CACD,MAAM,CAAE,GAAG,CAAC,IACb,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,gBAAG,CACF,SAAS,CAAE,GACZ,CACD"}`
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let status;
  let error;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  status = $page.status;
  error = $page.error;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1o9r2ue_START -->${$$result.title = `<title>${escape(status)}</title>`, ""}<!-- HEAD_svelte-1o9r2ue_END -->`, ""} <h1 class="svelte-8od9u6">${escape(status)}</h1> <p class="svelte-8od9u6">${escape(error?.message || "An error occurred")}</p> ${``}`;
});
export {
  Error as default
};
