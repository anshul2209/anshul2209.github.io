import{_ as a,a as n,b as t,c as e,i,s as r,d as s,S as c,f as o,e as l,t as f,j as h,k as u,h as v,l as d,g,m,n as p,o as j,p as w,x as I,q as $,y,z as k,r as E,C as _,A as q,D,I as S}from"./client.58b6ec47.js";import{S as A}from"./SectionHeader.f57325ec.js";function G(a,n,t){var e=a.slice();return e[1]=n[t],e}function b(a){var n,t,e,i,r,s,c,I=a[1].caption+"";return{c:function(){n=o("div"),t=o("img"),i=l(),r=o("div"),s=f(I),c=l(),this.h()},l:function(a){n=h(a,"DIV",{class:!0});var e=u(n);t=h(e,"IMG",{src:!0,alt:!0,class:!0}),i=v(e),r=h(e,"DIV",{class:!0});var o=u(r);s=d(o,I),o.forEach(g),c=v(e),e.forEach(g),this.h()},h:function(){t.src!==(e=a[1].link)&&m(t,"src",e),m(t,"alt",a[1].alt),m(t,"class","svelte-7qj8vw"),m(r,"class","caption svelte-7qj8vw"),m(n,"class","card svelte-7qj8vw")},m:function(a,e){p(a,n,e),j(n,t),j(n,i),j(n,r),j(r,s),j(n,c)},p:w,d:function(a){a&&g(n)}}}function C(a){var n,t,e,i,r,s;document.title=n=R;for(var c=new A({props:{title:R}}),f=a[0],d=[],w=0;w<f.length;w+=1)d[w]=b(G(a,f,w));return{c:function(){t=l(),I(c.$$.fragment),e=l(),i=o("section"),r=o("div");for(var a=0;a<d.length;a+=1)d[a].c();this.h()},l:function(a){$('[data-svelte="svelte-1az6e94"]',document.head).forEach(g),t=v(a),y(c.$$.fragment,a),e=v(a),i=h(a,"SECTION",{});var n=u(i);r=h(n,"DIV",{class:!0});for(var s=u(r),o=0;o<d.length;o+=1)d[o].l(s);s.forEach(g),n.forEach(g),this.h()},h:function(){m(r,"class","card-wrapper svelte-7qj8vw")},m:function(a,n){p(a,t,n),k(c,a,n),p(a,e,n),p(a,i,n),j(i,r);for(var o=0;o<d.length;o+=1)d[o].m(r,null);s=!0},p:function(a,t){var e=E(t,1)[0];if((!s||0&e)&&n!==(n=R)&&(document.title=n),1&e){var i;for(f=a[0],i=0;i<f.length;i+=1){var c=G(a,f,i);d[i]?d[i].p(c,e):(d[i]=b(c),d[i].c(),d[i].m(r,null))}for(;i<d.length;i+=1)d[i].d(1);d.length=f.length}},i:function(a){s||(_(c.$$.fragment,a),s=!0)},o:function(a){q(c.$$.fragment,a),s=!1},d:function(a){a&&g(t),D(c,a),a&&g(e),a&&g(i),S(d,a)}}}var R="Awards and Certifications";function V(a){return[[{link:"ai_for_everyone.png",alt:"AI for everyone",caption:"It covered the basics of artificial intelligence and machine learning"},{link:"data_science_R.jpeg",alt:"Data Science in R",caption:"A deep dive into the data engineering aspect of machine learning using R"},{link:"udacity_ml.png",alt:"Udacity ML Project",caption:"Graduation certificate for the 3 months nanodegree program with udacity"},{link:"homelane.jpg",alt:"Homelane Young Gun",caption:"Given to the top performer amongst the new joinees in the company"}]]}export default(function(o){function l(a){var c;return n(this,l),c=t(this,e(l).call(this)),i(s(c),a,V,C,r,{}),c}return a(l,c),l}());
