import{a as b,t as C}from"./disclose-version.B6U6Qg9F.js";import{m as A,g as s,j as a,s as v,t as k,o as D}from"./index-client.Br0fZ5fH.js";import{i as z,b as Z}from"./props.C2gVJaBR.js";import{s as _,h as y,b as E}from"./attributes.Bkhssghn.js";import{b as F}from"./entry.BXDN_bx5.js";function w(l,e,t){if(t){if(l.classList.contains(e))return;l.classList.add(e)}else{if(!l.classList.contains(e))return;l.classList.remove(e)}}const U=G(Math.random);function G(l){return function(t,r=0,h=t.length){let f=h-(r=+r);for(;f;){const o=l()*f--|0,c=t[f+r];t[f+r]=t[o+r],t[o+r]=c}return t}}const H=`<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.75 0.855957C15.086 0.855957 0.75 15.192 0.75 32.856C0.75 50.52 15.086 64.856 32.75 64.856C50.414 64.856 64.75 50.52 64.75 32.856C64.75 15.192 50.414 0.855957 32.75 0.855957ZM26.35 47.256V18.456L45.55 32.856L26.35 47.256Z" fill="white" fill-opacity="0.9"/>
</svg>
`;var I=C('<div class="info svelte-xeff45"><p class="id svelte-xeff45"> </p> <p class="month svelte-xeff45"> </p></div>'),J=C('<span class="icon--play svelte-xeff45"><!></span>'),K=C('<div class="story svelte-xeff45"><!> <a rel="external" target="_blank" class="inner svelte-xeff45"><div class="screenshot svelte-xeff45"><img loading="lazy" alt="thumbnail for story" class="svelte-xeff45"> <!></div> <div class="text svelte-xeff45"><h3 class="short svelte-xeff45"><strong><!></strong></h3> <p class="tease svelte-xeff45"><!></p></div></a></div>');function W(l,e){A(e,!0);const t=e.href.includes("youtube")||e.href.includes("youtu.be"),r=e.resource?"resources/480":"thumbnails/screenshots",h=`${F}/common/assets/${r}`,f=e.bgColor?`--story-bg: ${e.bgColor};`:"";var o=K();_(o,"style",f),w(o,"youtube",t);var c=s(o);z(c,()=>!e.resource&&!e.footer,x=>{var i=I(),n=s(i),V=s(n);a(n);var j=v(n,2),q=s(j,!0);a(j),a(i),k(()=>{Z(V,`#${e.id??""}`),Z(q,e.month)}),b(x,i)});var u=v(c,2),d=s(u),g=s(d),p=v(g,2);z(p,()=>t,x=>{var i=J(),n=s(i);y(n,()=>H),a(i),b(x,i)}),a(d);var L=v(d,2),m=s(L),M=s(m),B=s(M);y(B,()=>e.short),a(M),a(m);var S=v(m,2),P=s(S);y(P,()=>e.tease),a(S),a(L),a(u),a(o),k(()=>{w(o,"resource",e.resource),w(o,"footer",e.footer),_(u,"href",e.href),_(g,"src",`${h??""}/${e.slug??""}.jpg`)}),E(g),b(l,o),D()}export{W as S,U as s,w as t};
