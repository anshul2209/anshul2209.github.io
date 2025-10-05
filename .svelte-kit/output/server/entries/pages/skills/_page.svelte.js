import { c as create_ssr_component, d as escape, e as each, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { S as SectionHeader } from "../../../chunks/SectionHeader.js";
const css$1 = {
  code: ".tileWrapper.svelte-wblhy7.svelte-wblhy7{box-sizing:border-box}.tileWrapper.svelte-wblhy7 .title.svelte-wblhy7{padding:20px;background:#f9f9f9;color:#000}.tileWrapper.svelte-wblhy7 .imageSection.svelte-wblhy7{display:flex;justify-content:space-around;flex-wrap:wrap}.tileWrapper.svelte-wblhy7 .imageSection .imgWrapper.svelte-wblhy7{padding:10px;box-sizing:border-box}.tileWrapper.svelte-wblhy7 .imageSection .imgWrapper img.svelte-wblhy7{height:80px}",
  map: '{"version":3,"file":"SkillTile.svelte","sources":["SkillTile.svelte"],"sourcesContent":["<script>\\n    export let title;\\n    export let skills;\\n<\/script>\\n\\n<style lang=\\"scss\\">.tileWrapper {\\n  box-sizing: border-box;\\n}\\n.tileWrapper .title {\\n  /* border-bottom: 1px solid #ddd; */\\n  padding: 20px;\\n  background: #f9f9f9;\\n  color: #000;\\n}\\n.tileWrapper .imageSection {\\n  display: flex;\\n  justify-content: space-around;\\n  flex-wrap: wrap;\\n}\\n.tileWrapper .imageSection .imgWrapper {\\n  /* border: 1px solid; */\\n  padding: 10px;\\n  box-sizing: border-box;\\n}\\n.tileWrapper .imageSection .imgWrapper img {\\n  height: 80px;\\n}</style>\\n<div class=\\"tileWrapper\\">\\n    <h3 class=\\"title\\">{title}</h3>\\n    <div class=\\"imageSection\\">\\n        {#each skills as skill}\\n            <div id={skill.id} class=\\"imgWrapper\\">\\n                <img src={skill.imgSrc} alt={skill.alt}>\\n            </div>\\n        {/each}\\n    </div>\\n</div>"],"names":[],"mappings":"AAKmB,wCAAa,CAC9B,UAAU,CAAE,UACd,CACA,0BAAY,CAAC,oBAAO,CAElB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IACT,CACA,0BAAY,CAAC,2BAAc,CACzB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,SAAS,CAAE,IACb,CACA,0BAAY,CAAC,aAAa,CAAC,yBAAY,CAErC,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UACd,CACA,0BAAY,CAAC,aAAa,CAAC,WAAW,CAAC,iBAAI,CACzC,MAAM,CAAE,IACV"}'
};
const SkillTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 } = $$props;
  let { skills } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0) $$bindings.skills(skills);
  $$result.css.add(css$1);
  return `<div class="tileWrapper svelte-wblhy7"><h3 class="title svelte-wblhy7">${escape(title2)}</h3> <div class="imageSection svelte-wblhy7">${each(skills, (skill) => {
    return `<div${add_attribute("id", skill.id, 0)} class="imgWrapper svelte-wblhy7"><img${add_attribute("src", skill.imgSrc, 0)}${add_attribute("alt", skill.alt, 0)} class="svelte-wblhy7"> </div>`;
  })}</div></div>`;
});
const css = {
  code: ".tile.svelte-d3g50i{margin:50px;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);background:white}@media(max-width: 425px){.tile.svelte-d3g50i{margin:20px}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import SkillTile from '../../lib/components/SkillTile.svelte';\\n    import SectionHeader from '../../lib/components/SectionHeader.svelte';\\n\\tconst title = 'Skills Details';\\n    const skillData = {\\n        ai_tools: {\\n            label: 'AI Technology',\\n            skills: [\\n                { imgSrc: 'skillsLogo/Rlogo.png', alt: 'R' },\\n                { imgSrc: 'skillsLogo/JupyterLogo.png', alt: 'Jupyter Notebook' },\\n                { imgSrc: 'skillsLogo/SagemakerLogo.png', alt: 'Sagemaker' },\\n                { imgSrc: 'skillsLogo/pythonLogo.jpeg', alt: 'Python' }\\n            ]\\n        },\\n        html_css: {\\n            label: 'Web Technologies',\\n            skills: [\\n                { imgSrc: 'skillsLogo/html5.png', alt: 'HTML5' },\\n                { imgSrc: 'skillsLogo/sass.png', alt: 'SASS' },\\n                { imgSrc: 'skillsLogo/bootstrap.jpg', alt: 'Boostrap' },\\n                { imgSrc: 'skillsLogo/css3Logo.jpg', alt: 'CSS3' }\\n            ]\\n        },\\n        javascript: {\\n            label: 'Javascript',\\n            skills: [\\n                { imgSrc: 'skillsLogo/jqueryLogo.gif', alt: 'JQuery' },\\n                { imgSrc: 'skillsLogo/reactLogo.png', alt: 'ReactJs' },\\n                { imgSrc: 'skillsLogo/vuejsLogo.png', alt: 'VueJs' },\\n                { imgSrc: 'skillsLogo/svelteSapper.png', alt: 'Svelte' },\\n                { imgSrc: 'skillsLogo/nodeJsLogo.png', alt: 'NodeJs' }\\n            ]\\n        },\\n        // build_tools: {\\n        //     label: 'Build Tools',\\n        //     skills: [\\n        //         { imgSrc: '', alt: 'WebPack' },\\n        //         { imgSrc: '', alt: '' },\\n        //         { imgSrc: '', alt: '' },\\n        //         { imgSrc: '', alt: '' }\\n        //     ]\\n        // },\\n        // programming_languages: {\\n        //     label: 'Programming Languages',\\n        //     skills: [\\n        //         { imgSrc: '', alt: '' },\\n        //         { imgSrc: '', alt: '' },\\n        //         { imgSrc: '', alt: '' },\\n        //         { imgSrc: '', alt: '' }\\n        //     ]\\n        // },\\n        others: {\\n            label: 'Others',\\n            skills: [\\n                { imgSrc: 'skillsLogo/webpackLogo.png', alt: 'WebPack' },\\n                { imgSrc: 'skillsLogo/gitHubLogo.png', alt: 'GitHub' },\\n                { imgSrc: 'skillsLogo/herokuLogo.png', alt: 'Heroku' },\\n            ]\\n        }\\n    }\\n<\/script>\\n<style lang=\\"scss\\">.tile {\\n  margin: 50px;\\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\\n  background: white;\\n}\\n\\n@media (max-width: 425px) {\\n  .tile {\\n    margin: 20px;\\n  }\\n}</style>\\n<svelte:head>\\n\\t<title>{title}</title>\\n</svelte:head>\\n\\n<SectionHeader title={title} />\\n<section>\\n    {#each Object.keys(skillData) as skillKey}\\n        <div class=\\"tile\\">\\n            <SkillTile title={skillData[skillKey].label} skills={skillData[skillKey].skills}></SkillTile>\\n        </div>\\n    {/each}\\n</section>"],"names":[],"mappings":"AA6DmB,mBAAM,CACvB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC7E,UAAU,CAAE,KACd,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,mBAAM,CACJ,MAAM,CAAE,IACV,CACF"}`
};
const title = "Skills Details";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const skillData = {
    ai_tools: {
      label: "AI Technology",
      skills: [
        { imgSrc: "skillsLogo/Rlogo.png", alt: "R" },
        {
          imgSrc: "skillsLogo/JupyterLogo.png",
          alt: "Jupyter Notebook"
        },
        {
          imgSrc: "skillsLogo/SagemakerLogo.png",
          alt: "Sagemaker"
        },
        {
          imgSrc: "skillsLogo/pythonLogo.jpeg",
          alt: "Python"
        }
      ]
    },
    html_css: {
      label: "Web Technologies",
      skills: [
        {
          imgSrc: "skillsLogo/html5.png",
          alt: "HTML5"
        },
        {
          imgSrc: "skillsLogo/sass.png",
          alt: "SASS"
        },
        {
          imgSrc: "skillsLogo/bootstrap.jpg",
          alt: "Boostrap"
        },
        {
          imgSrc: "skillsLogo/css3Logo.jpg",
          alt: "CSS3"
        }
      ]
    },
    javascript: {
      label: "Javascript",
      skills: [
        {
          imgSrc: "skillsLogo/jqueryLogo.gif",
          alt: "JQuery"
        },
        {
          imgSrc: "skillsLogo/reactLogo.png",
          alt: "ReactJs"
        },
        {
          imgSrc: "skillsLogo/vuejsLogo.png",
          alt: "VueJs"
        },
        {
          imgSrc: "skillsLogo/svelteSapper.png",
          alt: "Svelte"
        },
        {
          imgSrc: "skillsLogo/nodeJsLogo.png",
          alt: "NodeJs"
        }
      ]
    },
    // build_tools: {
    //     label: 'Build Tools',
    //     skills: [
    //         { imgSrc: '', alt: 'WebPack' },
    //         { imgSrc: '', alt: '' },
    //         { imgSrc: '', alt: '' },
    //         { imgSrc: '', alt: '' }
    //     ]
    // },
    // programming_languages: {
    //     label: 'Programming Languages',
    //     skills: [
    //         { imgSrc: '', alt: '' },
    //         { imgSrc: '', alt: '' },
    //         { imgSrc: '', alt: '' },
    //         { imgSrc: '', alt: '' }
    //     ]
    // },
    others: {
      label: "Others",
      skills: [
        {
          imgSrc: "skillsLogo/webpackLogo.png",
          alt: "WebPack"
        },
        {
          imgSrc: "skillsLogo/gitHubLogo.png",
          alt: "GitHub"
        },
        {
          imgSrc: "skillsLogo/herokuLogo.png",
          alt: "Heroku"
        }
      ]
    }
  };
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""} ${validate_component(SectionHeader, "SectionHeader").$$render($$result, { title }, {}, {})} <section>${each(Object.keys(skillData), (skillKey) => {
    return `<div class="tile svelte-d3g50i">${validate_component(SkillTile, "SkillTile").$$render(
      $$result,
      {
        title: skillData[skillKey].label,
        skills: skillData[skillKey].skills
      },
      {},
      {}
    )} </div>`;
  })}</section>`;
});
export {
  Page as default
};
