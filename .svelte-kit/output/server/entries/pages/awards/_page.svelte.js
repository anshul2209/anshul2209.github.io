import { c as create_ssr_component, v as validate_component, e as each, f as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { S as SectionHeader } from "../../../chunks/SectionHeader.js";
const css = {
  code: ".card-wrapper.svelte-144ihh1.svelte-144ihh1{display:flex;flex-wrap:wrap;background:var(--color-primary);min-height:100vh;padding:var(--space-8);justify-content:center}@media(max-width: 768px){.card-wrapper.svelte-144ihh1.svelte-144ihh1{padding:var(--space-4)}}.card-wrapper.svelte-144ihh1 .card.svelte-144ihh1{width:31%;text-align:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);background:var(--color-platinum);border:1px solid var(--color-gray-700);margin:10px;box-sizing:border-box;padding:10px;position:relative}@media(max-width: 768px){.card-wrapper.svelte-144ihh1 .card.svelte-144ihh1{width:48%;margin:5px}}.card-wrapper.svelte-144ihh1 .card img.svelte-144ihh1{max-width:100%;max-height:100%}.card-wrapper.svelte-144ihh1 .card .caption.svelte-144ihh1{position:absolute;bottom:0px;left:0px;width:100%;padding:10px;box-sizing:border-box;background:var(--color-primary-light);color:var(--color-white);font-weight:bold}@media(max-width: 425px){.card-wrapper.svelte-144ihh1 .card.svelte-144ihh1{width:100%}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport SectionHeader from '../../lib/components/SectionHeader.svelte';\\n\\tconst title = 'Awards and Certifications';\\n\\tconst awards_data = [\\n\\t\\t{ \\n\\t\\t\\tlink: 'udacity_ml.png', \\n\\t\\t\\talt: 'ML Nanodegree', \\n\\t\\t\\tcaption: 'Machine Learning Nanodegree program covering advanced ML concepts (Udacity, Jan 2020)'\\n\\t\\t},\\n\\t\\t{ \\n\\t\\t\\tlink: 'ai_for_everyone.png', \\n\\t\\t\\talt: 'AI for Everyone', \\n\\t\\t\\tcaption: 'Foundational course in artificial intelligence and machine learning principles'\\n\\t\\t},\\n\\t\\t{ \\n\\t\\t\\tlink: 'data_science_R.jpeg', \\n\\t\\t\\talt: 'Data Science in R', \\n\\t\\t\\tcaption: 'Advanced data science and statistical analysis using R programming'\\n\\t\\t},\\n\\t\\t{ \\n\\t\\t\\tlink: 'homelane.jpg', \\n\\t\\t\\talt: 'Homelane Young Gun', \\n\\t\\t\\tcaption: 'Awarded for being the top performer amongst new joinees in the company'\\n\\t\\t}\\n\\t]\\n<\/script>\\n<style lang=\\"scss\\">.card-wrapper {\\n  display: flex;\\n  flex-wrap: wrap;\\n  background: var(--color-primary);\\n  min-height: 100vh;\\n  padding: var(--space-8);\\n  justify-content: center;\\n}\\n\\n@media (max-width: 768px) {\\n  .card-wrapper {\\n    padding: var(--space-4);\\n  }\\n}\\n.card-wrapper .card {\\n  width: 31%;\\n  text-align: center;\\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\\n  background: var(--color-platinum);\\n  border: 1px solid var(--color-gray-700);\\n  margin: 10px;\\n  box-sizing: border-box;\\n  padding: 10px;\\n  position: relative;\\n}\\n\\n@media (max-width: 768px) {\\n  .card-wrapper .card {\\n    width: 48%;\\n    margin: 5px;\\n  }\\n}\\n.card-wrapper .card img {\\n  max-width: 100%;\\n  max-height: 100%;\\n}\\n\\n.card-wrapper .card .caption {\\n  position: absolute;\\n  bottom: 0px;\\n  left: 0px;\\n  width: 100%;\\n  padding: 10px;\\n  box-sizing: border-box;\\n  background: var(--color-primary-light);\\n  color: var(--color-white);\\n  font-weight: bold;\\n}\\n\\n@media (max-width: 425px) {\\n  .card-wrapper .card {\\n    width: 100%;\\n  }\\n}</style>\\n\\n<svelte:head>\\n\\t<title>{title}</title>\\n</svelte:head>\\n\\n<SectionHeader title={title}/>\\n<section>\\n\\t<div class=\\"card-wrapper\\">\\n\\t\\t{#each awards_data as award}\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<img src={award.link} alt={award.alt} />\\n\\t\\t\\t\\t<div class=\\"caption\\">{award.caption}</div>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n</section>"],"names":[],"mappings":"AA0BmB,2CAAc,CAC/B,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,SAAS,CAAC,CACvB,eAAe,CAAE,MACnB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,2CAAc,CACZ,OAAO,CAAE,IAAI,SAAS,CACxB,CACF,CACA,4BAAa,CAAC,oBAAM,CAClB,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC7E,UAAU,CAAE,IAAI,gBAAgB,CAAC,CACjC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,gBAAgB,CAAC,CACvC,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QACZ,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,4BAAa,CAAC,oBAAM,CAClB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GACV,CACF,CACA,4BAAa,CAAC,KAAK,CAAC,kBAAI,CACtB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACd,CAEA,4BAAa,CAAC,KAAK,CAAC,uBAAS,CAC3B,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,GAAG,CACX,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,IAAI,qBAAqB,CAAC,CACtC,KAAK,CAAE,IAAI,aAAa,CAAC,CACzB,WAAW,CAAE,IACf,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,4BAAa,CAAC,oBAAM,CAClB,KAAK,CAAE,IACT,CACF"}`
};
const title = "Awards and Certifications";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const awards_data = [
    {
      link: "udacity_ml.png",
      alt: "ML Nanodegree",
      caption: "Machine Learning Nanodegree program covering advanced ML concepts (Udacity, Jan 2020)"
    },
    {
      link: "ai_for_everyone.png",
      alt: "AI for Everyone",
      caption: "Foundational course in artificial intelligence and machine learning principles"
    },
    {
      link: "data_science_R.jpeg",
      alt: "Data Science in R",
      caption: "Advanced data science and statistical analysis using R programming"
    },
    {
      link: "homelane.jpg",
      alt: "Homelane Young Gun",
      caption: "Awarded for being the top performer amongst new joinees in the company"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""} ${validate_component(SectionHeader, "SectionHeader").$$render($$result, { title }, {}, {})} <section><div class="card-wrapper svelte-144ihh1">${each(awards_data, (award) => {
    return `<div class="card svelte-144ihh1"><img${add_attribute("src", award.link, 0)}${add_attribute("alt", award.alt, 0)} class="svelte-144ihh1"> <div class="caption svelte-144ihh1">${escape(award.caption)}</div> </div>`;
  })}</div></section>`;
});
export {
  Page as default
};
