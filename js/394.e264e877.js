"use strict";(self.webpackChunkfast_front=self.webpackChunkfast_front||[]).push([[394],{43394:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});n(98998),n(65716),n(40702);var a=n(59835),l=n(86970),o={class:"row justify-between"},i={class:"text-h2 text-weight-bold"},r={class:"column items-center column"},u=(0,a._)("div",{class:"full-width"},[(0,a._)("div",{class:"q-px-md q-py-md bg-secondary text-white"}," 参数修改 ")],-1),c={class:"overflow-hidden bg-transparent q-pa-md",style:{width:"200px"}},s={class:"row q-col-gutter-md"},d={class:"bg-white rounded-borders overflow-hidden"},p={class:"row justify-between"},f={class:"text-subtitle2 col"},b={class:"column justify-end q-pl-sm"};var v=n(47798),g=n.n(v),h=n(1001),m=n.n(h),w=n(4138),y=n.n(w),q=(n(34442),n(31408),n(52519),n(61732),n(25328),n(69665),n(59437),n(24110),n(60499)),_=n(82289),k=n(5292),x=n(19302),S=n(28339),C=n(53173),P=(0,a.aZ)({name:"PromptApp",setup:function(){var e=(0,x.Z)(),t=(0,S.yj)(),n=(0,S.tv)(),l=(0,C.a)(),o=t.query.promptId;if(!o)return e.notify({type:"negative",message:"prompt不存在"}),void n.back();String.prototype.interpolate=function(e){try{var t=Object.keys(e),n=Object.values(e);return y()(Function,t.concat(["return `".concat(this,"`;")])).apply(void 0,n)}catch(a){return"出错了："+a}};var i=(0,q.iH)({appMeta:{},input:"",output:"",isSetting:!1,isSending:!1});function r(e,t){var n={};e&&e.forEach((function(e){n[e.name]=e.defaultValue}));for(var a=JSON.parse(JSON.stringify(t)),l=0;l<t.length;l++)a[l].content=t[l].content.interpolate(n);return a}function u(t){t&&e.notify({type:"negative",message:"出错了！错误信息："+t})}return(0,a.bv)(m()(g()().mark((function t(){var a;return g()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getPromptAppPublicList(o);case 2:if(!((a=t.sent).length<=0)){t.next=7;break}return e.notify({type:"negative",message:"prompt不存在"}),n.back(),t.abrupt("return");case 7:i.value.appMeta=a[0].meta;case 8:case"end":return t.stop()}}),t)})))),{buildInitMessage:r,onRun:function(){if(""!=i.value.input){i.value.output="",i.value.isSending=!0;var t=r(i.value.appMeta.values,i.value.appMeta.messages);t.push({role:"user",content:i.value.input}),(0,_.fh)(t,(function(e){i.value.output+=e}),(function(t,n){switch(t){case"DONE":break;case"Insufficient balance":e.notify({type:"negative",message:"余额不足，请先前往个人信息页面充值"}),u();break;default:console.log(t,n)}})).catch(u).finally((function(){i.value.isSending=!1}))}else e.notify({type:"negative",message:"请输入后运行！"})},data:i}},components:{MarkdownViewer:k.default}}),Z=n(11639),j=n(69885),F=n(44458),M=n(63190),Q=n(57133),W=n(22857),L=n(46264),B=n.n(L),O=(n(80676),n(65735),n(58665),n(32074)),V=n(97858),A=n(74397),H=n(65987),I=(0,H.L)({name:"QPopupProxy",props:B()(B()({},A.u),{},{breakpoint:{type:[String,Number],default:450}}),emits:["show","hide"],setup:function(e,t){var n=t.slots,l=t.emit,o=t.attrs,i=(0,a.FN)().proxy,r=i.$q,u=(0,q.iH)(!1),c=(0,q.iH)(null),s=(0,a.Fl)((function(){return parseInt(e.breakpoint,10)})),d=(0,A.Z)({showing:u}).canShow;function p(){return r.screen.width<s.value||r.screen.height<s.value?"dialog":"menu"}var f=(0,q.iH)(p()),b=(0,a.Fl)((function(){return"menu"===f.value?{maxHeight:"99vh"}:{}}));function v(e){u.value=!0,l("show",e)}function g(e){u.value=!1,f.value=p(),l("hide",e)}return(0,a.YP)((function(){return p()}),(function(e){!0!==u.value&&(f.value=e)})),Object.assign(i,{show:function(e){!0===d(e)&&c.value.show(e)},hide:function(e){c.value.hide(e)},toggle:function(e){c.value.toggle(e)}}),function(){var t,l=B()(B()(B()({ref:c},b.value),o),{},{onShow:v,onHide:g});return"dialog"===f.value?t=O.Z:(t=V.Z,Object.assign(l,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),(0,a.h)(t,l,n.default)}}}),N=n(66611),z=n(50926),U=n(24455),D=n(47501),J=n(30627),R=(n(46727),["top","right","bottom","left"]),E={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:function(e){return R.includes(e)}},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function $(e,t){return{formClass:(0,a.Fl)((function(){return"q-fab--form-".concat(!0===e.square?"square":"rounded")})),stacked:(0,a.Fl)((function(){return!1===e.externalLabel&&["top","bottom"].includes(e.labelPosition)})),labelProps:(0,a.Fl)((function(){if(!0===e.externalLabel){var n=null===e.hideLabel?!1===t.value:e.hideLabel;return{action:"push",data:{class:[e.labelClass,"q-fab__label q-tooltip--style q-fab__label--external"+" q-fab__label--external-".concat(e.labelPosition)+(!0===n?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,"q-fab__label q-fab__label--internal q-fab__label--internal-".concat(e.labelPosition)+(!0===e.hideLabel?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}}))}}var K=n(63842),Y=n(22026),T=n(95439),G=["up","right","down","left"],X=["left","center","right"],ee=(0,H.L)({name:"QFab",props:B()(B()(B()({},E),K.vr),{},{icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:function(e){return G.includes(e)}},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:function(e){return X.includes(e)}}}),emits:K.gH,setup:function(e,t){var n=t.slots,l=(0,q.iH)(null),o=(0,q.iH)(!0===e.modelValue),i=(0,a.FN)().proxy.$q,r=$(e,o),u=r.formClass,c=r.labelProps,s=(0,a.Fl)((function(){return!0!==e.persistent})),d=(0,K.ZP)({showing:o,hideOnRouteChange:s}),p=d.hide,f=d.toggle,b=(0,a.Fl)((function(){return{opened:o.value}})),v=(0,a.Fl)((function(){return"q-fab z-fab row inline justify-center"+" q-fab--align-".concat(e.verticalActionsAlign," ").concat(u.value)+(!0===o.value?" q-fab--opened":" q-fab--closed")})),g=(0,a.Fl)((function(){return"q-fab__actions flex no-wrap inline"+" q-fab__actions--".concat(e.direction)+" q-fab__actions--".concat(!0===o.value?"opened":"closed")})),h=(0,a.Fl)((function(){return"q-fab__icon-holder "+" q-fab__icon-holder--".concat(!0===o.value?"opened":"closed")}));function m(t,l){var o=n[t],r="q-fab__".concat(t," absolute-full");return void 0===o?(0,a.h)(W.Z,{class:r,name:e[l]||i.iconSet.fab[l]}):(0,a.h)("div",{class:r},o(b.value))}function w(){var t=[];return!0!==e.hideIcon&&t.push((0,a.h)("div",{class:h.value},[m("icon","icon"),m("active-icon","activeIcon")])),""===e.label&&void 0===n.label||t[c.value.action]((0,a.h)("div",c.value.data,void 0!==n.label?n.label(b.value):[e.label])),(0,Y.vs)(n.tooltip,t)}return(0,a.JJ)(T.Lr,{showing:o,onChildClick:function(e){p(e),null!==l.value&&l.value.$el.focus()}}),function(){return(0,a.h)("div",{class:v.value},[(0,a.h)(U.Z,B()(B()({ref:l,class:u.value},e),{},{noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":!0===o.value?"true":"false","aria-haspopup":"true",onClick:f}),w),(0,a.h)("div",{class:g.value},(0,Y.KR)(n.default))])}}}),te=(n(3452),n(91384)),ne={start:"self-end",center:"self-center",end:"self-start"},ae=Object.keys(ne),le=(0,H.L)({name:"QFabAction",props:B()(B()({},E),{},{icon:{type:String,default:""},anchor:{type:String,validator:function(e){return ae.includes(e)}},to:[String,Object],replace:Boolean}),emits:["click"],setup:function(e,t){var n=t.slots,l=t.emit,o=(0,a.f3)(T.Lr,(function(){return{showing:{value:!0},onChildClick:te.ZT}})),i=$(e,o.showing),r=i.formClass,u=i.labelProps,c=(0,a.Fl)((function(){var t=ne[e.anchor];return r.value+(void 0!==t?" ".concat(t):"")})),s=(0,a.Fl)((function(){return!0===e.disable||!0!==o.showing.value}));function d(e){o.onChildClick(e),l("click",e)}function p(){var t=[];return void 0!==n.icon?t.push(n.icon()):""!==e.icon&&t.push((0,a.h)(W.Z,{name:e.icon})),""===e.label&&void 0===n.label||t[u.value.action]((0,a.h)("div",u.value.data,void 0!==n.label?n.label():[e.label])),(0,Y.vs)(n.default,t)}var f=(0,a.FN)();return Object.assign(f.proxy,{click:d}),function(){return(0,a.h)(U.Z,B()(B()({class:c.value},e),{},{noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:s.value,onClick:d}),p)}}}),oe=n(69984),ie=n.n(oe);var re=(0,Z.Z)(P,[["render",function(e,t,n,v,g,h){var m=(0,a.up)("q-skeleton"),w=(0,a.up)("q-input"),y=(0,a.up)("q-card"),q=(0,a.up)("q-popup-proxy"),_=(0,a.up)("q-icon"),k=(0,a.up)("q-separator"),x=(0,a.up)("q-btn"),S=(0,a.up)("q-card-section"),C=(0,a.up)("q-spinner-dots"),P=(0,a.up)("MarkdownViewer"),Z=(0,a.up)("q-fab-action"),j=(0,a.up)("q-fab"),F=(0,a.up)("q-page-sticky"),M=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(M,{class:"column items-center q-gutter-md q-py-md"},{default:(0,a.w5)((function(){return[(0,a.Wm)(y,{flat:"",class:"main-width bg-primary text-white"},{default:(0,a.w5)((function(){return[(0,a.Wm)(S,null,{default:(0,a.w5)((function(){return[(0,a._)("div",o,[(0,a._)("div",i,[(0,a.Uk)((0,l.zw)(e.data.appMeta.title),1),e.data.appMeta.title?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m,{key:0,width:"100px",bordered:"",type:"text"}))]),(0,a.Wm)(_,{size:"28px",color:"accent",name:"settings"},{default:(0,a.w5)((function(){return[(0,a.Wm)(q,{class:"no-shadow bg-transparent"},{default:(0,a.w5)((function(){return[(0,a.Wm)(y,{flat:"",class:"bg-main"},{default:(0,a.w5)((function(){return[(0,a._)("div",r,[u,(0,a._)("div",c,[(0,a._)("div",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.data.appMeta.values,(function(e,t){return(0,a.wg)(),(0,a.iD)("div",{key:t,class:"col-12"},[(0,a._)("div",d,[(0,a.Wm)(w,{"bg-color":"white",borderless:"",modelValue:e.defaultValue,"onUpdate:modelValue":function(t){return e.defaultValue=t},label:e.comment,class:"q-px-md bg-white","hide-bottom-space":"",placeholder:"Placeholder",standout:"bg-white"},null,8,["modelValue","onUpdate:modelValue","label"])])])})),128))])])])]})),_:1})]})),_:1})]})),_:1})]),(0,a.Wm)(k,{class:"q-my-md",dark:""}),(0,a._)("div",p,[(0,a._)("pre",f,[(0,a.Uk)((0,l.zw)(e.data.appMeta.comment),1),e.data.appMeta.title?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m,{key:0,bordered:"",type:"text"}))]),(0,a._)("div",b,[(0,a.Wm)(x,{flat:"",round:"",size:"20px",disable:e.data.isSending,class:"text-white bg-green-6",onClick:t[0]||(t[0]=function(t){return e.onRun()}),icon:"play_arrow"},null,8,["disable"])])])]})),_:1})]})),_:1}),(0,a.Wm)(y,{flat:"",class:"main-width overflow-hidden bg-white"},{default:(0,a.w5)((function(){return[(0,a.Wm)(w,{"bg-color":"white",borderless:"",autofocus:"","hide-bottom-space":"",placeholder:e.data.appMeta.example,class:"q-px-md q-py-md","input-class":"hide-scrollbar","input-style":"min-height:50px;max-height:unset;color:black;font-size:18px;padding:0;",autogrow:"",modelValue:e.data.input,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.data.input=t}),type:"textarea"},null,8,["placeholder","modelValue"])]})),_:1}),""!=e.data.output||e.data.isSending?((0,a.wg)(),(0,a.j4)(y,{key:0,flat:"",class:"main-width overflow-hidden q-px-md q-py-sm"},{default:(0,a.w5)((function(){return[""==e.data.output?((0,a.wg)(),(0,a.j4)(C,{key:0,size:"40px"})):((0,a.wg)(),(0,a.j4)(P,{key:1,content:e.data.output},null,8,["content"]))]})),_:1})):(0,a.kq)("",!0),(0,a.Wm)(F,{position:"bottom-right",offset:[18,18]},{default:(0,a.w5)((function(){return[(0,a.Wm)(j,{flat:"",style:{background:"rgba(154, 154, 154, 0.5)"},"label-class":"bg-accent","text-color":"black",color:"transparent",icon:"keyboard_arrow_up",direction:"up"},{default:(0,a.w5)((function(){return[(0,a.Wm)(Z,{label:"开发中","external-label":"",unelevated:"","label-position":"left",color:"accent","text-color":"white",icon:"settings"})]})),_:1})]})),_:1})]})),_:1})}]]);ie()(P,"components",{QPage:j.Z,QCard:F.Z,QCardSection:M.Z,QSkeleton:Q.ZP,QIcon:W.Z,QPopupProxy:I,QInput:N.Z,QSeparator:z.Z,QBtn:U.Z,QSpinnerDots:D.Z,QPageSticky:J.Z,QFab:ee,QFabAction:le})}}]);