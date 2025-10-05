import { c as create_ssr_component, v as validate_component, e as each, d as escape, b as add_attribute } from "../../../chunks/ssr.js";
import { S as SectionHeader } from "../../../chunks/SectionHeader.js";
const css = {
  code: ".card-wrapper.svelte-1npvfvt.svelte-1npvfvt{display:flex;flex-wrap:wrap}.card-wrapper.svelte-1npvfvt .card.svelte-1npvfvt{width:31%;text-align:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);background:#fff;margin:10px;box-sizing:border-box;padding:10px;position:relative}.card-wrapper.svelte-1npvfvt .card img.svelte-1npvfvt{max-width:100%;max-height:100%}.card-wrapper.svelte-1npvfvt .card .caption.svelte-1npvfvt{position:absolute;bottom:0px;left:0px;width:100%;padding:10px;box-sizing:border-box;background:white;color:#008073;font-weight:bold}@media(max-width: 425px){.card-wrapper.svelte-1npvfvt .card.svelte-1npvfvt{width:100%}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport SectionHeader from '../../lib/components/SectionHeader.svelte';\\n\\tconst title = 'Awards and Certifications';\\n\\tconst awards_data = [\\n\\t\\t{ link: 'ai_for_everyone.png', alt: 'AI for everyone', caption: 'Gained insights in the basics of artificial intelligence and machine learning'},\\n\\t\\t{ link: 'data_science_R.jpeg', alt: 'Data Science in R', caption: 'A deep dive into the data engineering aspect of machine learning using R'},\\n\\t\\t{ link: 'udacity_ml.png', alt: 'Udacity ML Project', caption: 'Graduation certificate for the 3 months nanodegree program with udacity'},\\n\\t\\t{ link: 'homelane.jpg', alt: 'Homelane Young Gun', caption: 'Awarded for being the top performer amongst the new joinees in the company'}\\n\\t]\\n<\/script>\\n<style lang=\\"scss\\">.card-wrapper {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n.card-wrapper .card {\\n  width: 31%;\\n  text-align: center;\\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\\n  background: #fff;\\n  margin: 10px;\\n  box-sizing: border-box;\\n  padding: 10px;\\n  position: relative;\\n}\\n.card-wrapper .card img {\\n  max-width: 100%;\\n  max-height: 100%;\\n}\\n.card-wrapper .card .caption {\\n  position: absolute;\\n  bottom: 0px;\\n  left: 0px;\\n  width: 100%;\\n  padding: 10px;\\n  box-sizing: border-box;\\n  background: white;\\n  color: #008073;\\n  font-weight: bold;\\n}\\n@media (max-width: 425px) {\\n  .card-wrapper .card {\\n    width: 100%;\\n  }\\n}</style>\\n\\n<svelte:head>\\n\\t<title>{title}</title>\\n</svelte:head>\\n\\n<SectionHeader title={title}/>\\n<section>\\n\\t<div class=\\"card-wrapper\\">\\n\\t\\t{#each awards_data as award}\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<img src={award.link} alt={award.alt} />\\n\\t\\t\\t\\t<div class=\\"caption\\">{award.caption}</div>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n</section>"],"names":[],"mappings":"AAUmB,2CAAc,CAC/B,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IACb,CACA,4BAAa,CAAC,oBAAM,CAClB,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC7E,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QACZ,CACA,4BAAa,CAAC,KAAK,CAAC,kBAAI,CACtB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACd,CACA,4BAAa,CAAC,KAAK,CAAC,uBAAS,CAC3B,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,GAAG,CACX,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,IACf,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,4BAAa,CAAC,oBAAM,CAClB,KAAK,CAAE,IACT,CACF"}`
};
const title = "Awards and Certifications";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const awards_data = [
    {
      link: "ai_for_everyone.png",
      alt: "AI for everyone",
      caption: "Gained insights in the basics of artificial intelligence and machine learning"
    },
    {
      link: "data_science_R.jpeg",
      alt: "Data Science in R",
      caption: "A deep dive into the data engineering aspect of machine learning using R"
    },
    {
      link: "udacity_ml.png",
      alt: "Udacity ML Project",
      caption: "Graduation certificate for the 3 months nanodegree program with udacity"
    },
    {
      link: "homelane.jpg",
      alt: "Homelane Young Gun",
      caption: "Awarded for being the top performer amongst the new joinees in the company"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""} ${validate_component(SectionHeader, "SectionHeader").$$render($$result, { title }, {}, {})} <section><div class="card-wrapper svelte-1npvfvt">${each(awards_data, (award) => {
    return `<div class="card svelte-1npvfvt"><img${add_attribute("src", award.link, 0)}${add_attribute("alt", award.alt, 0)} class="svelte-1npvfvt"> <div class="caption svelte-1npvfvt">${escape(award.caption)}</div> </div>`;
  })}</div></section>`;
});
export {
  Page as default
};
