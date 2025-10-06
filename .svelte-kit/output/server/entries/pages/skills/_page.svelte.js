import { c as create_ssr_component, f as escape, e as each, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { S as SectionHeader } from "../../../chunks/SectionHeader.js";
const css$1 = {
  code: ".tileWrapper.svelte-10et0mj.svelte-10et0mj{box-sizing:border-box}.tileWrapper.svelte-10et0mj .title.svelte-10et0mj{padding:var(--space-6);background:var(--gradient-primary);color:var(--color-white);font-size:var(--font-size-xl);font-weight:var(--font-weight-semibold);text-align:center;margin:0}.tileWrapper.svelte-10et0mj .imageSection.svelte-10et0mj{padding:var(--space-8);display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));gap:var(--space-6);justify-items:center}.tileWrapper.svelte-10et0mj .imageSection .imgWrapper.svelte-10et0mj{display:flex;flex-direction:column;align-items:center;gap:var(--space-2);padding:var(--space-4);border-radius:var(--border-radius-lg);transition:all var(--transition-normal);cursor:pointer}.tileWrapper.svelte-10et0mj .imageSection .imgWrapper.svelte-10et0mj:hover{background:var(--color-primary-light);transform:translateY(-2px)}.tileWrapper.svelte-10et0mj .imageSection .imgWrapper img.svelte-10et0mj{height:60px;width:60px;object-fit:contain;filter:grayscale(100%);transition:all var(--transition-normal)}.tileWrapper.svelte-10et0mj .imageSection .imgWrapper:hover img.svelte-10et0mj{filter:grayscale(0%);transform:scale(1.1)}.tileWrapper.svelte-10et0mj .imageSection .imgWrapper span.svelte-10et0mj{font-size:var(--font-size-sm);color:var(--color-gray-300);text-align:center;font-weight:var(--font-weight-medium)}",
  map: '{"version":3,"file":"SkillTile.svelte","sources":["SkillTile.svelte"],"sourcesContent":["<script>\\n    export let title;\\n    export let skills;\\n<\/script>\\n\\n<style lang=\\"scss\\">.tileWrapper {\\n  box-sizing: border-box;\\n}\\n\\n.tileWrapper .title {\\n  padding: var(--space-6);\\n  background: var(--gradient-primary);\\n  color: var(--color-white);\\n  font-size: var(--font-size-xl);\\n  font-weight: var(--font-weight-semibold);\\n  text-align: center;\\n  margin: 0;\\n}\\n\\n.tileWrapper .imageSection {\\n  padding: var(--space-8);\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\\n  gap: var(--space-6);\\n  justify-items: center;\\n}\\n\\n.tileWrapper .imageSection .imgWrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: var(--space-2);\\n  padding: var(--space-4);\\n  border-radius: var(--border-radius-lg);\\n  transition: all var(--transition-normal);\\n  cursor: pointer;\\n}\\n\\n.tileWrapper .imageSection .imgWrapper:hover {\\n  background: var(--color-primary-light);\\n  transform: translateY(-2px);\\n}\\n\\n.tileWrapper .imageSection .imgWrapper img {\\n  height: 60px;\\n  width: 60px;\\n  object-fit: contain;\\n  filter: grayscale(100%);\\n  transition: all var(--transition-normal);\\n}\\n\\n.tileWrapper .imageSection .imgWrapper:hover img {\\n  filter: grayscale(0%);\\n  transform: scale(1.1);\\n}\\n\\n.tileWrapper .imageSection .imgWrapper span {\\n  font-size: var(--font-size-sm);\\n  color: var(--color-gray-300);\\n  text-align: center;\\n  font-weight: var(--font-weight-medium);\\n}</style>\\n<div class=\\"tileWrapper\\">\\n    <h3 class=\\"title\\">{title}</h3>\\n    <div class=\\"imageSection\\">\\n        {#each skills as skill}\\n            <div id={skill.id} class=\\"imgWrapper\\">\\n                <img src={skill.imgSrc} alt={skill.alt}>\\n                <span>{skill.alt}</span>\\n            </div>\\n        {/each}\\n    </div>\\n</div>"],"names":[],"mappings":"AAKmB,0CAAa,CAC9B,UAAU,CAAE,UACd,CAEA,2BAAY,CAAC,qBAAO,CAClB,OAAO,CAAE,IAAI,SAAS,CAAC,CACvB,UAAU,CAAE,IAAI,kBAAkB,CAAC,CACnC,KAAK,CAAE,IAAI,aAAa,CAAC,CACzB,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,WAAW,CAAE,IAAI,sBAAsB,CAAC,CACxC,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,CACV,CAEA,2BAAY,CAAC,4BAAc,CACzB,OAAO,CAAE,IAAI,SAAS,CAAC,CACvB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,GAAG,CAAE,IAAI,SAAS,CAAC,CACnB,aAAa,CAAE,MACjB,CAEA,2BAAY,CAAC,aAAa,CAAC,0BAAY,CACrC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,SAAS,CAAC,CACnB,OAAO,CAAE,IAAI,SAAS,CAAC,CACvB,aAAa,CAAE,IAAI,kBAAkB,CAAC,CACtC,UAAU,CAAE,GAAG,CAAC,IAAI,mBAAmB,CAAC,CACxC,MAAM,CAAE,OACV,CAEA,2BAAY,CAAC,aAAa,CAAC,0BAAW,MAAO,CAC3C,UAAU,CAAE,IAAI,qBAAqB,CAAC,CACtC,SAAS,CAAE,WAAW,IAAI,CAC5B,CAEA,2BAAY,CAAC,aAAa,CAAC,WAAW,CAAC,kBAAI,CACzC,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,UAAU,IAAI,CAAC,CACvB,UAAU,CAAE,GAAG,CAAC,IAAI,mBAAmB,CACzC,CAEA,2BAAY,CAAC,aAAa,CAAC,WAAW,MAAM,CAAC,kBAAI,CAC/C,MAAM,CAAE,UAAU,EAAE,CAAC,CACrB,SAAS,CAAE,MAAM,GAAG,CACtB,CAEA,2BAAY,CAAC,aAAa,CAAC,WAAW,CAAC,mBAAK,CAC1C,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,IAAI,oBAAoB,CACvC"}'
};
const SkillTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 } = $$props;
  let { skills } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0) $$bindings.skills(skills);
  $$result.css.add(css$1);
  return `<div class="tileWrapper svelte-10et0mj"><h3 class="title svelte-10et0mj">${escape(title2)}</h3> <div class="imageSection svelte-10et0mj">${each(skills, (skill) => {
    return `<div${add_attribute("id", skill.id, 0)} class="imgWrapper svelte-10et0mj"><img${add_attribute("src", skill.imgSrc, 0)}${add_attribute("alt", skill.alt, 0)} class="svelte-10et0mj"> <span class="svelte-10et0mj">${escape(skill.alt)}</span> </div>`;
  })}</div></div>`;
});
const skillData = {
  web_development: {
    label: "Web Development",
    skills: [
      { imgSrc: "images/skills/reactLogo.png", alt: "ReactJS" },
      { imgSrc: "images/skills/vuejsLogo.png", alt: "VueJS" },
      { imgSrc: "images/skills/webpackLogo.png", alt: "WebPack" },
      { imgSrc: "images/skills/nodeJsLogo.png", alt: "Node.js" },
      { imgSrc: "images/skills/svelteSapper.png", alt: "Svelte" }
    ]
  },
  frontend: {
    label: "Frontend Technologies",
    skills: [
      { imgSrc: "images/skills/html5.png", alt: "HTML5" },
      { imgSrc: "images/skills/css3Logo.jpg", alt: "CSS3" },
      { imgSrc: "images/skills/bootstrap.jpg", alt: "Bootstrap" },
      { imgSrc: "images/skills/sass.png", alt: "Sass" },
      { imgSrc: "images/skills/jqueryLogo.gif", alt: "jQuery" }
    ]
  },
  ai_ml: {
    label: "AI & Machine Learning",
    skills: [
      { imgSrc: "images/skills/pythonLogo.jpeg", alt: "Python" },
      { imgSrc: "images/skills/Rlogo.png", alt: "R" },
      { imgSrc: "images/skills/JupyterLogo.png", alt: "Jupyter Notebook" },
      { imgSrc: "images/skills/SagemakerLogo.png", alt: "Sagemaker" }
    ]
  },
  tools: {
    label: "Tools & Platforms",
    skills: [
      { imgSrc: "images/skills/gitHubLogo.png", alt: "GitHub" },
      { imgSrc: "images/skills/herokuLogo.png", alt: "Heroku" }
    ]
  }
};
const css = {
  code: ".skills-container.svelte-b7y93n{padding:var(--space-16) 0;background:var(--color-primary);min-height:100vh}@media(max-width: 768px){.skills-container.svelte-b7y93n{padding:var(--space-8) 0}}.skills-grid.svelte-b7y93n{display:grid;grid-template-columns:repeat(auto-fit, minmax(400px, 1fr));gap:var(--space-8);max-width:var(--max-width-2xl);margin:0 auto;padding:0 var(--space-6)}@media(max-width: 768px){.skills-grid.svelte-b7y93n{grid-template-columns:1fr;padding:0 var(--space-4);gap:var(--space-6)}}@media(max-width: 480px){.skills-grid.svelte-b7y93n{grid-template-columns:1fr;padding:0 var(--space-3);gap:var(--space-4)}}.skill-tile.svelte-b7y93n{background:var(--color-platinum);border:1px solid var(--color-gray-700);border-radius:var(--border-radius-xl);box-shadow:var(--shadow-md);overflow:hidden;transition:all var(--transition-normal)}.skill-tile.svelte-b7y93n:hover{transform:translateY(-4px);box-shadow:0 20px 40px rgba(244, 42, 139, 0.2);border-color:var(--color-gold)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import SkillTile from '../../lib/components/SkillTile.svelte';\\n    import SectionHeader from '../../lib/components/SectionHeader.svelte';\\n    import { skillData } from '../../lib/data/skills.js';\\n    \\n    const title = 'Skills Details';\\n<\/script>\\n\\n<style lang=\\"scss\\">.skills-container {\\n  padding: var(--space-16) 0;\\n  background: var(--color-primary);\\n  min-height: 100vh;\\n}\\n\\n@media (max-width: 768px) {\\n  .skills-container {\\n    padding: var(--space-8) 0;\\n  }\\n}\\n.skills-grid {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\\n  gap: var(--space-8);\\n  max-width: var(--max-width-2xl);\\n  margin: 0 auto;\\n  padding: 0 var(--space-6);\\n}\\n\\n@media (max-width: 768px) {\\n  .skills-grid {\\n    grid-template-columns: 1fr;\\n    padding: 0 var(--space-4);\\n    gap: var(--space-6);\\n  }\\n}\\n@media (max-width: 480px) {\\n  .skills-grid {\\n    grid-template-columns: 1fr;\\n    padding: 0 var(--space-3);\\n    gap: var(--space-4);\\n  }\\n}\\n.skill-tile {\\n  background: var(--color-platinum);\\n  border: 1px solid var(--color-gray-700);\\n  border-radius: var(--border-radius-xl);\\n  box-shadow: var(--shadow-md);\\n  overflow: hidden;\\n  transition: all var(--transition-normal);\\n}\\n\\n.skill-tile:hover {\\n  transform: translateY(-4px);\\n  box-shadow: 0 20px 40px rgba(244, 42, 139, 0.2);\\n  border-color: var(--color-gold);\\n}</style>\\n\\n<svelte:head>\\n\\t<title>{title}</title>\\n</svelte:head>\\n\\n<SectionHeader title={title} />\\n<section class=\\"skills-container\\">\\n    <div class=\\"skills-grid\\">\\n        {#each Object.keys(skillData) as skillKey}\\n            <div class=\\"skill-tile\\">\\n                <SkillTile title={skillData[skillKey].label} skills={skillData[skillKey].skills}></SkillTile>\\n            </div>\\n        {/each}\\n    </div>\\n</section>"],"names":[],"mappings":"AAQmB,+BAAkB,CACnC,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,CAAC,CAC1B,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,UAAU,CAAE,KACd,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,+BAAkB,CAChB,OAAO,CAAE,IAAI,SAAS,CAAC,CAAC,CAC1B,CACF,CACA,0BAAa,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,GAAG,CAAE,IAAI,SAAS,CAAC,CACnB,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,CAAC,CAAC,IAAI,SAAS,CAC1B,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,0BAAa,CACX,qBAAqB,CAAE,GAAG,CAC1B,OAAO,CAAE,CAAC,CAAC,IAAI,SAAS,CAAC,CACzB,GAAG,CAAE,IAAI,SAAS,CACpB,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,0BAAa,CACX,qBAAqB,CAAE,GAAG,CAC1B,OAAO,CAAE,CAAC,CAAC,IAAI,SAAS,CAAC,CACzB,GAAG,CAAE,IAAI,SAAS,CACpB,CACF,CACA,yBAAY,CACV,UAAU,CAAE,IAAI,gBAAgB,CAAC,CACjC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,gBAAgB,CAAC,CACvC,aAAa,CAAE,IAAI,kBAAkB,CAAC,CACtC,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,GAAG,CAAC,IAAI,mBAAmB,CACzC,CAEA,yBAAW,MAAO,CAChB,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC/C,YAAY,CAAE,IAAI,YAAY,CAChC"}`
};
const title = "Skills Details";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""} ${validate_component(SectionHeader, "SectionHeader").$$render($$result, { title }, {}, {})} <section class="skills-container svelte-b7y93n"><div class="skills-grid svelte-b7y93n">${each(Object.keys(skillData), (skillKey) => {
    return `<div class="skill-tile svelte-b7y93n">${validate_component(SkillTile, "SkillTile").$$render(
      $$result,
      {
        title: skillData[skillKey].label,
        skills: skillData[skillKey].skills
      },
      {},
      {}
    )} </div>`;
  })}</div></section>`;
});
export {
  Page as default
};
