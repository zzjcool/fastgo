(self["webpackChunkfast_front"]=self["webpackChunkfast_front"]||[]).push([[91],{53091:function(e,A,n){"use strict";n.r(A),n.d(A,{default:function(){return ye}});var t=n(59835),a=n(86970),r=n(61957),s={class:"col column items-lg-center full-width"},l={key:1,class:"column items-center justify-center",style:{"padding-bottom":"80px",width:"100%"}},i={class:"col",style:{width:"90%","max-width":"800px"}},u=(0,t._)("div",{style:{height:"20px"}},null,-1),c={key:2,style:{"word-wrap":"break-word","white-space":"pre-wrap"}},o={class:"self-end",style:{height:"50px"}},p=(0,t.Uk)("清空对话记录"),g={class:"col q-pl-sm"},x={class:"self-end",style:{height:"50px"}};function f(e,A,f,d,v,w){var m=(0,t.up)("blank-page"),b=(0,t.up)("q-spinner-dots"),k=(0,t.up)("MarkdownViewer"),y=(0,t.up)("q-chat-message"),C=(0,t.up)("q-item-section"),h=(0,t.up)("q-item"),Z=(0,t.up)("q-list"),D=(0,t.up)("q-menu"),Q=(0,t.up)("q-btn"),T=(0,t.up)("q-input"),J=(0,t.up)("q-form"),S=(0,t.up)("q-page-sticky"),q=(0,t.up)("q-page"),B=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(q,{style:{width:"100%"},class:"column"},{default:(0,t.w5)((function(){return[(0,t._)("div",s,[e.messages.length<=0?((0,t.wg)(),(0,t.j4)(m,{key:0})):((0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("div",i,[u,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.messages,(function(e,A){return(0,t.wg)(),(0,t.j4)(y,{key:A,sent:"user"==e.role,hidden:"system"==e.role,avatar:"user"==e.role?n(71079):n(59894)},{default:(0,t.w5)((function(){return[""==e.content?((0,t.wg)(),(0,t.j4)(b,{key:0,size:"40px"})):"assistant"==e.role?((0,t.wg)(),(0,t.j4)(k,{key:1,content:e.content},null,8,["content"])):((0,t.wg)(),(0,t.iD)("pre",c,(0,a.zw)(e.content),1))]})),_:2},1032,["sent","hidden","avatar"])})),128))])])),(0,t.Wm)(S,{position:"bottom",expand:"",class:"column items-center justify-center content-center",style:{transform:"translate(0px, -20px)",left:"0"}},{default:(0,t.w5)((function(){return[(0,t.Wm)(J,{style:{height:"50px",width:"90%","max-width":"800px"},class:"col bg-white row items-center shadow-2 shadow-transition rounded-borders"},{default:(0,t.w5)((function(){return[(0,t._)("div",o,[(0,t.Wm)(Q,{class:"full-height",color:"primary",flat:"",icon:"menu"},{default:(0,t.w5)((function(){return[(0,t.Wm)(D,{class:""},{default:(0,t.w5)((function(){return[(0,t.Wm)(Z,{style:{"min-width":"100px"}},{default:(0,t.w5)((function(){return[(0,t.wy)(((0,t.wg)(),(0,t.j4)(h,{onClick:e.cleanMsgs,clickable:""},{default:(0,t.w5)((function(){return[(0,t.Wm)(C,null,{default:(0,t.w5)((function(){return[p]})),_:1})]})),_:1},8,["onClick"])),[[B]])]})),_:1})]})),_:1})]})),_:1})]),(0,t._)("div",g,[(0,t.Wm)(T,{modelValue:e.msg,"onUpdate:modelValue":A[0]||(A[0]=function(A){return e.msg=A}),autogrow:"",dense:"",class:"hide-scrollbar no-scroll overflow-hidden-y",borderless:"",placeholder:e.tips,onKeypress:(0,r.D2)(e.sendMessageHandler,["enter"]),onKeyup:(0,r.D2)(e.sendMessageHandler,["enter"]),"input-style":"font-size:120%;"},null,8,["modelValue","placeholder","onKeypress","onKeyup"])]),(0,t._)("div",x,[(0,t.Wm)(Q,{dense:"",flat:"",disable:e.isSending,loading:e.isSending,class:"full-height q-pr-md",icon:"send",onClick:e.sendMessageHandler},null,8,["disable","loading","onClick"])])]})),_:1})]})),_:1})])]})),_:1})}var d=n(47798),v=n.n(d),w=n(1001),m=n.n(w),b=(n(69665),n(25328),n(65716),n(59437),n(24110),n(52519),{class:"row flex align-center full-height full-width flex-center justify-center items-center"}),k=["innerHTML"];function y(e,A,n,a,r,s){return(0,t.wg)(),(0,t.iD)("div",b,[(0,t._)("div",{innerHTML:e.markdown,class:"col markdown-body bg-transparent",ref:"mdRef"},null,8,k)])}n(52512);var C=n(27678),h=n.n(C),Z=(n(57493),n(50519)),D=n(60499),Q=n(60899),T=n(24455);var J=(0,t.aZ)({name:"MarkdownViewer",props:{content:{type:String,default:""}},setup:function(e){var A=new(h())({html:!1,linkify:!0,typographer:!0,langPrefix:"hljs-",highlight:function(e,n){if(n&&Z.Z.getLanguage(n))try{return'<pre class="hljs hide-scrollbar"><code>'+Z.Z.highlight(e,{language:n,ignoreIllegals:!0}).value+"</code></pre>"}catch(t){}return'<pre class="hljs hide-scrollbar"><code>'+A.utils.escapeHtml(e)+"</code></pre>"}}),n=(0,D.iH)(A.render(e.content)),a=(0,D.iH)(null),r=(0,Q.Z)((function(){n.value=A.render(e.content)}),30);return(0,t.m0)((function(){e.content,r()})),{markdown:n,mdRef:a}}}),S=n(11639);const q=(0,S.Z)(J,[["render",y]]);var B=q,L=(0,t._)("div",{class:"text-h3 text-weight-medium"},"ChatGPT",-1),P={class:"text-h6 text-weight-medium"},M=(0,t.Uk)("基于OpenAI "),K=(0,t.Uk)("gpt-3.5-turbo"),W=(0,t.Uk)(" API");function j(e,A,n,a,r,s){var l=(0,t.up)("q-badge"),i=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(i,{class:"column justify-center content-center items-center q-gutter-lg"},{default:(0,t.w5)((function(){return[L,(0,t._)("div",P,[M,(0,t.Wm)(l,null,{default:(0,t.w5)((function(){return[K]})),_:1}),W])]})),_:1})}var I=(0,t.aZ)({name:"BlankPage",setup:function(){return{}},components:{}}),V=n(69885),Y=n(20990),U=n(69984),z=n.n(U);const H=(0,S.Z)(I,[["render",j]]);var X=H;z()(I,"components",{QPage:V.Z,QBadge:Y.Z});var G=n(96928),N=n(40270),F=n(19302),O=(n(95019),n(28339));n(11476),n(24972),n(22725),n(91569);function E(e){return R.apply(this,arguments)}function R(){return R=m()(v()().mark((function e(A){var n,t,a,r;return v()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="https://api.fastgo.run/chat/sse",t=(0,G.t)(),e.next=4,fetch(n,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token},method:"POST",body:JSON.stringify({messages:A})});case 4:return a=e.sent,r=a.body.pipeThrough(new TextDecoderStream).getReader(),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function _(e,A,n){return $.apply(this,arguments)}function $(){return $=m()(v()().mark((function e(A,n,t){var a,r,s,l,i,u,c,o,p,g;return v()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E(A);case 2:a=e.sent;case 3:return e.next=6,a.read();case 6:if(r=e.sent,s=r.value,l=r.done,!l){e.next=12;break}return t("DONE",s),e.abrupt("break",33);case 12:i=s.split("\n"),u=0;case 15:if(!(u<i.length)){e.next=31;break}c=i[u],o=ee(c),p=c.substring(o.length+2),e.t0=o,e.next=""===e.t0?22:"ERROR"===e.t0?25:26;break;case 22:return g=N.lW.from(c,"base64").toString("utf8"),n(g),e.abrupt("break",28);case 25:throw p;case 26:return t(o,p),e.abrupt("break",28);case 28:u++,e.next=15;break;case 31:e.next=3;break;case 33:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}function ee(e){var A=/^\s*\[([^\]]+)\]/,n=e.match(A);return n?n[1]:""}var Ae=n(96072),ne=n(3746),te=n(63703),ae="chat-messages",re={role:"system",content:"你是ChatGPT，你的回答将用markdown展示。"},se=(0,D.iH)([re]),le=(0,ne.Q_)("chat",(function(){var e=te.Z.getItem(ae);function A(){return se}function n(){te.Z.set(ae,se.value)}function t(){se.value=[re],n()}return null!=e&&(se.value=e),{getMsgs:A,saveMsgs:n,cleanMsgs:t}})),ie='<!DOCTYPE html>\n<html>\n<head>\n        <title>Speed Testtitle>\n        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">\n        <script>\n                $(document).ready(function() {\n                        btn-test").click(function() {\n                                var startTime = new Date().getTime();\n                                $.ajax({\n                                        url: "https://www.google.com",\n                                        success: function(response) {\n                                                var endTime = new Date().getTime();\n                                                var speed = (endTime - startTime)/1000;\n                                                $("#speed-result").html("Your speed is " + speed.toFixed(2) + " seconds                                    },\n                                        error: function() {\n                                                $("#speed-result").html("Something went wrong.");\n                                        }\n                                });\n                        });\n                });\n</head>\n<body>\n        <h1>Speed Test</h1>\n        <button id="btn-test-speed">Test Speed</button>\n<div id="</body>\n</html>\n\n注：本代码使用了jQuery库，所以需要从Google的CDN下载jQuery库来使用。本代码通过发送异步请求测试执行速度并计算结果，结果以秒为单位。****\n好的，以下是几个常用的markdown语法示例：\n',ue=(0,t.aZ)({name:"ChatGPT",setup:function(){var e=(0,G.t)(),A=(0,D.iH)([{role:"assistant",content:ie+"\n# 标题\n使用#号表示标题，可使用1-6个#，分别表示一级到六级标题\n\n# 一级标题\n## 二级标题\n### 三级标题\n\n# 列表\n使用-或*表示无序列表，或数字和句点表示有序列表：使用-或*表示无序列表，或数字和句点表示有序列表使用-或*表示无序列表，或数字和句点表示有序列表使用-或*表示无序列表，或数字和句点表示有序列表使用-或*表示无序列表，或数字和句点表示有序列表使用-或*表示无序列表，或数字和句点表示有序列表\n\n- 无序列表1\n- 无序列表2\n- 无序列表3\n\n1. 有序列表1\n2. 有序列表2\n3. 有序列表3\n\n# 强调\n使用*或_包裹文本表示斜体，使用**或__包裹文本表示加粗：\n\n*这是斜体文本*\n_这也是斜体文本_\n\n**这是加粗文本**\n__这也是加粗文本__\n\n# 链接\n使用[]和()包裹文本来表示链接及其描述：\n\n[百度网址](https://www.baidu.com)\n\n# 图片\n使用![]()来插入图片及其描述，其中，[]内为图片描述，()内为图片链接\n\n![图片描述](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png)\n\n这些是基本的`markdown`语法，你可以通过不同的符号和语法进行更多的样式和格式调整。\n\n```go\nfunc main () {\n  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n  a:=back\n  c:=go()\n}\n```\n      "}]);A.value=[{role:"system",content:"你是ChatGPT，你的回答将用markdown展示。"}];var n=(0,F.Z)(),a=(0,O.tv)(),r=(0,D.iH)(!1),s=(0,D.iH)(new Date),l=(0,D.iH)(""),i=l.value,u=(0,D.iH)("开始一段对话吧"),c=le();function o(e){l.value=i;var t=A.value.pop();"assistant"==t.role&&A.value.pop(),e&&n.notify({type:"negative",message:"出错了！错误信息："+e})}A=c.getMsgs();var p=function(){var s=m()(v()().mark((function s(u){var p,g;return v()().wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(e.token||(n.notify({type:"negative",message:"请登陆后使用"}),a.push({name:"login"})),"keyup"!=u.type){s.next=4;break}return u.shiftKey||"\n"!=l.value||(l.value=""),s.abrupt("return");case 4:if(!u.shiftKey){s.next=6;break}return s.abrupt("return");case 6:if(!r.value&&""!=l.value){s.next=8;break}return s.abrupt("return");case 8:r.value=!0,A.value.push({role:"user",content:l.value}),i=l.value,l.value="",p={role:"assistant",content:""},g=JSON.parse(JSON.stringify(A.value)),A.value.push(p),_(g,(function(e){A.value[A.value.length-1].content=A.value[A.value.length-1].content.concat(e)}),(function(e,A){switch(e){case"DONE":(0,t.Y3)((0,Q.Z)((function(){var e=(0,Ae.H)();e.getMainRef().value.setScrollPercentage("vertical",100,800)}),10)),c.saveMsgs();break;case"Insufficient balance":n.notify({type:"negative",message:"余额不足，请先充值"}),o();break;default:console.log(e,A);break}})).catch(o).finally((function(){r.value=!1})),(0,t.Y3)((0,Q.Z)((function(){var e=(0,Ae.H)();e.getMainRef().value.setScrollPercentage("vertical",100,800)}),10));case 17:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),g=(0,D.iH)(window.innerHeight);return(0,t.YP)(A.value,(function(){}),{immediate:!0}),{messages:A,msg:l,sendMessageHandler:p,isSending:r,vh:g,tips:u,freshKey:s,cleanMsgs:c.cleanMsgs}},components:{MarkdownViewer:B,BlankPage:X}}),ce=n(396),oe=n(47501),pe=n(30627),ge=n(8326),xe=n(47447),fe=n(13246),de=n(490),ve=n(76749),we=n(66611),me=n(18149),be=n(62146);const ke=(0,S.Z)(ue,[["render",f]]);var ye=ke;z()(ue,"components",{QPage:V.Z,QChatMessage:ce.Z,QSpinnerDots:oe.Z,QPageSticky:pe.Z,QForm:ge.Z,QBtn:T.Z,QMenu:xe.Z,QList:fe.Z,QItem:de.Z,QItemSection:ve.Z,QInput:we.Z,QField:me.Z}),z()(ue,"directives",{ClosePopup:be.Z})},59894:function(e,A,n){e.exports=n.p+"img/openai.581b372c.jpg"},71079:function(e){e.exports="data:image/png;base64,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"}}]);