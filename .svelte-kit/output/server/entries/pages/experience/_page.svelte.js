import { c as create_ssr_component, v as validate_component, e as each, f as escape } from "../../../chunks/ssr.js";
import { S as SectionHeader } from "../../../chunks/SectionHeader.js";
const css = {
  code: '@charset "UTF-8";.experience-container.svelte-11qhmj0.svelte-11qhmj0{max-width:var(--max-width-lg);margin:0 auto;padding:var(--space-8)}.experience-item.svelte-11qhmj0.svelte-11qhmj0{background:var(--color-white);border-radius:var(--border-radius-lg);padding:var(--space-6);margin-bottom:var(--space-6);box-shadow:var(--shadow-sm);border-left:4px solid var(--color-primary);transition:all var(--transition-normal)}.experience-item.svelte-11qhmj0.svelte-11qhmj0:hover{box-shadow:var(--shadow-md);transform:translateY(-2px)}.company-header.svelte-11qhmj0.svelte-11qhmj0{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:var(--space-4);flex-wrap:wrap;gap:var(--space-2)}.company-info.svelte-11qhmj0 h3.svelte-11qhmj0{font-size:var(--font-size-xl);font-weight:var(--font-weight-bold);color:var(--color-gray-900);margin:0 0 var(--space-1) 0}.company-info.svelte-11qhmj0 .position.svelte-11qhmj0{font-size:var(--font-size-lg);color:var(--color-primary);font-weight:var(--font-weight-medium);margin:0}.period.svelte-11qhmj0.svelte-11qhmj0{background:var(--color-gray-100);color:var(--color-gray-700);padding:var(--space-2) var(--space-3);border-radius:var(--border-radius-md);font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);white-space:nowrap}.achievements.svelte-11qhmj0.svelte-11qhmj0{list-style:none;padding:0;margin:0}.achievements.svelte-11qhmj0 li.svelte-11qhmj0{position:relative;padding-left:var(--space-6);margin-bottom:var(--space-3);color:var(--color-gray-700);line-height:1.6}.achievements.svelte-11qhmj0 li.svelte-11qhmj0::before{content:"•";position:absolute;left:0;color:var(--color-primary);font-weight:bold;font-size:var(--font-size-lg)}.achievements.svelte-11qhmj0 li.svelte-11qhmj0:last-child{margin-bottom:0}@media(max-width: 768px){.experience-container.svelte-11qhmj0.svelte-11qhmj0{padding:var(--space-4)}.company-header.svelte-11qhmj0.svelte-11qhmj0{flex-direction:column;align-items:flex-start}.period.svelte-11qhmj0.svelte-11qhmj0{align-self:flex-start}}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport SectionHeader from '../../lib/components/SectionHeader.svelte';\\n\\t\\n\\tconst title = 'Professional Experience';\\n\\t\\n\\tconst experience = [\\n\\t\\t{\\n\\t\\t\\tcompany: 'OLX India',\\n\\t\\t\\tposition: 'Technical Architect',\\n\\t\\t\\tperiod: 'Apr 2024 – Present',\\n\\t\\t\\tachievements: [\\n\\t\\t\\t\\t'Optimized web architecture, reducing Akamai cost by 75% and Node.js pods usage by 30%',\\n\\t\\t\\t\\t'Enhanced Web Vitals (CLS 100%, LCP 30% faster, page load time 7s → 4.5s) for better UX & SEO',\\n\\t\\t\\t\\t'Led SEO initiatives, boosting organic traffic by 30%, clicks by 160%, and impressions by 50%',\\n\\t\\t\\t\\t'Built deep linking system handling 50K+ requests/day, lowering app acquisition costs',\\n\\t\\t\\t\\t'Enhanced developer productivity with Storybook, Trunk-Based Development, cutting merge time by 50%'\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tcompany: 'OLX Group',\\n\\t\\t\\tposition: 'Lead Engineer',\\n\\t\\t\\tperiod: 'Apr 2021 – Apr 2024',\\n\\t\\t\\tachievements: [\\n\\t\\t\\t\\t'Architected a super app for car dealers, focusing on scalability, modularization, and UX optimization',\\n\\t\\t\\t\\t'Led technology modernization by refining the tech stack for performance, reliability, and scalability'\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tcompany: 'OLX Group',\\n\\t\\t\\tposition: 'Senior Software Engineer',\\n\\t\\t\\tperiod: 'Oct 2019 – Apr 2021',\\n\\t\\t\\tachievements: [\\n\\t\\t\\t\\t'Developed and scaled an adsales platform, enabling seamless integration with ad providers'\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tcompany: 'OLX Group',\\n\\t\\t\\tposition: 'Frontend Developer',\\n\\t\\t\\tperiod: 'May 2018 – Oct 2019',\\n\\t\\t\\tachievements: [\\n\\t\\t\\t\\t'Developed UI and product features for monetization services, driving revenue growth',\\n\\t\\t\\t\\t'Led Microfrontends PoC with Web Components, assessing modular feasibility'\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tcompany: 'FabHotels',\\n\\t\\t\\tposition: 'Frontend Developer',\\n\\t\\t\\tperiod: 'Dec 2017 – May 2018',\\n\\t\\t\\tachievements: [\\n\\t\\t\\t\\t'Built mobile web features like the Referral Program and implemented CI/CD, enhancing deployment speed'\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tcompany: 'Homelane',\\n\\t\\t\\tposition: 'Software Engineer',\\n\\t\\t\\tperiod: 'Jun 2015 – Dec 2017',\\n\\t\\t\\tachievements: [\\n\\t\\t\\t\\t'Developed web apps, CRM, and REST APIs, optimizing data sync for improved reliability and efficiency'\\n\\t\\t\\t]\\n\\t\\t}\\n\\t];\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{title}</title>\\n</svelte:head>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n.experience-container {\\n  max-width: var(--max-width-lg);\\n  margin: 0 auto;\\n  padding: var(--space-8);\\n}\\n\\n.experience-item {\\n  background: var(--color-white);\\n  border-radius: var(--border-radius-lg);\\n  padding: var(--space-6);\\n  margin-bottom: var(--space-6);\\n  box-shadow: var(--shadow-sm);\\n  border-left: 4px solid var(--color-primary);\\n  transition: all var(--transition-normal);\\n}\\n\\n.experience-item:hover {\\n  box-shadow: var(--shadow-md);\\n  transform: translateY(-2px);\\n}\\n\\n.company-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n  margin-bottom: var(--space-4);\\n  flex-wrap: wrap;\\n  gap: var(--space-2);\\n}\\n\\n.company-info h3 {\\n  font-size: var(--font-size-xl);\\n  font-weight: var(--font-weight-bold);\\n  color: var(--color-gray-900);\\n  margin: 0 0 var(--space-1) 0;\\n}\\n\\n.company-info .position {\\n  font-size: var(--font-size-lg);\\n  color: var(--color-primary);\\n  font-weight: var(--font-weight-medium);\\n  margin: 0;\\n}\\n\\n.period {\\n  background: var(--color-gray-100);\\n  color: var(--color-gray-700);\\n  padding: var(--space-2) var(--space-3);\\n  border-radius: var(--border-radius-md);\\n  font-size: var(--font-size-sm);\\n  font-weight: var(--font-weight-medium);\\n  white-space: nowrap;\\n}\\n\\n.achievements {\\n  list-style: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.achievements li {\\n  position: relative;\\n  padding-left: var(--space-6);\\n  margin-bottom: var(--space-3);\\n  color: var(--color-gray-700);\\n  line-height: 1.6;\\n}\\n\\n.achievements li::before {\\n  content: \\"•\\";\\n  position: absolute;\\n  left: 0;\\n  color: var(--color-primary);\\n  font-weight: bold;\\n  font-size: var(--font-size-lg);\\n}\\n\\n.achievements li:last-child {\\n  margin-bottom: 0;\\n}\\n\\n@media (max-width: 768px) {\\n  .experience-container {\\n    padding: var(--space-4);\\n  }\\n  .company-header {\\n    flex-direction: column;\\n    align-items: flex-start;\\n  }\\n  .period {\\n    align-self: flex-start;\\n  }\\n}</style>\\n\\n<SectionHeader title={title} />\\n\\n<section class=\\"experience-container\\">\\n\\t{#each experience as job}\\n\\t\\t<div class=\\"experience-item\\">\\n\\t\\t\\t<div class=\\"company-header\\">\\n\\t\\t\\t\\t<div class=\\"company-info\\">\\n\\t\\t\\t\\t\\t<h3>{job.company}</h3>\\n\\t\\t\\t\\t\\t<p class=\\"position\\">{job.position}</p>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<span class=\\"period\\">{job.period}</span>\\n\\t\\t\\t</div>\\n\\t\\t\\t<ul class=\\"achievements\\">\\n\\t\\t\\t\\t{#each job.achievements as achievement}\\n\\t\\t\\t\\t\\t<li>{achievement}</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t</div>\\n\\t{/each}\\n</section>"],"names":[],"mappings":"AAmEmB,SAAS,OAAO,CACnC,mDAAsB,CACpB,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,SAAS,CACxB,CAEA,8CAAiB,CACf,UAAU,CAAE,IAAI,aAAa,CAAC,CAC9B,aAAa,CAAE,IAAI,kBAAkB,CAAC,CACtC,OAAO,CAAE,IAAI,SAAS,CAAC,CACvB,aAAa,CAAE,IAAI,SAAS,CAAC,CAC7B,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,eAAe,CAAC,CAC3C,UAAU,CAAE,GAAG,CAAC,IAAI,mBAAmB,CACzC,CAEA,8CAAgB,MAAO,CACrB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,SAAS,CAAE,WAAW,IAAI,CAC5B,CAEA,6CAAgB,CACd,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,UAAU,CACvB,aAAa,CAAE,IAAI,SAAS,CAAC,CAC7B,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,IAAI,SAAS,CACpB,CAEA,4BAAa,CAAC,iBAAG,CACf,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,WAAW,CAAE,IAAI,kBAAkB,CAAC,CACpC,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,SAAS,CAAC,CAAC,CAC7B,CAEA,4BAAa,CAAC,wBAAU,CACtB,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,WAAW,CAAE,IAAI,oBAAoB,CAAC,CACtC,MAAM,CAAE,CACV,CAEA,qCAAQ,CACN,UAAU,CAAE,IAAI,gBAAgB,CAAC,CACjC,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,OAAO,CAAE,IAAI,SAAS,CAAC,CAAC,IAAI,SAAS,CAAC,CACtC,aAAa,CAAE,IAAI,kBAAkB,CAAC,CACtC,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,WAAW,CAAE,IAAI,oBAAoB,CAAC,CACtC,WAAW,CAAE,MACf,CAEA,2CAAc,CACZ,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACV,CAEA,4BAAa,CAAC,iBAAG,CACf,QAAQ,CAAE,QAAQ,CAClB,YAAY,CAAE,IAAI,SAAS,CAAC,CAC5B,aAAa,CAAE,IAAI,SAAS,CAAC,CAC7B,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,WAAW,CAAE,GACf,CAEA,4BAAa,CAAC,iBAAE,QAAS,CACvB,OAAO,CAAE,GAAG,CACZ,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,IAAI,cAAc,CAC/B,CAEA,4BAAa,CAAC,iBAAE,WAAY,CAC1B,aAAa,CAAE,CACjB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,mDAAsB,CACpB,OAAO,CAAE,IAAI,SAAS,CACxB,CACA,6CAAgB,CACd,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,UACf,CACA,qCAAQ,CACN,UAAU,CAAE,UACd,CACF"}`
};
const title = "Professional Experience";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const experience = [
    {
      company: "OLX India",
      position: "Technical Architect",
      period: "Apr 2024 – Present",
      achievements: [
        "Optimized web architecture, reducing Akamai cost by 75% and Node.js pods usage by 30%",
        "Enhanced Web Vitals (CLS 100%, LCP 30% faster, page load time 7s → 4.5s) for better UX & SEO",
        "Led SEO initiatives, boosting organic traffic by 30%, clicks by 160%, and impressions by 50%",
        "Built deep linking system handling 50K+ requests/day, lowering app acquisition costs",
        "Enhanced developer productivity with Storybook, Trunk-Based Development, cutting merge time by 50%"
      ]
    },
    {
      company: "OLX Group",
      position: "Lead Engineer",
      period: "Apr 2021 – Apr 2024",
      achievements: [
        "Architected a super app for car dealers, focusing on scalability, modularization, and UX optimization",
        "Led technology modernization by refining the tech stack for performance, reliability, and scalability"
      ]
    },
    {
      company: "OLX Group",
      position: "Senior Software Engineer",
      period: "Oct 2019 – Apr 2021",
      achievements: [
        "Developed and scaled an adsales platform, enabling seamless integration with ad providers"
      ]
    },
    {
      company: "OLX Group",
      position: "Frontend Developer",
      period: "May 2018 – Oct 2019",
      achievements: [
        "Developed UI and product features for monetization services, driving revenue growth",
        "Led Microfrontends PoC with Web Components, assessing modular feasibility"
      ]
    },
    {
      company: "FabHotels",
      position: "Frontend Developer",
      period: "Dec 2017 – May 2018",
      achievements: [
        "Built mobile web features like the Referral Program and implemented CI/CD, enhancing deployment speed"
      ]
    },
    {
      company: "Homelane",
      position: "Software Engineer",
      period: "Jun 2015 – Dec 2017",
      achievements: [
        "Developed web apps, CRM, and REST APIs, optimizing data sync for improved reliability and efficiency"
      ]
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""}  ${validate_component(SectionHeader, "SectionHeader").$$render($$result, { title }, {}, {})} <section class="experience-container svelte-11qhmj0">${each(experience, (job) => {
    return `<div class="experience-item svelte-11qhmj0"><div class="company-header svelte-11qhmj0"><div class="company-info svelte-11qhmj0"><h3 class="svelte-11qhmj0">${escape(job.company)}</h3> <p class="position svelte-11qhmj0">${escape(job.position)}</p></div> <span class="period svelte-11qhmj0">${escape(job.period)}</span></div> <ul class="achievements svelte-11qhmj0">${each(job.achievements, (achievement) => {
      return `<li class="svelte-11qhmj0">${escape(achievement)}</li>`;
    })}</ul> </div>`;
  })}</section>`;
});
export {
  Page as default
};
