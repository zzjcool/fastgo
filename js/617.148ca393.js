"use strict";(self.webpackChunkfast_front=self.webpackChunkfast_front||[]).push([[617],{69617:function(t,e,r){r.r(e),r.d(e,{default:function(){return P}});r(69665);var n=r(59835),s=r(86970),a=(0,n.Uk)("Prompt App"),i=(0,n._)("div",null,' "Prompt"是一个关于你想让机器执行的任务或需要它生成的文本的简短描述。这个描述将指导机器生成、翻译或回答你的问题，就像你向机器下达一个指令或提出一个问题一样，期望从机器获取输出结果。 ',-1),c={class:"main-width"},o={class:"row q-col-gutter-md"},u={key:0,class:"col-12 row justify-center items-center"},l={class:"text-weight-bold text-h5"},p={style:{"min-height":"120px","max-height":"120px"},class:"q-px-lg col overflow-auto row justify-center items-center"},m={class:"q-py-md"},d=(0,n._)("div",{class:"full-width"},[(0,n._)("div",{class:"row q-py-md"},[(0,n._)("div",{class:"col-6"})])],-1);var f=r(47798),w=r.n(f),g=r(1001),h=r.n(g),v=r(60499),_=r(53173),q=(0,n.aZ)({name:"AppList",setup:function(){var t=(0,_.a)(),e=(0,v.iH)({prompts:[]});return(0,n.bv)(h()(w()().mark((function r(){return w()().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.getPromptAppPublicList();case 2:e.value.prompts=r.sent,console.log(e.value.prompts);case 4:case"end":return r.stop()}}),r)})))),{meta:e}},components:{}}),x=r(11639),y=r(69885),k=r(44458),b=r(63190),W=r(50926),Z=r(13902),C=r(66663),Q=r(69984),A=r.n(Q);var P=(0,x.Z)(q,[["render",function(t,e,r,f,w,g){var h=this,v=(0,n.up)("q-card-section"),_=(0,n.up)("q-separator"),q=(0,n.up)("q-card"),x=(0,n.up)("q-spinner"),y=(0,n.up)("q-scroll-area"),k=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(k,{class:"column items-center q-gutter-md q-py-md"},{default:(0,n.w5)((function(){return[(0,n.Wm)(q,{flat:"",class:"main-width bg-primary text-white"},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,{class:"text-weight-bold text-h5 bg-primary text-white"},{default:(0,n.w5)((function(){return[a]})),_:1}),(0,n.Wm)(_,{class:"q-mx-md",dark:""}),(0,n.Wm)(v,{class:"text-grey q-gutter-md"},{default:(0,n.w5)((function(){return[i]})),_:1})]})),_:1}),(0,n._)("div",c,[(0,n._)("div",o,[0==t.meta.prompts.length?((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(x,{color:"primary",size:"3em"})])):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.meta.prompts,(function(t,e){return(0,n.wg)(),(0,n.iD)("div",{key:e,class:"col-12 col-sm-4"},[(0,n.Wm)(q,{flat:"",onClick:function(e){return h.$router.push({name:"promptApp",query:{promptId:t.id}})},class:"fit column cursor-pointer"},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,{class:"bg-primary text-white"},{default:(0,n.w5)((function(){return[(0,n._)("div",l,(0,s.zw)(t.title),1)]})),_:2},1024),(0,n._)("div",p,[(0,n.Wm)(y,{class:"fit"},{default:(0,n.w5)((function(){return[(0,n._)("div",m,(0,s.zw)(t.comment),1)]})),_:2},1024)]),d]})),_:2},1032,["onClick"])])})),128))])])]})),_:1})}]]);A()(q,"components",{QPage:y.Z,QCard:k.Z,QCardSection:b.Z,QSeparator:W.Z,QSpinner:Z.Z,QScrollArea:C.Z})}}]);