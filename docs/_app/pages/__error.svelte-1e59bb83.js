import{S,i as T,s as j,e as H,t as h,k as q,c as b,a as y,g as c,d as p,n as C,f as v,H as _,h as k,I as E}from"../chunks/vendor-c3419a43.js";function I(n){let t,o,i,a,l,u=n[0].host+"",m,f=n[0].path+"",d,g;return{c(){t=H("h1"),o=h(n[1]),i=q(),a=H("h2"),l=h("The page you are looking for, https://"),m=h(u),d=h(f),g=h(" could not be found.")},l(e){t=b(e,"H1",{});var s=y(t);o=c(s,n[1]),s.forEach(p),i=C(e),a=b(e,"H2",{});var r=y(a);l=c(r,"The page you are looking for, https://"),m=c(r,u),d=c(r,f),g=c(r," could not be found."),r.forEach(p)},m(e,s){v(e,t,s),_(t,o),v(e,i,s),v(e,a,s),_(a,l),_(a,m),_(a,d),_(a,g)},p(e,[s]){s&2&&k(o,e[1]),s&1&&u!==(u=e[0].host+"")&&k(m,u),s&1&&f!==(f=e[0].path+"")&&k(d,f)},i:E,o:E,d(e){e&&p(t),e&&p(i),e&&p(a)}}}function A({page:n,error:t,status:o}){return{props:{page:n,status:o,message:t.message}}}function w(n,t,o){let{page:i}=t,{status:a}=t;return n.$$set=l=>{"page"in l&&o(0,i=l.page),"status"in l&&o(1,a=l.status)},[i,a]}class B extends S{constructor(t){super();T(this,t,w,I,j,{page:0,status:1})}}export{B as default,A as load};
