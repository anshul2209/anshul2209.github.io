import{S as l,i as s,s as t,e,a as o,b as a,f as i,c as r,d as n,h as g,j as c,k as h,t as m,g as f,l as p,n as k,C as u,o as S,p as L,r as d,w as b,u as v,x as $,q as j,v as x,z as y}from"./client.b2363f52.js";import{S as E}from"./SectionHeader.66ce5bb9.js";function J(l,s,t){const e=l.slice();return e[2]=s[t],e}function I(l){let s,t,m,f,p,k;return{c(){s=e("div"),t=e("img"),p=o(),this.h()},l(l){s=a(l,"DIV",{id:!0,class:!0});var e=i(s);t=a(e,"IMG",{src:!0,alt:!0,class:!0}),p=r(e),e.forEach(n),this.h()},h(){t.src!==(m=l[2].imgSrc)&&g(t,"src",m),g(t,"alt",f=l[2].alt),g(t,"class","svelte-1bkso4x"),g(s,"id",k=l[2].id),g(s,"class","imgWrapper svelte-1bkso4x")},m(l,e){c(l,s,e),h(s,t),h(s,p)},p(l,e){2&e&&t.src!==(m=l[2].imgSrc)&&g(t,"src",m),2&e&&f!==(f=l[2].alt)&&g(t,"alt",f),2&e&&k!==(k=l[2].id)&&g(s,"id",k)},d(l){l&&n(s)}}}function H(l){let s,t,S,L,d,b=l[1],v=[];for(let s=0;s<b.length;s+=1)v[s]=I(J(l,b,s));return{c(){s=e("div"),t=e("h3"),S=m(l[0]),L=o(),d=e("div");for(let l=0;l<v.length;l+=1)v[l].c();this.h()},l(e){s=a(e,"DIV",{class:!0});var o=i(s);t=a(o,"H3",{class:!0});var g=i(t);S=f(g,l[0]),g.forEach(n),L=r(o),d=a(o,"DIV",{class:!0});var c=i(d);for(let l=0;l<v.length;l+=1)v[l].l(c);c.forEach(n),o.forEach(n),this.h()},h(){g(t,"class","title svelte-1bkso4x"),g(d,"class","imageSection svelte-1bkso4x"),g(s,"class","tileWrapper svelte-1bkso4x")},m(l,e){c(l,s,e),h(s,t),h(t,S),h(s,L),h(s,d);for(let l=0;l<v.length;l+=1)v[l].m(d,null)},p(l,[s]){if(1&s&&p(S,l[0]),2&s){let t;for(b=l[1],t=0;t<b.length;t+=1){const e=J(l,b,t);v[t]?v[t].p(e,s):(v[t]=I(e),v[t].c(),v[t].m(d,null))}for(;t<v.length;t+=1)v[t].d(1);v.length=b.length}},i:k,o:k,d(l){l&&n(s),u(v,l)}}}function D(l,s,t){let{title:e}=s,{skills:o}=s;return l.$set=(l=>{"title"in l&&t(0,e=l.title),"skills"in l&&t(1,o=l.skills)}),[e,o]}class V extends l{constructor(l){super(),s(this,l,D,H,t,{title:0,skills:1})}}function w(l,s,t){const e=l.slice();return e[1]=s[t],e}function O(l){let s,t,m;const f=new V({props:{title:l[0][l[1]].label,skills:l[0][l[1]].skills}});return{c(){s=e("div"),S(f.$$.fragment),t=o(),this.h()},l(l){s=a(l,"DIV",{class:!0});var e=i(s);L(f.$$.fragment,e),t=r(e),e.forEach(n),this.h()},h(){g(s,"class","tile svelte-1bdx3e8")},m(l,e){c(l,s,e),d(f,s,null),h(s,t),m=!0},p:k,i(l){m||(b(f.$$.fragment,l),m=!0)},o(l){v(f.$$.fragment,l),m=!1},d(l){l&&n(s),$(f)}}}function T(l){let s,t,g,h,m;document.title=s=W;const f=new E({props:{title:W}});let p=Object.keys(l[0]),k=[];for(let s=0;s<p.length;s+=1)k[s]=O(w(l,p,s));const J=l=>v(k[l],1,1,()=>{k[l]=null});return{c(){t=o(),S(f.$$.fragment),g=o(),h=e("section");for(let l=0;l<k.length;l+=1)k[l].c()},l(l){j('[data-svelte="svelte-1az6e94"]',document.head).forEach(n),t=r(l),L(f.$$.fragment,l),g=r(l),h=a(l,"SECTION",{});var s=i(h);for(let l=0;l<k.length;l+=1)k[l].l(s);s.forEach(n)},m(l,s){c(l,t,s),d(f,l,s),c(l,g,s),c(l,h,s);for(let l=0;l<k.length;l+=1)k[l].m(h,null);m=!0},p(l,[t]){if((!m||0&t)&&s!==(s=W)&&(document.title=s),1&t){let s;for(p=Object.keys(l[0]),s=0;s<p.length;s+=1){const e=w(l,p,s);k[s]?(k[s].p(e,t),b(k[s],1)):(k[s]=O(e),k[s].c(),b(k[s],1),k[s].m(h,null))}for(y(),s=p.length;s<k.length;s+=1)J(s);x()}},i(l){if(!m){b(f.$$.fragment,l);for(let l=0;l<p.length;l+=1)b(k[l]);m=!0}},o(l){v(f.$$.fragment,l),k=k.filter(Boolean);for(let l=0;l<k.length;l+=1)v(k[l]);m=!1},d(l){l&&n(t),$(f,l),l&&n(g),l&&n(h),u(k,l)}}}const W="Skills Details";function C(l){return[{ai_tools:{label:"AI Technology",skills:[{imgSrc:"skillsLogo/Rlogo.png",alt:"R"},{imgSrc:"skillsLogo/JupyterLogo.png",alt:"Jupyter Notebook"},{imgSrc:"skillsLogo/SagemakerLogo.png",alt:"Sagemaker"},{imgSrc:"skillsLogo/pythonLogo.jpeg",alt:"Python"}]},html_css:{label:"Web Technologies",skills:[{imgSrc:"skillsLogo/html5.png",alt:"HTML5"},{imgSrc:"skillsLogo/sass.png",alt:"SASS"},{imgSrc:"skillsLogo/bootstrap.jpg",alt:"Boostrap"},{imgSrc:"skillsLogo/css3Logo.jpg",alt:"CSS3"}]},javascript:{label:"Javascript",skills:[{imgSrc:"skillsLogo/jqueryLogo.gif",alt:"JQuery"},{imgSrc:"skillsLogo/reactLogo.png",alt:"ReactJs"},{imgSrc:"skillsLogo/vuejsLogo.png",alt:"VueJs"},{imgSrc:"skillsLogo/svelteSapper.png",alt:"Svelte"},{imgSrc:"skillsLogo/nodeJsLogo.png",alt:"NodeJs"}]},others:{label:"Others",skills:[{imgSrc:"skillsLogo/webpackLogo.png",alt:"WebPack"},{imgSrc:"skillsLogo/gitHubLogo.png",alt:"GitHub"},{imgSrc:"skillsLogo/herokuLogo.png",alt:"Heroku"}]}}]}export default class extends l{constructor(l){super(),s(this,l,C,T,t,{})}}
