"use strict";(self["webpackChunkfast_front"]=self["webpackChunkfast_front"]||[]).push([[575],{86575:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var a=t(59835),r=t(86970),o=function(e){return(0,a.dD)("data-v-627b3850"),e=e(),(0,a.Cn)(),e},l=o((function(){return(0,a._)("div",{class:"text-h6"},"用户管理",-1)})),u={style:{width:"100%"}},i={class:"text-subtitle1 text-white text-weight-bold"};function c(e,n,t,o,c,d){var s=(0,a.up)("q-card-section"),m=(0,a.up)("q-separator"),p=(0,a.up)("q-checkbox"),f=(0,a.up)("q-th"),w=(0,a.up)("q-tr"),g=(0,a.up)("edit-row"),b=(0,a.up)("q-td"),v=(0,a.up)("q-table"),h=(0,a.up)("q-card"),_=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(_,{class:"column"},{default:(0,a.w5)((function(){return[(0,a.Wm)(h,{class:"list-card",square:"",flat:""},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{class:"bg-primary text-white"},{default:(0,a.w5)((function(){return[l]})),_:1}),(0,a.Wm)(m),(0,a._)("div",u,[(0,a.Wm)(v,{rows:e.rows,loading:e.loading,columns:e.columns,selection:"multiple",selected:e.selected,"onUpdate:selected":n[0]||(n[0]=function(n){return e.selected=n}),"row-key":"name",flat:"",pagination:e.pageConfig,"onUpdate:pagination":n[1]||(n[1]=function(n){return e.pageConfig=n}),onRequest:e.newPagination,square:""},{header:(0,a.w5)((function(e){return[(0,a.Wm)(w,{props:e},{default:(0,a.w5)((function(){return[(0,a.Wm)(f,{class:"bg-primary"},{default:(0,a.w5)((function(){return[(0,a.Wm)(p,{modelValue:e.selected,"onUpdate:modelValue":function(n){return e.selected=n},color:"accent","keep-color":"",class:"text-black"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(function(n){return(0,a.wg)(),(0,a.j4)(f,{key:n.name,props:e,class:"bg-primary"},{default:(0,a.w5)((function(){return[(0,a._)("div",i,(0,r.zw)(n.label),1)]})),_:2},1032,["props"])})),128))]})),_:2},1032,["props"])]})),"body-cell-operation":(0,a.w5)((function(n){return[(0,a.Wm)(b,{props:n},{default:(0,a.w5)((function(){return[(0,a.Wm)(g,{data:n,afterFunc:e.afterSubmit,loading:e.loading},null,8,["data","afterFunc","loading"])]})),_:2},1032,["props"])]})),_:1},8,["rows","loading","columns","selected","pagination","onRequest"])])]})),_:1})]})),_:1})}t(65716),t(59437),t(24110);var d=t(19302),s=t(47798),m=t.n(s),p=t(1001),f=t.n(p),w=t(91569),g="/admin/code";function b(){return v.apply(this,arguments)}function v(){return v=f()(m()().mark((function e(){var n,t,a,r,o=arguments;return m()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:0,t=o.length>1&&void 0!==o[1]?o[1]:10,a=o.length>2?o[2]:void 0,r=o.length>3?o[3]:void 0,e.abrupt("return",(0,w.api)({url:g+"/list",method:"get",params:{page:n,pageSize:t,id:a,name:r}}));case 5:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}var h=t(60499),_={class:"text-left q-gutter-md"},W=(0,a._)("div",{class:"row no-wrap items-center"},[(0,a._)("div",{class:"col text-h6 ellipsis"}," 编辑 ")],-1),q={class:"column"};function Z(e,n,t,r,o,l){var u=(0,a.up)("q-card-section"),i=(0,a.up)("q-icon"),c=(0,a.up)("q-input"),d=(0,a.up)("q-btn"),s=(0,a.up)("q-form"),m=(0,a.up)("q-separator"),p=(0,a.up)("q-card"),f=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)("div",_,[(0,a.Wm)(d,{icon:"edit",unelevated:"",round:"",size:"sm",color:"accent",onClick:n[6]||(n[6]=function(n){return e.card=!0})},{default:(0,a.w5)((function(){return[(0,a.Wm)(f,{modelValue:e.card,"onUpdate:modelValue":n[5]||(n[5]=function(n){return e.card=n})},{default:(0,a.w5)((function(){return[(0,a.Wm)(p,{class:"create-card"},{default:(0,a.w5)((function(){return[(0,a.Wm)(u,{class:"bg-primary text-white"},{default:(0,a.w5)((function(){return[W]})),_:1}),(0,a.Wm)(u,{class:""},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{onSubmit:n[4]||(n[4]=function(n){return e.onSubmit(e.newData)}),class:"q-gutter-md"},{default:(0,a.w5)((function(){return[(0,a.Wm)(c,{filled:"",modelValue:e.newData.name,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.newData.name=n}),color:"accent",disable:"",hint:"不可更改","label-color":"accent",label:"站点名称","lazy-rules":"",rules:[function(e){return e&&e.length>0||"至少要写点什么吧"}]},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(i,{name:"public",color:"accent"})]})),_:1},8,["modelValue","rules"]),(0,a.Wm)(c,{filled:"",modelValue:e.newData.home,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.newData.home=n}),hint:"站点主页的地址，为了安全，只支持https协议",label:"主页",color:"accent","label-color":"accent","lazy-rules":"",rules:[function(e){return e&&e.length>0||"至少要写点什么吧"}]},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(i,{name:"link",color:"accent"})]})),_:1},8,["modelValue","rules"]),(0,a.Wm)(c,{filled:"",modelValue:e.newData.comment,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.newData.comment=n}),label:"介绍",color:"accent","label-color":"accent","lazy-rules":""},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(i,{name:"comment",color:"accent"})]})),_:1},8,["modelValue"]),(0,a.Wm)(c,{hint:"每条记录一行",label:"匹配URL",modelValue:e.text,"onUpdate:modelValue":n[3]||(n[3]=function(n){return e.text=n}),filled:"",color:"accent","label-color":"accent",autogrow:""},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(i,{name:"add_link",color:"accent"})]})),_:1},8,["modelValue"]),(0,a._)("div",q,[(0,a.Wm)(d,{label:"确认",type:"submit",unelevated:"",color:"accent"})])]})),_:1})]})),_:1}),(0,a.Wm)(m)]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})])}var y=t(70917),V=(0,a.aZ)({name:"editRow",props:{data:Object,loading:Boolean,afterFunc:{type:Function,default:function(){}}},setup:function(e){var n=(0,h.iH)(!1),t=(0,d.Z)(),a=(0,h.iH)({id:e.data.row.id,name:e.data.row.name,home:e.data.row.home,comment:e.data.row.comment,enable:e.data.row.enable});function r(e){return e?e.join("\n"):""}var o=(0,h.iH)(r(e.data.row.importHost));function l(e){return u.apply(this,arguments)}function u(){return u=f()(m()().mark((function a(r){return m()().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.importHost=o.value.split("\n"),a.next=3,(0,y.TI)(r).catch((function(e){return t.notify({type:"negative",message:"更新失败"}),Promise.reject(error)}));case 3:t.notify({type:"positive",message:"更新成功"}),n.value=!1,e.afterFunc();case 6:case"end":return a.stop()}}),a)}))),u.apply(this,arguments)}return{newData:a,onSubmit:l,card:n,text:o}}}),x=t(11639),Q=t(24455),k=t(32074),C=t(44458),D=t(63190),S=t(8326),H=t(66611),P=t(22857),U=t(50926),z=t(69984),R=t.n(z);const F=(0,x.Z)(V,[["render",Z]]);var j=F;R()(V,"components",{QBtn:Q.Z,QDialog:k.Z,QCard:C.Z,QCardSection:D.Z,QForm:S.Z,QInput:H.Z,QIcon:P.Z,QSeparator:U.Z});var T=[{name:"id",align:"left",label:"邀请码",field:"id",sortable:!1},{name:"name",align:"left",label:"名称",field:"name",sortable:!1},{name:"usageRemaining",align:"left",label:"剩余可用次数",field:"usageRemaining",sortable:!1},{name:"balance",align:"left",label:"默认余额",field:"balance",sortable:!1},{name:"operation",align:"left",label:"操作",field:"operation",sortable:!1}],I=(0,a.aZ)({name:"CodeAdmin",setup:function(){var e=(0,h.iH)({page:1,rowsPerPage:10,rowsNumber:0}),n=(0,h.iH)([]),t=(0,h.iH)(!1),r=(0,h.iH)([]),o=((0,d.Z)(),function(a){t.value=!0,b(a.pagination.page-1,a.pagination.rowsPerPage).then((function(t){n.value=t.data.list,e.value={page:t.data.page+1,rowsPerPage:t.data.pageSize,rowsNumber:t.data.count},r.value=[]})).finally((function(){t.value=!1}))});function l(){o({pagination:e.value})}return(0,a.bv)((function(){l()})),{columns:T,selected:r,rows:n,pageConfig:e,newPagination:o,loading:t,afterSubmit:l}},components:{editRow:j}}),B=t(69885),N=t(42449),A=t(31233),K=t(21682),L=t(11221),O=t(67220);const Y=(0,x.Z)(I,[["render",c],["__scopeId","data-v-627b3850"]]);var E=Y;R()(I,"components",{QPage:B.Z,QCard:C.Z,QCardSection:D.Z,QSeparator:U.Z,QTable:N.Z,QTr:A.Z,QTh:K.Z,QCheckbox:L.Z,QTd:O.Z})}}]);