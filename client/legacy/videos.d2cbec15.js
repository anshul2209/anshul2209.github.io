import{_ as e,a as t,b as a,c,i as r,s,d as l,S as n,f as o,e as i,t as h,j as u,k as f,g as v,h as w,l as m,m as d,n as p,o as g,p as b,x as y,q as E,y as I,v as C,z as S,r as k,C as A,A as D,D as $,I as T}from"./client.58b6ec47.js";import{S as U}from"./SectionHeader.f57325ec.js";function V(e,t,a){var c=e.slice();return c[1]=t[a],c}function j(e,t,a){var c=e.slice();return c[1]=t[a],c}function F(e){var t,a,c,r,s,l,n,y=e[1].title+"";return{c:function(){t=o("div"),a=o("iframe"),r=i(),s=o("h3"),l=h(y),n=i(),this.h()},l:function(e){t=u(e,"DIV",{class:!0});var c=f(t);a=u(c,"IFRAME",{title:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0,class:!0}),f(a).forEach(v),r=w(c),s=u(c,"H3",{class:!0});var o=f(s);l=m(o,y),o.forEach(v),n=w(c),c.forEach(v),this.h()},h:function(){d(a,"title",e[1].title),d(a,"width","450"),d(a,"height","250"),a.src!==(c=e[1].url)&&d(a,"src",c),d(a,"frameborder","0"),d(a,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),a.allowFullscreen=!0,d(a,"class","svelte-w39cr4"),d(s,"class","svelte-w39cr4"),d(t,"class","video-container svelte-w39cr4")},m:function(e,c){p(e,t,c),g(t,a),g(t,r),g(t,s),g(s,l),g(t,n)},p:b,d:function(e){e&&v(t)}}}function H(e){var t,a,c,r,s,l,n,y=e[1].title+"";return{c:function(){t=o("div"),a=o("iframe"),r=i(),s=o("h3"),l=h(y),n=i(),this.h()},l:function(e){t=u(e,"DIV",{class:!0});var c=f(t);a=u(c,"IFRAME",{title:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0,class:!0}),f(a).forEach(v),r=w(c),s=u(c,"H3",{class:!0});var o=f(s);l=m(o,y),o.forEach(v),n=w(c),c.forEach(v),this.h()},h:function(){d(a,"title",e[1].title),d(a,"width","450"),d(a,"height","250"),a.src!==(c=e[1].url)&&d(a,"src",c),d(a,"frameborder","0"),d(a,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),a.allowFullscreen=!0,d(a,"class","svelte-w39cr4"),d(s,"class","svelte-w39cr4"),d(t,"class","video-container svelte-w39cr4")},m:function(e,c){p(e,t,c),g(t,a),g(t,r),g(t,s),g(s,l),g(t,n)},p:b,d:function(e){e&&v(t)}}}function X(e){var t,a,c,r,s,l,n,b,X,x,z,G,M,O,R,Y,B,L,N,P,q;document.title=t=_;for(var Q=new U({props:{title:_}}),W=e[0].technical,J=[],K=0;K<W.length;K+=1)J[K]=F(j(e,W,K));for(var Z=e[0].nontechnical,ee=[],te=0;te<Z.length;te+=1)ee[te]=H(V(e,Z,te));return{c:function(){a=i(),y(Q.$$.fragment),c=i(),r=o("section"),s=o("h2"),l=h("Some technical talks"),n=i(),b=o("div");for(var e=0;e<J.length;e+=1)J[e].c();X=i(),x=o("h2"),z=h("And some not so technical ones..."),G=i(),M=o("div");for(var t=0;t<ee.length;t+=1)ee[t].c();O=i(),R=o("div"),Y=o("a"),B=o("i"),L=i(),N=o("span"),P=h("Checkout my YouTube channel"),this.h()},l:function(e){E('[data-svelte="svelte-1az6e94"]',document.head).forEach(v),a=w(e),I(Q.$$.fragment,e),c=w(e),r=u(e,"SECTION",{class:!0});var t=f(r);s=u(t,"H2",{class:!0});var o=f(s);l=m(o,"Some technical talks"),o.forEach(v),n=w(t),b=u(t,"DIV",{class:!0});for(var i=f(b),h=0;h<J.length;h+=1)J[h].l(i);i.forEach(v),X=w(t),x=u(t,"H2",{class:!0});var d=f(x);z=m(d,"And some not so technical ones..."),d.forEach(v),G=w(t),M=u(t,"DIV",{class:!0});for(var p=f(M),g=0;g<ee.length;g+=1)ee[g].l(p);p.forEach(v),O=w(t),R=u(t,"DIV",{class:!0});var y=f(R);Y=u(y,"A",{target:!0,href:!0,class:!0});var C=f(Y);B=u(C,"I",{class:!0,style:!0}),f(B).forEach(v),L=w(C),N=u(C,"SPAN",{class:!0});var S=f(N);P=m(S,"Checkout my YouTube channel"),S.forEach(v),C.forEach(v),y.forEach(v),t.forEach(v),this.h()},h:function(){d(s,"class","svelte-w39cr4"),d(b,"class","video-wrapper svelte-w39cr4"),d(x,"class","svelte-w39cr4"),d(M,"class","video-wrapper svelte-w39cr4"),d(B,"class","fa fa-youtube"),C(B,"color","#c4302b"),C(B,"font-size","36px"),d(N,"class","svelte-w39cr4"),d(Y,"target","_blank"),d(Y,"href","https://www.youtube.com/channel/UCDv2X3kXDJ05qCg9EaKCpQw"),d(Y,"class","mediaWrapper"),d(R,"class","youtube-channel svelte-w39cr4"),d(r,"class","svelte-w39cr4")},m:function(e,t){p(e,a,t),S(Q,e,t),p(e,c,t),p(e,r,t),g(r,s),g(s,l),g(r,n),g(r,b);for(var o=0;o<J.length;o+=1)J[o].m(b,null);g(r,X),g(r,x),g(x,z),g(r,G),g(r,M);for(var i=0;i<ee.length;i+=1)ee[i].m(M,null);g(r,O),g(r,R),g(R,Y),g(Y,B),g(Y,L),g(Y,N),g(N,P),q=!0},p:function(e,a){var c=k(a,1)[0];if((!q||0&c)&&t!==(t=_)&&(document.title=t),1&c){var r;for(W=e[0].technical,r=0;r<W.length;r+=1){var s=j(e,W,r);J[r]?J[r].p(s,c):(J[r]=F(s),J[r].c(),J[r].m(b,null))}for(;r<J.length;r+=1)J[r].d(1);J.length=W.length}if(1&c){var l;for(Z=e[0].nontechnical,l=0;l<Z.length;l+=1){var n=V(e,Z,l);ee[l]?ee[l].p(n,c):(ee[l]=H(n),ee[l].c(),ee[l].m(M,null))}for(;l<ee.length;l+=1)ee[l].d(1);ee.length=Z.length}},i:function(e){q||(A(Q.$$.fragment,e),q=!0)},o:function(e){D(Q.$$.fragment,e),q=!1},d:function(e){e&&v(a),$(Q,e),e&&v(c),e&&v(r),T(J,e),T(ee,e)}}}var _="Videos";function x(e){return[{technical:[{title:"Microfrontends and Web Components",url:"https://www.youtube.com/embed/Md9eu-9_Ric"},{title:"Predicting the winner in a game of PUBG",url:"https://www.youtube.com/embed/pGj1xsTU0Ow"},{title:"Globalisation Of OLX Code Base",url:"https://www.youtube.com/embed/Xu8Cj78I4FY"}],nontechnical:[{title:"Identifying Your Leadership Style",url:"https://www.youtube.com/embed/_w3GaXCh7Zw"},{title:"Ice Breaker Speech",url:"https://www.youtube.com/embed/8Rv1elN_vuA"},{title:"Let's Team Up",url:"https://www.youtube.com/embed/wwQSU3TztiU"}]}]}export default(function(o){function i(e){var n;return t(this,i),n=a(this,c(i).call(this)),r(l(n),e,x,X,s,{}),n}return e(i,n),i}());
