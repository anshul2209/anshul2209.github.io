!function(){"use strict";const e=["client/client.cc565821.js","client/experience.980a2744.js","client/SectionHeader.7dc649db.js","client/index.0307029e.js","client/awards.bfd38943.js","client/blog.f5f3e3cf.js","client/skills.cb11bfb7.js","client/contact.69b14f5d.js","client/videos.0868f841.js","client/projects.87eae5dc.js","client/client.17d210bd.js"].concat(["service-worker-index.html","CNAME","activity.jpg","ai_for_everyone.png","bg.png","brushstroke.png","cards.png","chatter.png","data_science_R.jpeg","favicon.png","giggle.gif","global.css","gourmet-food.png","great-success.png","hello.gif","homelane.jpg","lazyloader.gif","logo-192.png","logo-512.png","manifest.json","medium_logo.png","olxapp.png","profile_photo.jpg","pubg.jpg","skillsLogo/JupyterLogo.png","skillsLogo/Rlogo.png","skillsLogo/SagemakerLogo.png","skillsLogo/bootstrap.jpg","skillsLogo/css3Logo.jpg","skillsLogo/gitHubLogo.png","skillsLogo/herokuLogo.png","skillsLogo/html5.png","skillsLogo/jqueryLogo.gif","skillsLogo/nodeJsLogo.png","skillsLogo/pythonLogo.jpeg","skillsLogo/reactLogo.png","skillsLogo/sass.png","skillsLogo/svelteLogo.png","skillsLogo/svelteSapper.png","skillsLogo/vuejsLogo.png","skillsLogo/webpackLogo.png","sveltesapper.jpeg","taskr.png","udacity_ml.png"]),o=new Set(e);self.addEventListener("install",o=>{o.waitUntil(caches.open("cache1592683675942").then(o=>o.addAll(e)).then(()=>{self.skipWaiting()}).catch(e=>console.log("error is",e)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const o of e)"cache1592683675942"!==o&&await caches.delete(o);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);console.log("url pathname",s.pathname),s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&o.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1592683675942").then(async o=>{try{const s=await fetch(e.request);return o.put(e.request,s.clone()),s}catch(s){const t=await o.match(e.request);if(t)return t;throw s}}))))})}();
