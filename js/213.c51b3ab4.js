(globalThis["webpackChunkfast_front"]=globalThis["webpackChunkfast_front"]||[]).push([[213],{6213:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>N});var n=t(9835),l=t(6970),s=t(1957);const a={class:"col column items-lg-center"},r={key:1,class:"column items-center justify-center",style:{"padding-bottom":"80px"}},c={class:"col",style:{width:"90%","max-width":"800px"}},g=(0,n._)("div",{style:{height:"20px"}},null,-1),o={key:2,style:{"word-wrap":"break-word","white-space":"pre-wrap"}},i={style:{height:"50px",width:"90%","max-width":"800px"},class:"col"};function p(A,e,p,u,w,v){const d=(0,n.up)("blank-page"),b=(0,n.up)("q-spinner-dots"),k=(0,n.up)("MarkdownViewer"),C=(0,n.up)("q-chat-message"),f=(0,n.up)("q-btn"),m=(0,n.up)("q-input"),y=(0,n.up)("q-page-sticky"),J=(0,n.up)("q-scroll-area"),Z=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(Z,{style:{},class:"column"},{default:(0,n.w5)((()=>[(0,n._)("div",a,[(0,n.Wm)(J,{class:"",visible:!1,style:(0,l.j5)([{width:"100%"},{height:A.vh-59+"px"}]),ref:"chatScroll"},{default:(0,n.w5)((()=>[A.messages.length<=0?((0,n.wg)(),(0,n.j4)(d,{key:0})):((0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",c,[g,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(A.messages,((A,e)=>((0,n.wg)(),(0,n.j4)(C,{key:e,sent:"user"==A.role,avatar:"user"==A.role?t(1079):t(9894)},{default:(0,n.w5)((()=>[""==A.content?((0,n.wg)(),(0,n.j4)(b,{key:0,size:"40px"})):"assistant"==A.role?((0,n.wg)(),(0,n.j4)(k,{key:1,content:A.content},null,8,["content"])):((0,n.wg)(),(0,n.iD)("pre",o,(0,l.zw)(A.content),1))])),_:2},1032,["sent","avatar"])))),128))])])),(0,n.Wm)(y,{position:"bottom",expand:"",class:"column items-center justify-center content-center",style:{transform:"translate(0px, -20px)",left:"0"}},{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n.Wm)(m,{class:"full-width shadow-2 shadow-transition rounded-borders q-pl-lg q-pr-sm bg-white hide-scrollbar",modelValue:A.msg,"onUpdate:modelValue":e[0]||(e[0]=e=>A.msg=e),autogrow:"",borderless:"",placeholder:"开始一段对话吧",onKeypress:(0,s.D2)(A.sendMessageHandler,["enter"]),onKeyup:(0,s.D2)(A.sendMessageHandler,["enter"]),"input-style":"font-size:120%;"},{after:(0,n.w5)((()=>[(0,n.Wm)(f,{dense:"",flat:"",disable:A.isSending,loading:A.isSending,class:"",icon:"send",onClick:A.sendMessageHandler},null,8,["disable","loading","onClick"])])),_:1},8,["modelValue","onKeypress","onKeyup"])])])),_:1})])),_:1},8,["style"])])])),_:1})}t(9665);const u=["innerHTML"];function w(A,e,t,l,s,a){return(0,n.wg)(),(0,n.iD)("div",{innerHTML:A.markdown,class:"markdown-body bg-transparent",ref:"mdRef"},null,8,u)}var v=t(2512),d=(t(7493),t(519)),b=t(499),k=t(4455);const C=(0,n.aZ)({name:"MarkdownViewer",props:{content:{type:String,default:""}},setup(A){d.Z.configure({tabReplace:"  ",classPrefix:"hljs-"}),v.TU.setOptions({renderer:new v.TU.Renderer,pedantic:!1,gfm:!0,tables:!0,breaks:!0,sanitize:!1,langPrefix:"hljs-",smartLists:!0,smartypants:!1,xhtml:!1,highlight:function(A){return d.Z.highlightAuto(A).value}});let e=(0,b.iH)();console.log(k.Z.render),e=(0,v.TU)(A.content).replace(/<pre>/g,"<pre class='hljs hide-scrollbar'>");let t=(0,b.iH)(null);return{markdown:e,mdRef:t}}});var f=t(1639);const m=(0,f.Z)(C,[["render",w]]),y=m;var J=t(1569);const Z="/chat";async function D(A){return(0,J.api)({url:Z,method:"post",data:{messages:A}})}const Q=(0,n._)("div",{class:"text-h3 text-weight-medium"},"ChatGPT",-1),T={class:"text-h6 text-weight-medium"},B=(0,n.Uk)("基于OpenAI "),L=(0,n.Uk)("gpt-3.5-turbo"),q=(0,n.Uk)(" API");function S(A,e,t,l,s,a){const r=(0,n.up)("q-badge"),c=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(c,{class:"column justify-center content-center items-center q-gutter-lg"},{default:(0,n.w5)((()=>[Q,(0,n._)("div",T,[B,(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[L])),_:1}),q])])),_:1})}const P=(0,n.aZ)({name:"BlankPage",setup(){return{}},components:{}});var K=t(9885),W=t(990),V=t(9984),M=t.n(V);const U=(0,f.Z)(P,[["render",S]]),Y=U;M()(P,"components",{QPage:K.Z,QBadge:W.Z});const z=(0,n.aZ)({name:"ChatGPT",setup(){let A=(0,b.iH)([]),e=(0,b.iH)(!1),t=(0,b.iH)("");const l=(0,b.iH)(null);let s=n=>{if("keyup"==n.type)return void(n.shiftKey||"\n"!=t.value||(t.value=""));if(n.shiftKey)return;if(e.value||""==t.value)return;A.value.push({role:"user",content:t.value});let l=t.value;t.value="";let s={role:"assistant",content:""};e.value=!0,D(A.value).then((e=>{A.value.pop(),s.content=e.data.message.content,A.value.push(s)})).catch((e=>{console.log(e),A.value.pop(),A.value.pop(),t.value=l})).finally((()=>{e.value=!1})),A.value.push(s)},a=(0,b.iH)(window.innerHeight);return(0,n.YP)(A.value,(()=>{null!=l.value&&(0,n.Y3)((()=>{l.value.setScrollPercentage("vertical",100,800)}))}),{immediate:!0}),{messages:A,msg:t,sendMessageHandler:s,isSending:e,chatScroll:l,vh:a}},components:{MarkdownViewer:y,BlankPage:Y}});var I=t(6663),h=t(396),X=t(7501),j=t(627),G=t(6611),H=t(8149);const F=(0,f.Z)(z,[["render",p]]),N=F;M()(z,"components",{QPage:K.Z,QScrollArea:I.Z,QChatMessage:h.Z,QSpinnerDots:X.Z,QPageSticky:j.Z,QInput:G.Z,QBtn:k.Z,QField:H.Z})},9894:(A,e,t)=>{A.exports=t.p+"img/openai.581b372c.jpg"},1079:A=>{A.exports="data:image/png;base64,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"}}]);