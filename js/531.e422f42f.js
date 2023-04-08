"use strict";(self.webpackChunkfast_front=self.webpackChunkfast_front||[]).push([[531],{84531:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var a=t(59835),r=t(86970),o=function(e){return(0,a.dD)("data-v-62a79118"),e=e(),(0,a.Cn)(),e}((function(){return(0,a._)("div",{class:"text-h6"},"用户管理",-1)})),l={style:{width:"100%"}},u={class:"text-subtitle1 text-white text-weight-bold"};t(65716),t(59437),t(24110);var c=t(19302),i=t(92138),d=t(60499),s={class:"text-left q-gutter-md"},p=(0,a._)("div",{class:"row no-wrap items-center"},[(0,a._)("div",{class:"col text-h6 ellipsis"}," 编辑 ")],-1),m={class:"column"};var f=t(47798),w=t.n(f),g=t(1001),b=t.n(g),v=t(70917),h=(0,a.aZ)({name:"editWhite",props:{data:Object,loading:Boolean,afterFunc:{type:Function,default:function(){}}},setup:function(e){var n=(0,d.iH)(!1),t=(0,c.Z)(),a=(0,d.iH)({id:e.data.row.id,name:e.data.row.name,home:e.data.row.home,comment:e.data.row.comment,enable:e.data.row.enable});var r,o=(0,d.iH)((r=e.data.row.importHost)?r.join("\n"):"");function l(){return(l=b()(w()().mark((function a(r){return w()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.importHost=o.value.split("\n"),a.next=3,(0,v.TI)(r).catch((function(e){return t.notify({type:"negative",message:"更新失败"}),Promise.reject(error)}));case 3:t.notify({type:"positive",message:"更新成功"}),n.value=!1,e.afterFunc();case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return{newData:a,onSubmit:function(e){return l.apply(this,arguments)},card:n,text:o}}}),y=t(11639),_=t(24455),W=t(32074),Z=t(44458),q=t(63190),Q=t(8326),V=t(66611),x=t(22857),k=t(50926),C=t(69984),D=t.n(C);var U=(0,y.Z)(h,[["render",function(e,n,t,r,o,l){var u=(0,a.up)("q-card-section"),c=(0,a.up)("q-icon"),i=(0,a.up)("q-input"),d=(0,a.up)("q-btn"),f=(0,a.up)("q-form"),w=(0,a.up)("q-separator"),g=(0,a.up)("q-card"),b=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(d,{icon:"edit",unelevated:"",round:"",size:"sm",color:"accent",onClick:n[6]||(n[6]=function(n){return e.card=!0})},{default:(0,a.w5)((function(){return[(0,a.Wm)(b,{modelValue:e.card,"onUpdate:modelValue":n[5]||(n[5]=function(n){return e.card=n})},{default:(0,a.w5)((function(){return[(0,a.Wm)(g,{class:"create-card"},{default:(0,a.w5)((function(){return[(0,a.Wm)(u,{class:"bg-secondary text-white"},{default:(0,a.w5)((function(){return[p]})),_:1}),(0,a.Wm)(u,{class:""},{default:(0,a.w5)((function(){return[(0,a.Wm)(f,{onSubmit:n[4]||(n[4]=function(n){return e.onSubmit(e.newData)}),class:"q-gutter-md"},{default:(0,a.w5)((function(){return[(0,a.Wm)(i,{filled:"",modelValue:e.newData.name,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.newData.name=n}),color:"accent",disable:"",hint:"不可更改","label-color":"accent",label:"站点名称","lazy-rules":"",rules:[function(e){return e&&e.length>0||"至少要写点什么吧"}]},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(c,{name:"public",color:"accent"})]})),_:1},8,["modelValue","rules"]),(0,a.Wm)(i,{filled:"",modelValue:e.newData.home,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.newData.home=n}),hint:"站点主页的地址，为了安全，只支持https协议",label:"主页",color:"accent","label-color":"accent","lazy-rules":"",rules:[function(e){return e&&e.length>0||"至少要写点什么吧"}]},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(c,{name:"link",color:"accent"})]})),_:1},8,["modelValue","rules"]),(0,a.Wm)(i,{filled:"",modelValue:e.newData.comment,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.newData.comment=n}),label:"介绍",color:"accent","label-color":"accent","lazy-rules":""},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(c,{name:"comment",color:"accent"})]})),_:1},8,["modelValue"]),(0,a.Wm)(i,{hint:"每条记录一行",label:"匹配URL",modelValue:e.text,"onUpdate:modelValue":n[3]||(n[3]=function(n){return e.text=n}),filled:"",color:"accent","label-color":"accent",autogrow:""},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(c,{name:"add_link",color:"accent"})]})),_:1},8,["modelValue"]),(0,a._)("div",m,[(0,a.Wm)(d,{label:"确认",type:"submit",unelevated:"",color:"accent"})])]})),_:1})]})),_:1}),(0,a.Wm)(w)]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})])}]]);D()(h,"components",{QBtn:_.Z,QDialog:W.Z,QCard:Z.Z,QCardSection:q.Z,QForm:Q.Z,QInput:V.Z,QIcon:x.Z,QSeparator:k.Z});t(95149);var F={class:"row no-wrap text-h6 items-center"},S=(0,a._)("div",{class:"col ellipsis"},"余额修改",-1),H={class:"q-pa-md"},P={class:"column"};var j=t(41272),I=(0,a.aZ)({name:"updateFiled",props:{data:Object,loading:Boolean,afterFunc:{type:Function,default:function(){}}},setup:function(e){var n=(0,d.iH)(!1),t=(0,c.Z)(),r=(0,d.iH)(0),o=(0,d.iH)(0);function l(){return u.apply(this,arguments)}function u(){return(u=b()(w()().mark((function n(){var t;return w()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,j.$Z)(e.data.row.email);case 2:t=n.sent,r.value=t.data.balance;case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function i(){return i=b()(w()().mark((function a(r,o){return w()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,j.vS)(r,o).catch((function(e){return t.notify({type:"negative",message:"更新失败"}),Promise.reject(error)}));case 2:t.notify({type:"positive",message:"更新成功"}),l(),n.value=!1,e.afterFunc();case 6:case"end":return a.stop()}}),a)}))),i.apply(this,arguments)}return(0,a.bv)(b()(w()().mark((function e(){return w()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l();case 1:case"end":return e.stop()}}),e)})))),{layout:n,onUpdate:function(e,n){return i.apply(this,arguments)},balance:r,delta:o}}}),z=t(20990),B=t(42449);var T=(0,y.Z)(I,[["render",function(e,n,t,r,o,l){var u=(0,a.up)("q-badge"),c=(0,a.up)("q-icon"),i=(0,a.up)("q-card-section"),d=(0,a.up)("q-input"),s=(0,a.up)("q-separator"),p=(0,a.up)("q-btn"),m=(0,a.up)("q-card"),f=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)("div",{class:"row",onClick:n[3]||(n[3]=function(n){return e.layout=!e.layout})},[null!=e.balance?((0,a.wg)(),(0,a.j4)(u,{key:0,color:"accent",label:e.balance.toFixed(3)},null,8,["label"])):(0,a.kq)("",!0),(0,a.Wm)(f,{modelValue:e.layout,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.layout=n})},{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{class:"create-card"},{default:(0,a.w5)((function(){return[(0,a.Wm)(i,{class:"bg-primary text-accent"},{default:(0,a.w5)((function(){return[(0,a._)("div",F,[(0,a.Wm)(c,{name:"warning"}),S])]})),_:1}),(0,a._)("div",H,[(0,a.Wm)(d,{type:"number",hint:"增加或者减少余额",modelValue:e.delta,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.delta=n})},null,8,["modelValue"])]),(0,a.Wm)(s),(0,a.Wm)(i,{class:""},{default:(0,a.w5)((function(){return[(0,a._)("div",P,[(0,a.Wm)(p,{label:"更新",color:"accent",unelevated:"",onClick:n[1]||(n[1]=function(n){return e.onUpdate(e.data.row.email,parseFloat(e.delta))})})])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])}]]);D()(I,"components",{QBadge:z.Z,QDialog:W.Z,QCard:Z.Z,QCardSection:q.Z,QIcon:x.Z,QInput:V.Z,QSeparator:k.Z,QBtn:_.Z,QTable:B.Z});var R=[{name:"id",align:"left",label:"ID",field:"id",sortable:!1},{name:"email",align:"left",label:"邮箱",field:"email",sortable:!1},{name:"name",align:"left",label:"名称",field:"name",sortable:!1},{name:"balance",align:"left",label:"余额",field:"balance",sortable:!1},{name:"operation",align:"left",label:"操作",field:"operation",sortable:!1}],E=(0,a.aZ)({name:"UserAdmin",setup:function(){var e=(0,d.iH)({page:1,rowsPerPage:10,rowsNumber:0}),n=(0,d.iH)([]),t=(0,d.iH)(!1),r=(0,d.iH)([]),o=((0,c.Z)(),function(a){t.value=!0,(0,i.lE)(a.pagination.page-1,a.pagination.rowsPerPage).then((function(t){n.value=t.data.list,e.value={page:t.data.page+1,rowsPerPage:t.data.pageSize,rowsNumber:t.data.count},r.value=[]})).finally((function(){t.value=!1}))});function l(){o({pagination:e.value})}return(0,a.bv)((function(){l()})),{columns:R,selected:r,rows:n,pageConfig:e,newPagination:o,loading:t,afterSubmit:l}},components:{updateBalance:T,EditWhite:U}}),N=t(69885),O=t(31233),A=t(21682),K=t(11221),L=t(67220);var Y=(0,y.Z)(E,[["render",function(e,n,t,c,i,d){var s=(0,a.up)("q-card-section"),p=(0,a.up)("q-separator"),m=(0,a.up)("q-checkbox"),f=(0,a.up)("q-th"),w=(0,a.up)("q-tr"),g=(0,a.up)("update-balance"),b=(0,a.up)("q-td"),v=(0,a.up)("edit-white"),h=(0,a.up)("q-table"),y=(0,a.up)("q-card"),_=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(_,{class:"column"},{default:(0,a.w5)((function(){return[(0,a.Wm)(y,{class:"list-card",square:"",flat:""},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{class:"bg-primary text-white"},{default:(0,a.w5)((function(){return[o]})),_:1}),(0,a.Wm)(p),(0,a._)("div",l,[(0,a.Wm)(h,{rows:e.rows,loading:e.loading,columns:e.columns,selection:"multiple",selected:e.selected,"onUpdate:selected":n[0]||(n[0]=function(n){return e.selected=n}),"row-key":"name",flat:"",pagination:e.pageConfig,"onUpdate:pagination":n[1]||(n[1]=function(n){return e.pageConfig=n}),onRequest:e.newPagination,square:""},{header:(0,a.w5)((function(e){return[(0,a.Wm)(w,{props:e},{default:(0,a.w5)((function(){return[(0,a.Wm)(f,{class:"bg-primary"},{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{modelValue:e.selected,"onUpdate:modelValue":function(n){return e.selected=n},color:"accent","keep-color":"",class:"text-black"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(function(n){return(0,a.wg)(),(0,a.j4)(f,{key:n.name,props:e,class:"bg-primary"},{default:(0,a.w5)((function(){return[(0,a._)("div",u,(0,r.zw)(n.label),1)]})),_:2},1032,["props"])})),128))]})),_:2},1032,["props"])]})),"body-cell-balance":(0,a.w5)((function(n){return[(0,a.Wm)(b,{props:n},{default:(0,a.w5)((function(){return[(0,a.Wm)(g,{data:n,afterFunc:e.afterSubmit,loading:e.loading},null,8,["data","afterFunc","loading"])]})),_:2},1032,["props"])]})),"body-cell-operation":(0,a.w5)((function(n){return[(0,a.Wm)(b,{props:n},{default:(0,a.w5)((function(){return[(0,a.Wm)(v,{data:n,afterFunc:e.afterSubmit,loading:e.loading},null,8,["data","afterFunc","loading"])]})),_:2},1032,["props"])]})),_:1},8,["rows","loading","columns","selected","pagination","onRequest"])])]})),_:1})]})),_:1})}],["__scopeId","data-v-62a79118"]]);D()(E,"components",{QPage:N.Z,QCard:Z.Z,QCardSection:q.Z,QSeparator:k.Z,QTable:B.Z,QTr:O.Z,QTh:A.Z,QCheckbox:K.Z,QTd:L.Z})}}]);