import{a as h,t as q}from"./disclose-version.B6U6Qg9F.js";import{e as M,m as G,v as H,k as J,t as y,o as K,g as u,w as A,j as v,s as w,x as N,l as i,y as F}from"./index-client.Br0fZ5fH.js";import{c as P,d as Q,p as R,e as U,b as L}from"./props.C2gVJaBR.js";import{a as V,e as O,i as j,s as E}from"./attributes.Bkhssghn.js";import{t as I}from"./Story.B4pc1Kd9.js";import{b as W}from"./entry.BxTYcY-z.js";function X(e,a,t,r=t){e.addEventListener(a,t);const s=e.__on_r;s?e.__on_r=()=>{s(),r()}:e.__on_r=r,V()}function T(e,a,t){if(e.multiple)return $(e,a);for(var r of e.options){var s=m(r);if(P(s,a)){r.selected=!0;return}}(!t||a!==void 0)&&(e.selectedIndex=-1)}function Y(e,a){M(()=>{var t=new MutationObserver(()=>{var r=e.__value;T(e,r)});return t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function Z(e,a,t=a){var r=!0;X(e,"change",()=>{var s;if(e.multiple)s=[].map.call(e.querySelectorAll(":checked"),m);else{var l=e.querySelector(":checked");s=l&&m(l)}t(s)}),M(()=>{var s=a();if(T(e,s,r),r&&s===void 0){var l=e.querySelector(":checked");l!==null&&(s=m(l),t(s))}e.__value=s,r=!1}),Y(e)}function $(e,a){for(var t of e.options)t.selected=~a.indexOf(m(t))}function m(e){return"__value"in e?e.__value:e.value}var ee=(e,a,t)=>a(i(t)===a()?void 0:i(t)),te=q('<button class="svelte-1k9if33"><img class="icon svelte-1k9if33"> <span class="name svelte-1k9if33"> </span></button>'),ae=q("<option> </option>"),re=q('<div class="filters--desktop svelte-1k9if33"></div> <div class="filters--mobile svelte-1k9if33"><select id="filter-select" class="svelte-1k9if33"><option> </option><!></select></div>',1);function ue(e,a){G(a,!0);let t=R(a,"activeFilter",15),r=N(void 0);function s(_){A(r,U(_))}H(()=>{t()&&A(r,void 0)});var l=re(),b=J(l);O(b,21,()=>a.filters,j,(_,f)=>{var n=te();const o=F(()=>{var S,z;return(z=(S=i(f))==null?void 0:S.toLowerCase())==null?void 0:z.replace(/[^a-z]/g,"_")}),g=F(()=>i(r)?i(o)===i(r):i(o)===t()||!t());n.__click=[ee,t,o];var d=u(n),p=w(d,2),k=u(p,!0);v(p),v(n),y(()=>{I(n,"active",i(g)),E(d,"src",`${W??""}/assets/stickers/${i(o)??""}@2x.png`),E(d,"alt",`${i(o)??""} sticker`),L(k,i(f))}),h(_,n)}),v(b);var C=w(b,2),x=u(C),c=u(x);c.value=((c.__value="")==null,"");var B=u(c,!0);v(c);var D=w(c);return O(D,17,()=>a.filters,j,(_,f)=>{var n=ae();const o=F(()=>{var p,k;return(k=(p=i(f))==null?void 0:p.toLowerCase())==null?void 0:k.replace(/[^a-z]/g,"_")});var g={},d=u(n,!0);v(n),y(()=>{g!==(g=i(o))&&(n.value=(n.__value=i(o))==null?"":i(o)),L(d,i(f))}),h(_,n)}),v(x),v(C),y(()=>{I(b,"resource",a.resource),L(B,a.resource?"Choose Type":"All")}),Z(x,t),h(e,l),K({set:s})}Q(["click"]);export{ue as F,X as l};
