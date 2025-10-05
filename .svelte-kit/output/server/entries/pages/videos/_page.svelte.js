import { c as create_ssr_component, v as validate_component, e as each, d as escape, b as add_attribute } from "../../../chunks/ssr.js";
import { S as SectionHeader } from "../../../chunks/SectionHeader.js";
const css = {
  code: ".video-wrapper.svelte-13w4xyy.svelte-13w4xyy{display:flex;flex-wrap:wrap;justify-content:space-evenly;margin:10px 0px}.video-wrapper.svelte-13w4xyy .video-container.svelte-13w4xyy{display:flex;flex-direction:column;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);margin:10px 0px}.video-wrapper.svelte-13w4xyy .video-container h3.svelte-13w4xyy{padding:18px;font-size:18px;color:#008073;width:100%;text-align:center;box-sizing:border-box;background:#f9f9f9;margin:0}.video-container.svelte-13w4xyy h3.svelte-13w4xyy{padding:18px;font-size:18px;color:#008073;width:100%;text-align:center;box-sizing:border-box;background:#f9f9f9;margin:0}h2.svelte-13w4xyy.svelte-13w4xyy{border-bottom:1px solid #ddd;font-size:28px;color:#795548;padding:10px}section.svelte-13w4xyy.svelte-13w4xyy{padding:20px}.youtube-channel.svelte-13w4xyy.svelte-13w4xyy{margin-top:20px;text-align:center}.youtube-channel.svelte-13w4xyy span.svelte-13w4xyy{font-size:18px;font-weight:bold}iframe.svelte-13w4xyy.svelte-13w4xyy{max-width:100%}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import SectionHeader from '../../lib/components/SectionHeader.svelte';\\n    const title = 'Videos';\\n    const videoData = {\\n        technical: [\\n            { title: 'Microfrontends and Web Components', url: 'https://www.youtube.com/embed/Md9eu-9_Ric' },\\n            { title: 'Predicting the winner in a game of PUBG', url: 'https://www.youtube.com/embed/pGj1xsTU0Ow' },\\n            { title: 'Globalisation Of OLX Code Base', url: 'https://www.youtube.com/embed/Xu8Cj78I4FY'}\\n        ],\\n        nontechnical: [\\n            { title: 'Identifying Your Leadership Style', url: 'https://www.youtube.com/embed/_w3GaXCh7Zw'},\\n            { title: \\"Ice Breaker Speech\\", url: 'https://www.youtube.com/embed/8Rv1elN_vuA'},\\n            { title: \\"Let's Team Up\\", url: 'https://www.youtube.com/embed/wwQSU3TztiU'},\\n        ]\\n    }\\n<\/script>\\n<style lang=\\"scss\\">.video-wrapper {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly;\\n  margin: 10px 0px;\\n}\\n.video-wrapper .video-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\\n  margin: 10px 0px;\\n}\\n.video-wrapper .video-container h3 {\\n  padding: 18px;\\n  font-size: 18px;\\n  color: #008073;\\n  width: 100%;\\n  text-align: center;\\n  box-sizing: border-box;\\n  background: #f9f9f9;\\n  margin: 0;\\n}\\n\\n.video-container h3 {\\n  padding: 18px;\\n  font-size: 18px;\\n  color: #008073;\\n  width: 100%;\\n  text-align: center;\\n  box-sizing: border-box;\\n  background: #f9f9f9;\\n  margin: 0;\\n}\\n\\nh2 {\\n  border-bottom: 1px solid #ddd;\\n  font-size: 28px;\\n  color: #795548;\\n  padding: 10px;\\n}\\n\\nsection {\\n  padding: 20px;\\n}\\n\\n.youtube-channel {\\n  margin-top: 20px;\\n  text-align: center;\\n}\\n\\n.youtube-channel span {\\n  font-size: 18px;\\n  font-weight: bold;\\n}\\n\\niframe {\\n  max-width: 100%;\\n}</style>\\n<svelte:head>\\n\\t<title>{title}</title>\\n</svelte:head>\\n<SectionHeader title={title}/>\\n<section>\\n    <h2>Some technical talks</h2>\\n    <div class=\\"video-wrapper\\">\\n        {#each videoData.technical as video}\\n            <div class=\\"video-container\\">\\n                <iframe \\n                    title={video.title}\\n                    width=\\"450\\" \\n                    height=\\"250\\" \\n                    src={video.url}\\n                    frameborder=\\"0\\" \\n                    allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" \\n                    allowfullscreen>\\n                </iframe>\\n                <h3>{video.title}</h3>\\n            </div>\\n        {/each}\\n    </div>\\n    <h2>And some not so technical ones...</h2>\\n    <div class=\\"video-wrapper\\">\\n        {#each videoData.nontechnical as video}\\n            <div class=\\"video-container\\">\\n                <iframe \\n                    title={video.title}\\n                    width=\\"450\\" \\n                    height=\\"250\\"\\n                    src={video.url}\\n                    frameborder=\\"0\\" \\n                    allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" \\n                    allowfullscreen>\\n                </iframe>\\n                <h3>{video.title}</h3>\\n            </div>\\n        {/each}\\n    </div>\\n    <div class=\\"youtube-channel\\">\\n        <a target=\\"_blank\\" href=\\"https://www.youtube.com/channel/UCDv2X3kXDJ05qCg9EaKCpQw\\" class=\\"mediaWrapper\\">\\n            <i class=\\"fa fa-youtube\\" style=\\"color:#c4302b;font-size: 36px;\\"></i>\\n            <span> Checkout my YouTube channel</span>\\n        </a>\\n    </div>\\n</section>\\n\\n\\n"],"names":[],"mappings":"AAgBmB,4CAAe,CAChC,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,YAAY,CAC7B,MAAM,CAAE,IAAI,CAAC,GACf,CACA,6BAAc,CAAC,+BAAiB,CAC9B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC7E,MAAM,CAAE,IAAI,CAAC,GACf,CACA,6BAAc,CAAC,gBAAgB,CAAC,iBAAG,CACjC,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,CACV,CAEA,+BAAgB,CAAC,iBAAG,CAClB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,CACV,CAEA,gCAAG,CACD,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC7B,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IACX,CAEA,qCAAQ,CACN,OAAO,CAAE,IACX,CAEA,8CAAiB,CACf,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MACd,CAEA,+BAAgB,CAAC,mBAAK,CACpB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CAEA,oCAAO,CACL,SAAS,CAAE,IACb"}`
};
const title = "Videos";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const videoData = {
    technical: [
      {
        title: "Microfrontends and Web Components",
        url: "https://www.youtube.com/embed/Md9eu-9_Ric"
      },
      {
        title: "Predicting the winner in a game of PUBG",
        url: "https://www.youtube.com/embed/pGj1xsTU0Ow"
      },
      {
        title: "Globalisation Of OLX Code Base",
        url: "https://www.youtube.com/embed/Xu8Cj78I4FY"
      }
    ],
    nontechnical: [
      {
        title: "Identifying Your Leadership Style",
        url: "https://www.youtube.com/embed/_w3GaXCh7Zw"
      },
      {
        title: "Ice Breaker Speech",
        url: "https://www.youtube.com/embed/8Rv1elN_vuA"
      },
      {
        title: "Let's Team Up",
        url: "https://www.youtube.com/embed/wwQSU3TztiU"
      }
    ]
  };
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""} ${validate_component(SectionHeader, "SectionHeader").$$render($$result, { title }, {}, {})} <section class="svelte-13w4xyy"><h2 class="svelte-13w4xyy" data-svelte-h="svelte-gecw82">Some technical talks</h2> <div class="video-wrapper svelte-13w4xyy">${each(videoData.technical, (video) => {
    return `<div class="video-container svelte-13w4xyy"><iframe${add_attribute("title", video.title, 0)} width="450" height="250"${add_attribute("src", video.url, 0)} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="svelte-13w4xyy"></iframe> <h3 class="svelte-13w4xyy">${escape(video.title)}</h3> </div>`;
  })}</div> <h2 class="svelte-13w4xyy" data-svelte-h="svelte-uteiaw">And some not so technical ones...</h2> <div class="video-wrapper svelte-13w4xyy">${each(videoData.nontechnical, (video) => {
    return `<div class="video-container svelte-13w4xyy"><iframe${add_attribute("title", video.title, 0)} width="450" height="250"${add_attribute("src", video.url, 0)} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="svelte-13w4xyy"></iframe> <h3 class="svelte-13w4xyy">${escape(video.title)}</h3> </div>`;
  })}</div> <div class="youtube-channel svelte-13w4xyy" data-svelte-h="svelte-1pn4sk1"><a target="_blank" href="https://www.youtube.com/channel/UCDv2X3kXDJ05qCg9EaKCpQw" class="mediaWrapper"><i class="fa fa-youtube" style="color:#c4302b;font-size: 36px;"></i> <span class="svelte-13w4xyy">Checkout my YouTube channel</span></a></div></section>`;
});
export {
  Page as default
};
