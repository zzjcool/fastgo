(()=>{"use strict";var e={6618:(e,t,n)=>{var r=n(1957),o=n(1947),a=n(499),i=n(9835);function s(e,t,n,r,o,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const l=(0,i.aZ)({name:"App"});var c=n(1639);const u=(0,c.Z)(l,[["render",s]]),d=u;var p=n(3340),m=n(3746);const f=(0,p.h)((()=>{const e=(0,m.WB)();return e}));var h=n(8339);const v=[{path:"/",component:()=>Promise.all([n.e(736),n.e(626)]).then(n.bind(n,6626)),children:[{name:"home",path:"",component:()=>Promise.all([n.e(736),n.e(968)]).then(n.bind(n,968))},{name:"whitelist",path:"whitelist",component:()=>Promise.all([n.e(736),n.e(168)]).then(n.bind(n,1168))},{name:"node",path:"node",component:()=>Promise.all([n.e(736),n.e(118)]).then(n.bind(n,9118))},{name:"base64",path:"base64",component:()=>Promise.all([n.e(736),n.e(890)]).then(n.bind(n,7890))},{name:"ChatGpt",path:"chat",component:()=>Promise.all([n.e(736),n.e(968)]).then(n.bind(n,968))},{name:"template",path:"template",component:()=>Promise.all([n.e(736),n.e(45)]).then(n.bind(n,8045))},{name:"rocketmq",path:"rocketmq",children:[{name:"cvm",path:"cvm",component:()=>Promise.all([n.e(736),n.e(199)]).then(n.bind(n,8199))},{name:"zone",path:"zone",component:()=>Promise.all([n.e(736),n.e(877)]).then(n.bind(n,4877))}]},{name:"admin",path:"admin",children:[{name:"admin",path:"",component:()=>Promise.all([n.e(736),n.e(158)]).then(n.bind(n,7326))},{name:"templateAdmin",path:"template",component:()=>Promise.all([n.e(736),n.e(641)]).then(n.bind(n,2641))},{name:"zone",path:"zone",component:()=>Promise.all([n.e(736),n.e(877)]).then(n.bind(n,4877))}]}]},{path:"/login",component:()=>Promise.all([n.e(736),n.e(186)]).then(n.bind(n,5186)),children:[{name:"login",path:"",component:()=>Promise.all([n.e(736),n.e(31)]).then(n.bind(n,339))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(736),n.e(862)]).then(n.bind(n,1862))}],b=v,g=(0,p.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return t}));async function y(e,t){const n=e(d);n.use(o.Z,t);const r="function"===typeof f?await f({}):f;n.use(r);const i=(0,a.Xl)("function"===typeof g?await g({store:r}):g);return r.use((({store:e})=>{e.router=i})),{app:n,store:r,router:i}}var w=n(6827),P=n(4891),k=n(3703);const j={config:{notify:{position:"top"}},plugins:{Notify:w.Z,Dialog:P.Z,LocalStorage:k.Z}},C="";async function O({app:e,router:t,store:n},r){let o=!1;const a=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<r.length;c++)try{await r[c]({app:e,router:t,store:n,ssrContext:null,redirect:i,urlPath:s,publicPath:C})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}y(r.ri,j).then((e=>{const[t,r]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(n.bind(n,1569))]).then((t=>{const n=r(t).filter((e=>"function"===typeof e));O(e,n)}))}))},1569:(e,t,n)=>{n.r(t),n.d(t,{api:()=>l,default:()=>c});n(6822),n(9665);var r=n(3340),o=n(9981),a=n.n(o),i=n(6928),s=n(6827);n(2777);const l=a().create({baseURL:"https://api.fastgo.run",timeout:6e5}),c=(0,r.xr)((({app:e,router:t})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=l;const n=(0,i.t)();l.interceptors.request.use((e=>(n.token&&(e.headers.Authorization="Bearer "+n.token),e))),l.interceptors.response.use((e=>{const t=e.data;return 200!==e.status?(console.log(e),Promise.reject(new Error(t.data.message||"系统错误！"))):t}),(e=>e.response?401==e.response.status?(s.Z.create({type:"negative",message:"登陆过期，请重新登陆！"}),n.setToken(""),t.push({name:"login"}),Promise.reject(null)):(console.log(e.response),Promise.reject(e)):(console.log(e),s.Z.create({type:"negative",message:"服务器繁忙！"}),Promise.reject(null))))}))},6928:(e,t,n)=>{n.d(t,{t:()=>l});var r=n(3746),o=n(499),a=n(3703),i=n(2777);const s="auth-token",l=(0,r.Q_)("auth",(()=>{const e=a.Z.getItem(s),t=(0,o.iH)(e);function n(e){a.Z.set(s,e),t.value=e,(0,i.L)().updateInfo()}return{token:t,setToken:n}}))},2777:(e,t,n)=>{n.d(t,{L:()=>c});var r=n(3746),o=n(1569);const a="/user";async function i(){return(0,o.api)({url:a+"/info",method:"get"})}var s=n(499),l=n(6928);const c=(0,r.Q_)("user",(()=>{const e=(0,s.BK)((0,s.qj)({id:"",name:"",email:""}));function t({id:t,name:n,email:r}){e.id.value=t,e.name.value=n,e.email.value=r}async function n(){""!=(0,l.t)().token&&await i().then((e=>{t(e.data)}))}return n(),{info:e,setInfo:t,updateInfo:n}}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{31:"6216a9fb",45:"ca23e51f",118:"9324d2f1",158:"9cb43575",168:"0841fc87",186:"31988fb6",199:"feb4ae32",626:"e1f369b1",641:"2a9b0a4d",862:"9987c348",877:"4f72f843",890:"754b17b4",968:"fa85d567"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{45:"4eb4e97c",118:"1686a7b1",168:"772ca3cf",186:"533cb56b",199:"6d2d4067",626:"e2e1f2de",641:"6c77507b",877:"6d2d4067",890:"6d2d4067",968:"b1bd4fe7"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="fast-front:";n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,r,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=r=>new Promise(((o,a)=>{var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,null,o,a)})),o={143:0};n.f.miniCss=(e,t)=>{var n={45:1,118:1,168:1,186:1,199:1,626:1,641:1,877:1,890:1,968:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,l=r=>{if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,s,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=globalThis["webpackChunkfast_front"]=globalThis["webpackChunkfast_front"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[736],(()=>n(6618)));r=n.O(r)})();