!function(){"use strict";const e=["client/client.29863de6.js","client/experience.db3cdde7.js","client/SectionHeader.cb6986cd.js","client/index.9e1e0d37.js","client/awards.32f12ca3.js","client/blog.8b9b17ca.js","client/contact.a841a761.js","client/skills.2da9e008.js","client/videos.06a53540.js","client/projects.7ea8c778.js","client/client.570e077d.js"].concat(["service-worker-index.html","CNAME","activity.jpg","ai_for_everyone.png","bg.png","brushstroke.png","cards.png","chatter.png","data_science_R.jpeg","favicon.png","giggle.gif","global.css","great-success.png","hello.gif","homelane.jpg","lazyloader.gif","logo-192.png","logo-512.png","manifest.json","profile_photo.jpg","pubg.jpg","skillsLogo/JupyterLogo.png","skillsLogo/Rlogo.png","skillsLogo/SagemakerLogo.png","skillsLogo/bootstrap.jpg","skillsLogo/css3Logo.jpg","skillsLogo/gitHubLogo.png","skillsLogo/herokuLogo.png","skillsLogo/html5.png","skillsLogo/jqueryLogo.gif","skillsLogo/nodeJsLogo.png","skillsLogo/pythonLogo.jpeg","skillsLogo/reactLogo.png","skillsLogo/sass.png","skillsLogo/svelteLogo.png","skillsLogo/svelteSapper.png","skillsLogo/vuejsLogo.png","skillsLogo/webpackLogo.png","taskr.png","udacity_ml.png"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1583081214977").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1583081214977"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const o=new URL(e.request.url);o.protocol.startsWith("http")&&(o.hostname===self.location.hostname&&o.port!==self.location.port||(o.host===self.location.host&&s.has(o.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1583081214977").then(async s=>{try{const o=await fetch(e.request);return s.put(e.request,o.clone()),o}catch(o){const t=await s.match(e.request);if(t)return t;throw o}}))))})}();
