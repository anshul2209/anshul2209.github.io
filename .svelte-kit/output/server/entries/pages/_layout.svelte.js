import { c as create_ssr_component, e as each, b as add_attribute, d as escape, f as null_to_empty, g as subscribe, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/exports.js";
import "../../chunks/event.js";
import { p as page } from "../../chunks/stores.js";
const css$1 = {
  code: 'nav.svelte-dv0qqv.svelte-dv0qqv{border-bottom:1px solid rgba(255, 62, 0, 0.1);font-weight:300;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);background:#fff;display:block;position:fixed;top:0px;bottom:0px;left:0px;z-index:1;text-align:center}nav.svelte-dv0qqv ul.svelte-dv0qqv{margin:0;padding:0;display:flex;flex-direction:column;padding:0 2em}nav.svelte-dv0qqv ul.svelte-dv0qqv:after{content:"";display:block;clear:both}nav.svelte-dv0qqv .logo.svelte-dv0qqv{padding:10px;background:#fafafa}nav.svelte-dv0qqv .logo .name.svelte-dv0qqv{font-size:24px;color:#008073;font-weight:300}nav.svelte-dv0qqv .logo .title.svelte-dv0qqv{font-size:16px;font-weight:100}nav.svelte-dv0qqv li.svelte-dv0qqv{display:block;float:left;display:flex;align-items:center}nav.svelte-dv0qqv li i.svelte-dv0qqv{color:#008073;margin-right:10px;font-size:24px}nav.svelte-dv0qqv li .selected.svelte-dv0qqv{position:relative;display:inline-block}nav.svelte-dv0qqv li .selected.svelte-dv0qqv:after{position:absolute;content:"";width:calc(100% - 1em);height:2px;background-color:rgb(255, 62, 0);display:block;bottom:-1px}nav.svelte-dv0qqv li a.svelte-dv0qqv{text-decoration:none;padding:1em 0.5em;display:block}',
  map: `{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\timport { goto } from '$app/navigation';\\n\\timport track from '../helpers/tracking.js';\\n\\n\\texport let segment;\\n\\tconst menuItems = [\\n\\t\\t{ segment: undefined, 'label': 'About', href: '.', icon: 'fa fa-user'},\\n\\t\\t{ segment: 'projects', 'label': 'Projects', href: 'projects', icon: 'fa fa-laptop' },\\n\\t\\t{ segment: 'videos', 'label': 'Videos', href: 'videos', icon: 'fa fa-video-camera' },\\n\\t\\t{ segment: 'awards', 'label': 'Awards', href: 'awards', icon: 'fa fa-star-o' },\\n\\t\\t{ segment: 'skills', 'label': 'Skills', href: 'skills', icon: 'fa fa-bar-chart' },\\n\\t\\t// { segment: 'experience', 'label': 'Experience', href: 'experience' },\\n\\t\\t{ segment: 'contact', 'label': 'Contact', href: 'contact', icon: 'fa fa-phone' },\\n\\t\\t{ segment: 'blog', 'label': 'Blog Posts', href: 'blog', icon: 'fa fa-rss-square' }\\n\\t]\\n\\n\\tfunction handleNavigation(event) {\\n\\t\\tconst label = event.target.id;\\n\\t\\tif(label) {\\n\\t\\t\\ttrack('click', 'navigation', label);\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n<style lang=\\"scss\\">nav {\\n  border-bottom: 1px solid rgba(255, 62, 0, 0.1);\\n  font-weight: 300;\\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\\n  background: #fff;\\n  display: block;\\n  position: fixed;\\n  top: 0px;\\n  bottom: 0px;\\n  left: 0px;\\n  z-index: 1;\\n  text-align: center;\\n}\\nnav ul {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 0 2em;\\n}\\nnav ul:after {\\n  content: \\"\\";\\n  display: block;\\n  clear: both;\\n}\\nnav .logo {\\n  padding: 10px;\\n  background: #fafafa;\\n}\\nnav .logo .name {\\n  font-size: 24px;\\n  color: #008073;\\n  font-weight: 300;\\n}\\nnav .logo .title {\\n  font-size: 16px;\\n  font-weight: 100;\\n}\\nnav li {\\n  display: block;\\n  float: left;\\n  display: flex;\\n  align-items: center;\\n}\\nnav li i {\\n  color: #008073;\\n  margin-right: 10px;\\n  font-size: 24px;\\n}\\nnav li .selected {\\n  position: relative;\\n  display: inline-block;\\n}\\nnav li .selected:after {\\n  position: absolute;\\n  content: \\"\\";\\n  width: calc(100% - 1em);\\n  height: 2px;\\n  background-color: rgb(255, 62, 0);\\n  display: block;\\n  bottom: -1px;\\n}\\nnav li a {\\n  text-decoration: none;\\n  padding: 1em 0.5em;\\n  display: block;\\n}</style>\\n<nav>\\n\\t<div class=\\"logo\\">\\n\\t\\t<h2 class=\\"name\\">Anshul <br>Bansal</h2>\\n\\t\\t<h4 class=\\"title\\">Full Stack Developer</h4>\\n\\t</div>\\n\\t<ul on:click={handleNavigation} on:keydown={(e) => e.key === 'Enter' && handleNavigation(e)} role=\\"navigation\\" aria-label=\\"Main navigation\\">\\n\\t\\t{#each menuItems as item}\\n\\t\\t\\t<li>\\n\\t\\t\\t\\t<i class={item.icon} aria-hidden=\\"true\\"></i>\\n\\t\\t\\t\\t<a class:selected='{segment === item.segment}' id={item.label} href={item.href}>{item.label}</a>\\n\\t\\t\\t</li>\\n\\t\\t{/each}\\n\\t</ul>\\n</nav>\\n"],"names":[],"mappings":"AAyBmB,+BAAI,CACrB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9C,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC7E,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,GAAG,CACR,MAAM,CAAE,GAAG,CACX,IAAI,CAAE,GAAG,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,MACd,CACA,iBAAG,CAAC,gBAAG,CACL,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,CAAC,CAAC,GACb,CACA,iBAAG,CAAC,gBAAE,MAAO,CACX,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IACT,CACA,iBAAG,CAAC,mBAAM,CACR,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,OACd,CACA,iBAAG,CAAC,KAAK,CAAC,mBAAM,CACd,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GACf,CACA,iBAAG,CAAC,KAAK,CAAC,oBAAO,CACf,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GACf,CACA,iBAAG,CAAC,gBAAG,CACL,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf,CACA,iBAAG,CAAC,EAAE,CAAC,eAAE,CACP,KAAK,CAAE,OAAO,CACd,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,IACb,CACA,iBAAG,CAAC,EAAE,CAAC,uBAAU,CACf,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YACX,CACA,iBAAG,CAAC,EAAE,CAAC,uBAAS,MAAO,CACrB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CACjC,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IACV,CACA,iBAAG,CAAC,EAAE,CAAC,eAAE,CACP,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,OAAO,CAAE,KACX"}`
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segment } = $$props;
  const menuItems = [
    {
      segment: void 0,
      "label": "About",
      href: ".",
      icon: "fa fa-user"
    },
    {
      segment: "projects",
      "label": "Projects",
      href: "projects",
      icon: "fa fa-laptop"
    },
    {
      segment: "videos",
      "label": "Videos",
      href: "videos",
      icon: "fa fa-video-camera"
    },
    {
      segment: "awards",
      "label": "Awards",
      href: "awards",
      icon: "fa fa-star-o"
    },
    {
      segment: "skills",
      "label": "Skills",
      href: "skills",
      icon: "fa fa-bar-chart"
    },
    // { segment: 'experience', 'label': 'Experience', href: 'experience' },
    {
      segment: "contact",
      "label": "Contact",
      href: "contact",
      icon: "fa fa-phone"
    },
    {
      segment: "blog",
      "label": "Blog Posts",
      href: "blog",
      icon: "fa fa-rss-square"
    }
  ];
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
  $$result.css.add(css$1);
  return `<nav class="svelte-dv0qqv"><div class="logo svelte-dv0qqv" data-svelte-h="svelte-1gzi6ir"><h2 class="name svelte-dv0qqv">Anshul <br>Bansal</h2> <h4 class="title svelte-dv0qqv">Full Stack Developer</h4></div> <ul role="navigation" aria-label="Main navigation" class="svelte-dv0qqv">${each(menuItems, (item) => {
    return `<li class="svelte-dv0qqv"><i class="${escape(null_to_empty(item.icon), true) + " svelte-dv0qqv"}" aria-hidden="true"></i> <a${add_attribute("id", item.label, 0)}${add_attribute("href", item.href, 0)} class="${["svelte-dv0qqv", segment === item.segment ? "selected" : ""].join(" ").trim()}">${escape(item.label)}</a> </li>`;
  })}</ul></nav>`;
});
const css = {
  code: "main.svelte-122bwrg{position:relative;background:transparent;box-sizing:border-box;overflow:auto;margin-bottom:44px}@media(max-width: 425px){main.svelte-122bwrg{padding-top:60px}}.overlay.svelte-122bwrg{position:fixed;top:0px;left:0px;right:0px;height:120vh;background-color:rgba(0, 0, 0, 0.5);z-index:1}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\timport Nav from '../lib/components/Nav.svelte';\\n\\timport NavMob from '../lib/components/NavMob.svelte';\\n\\timport { page } from '$app/stores';\\n\\timport { onMount } from 'svelte';\\n\\timport '../app.css';\\n\\n\\tlet isVisible = false;\\n\\tlet isMobile = false;\\n\\n\\tfunction toggleNavBar(event) {\\n\\t\\tisVisible = !isVisible;\\n\\t}\\n\\n\\tfunction checkScreenSize() {\\n\\t\\tisMobile = window.innerWidth <= 425;\\n\\t}\\n\\n\\tonMount(() => {\\n\\t\\tcheckScreenSize();\\n\\t\\twindow.addEventListener('resize', checkScreenSize);\\n\\t\\treturn () => window.removeEventListener('resize', checkScreenSize);\\n\\t});\\n<\/script>\\n\\n<style lang=\\"scss\\">main {\\n  position: relative;\\n  /* max-width: 56em; */\\n  background: transparent;\\n  /* padding: 2em; */\\n  /* margin: 0 auto; */\\n  box-sizing: border-box;\\n  overflow: auto;\\n  margin-bottom: 44px;\\n}\\n\\n@media (max-width: 425px) {\\n  main {\\n    padding-top: 60px;\\n  }\\n}\\n.overlay {\\n  position: fixed;\\n  top: 0px;\\n  left: 0px;\\n  right: 0px;\\n  height: 120vh;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  z-index: 1;\\n}</style>\\n\\n{#if !isMobile}\\n\\t<Nav segment={$page.route.id} />\\n{/if}\\n\\n{#if isMobile}\\n\\t<NavMob segment={$page.route.id} {isVisible} on:toggle={toggleNavBar} />\\n{/if}\\n<div class=\\"{isVisible ? 'overlay' :''}\\" on:click={toggleNavBar} on:keydown={(e) => e.key === 'Escape' && toggleNavBar()} role=\\"button\\" tabindex=\\"0\\" aria-label=\\"Close navigation menu\\"></div>\\n<main>\\n\\t<slot />\\n</main>\\n"],"names":[],"mappings":"AAyBmB,mBAAK,CACtB,QAAQ,CAAE,QAAQ,CAElB,UAAU,CAAE,WAAW,CAGvB,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,IAAI,CACd,aAAa,CAAE,IACjB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,mBAAK,CACH,WAAW,CAAE,IACf,CACF,CACA,uBAAS,CACP,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,OAAO,CAAE,CACX"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${`${validate_component(Nav, "Nav").$$render($$result, { segment: $page.route.id }, {}, {})}`} ${``} <div class="${escape(null_to_empty(""), true) + " svelte-122bwrg"}" role="button" tabindex="0" aria-label="Close navigation menu"></div> <main class="svelte-122bwrg">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
