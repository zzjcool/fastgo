"use strict";(self.webpackChunkfast_front=self.webpackChunkfast_front||[]).push([[665],{99665:function(e,n,t){t.r(n),t.d(n,{default:function(){return pe}});var a=t(59835),o=(0,a._)("div",{class:"text-h6 q-pa-md text-bold"},"常用模版",-1),l=(0,a._)("div",null,"依赖加载中...",-1);var r=t(47798),i=t.n(r),c=t(1001),u=t.n(c),s=(t(65716),t(59437),t(22725),[{name:"tdmq cloud",descript:"dd",val:t(48870).Z,tpl:t(98884).Z}]),d=t(40270),p=t(65054),v=t(19302),m=t(60499),f={class:"column q-pa-md"},h={class:"row items-center q-col-gutter-md",style:{width:"100%"}},g={class:"col-12 col-sm-6"},b={class:"q-gutter-xs"},x={class:"template-text-input"},w={class:"col-12 col-sm-6"},y={class:"q-gutter-xs"},S={class:"template-text-input"},C={class:"col-12"},q={class:"q-gutter-xs"},_={class:"template-text-input"};t(98998),t(77280),t(40702);var Z=(0,a.aZ)({name:"RenderTemplate",props:{name:String,descript:String,val:String,tpl:String,renderFunc:Function},setup:function(e){return u()(i()().mark((function n(){var o,l,r,c,s,d,f,h,g,b,x,w,y,S;return i()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=(0,v.Z)(),l="GoTemplate_".concat(e.name),r=(0,m.iH)(e.val),c=(0,m.iH)(e.tpl),s=(0,m.iH)(""),d=(0,m.iH)(!1),null!=(f=o.localStorage.getItem(l))&&""!=f&&(r.value=f),h=function(){s.value=e.renderFunc(r.value,c.value),d.value=!0},g=function(e){o.localStorage.set(l,e)},b=function(){r.value=e.val,g(r.value)},x=(0,m.iH)([]),(0,a.bv)(u()(i()().mark((function e(){var n,a;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(736),t.e(64),t.e(277)]).then(t.bind(t,72277));case 2:return n=e.sent,e.next=5,Promise.all([t.e(736),t.e(64),t.e(133)]).then(t.bind(t,32133));case 5:a=e.sent,x.value=[n.javascript(),a.oneDark];case 7:case"end":return e.stop()}}),e)})))),w=(0,m.XI)(),y=function(e){w.value=e.view},S=function(e){(0,p.Z)(e).then((function(){o.notify({message:"复制成功！",color:"positive",timeout:"1"})})).catch((function(){o.notify({message:"复制失败！",color:"negative",timeout:"1"})}))},n.abrupt("return",{extensions:x,handleReady:y,log:console.log,newVal:r,newTpl:c,output:s,isOutput:d,copyHandle:S,handleTemplate:h,handleCache:g,handleInital:b});case 17:case"end":return n.stop()}}),n)})))()},components:{Codemirror:(0,a.RC)(u()(i()().mark((function e(){var n;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(736),t.e(64),t.e(849)]).then(t.bind(t,84993));case 2:return n=e.sent,e.abrupt("return",n.Codemirror);case 4:case"end":return e.stop()}}),e)}))))}}),T=t(11639),I=t(38761),L=t.n(I),k=t(50001),F=t.n(k),H=t(46264),j=t.n(H),R=(t(34442),t(80676),t(52519),t(61732),t(58665),t(86890),t(69665),t(61957)),V=t(490),z=t(76749),N=t(33115),W=t(22857),O=t(69003),P=t(50926),Q=t(68234),B=t(70945),A=t(63842),G=t(65987),M=t(91384),U=t(22026),Y=t(50796),D=(0,m.Um)({}),E=Object.keys(B.$),X=(0,G.L)({name:"QExpansionItem",props:j()(j()(j()(j()({},B.$),A.vr),Q.S),{},{icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]}),emits:[].concat(F()(A.gH),["click","after-show","after-hide"]),setup:function(e,n){var t,o,l=n.slots,r=n.emit,i=(0,a.FN)().proxy.$q,c=(0,Q.Z)(e,i),u=(0,m.iH)(null!==e.modelValue?e.modelValue:e.defaultOpened),s=(0,m.iH)(null),d=(0,A.ZP)({showing:u}),p=d.hide,v=d.toggle,f=(0,a.Fl)((function(){return"q-expansion-item q-item-type"+" q-expansion-item--".concat(!0===u.value?"expanded":"collapsed")+" q-expansion-item--".concat(!0===e.popup?"popup":"standard")})),h=(0,a.Fl)((function(){if(void 0===e.contentInsetLevel)return null;var n=!0===i.lang.rtl?"Right":"Left";return L()({},"padding"+n,56*e.contentInsetLevel+"px")})),g=(0,a.Fl)((function(){return!0!==e.disable&&(void 0!==e.href||void 0!==e.to&&null!==e.to&&""!==e.to)})),b=(0,a.Fl)((function(){var n={};return E.forEach((function(t){n[t]=e[t]})),n})),x=(0,a.Fl)((function(){return!0===g.value||!0!==e.expandIconToggle})),w=(0,a.Fl)((function(){return void 0!==e.expandedIcon&&!0===u.value?e.expandedIcon:e.expandIcon||i.iconSet.expansionItem[!0===e.denseToggle?"denseIcon":"icon"]})),y=(0,a.Fl)((function(){return!0!==e.disable&&(!0===g.value||!0===e.expandIconToggle)}));function S(e){!0!==g.value&&v(e),r("click",e)}function C(e){13===e.keyCode&&q(e,!0)}function q(e,n){!0!==n&&null!==s.value&&s.value.focus(),v(e),(0,M.NS)(e)}function _(){r("after-show")}function Z(){r("after-hide")}function T(){void 0===t&&(t=(0,Y.Z)()),!0===u.value&&(D[e.group]=t);var n=(0,a.YP)(u,(function(n){!0===n?D[e.group]=t:D[e.group]===t&&delete D[e.group]})),l=(0,a.YP)((function(){return D[e.group]}),(function(e,n){n===t&&void 0!==e&&e!==t&&p()}));o=function(){n(),l(),D[e.group]===t&&delete D[e.group],o=void 0}}function I(){var n;return void 0!==l.header?n=[].concat(l.header({expanded:!0===u.value})):(n=[(0,a.h)(z.Z,(function(){return[(0,a.h)(N.Z,{lines:e.labelLines},(function(){return e.label||""})),e.caption?(0,a.h)(N.Z,{lines:e.captionLines,caption:!0},(function(){return e.caption})):null]}))],e.icon&&n[!0===e.switchToggleSide?"push":"unshift"]((0,a.h)(z.Z,{side:!0===e.switchToggleSide,avatar:!0!==e.switchToggleSide},(function(){return(0,a.h)(W.Z,{name:e.icon})})))),!0!==e.disable&&n[!0===e.switchToggleSide?"unshift":"push"](function(){var n={class:["q-focusable relative-position cursor-pointer"+"".concat(!0===e.denseToggle&&!0===e.switchToggleSide?" items-end":""),e.expandIconClass],side:!0!==e.switchToggleSide,avatar:e.switchToggleSide},t=[(0,a.h)(W.Z,{class:"q-expansion-item__toggle-icon"+(void 0===e.expandedIcon&&!0===u.value?" q-expansion-item__toggle-icon--rotated":""),name:w.value})];return!0===y.value&&(Object.assign(n,{tabindex:0,onClick:q,onKeyup:C}),t.unshift((0,a.h)("div",{ref:s,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),(0,a.h)(z.Z,n,(function(){return t}))}()),n}function k(){return(0,a.wy)((0,a.h)("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:h.value},(0,U.KR)(l.default)),[[R.F8,u.value]])}return(0,a.YP)((function(){return e.group}),(function(e){void 0!==o&&o(),void 0!==e&&T()})),void 0!==e.group&&T(),(0,a.Jd)((function(){void 0!==o&&o()})),function(){return(0,a.h)("div",{class:f.value},[(0,a.h)("div",{class:"q-expansion-item__container relative-position"},(t=[(n={ref:"item",style:e.headerStyle,class:e.headerClass,dark:c.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel},!0===x.value&&(n.clickable=!0,n.onClick=S,!0===g.value&&Object.assign(n,b.value)),(0,a.h)(V.Z,n,I)),(0,a.h)(O.Z,{duration:e.duration,onShow:_,onHide:Z},k)],!0===e.expandSeparator&&t.push((0,a.h)(P.Z,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:c.value}),(0,a.h)(P.Z,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:c.value})),t))]);var n,t}}}),$=t(24455),K=t(18149),J=t(69984),ee=t.n(J);var ne=(0,T.Z)(Z,[["render",function(e,n,t,o,l,r){var i=(0,a.up)("q-btn"),c=(0,a.up)("codemirror"),u=(0,a.up)("q-expansion-item");return(0,a.wg)(),(0,a.j4)(u,{label:e.name,caption:e.descript,"header-class":"bg-primary text-white",class:"expansion"},{default:(0,a.w5)((function(){return[(0,a._)("div",f,[(0,a._)("div",h,[(0,a._)("div",g,[(0,a._)("div",b,[(0,a.Wm)(i,{unelevated:"",square:"",icon:"start",color:"accent",label:"渲染",onClick:e.handleTemplate},null,8,["onClick"]),(0,a.Wm)(i,{unelevated:"",square:"",color:"primary",label:"复制到剪切板",onClick:n[0]||(n[0]=function(n){return e.copyHandle(e.val)})}),(0,a.Wm)(i,{unelevated:"",square:"",icon:"cancel",color:"primary",label:"还原",onClick:e.handleInital},null,8,["onClick"])]),(0,a._)("div",x,[(0,a.Wm)(c,{modelValue:e.newVal,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.newVal=n}),class:"template-text-input",placeholder:"变量",style:{height:"400px"},autofocus:!1,"indent-with-tab":!0,"tab-size":2,extensions:e.extensions,onReady:e.handleReady,onChange:e.handleCache},null,8,["modelValue","extensions","onReady","onChange"])])]),(0,a._)("div",w,[(0,a._)("div",y,[(0,a.Wm)(i,{unelevated:"",square:"",color:"primary",label:"复制到剪切板",onClick:n[2]||(n[2]=function(n){return e.copyHandle(e.newTpl)})})]),(0,a._)("div",S,[(0,a.Wm)(c,{modelValue:e.newTpl,"onUpdate:modelValue":n[3]||(n[3]=function(n){return e.newTpl=n}),disabled:"",class:"template-text-input",placeholder:"渲染模版",style:{height:"400px"},autofocus:!1,"indent-with-tab":!0,"tab-size":2,extensions:e.extensions,onReady:e.handleReady,onChange:e.handleTemplate},null,8,["modelValue","extensions","onReady","onChange"])])]),(0,a._)("div",C,[(0,a._)("div",q,[(0,a.Wm)(i,{unelevated:"",square:"",color:"primary",label:"复制到剪切板",onClick:n[4]||(n[4]=function(n){return e.copyHandle(e.output)})})]),(0,a._)("div",_,[(0,a.Wm)(c,{modelValue:e.output,"onUpdate:modelValue":n[5]||(n[5]=function(n){return e.output=n}),disabled:"",class:"template-text-input",placeholder:"渲染结果",style:{height:"600px"},autofocus:!1,"indent-with-tab":!0,"tab-size":2,extensions:e.extensions,onReady:e.handleReady,onChange:e.handleTemplate},null,8,["modelValue","extensions","onReady","onChange"])])])])])]})),_:1},8,["label","caption"])}]]);ee()(Z,"components",{QExpansionItem:X,QBtn:$.Z,QField:K.Z,QItem:V.Z});var te=t(33017),ae="GoTemplate",oe=(0,a.aZ)({name:"GoTemplate",setup:function(){var e=(0,v.Z)(),n=t(48870).Z,o=t(98884).Z,l=new Go,r=(0,m.iH)(!0),c=function(){var e=u()(i()().mark((function e(){var n,t,a;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("template.wasm");case 2:return n=e.sent,e.next=5,n.arrayBuffer();case 5:return t=e.sent,e.next=8,WebAssembly.instantiate(t,l.importObject);case 8:a=e.sent,l.run(a.instance),r.value=!1;case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c();var f=e.localStorage.getItem(ae),h=(0,m.iH)(""),g=(0,m.iH)(""),b=(0,m.XI)(),x=function(n){h.value=d.lW.from(n,"base64").toString("utf8"),e.localStorage.set(ae,g.value)};f&&(g.value=f,x(f));var w=(0,m.iH)({data:[]});(0,a.wF)(u()(i()().mark((function e(){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,te.A8)(0,10);case 2:w.value=e.sent;case 3:case"end":return e.stop()}}),e)}))));return(0,te.A8)(0,10),{code:h,handleReady:function(e){b.value=e.view},log:console.log,handSrc:function(n){g.value=d.lW.from(n,"utf-8").toString("base64"),e.localStorage.set(ae,g.value)},handDst:x,base64:g,copyHandle:function(n){(0,p.Z)(n).then((function(){e.notify({message:"复制成功！",color:"positive",timeout:"1"})})).catch((function(){e.notify({message:"复制失败！",color:"negative",timeout:"1"})}))},wasmLoading:r,renderFunc:function(e,n){return render(e,n)},val:n,tpl:o,tplList:s,rows:w}},components:{RenderTemplate:ne}}),le=t(69885),re=t(13902),ie=t(20431),ce=(0,G.L)({name:"QInnerLoading",props:j()(j()(j()({},Q.S),ie.D),{},{showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]}),setup:function(e,n){var t=n.slots,o=(0,a.FN)(),l=(0,Q.Z)(e,o.proxy.$q),r=(0,ie.Z)(e,(0,a.Fl)((function(){return e.showing}))),i=r.transition,c=r.transitionStyle,u=(0,a.Fl)((function(){return"q-inner-loading absolute-full column flex-center"+(!0===l.value?" q-inner-loading--dark":"")})),s=(0,a.Fl)((function(){return"q-inner-loading__label"+(void 0!==e.labelClass?" ".concat(e.labelClass):"")}));function d(){return!0===e.showing?(0,a.h)("div",{class:u.value,style:c.value},void 0!==t.default?t.default():(n=[(0,a.h)(re.Z,{size:e.size,color:e.color})],void 0!==e.label&&n.push((0,a.h)("div",{class:s.value,style:e.labelStyle},[e.label])),n)):null;var n}return function(){return(0,a.h)(R.uT,{name:i.value,appear:!0},d)}}}),ue=t(8313),se=[(0,a.h)("g",{transform:"translate(-20,-20)"},[(0,a.h)("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[(0,a.h)("animateTransform",{attributeName:"transform",type:"rotate",from:"90 50 50",to:"0 50 50",dur:"1s",repeatCount:"indefinite"})])]),(0,a.h)("g",{transform:"translate(20,20) rotate(15 50 50)"},[(0,a.h)("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[(0,a.h)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"90 50 50",dur:"1s",repeatCount:"indefinite"})])])],de=(0,G.L)({name:"QSpinnerGears",props:ue.G,setup:function(e){var n=(0,ue.Z)(e),t=n.cSize,o=n.classes;return function(){return(0,a.h)("svg",{class:o.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},se)}}});var pe=(0,T.Z)(oe,[["render",function(e,n,t,r,i,c){var u=(0,a.up)("render-template"),s=(0,a.up)("q-separator"),d=(0,a.up)("q-spinner-gears"),p=(0,a.up)("q-inner-loading"),v=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(v,null,{default:(0,a.w5)((function(){return[o,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.rows.data.list,(function(n,t){return(0,a.wg)(),(0,a.j4)(u,{key:t,name:n.title,descript:n.remark,renderFunc:e.renderFunc,val:n.defaultValues,tpl:n.template},null,8,["name","descript","renderFunc","val","tpl"])})),128)),(0,a.Wm)(s),(0,a.Wm)(p,{showing:e.wasmLoading},{default:(0,a.w5)((function(){return[(0,a.Wm)(d,{size:"50px",color:"primary"}),l]})),_:1},8,["showing"])]})),_:1})}]]);ee()(oe,"components",{QPage:le.Z,QSeparator:P.Z,QInnerLoading:ce,QSpinnerGears:de,QField:K.Z})},98884:function(e,n){n.Z='#############################################\n# 查询PVC信息\ncurl --location --request GET \'http://tdmq-cloud.tdmq-system.svc.cluster.local:10105/pvc?releaseName={{ .clusterId }}&label={{ .pvcLabel }}\' | python3 -m json.tool\n\n\n#############################################\n# pvc扩容\ncurl -X PUT "http://tdmq-cloud:10105/pvc" -H "Authorization: 39c20f65-dc80-4db4-ac23-601eb24d9b0b" -H "Content-Type: application/json" -d \'\n{\n  "releaseName": "{{ .clusterId }}",\n  "label": "{{ .pvcLabel }}",\n  "storage": {{ .pvcStorage }}\n}\n\' | python3 -m json.tool\n\n\n#############################################\n# pvc 同步成最大的盘\ncurl -X POST "http://tdmq-cloud:10105/pvc" -H "Authorization: 39c20f65-dc80-4db4-ac23-601eb24d9b0b" -H "Content-Type: application/json" -d \'\n{\n  "releaseName": "{{ .clusterId }}",\n  "label": "{{ .pvcLabel }}"\n}\n\' | python3 -m json.tool\n\n\n#############################################\n'},48870:function(e,n){n.Z='# 集群名\nclusterId: "pulsar-zzj"\n\n################################\n# PVC 扩容相关\n# pvc 标签\npvcLabel: "pulsar-bookie-journal"\npvcStorage: 57\n'}}]);