"use strict";(self.webpackChunkfast_front=self.webpackChunkfast_front||[]).push([[168],{61168:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var a=n(59835),o=n(86970),r=function(e){return(0,a.dD)("data-v-49633c20"),e=e(),(0,a.Cn)(),e}((function(){return(0,a._)("div",{class:"text-h6"},"网站白名单",-1)})),l={style:{width:"100%"}},u={class:"text-subtitle1 text-white text-weight-bold"};n(65716),n(59437),n(24110);var c=n(19302),i=n(70917),d=n(60499),s=(0,a._)("div",{class:"row no-wrap items-center"},[(0,a._)("div",{class:"col text-h6 ellipsis"}," 添加白名单 ")],-1),m={class:"column"};var p=(0,a.aZ)({name:"createCard",props:{afterSubmit:{type:Function,default:function(){}}},setup:function(e){var t=(0,d.iH)(!1),n=(0,c.Z)(),a=(0,d.iH)({name:"",home:"",comment:"",importHost:[]});var o=(0,d.iH)("");return{data:a,onSubmit:function(){a.value.importHost=o.value.split("\n"),(0,i.p6)(a.value).then((function(a){n.notify({type:"positive",message:"添加成功"}),e.afterSubmit(),t.value=!1})).catch((function(e){n.notify({type:"negative",message:e.response.data.message})}))},card:t,text:o}}}),f=n(11639),w=n(24455),g=n(32074),b=n(44458),v=n(63190),h=n(8326),W=n(66611),_=n(22857),y=n(50926),Z=n(69984),q=n.n(Z);var V=(0,f.Z)(p,[["render",function(e,t,n,o,r,l){var u=(0,a.up)("q-card-section"),c=(0,a.up)("q-icon"),i=(0,a.up)("q-input"),d=(0,a.up)("q-btn"),p=(0,a.up)("q-form"),f=(0,a.up)("q-separator"),w=(0,a.up)("q-card"),g=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(d,{icon:"add",unelevated:"",color:"accent",onClick:t[5]||(t[5]=function(t){return e.card=!0})},{default:(0,a.w5)((function(){return[(0,a.Wm)(g,{modelValue:e.card,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.card=t})},{default:(0,a.w5)((function(){return[(0,a.Wm)(w,{class:"create-card"},{default:(0,a.w5)((function(){return[(0,a.Wm)(u,{class:"bg-secondary text-white"},{default:(0,a.w5)((function(){return[s]})),_:1}),(0,a.Wm)(u,{class:""},{default:(0,a.w5)((function(){return[(0,a.Wm)(p,{onSubmit:e.onSubmit,class:"q-gutter-md"},{default:(0,a.w5)((function(){return[(0,a.Wm)(i,{filled:"",modelValue:e.data.name,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.data.name=t}),color:"accent","label-color":"accent",label:"站点名称","lazy-rules":"",rules:[function(e){return e&&e.length>0||"至少要写点什么吧"}]},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(c,{name:"public",color:"accent"})]})),_:1},8,["modelValue","rules"]),(0,a.Wm)(i,{filled:"",modelValue:e.data.home,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.data.home=t}),hint:"站点主页的地址，为了安全，只支持https协议",label:"主页",color:"accent","label-color":"accent","lazy-rules":"",rules:[function(e){return e&&e.length>0||"至少要写点什么吧"}]},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(c,{name:"link",color:"accent"})]})),_:1},8,["modelValue","rules"]),(0,a.Wm)(i,{filled:"",modelValue:e.data.comment,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.data.comment=t}),label:"介绍",color:"accent","label-color":"accent","lazy-rules":""},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(c,{name:"comment",color:"accent"})]})),_:1},8,["modelValue"]),(0,a.Wm)(i,{hint:"每条记录一行",label:"匹配URL",modelValue:e.text,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.text=t}),filled:"",color:"accent","label-color":"accent",autogrow:""},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(c,{name:"add_link",color:"accent"})]})),_:1},8,["modelValue"]),(0,a._)("div",m,[(0,a.Wm)(d,{label:"添加",type:"submit",unelevated:"",color:"accent"})])]})),_:1},8,["onSubmit"])]})),_:1}),(0,a.Wm)(f)]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})}]]);q()(p,"components",{QBtn:w.Z,QDialog:g.Z,QCard:b.Z,QCardSection:v.Z,QForm:h.Z,QInput:W.Z,QIcon:_.Z,QSeparator:y.Z});var Q={class:"row no-wrap text-h6 items-center"},x=(0,a._)("div",{class:"col ellipsis"}," 请确认需要删除的内容： ",-1),k={style:{width:"100%"}},D={class:"text-subtitle1 text-white text-weight-bold"},C={class:"column"};var S=n(47798),H=n.n(S),U=n(1001),F=n.n(U),P=(n(61732),n(69665),(0,a.aZ)({name:"deleteCofirmTable",props:{columns:Array,rows:Array,loading:Boolean,afterDelete:{type:Function,default:function(){}}},setup:function(e){var t=(0,d.iH)(!1),n=(0,c.Z)();function a(){return(a=F()(H()().mark((function a(){var o;return H()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=[],e.rows.forEach((function(e){o.push(e.id)})),a.next=4,(0,i.Ht)(o);case 4:n.notify({type:"positive",message:"删除成功！"}),t.value=!1,e.afterDelete();case 7:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return{layout:t,onDelete:function(){return a.apply(this,arguments)}}}})),T=n(42449),I=n(31233),j=n(21682);var z=(0,f.Z)(P,[["render",function(e,t,n,r,l,u){var c=(0,a.up)("q-icon"),i=(0,a.up)("q-card-section"),d=(0,a.up)("q-th"),s=(0,a.up)("q-tr"),m=(0,a.up)("q-table"),p=(0,a.up)("q-separator"),f=(0,a.up)("q-btn"),w=(0,a.up)("q-card"),g=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(f,{class:"q-ml-sm",color:"accent",disable:e.loading||e.rows.length<=0,label:"删除",unelevated:"",onClick:t[1]||(t[1]=function(t){return e.layout=!0})},{default:(0,a.w5)((function(){return[(0,a.Wm)(g,{modelValue:e.layout,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.layout=t})},{default:(0,a.w5)((function(){return[(0,a.Wm)(w,{class:"create-card",style:{width:"100%"}},{default:(0,a.w5)((function(){return[(0,a.Wm)(i,{class:"bg-secondary text-accent"},{default:(0,a.w5)((function(){return[(0,a._)("div",Q,[(0,a.Wm)(c,{name:"warning"}),x])]})),_:1}),(0,a._)("div",k,[(0,a.Wm)(m,{class:"my-sticky-header-table",rows:e.rows,columns:e.columns,"row-key":"name",flat:"",pagination:{rowsPerPage:0},square:"","hide-bottom":""},{header:(0,a.w5)((function(e){return[(0,a.Wm)(s,{props:e},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(function(t){return(0,a.wg)(),(0,a.j4)(d,{key:t.name,props:e,class:"bg-secondary"},{default:(0,a.w5)((function(){return[(0,a._)("div",D,(0,o.zw)(t.label),1)]})),_:2},1032,["props"])})),128))]})),_:2},1032,["props"])]})),_:1},8,["rows","columns"])]),(0,a.Wm)(p),(0,a.Wm)(i,{class:""},{default:(0,a.w5)((function(){return[(0,a._)("div",C,[(0,a.Wm)(f,{label:"删除",color:"accent",unelevated:"",onClick:e.onDelete},null,8,["onClick"])])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])]})),_:1},8,["disable"])}]]);q()(P,"components",{QBtn:w.Z,QDialog:g.Z,QCard:b.Z,QCardSection:v.Z,QIcon:_.Z,QTable:T.Z,QTr:I.Z,QTh:j.Z,QSeparator:y.Z});n(60893);var B={key:0},R={key:0},L={class:"row no-wrap text-h6 items-center"},K=(0,a._)("div",{class:"col ellipsis"}," 修改匹配的URL ",-1),Y={class:"q-pa-md"},A={class:"column"};var E=(0,a.aZ)({name:"updateImportHost",props:{data:Object,loading:Boolean,afterFunc:{type:Function,default:function(){}}},setup:function(e){var t=(0,d.iH)(!1),n=(0,c.Z)();var a,o=(0,d.iH)((a=e.data.value)?a.join("\n"):"");function r(){return(r=F()(H()().mark((function a(r){return H()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.importHost=o.value.split("\n"),a.next=3,(0,i.TI)(r).catch((function(e){return n.notify({type:"negative",message:"更新失败"}),Promise.reject(error)}));case 3:n.notify({type:"positive",message:"更新成功"}),t.value=!1,e.afterFunc();case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return{layout:t,onUpdate:function(e){return r.apply(this,arguments)},text:o}}}),N=n(20990);var O=(0,f.Z)(E,[["render",function(e,t,n,o,r,l){var u=(0,a.up)("q-badge"),c=(0,a.up)("q-icon"),i=(0,a.up)("q-card-section"),d=(0,a.up)("q-input"),s=(0,a.up)("q-separator"),m=(0,a.up)("q-btn"),p=(0,a.up)("q-card"),f=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)("div",{class:"column full-height full-width",onClick:t[3]||(t[3]=function(t){return e.layout=!1})},[e.data.value?((0,a.wg)(),(0,a.iD)("div",B,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.data.value.slice(0,3),(function(e){return(0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.Wm)(u,{color:"accent",label:e},null,8,["label"])])})),128)),e.data.value.length>3?((0,a.wg)(),(0,a.iD)("div",R,[(0,a.Wm)(u,{color:"accent",label:"..."})])):(0,a.kq)("",!0)])):(0,a.kq)("",!0),(0,a.Wm)(f,{modelValue:e.layout,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.layout=t})},{default:(0,a.w5)((function(){return[(0,a.Wm)(p,{class:"create-card"},{default:(0,a.w5)((function(){return[(0,a.Wm)(i,{class:"bg-secondary text-accent"},{default:(0,a.w5)((function(){return[(0,a._)("div",L,[(0,a.Wm)(c,{name:"warning"}),K])]})),_:1}),(0,a._)("div",Y,[(0,a.Wm)(d,{hint:"每条记录一行",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.text=t}),filled:"",autogrow:""},null,8,["modelValue"])]),(0,a.Wm)(s),(0,a.Wm)(i,{class:""},{default:(0,a.w5)((function(){return[(0,a._)("div",A,[(0,a.Wm)(m,{label:"更新",color:"accent",unelevated:"",onClick:t[1]||(t[1]=function(t){return e.onUpdate(e.data.row)})})])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])}]]);q()(E,"components",{QBadge:N.Z,QDialog:g.Z,QCard:b.Z,QCardSection:v.Z,QIcon:_.Z,QInput:W.Z,QSeparator:y.Z,QBtn:w.Z,QTable:T.Z});var G={class:"text-left q-gutter-md"},J=(0,a._)("div",{class:"row no-wrap items-center"},[(0,a._)("div",{class:"col text-h6 ellipsis"}," 编辑 ")],-1),M={class:"column"};var X=(0,a.aZ)({name:"editWhite",props:{data:Object,loading:Boolean,afterFunc:{type:Function,default:function(){}}},setup:function(e){var t=(0,d.iH)(!1),n=(0,c.Z)(),a=(0,d.iH)({id:e.data.row.id,name:e.data.row.name,home:e.data.row.home,comment:e.data.row.comment,enable:e.data.row.enable});var o,r=(0,d.iH)((o=e.data.row.importHost)?o.join("\n"):"");function l(){return(l=F()(H()().mark((function a(o){return H()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o.importHost=r.value.split("\n"),a.next=3,(0,i.TI)(o).catch((function(e){return n.notify({type:"negative",message:"更新失败"}),Promise.reject(error)}));case 3:n.notify({type:"positive",message:"更新成功"}),t.value=!1,e.afterFunc();case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return{newData:a,onSubmit:function(e){return l.apply(this,arguments)},card:t,text:r}}}),$=n(23175);var ee=(0,f.Z)(X,[["render",function(e,t,n,o,r,l){var u=(0,a.up)("q-toggle"),c=(0,a.up)("q-card-section"),i=(0,a.up)("q-icon"),d=(0,a.up)("q-input"),s=(0,a.up)("q-btn"),m=(0,a.up)("q-form"),p=(0,a.up)("q-separator"),f=(0,a.up)("q-card"),w=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)("div",G,[(0,a.Wm)(u,{color:"accent",modelValue:e.newData.enable,"onUpdate:modelValue":[t[0]||(t[0]=function(t){return e.newData.enable=t}),t[1]||(t[1]=function(t){return e.onSubmit(e.newData)})],dense:""},null,8,["modelValue"]),(0,a.Wm)(s,{icon:"edit",unelevated:"",round:"",size:"sm",color:"accent",onClick:t[8]||(t[8]=function(t){return e.card=!0})},{default:(0,a.w5)((function(){return[(0,a.Wm)(w,{modelValue:e.card,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.card=t})},{default:(0,a.w5)((function(){return[(0,a.Wm)(f,{class:"create-card"},{default:(0,a.w5)((function(){return[(0,a.Wm)(c,{class:"bg-secondary text-white"},{default:(0,a.w5)((function(){return[J]})),_:1}),(0,a.Wm)(c,{class:""},{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{onSubmit:t[6]||(t[6]=function(t){return e.onSubmit(e.newData)}),class:"q-gutter-md"},{default:(0,a.w5)((function(){return[(0,a.Wm)(d,{filled:"",modelValue:e.newData.name,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.newData.name=t}),color:"accent",disable:"",hint:"不可更改","label-color":"accent",label:"站点名称","lazy-rules":"",rules:[function(e){return e&&e.length>0||"至少要写点什么吧"}]},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(i,{name:"public",color:"accent"})]})),_:1},8,["modelValue","rules"]),(0,a.Wm)(d,{filled:"",modelValue:e.newData.home,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.newData.home=t}),hint:"站点主页的地址，为了安全，只支持https协议",label:"主页",color:"accent","label-color":"accent","lazy-rules":"",rules:[function(e){return e&&e.length>0||"至少要写点什么吧"}]},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(i,{name:"link",color:"accent"})]})),_:1},8,["modelValue","rules"]),(0,a.Wm)(d,{filled:"",modelValue:e.newData.comment,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.newData.comment=t}),label:"介绍",color:"accent","label-color":"accent","lazy-rules":""},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(i,{name:"comment",color:"accent"})]})),_:1},8,["modelValue"]),(0,a.Wm)(d,{hint:"每条记录一行",label:"匹配URL",modelValue:e.text,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.text=t}),filled:"",color:"accent","label-color":"accent",autogrow:""},{prepend:(0,a.w5)((function(){return[(0,a.Wm)(i,{name:"add_link",color:"accent"})]})),_:1},8,["modelValue"]),(0,a._)("div",M,[(0,a.Wm)(s,{label:"确认",type:"submit",unelevated:"",color:"accent"})])]})),_:1})]})),_:1}),(0,a.Wm)(p)]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})])}]]);q()(X,"components",{QToggle:$.Z,QBtn:w.Z,QDialog:g.Z,QCard:b.Z,QCardSection:v.Z,QForm:h.Z,QInput:W.Z,QIcon:_.Z,QSeparator:y.Z});var te=[{name:"name",required:!0,label:"站点名称",align:"left",field:function(e){return e.name},format:function(e){return"".concat(e)},sortable:!1},{name:"home",align:"left",label:"站点主页",field:"home",sortable:!1},{name:"comment",align:"left",label:"介绍",field:"comment",sortable:!1},{name:"importHost",align:"left",label:"匹配URL",field:"importHost",sortable:!1},{name:"operation",align:"left",label:"操作",field:"operation",sortable:!1}],ne=(0,a.aZ)({name:"WhiteList",setup:function(){var e=(0,d.iH)({page:1,rowsPerPage:10,rowsNumber:0}),t=(0,d.iH)([]),n=(0,d.iH)(!1),o=(0,d.iH)([]),r=((0,c.Z)(),function(a){n.value=!0,(0,i.uD)(a.pagination.page-1,a.pagination.rowsPerPage).then((function(n){t.value=n.data.list,e.value={page:n.data.page+1,rowsPerPage:n.data.pageSize,rowsNumber:n.data.count},o.value=[]})).finally((function(){n.value=!1}))});function l(){r({pagination:e.value})}return(0,a.bv)((function(){l()})),{columns:te,selected:o,rows:t,pageConfig:e,newPagination:r,loading:n,afterSubmit:l}},components:{CreateCard:V,DeleteCofirmTable:z,updateImportHost:O,EditWhite:ee}}),ae=n(69885),oe=n(11221),re=n(67220);var le=(0,f.Z)(ne,[["render",function(e,t,n,c,i,d){var s=(0,a.up)("q-card-section"),m=(0,a.up)("create-card"),p=(0,a.up)("delete-cofirm-table"),f=(0,a.up)("q-separator"),w=(0,a.up)("q-checkbox"),g=(0,a.up)("q-th"),b=(0,a.up)("q-tr"),v=(0,a.up)("update-import-host"),h=(0,a.up)("q-td"),W=(0,a.up)("edit-white"),_=(0,a.up)("q-table"),y=(0,a.up)("q-card"),Z=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(Z,{class:"column"},{default:(0,a.w5)((function(){return[(0,a.Wm)(y,{class:"list-card",square:"",flat:""},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{class:"bg-secondary text-white"},{default:(0,a.w5)((function(){return[r]})),_:1}),(0,a.Wm)(s,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{afterSubmit:e.afterSubmit},null,8,["afterSubmit"]),(0,a.Wm)(p,{rows:e.selected,columns:e.columns,loading:e.loading,afterDelete:e.afterSubmit},null,8,["rows","columns","loading","afterDelete"])]})),_:1}),(0,a.Wm)(f),(0,a._)("div",l,[(0,a.Wm)(_,{rows:e.rows,loading:e.loading,columns:e.columns,selection:"multiple",selected:e.selected,"onUpdate:selected":t[0]||(t[0]=function(t){return e.selected=t}),"row-key":"name",flat:"",pagination:e.pageConfig,"onUpdate:pagination":t[1]||(t[1]=function(t){return e.pageConfig=t}),onRequest:e.newPagination,square:""},{header:(0,a.w5)((function(e){return[(0,a.Wm)(b,{props:e},{default:(0,a.w5)((function(){return[(0,a.Wm)(g,{class:"bg-secondary"},{default:(0,a.w5)((function(){return[(0,a.Wm)(w,{modelValue:e.selected,"onUpdate:modelValue":function(t){return e.selected=t},color:"accent","keep-color":"",class:"text-black"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(function(t){return(0,a.wg)(),(0,a.j4)(g,{key:t.name,props:e,class:"bg-secondary"},{default:(0,a.w5)((function(){return[(0,a._)("div",u,(0,o.zw)(t.label),1)]})),_:2},1032,["props"])})),128))]})),_:2},1032,["props"])]})),"body-cell-importHost":(0,a.w5)((function(t){return[(0,a.Wm)(h,{props:t},{default:(0,a.w5)((function(){return[(0,a.Wm)(v,{data:t,afterFunc:e.afterSubmit,loading:e.loading},null,8,["data","afterFunc","loading"])]})),_:2},1032,["props"])]})),"body-cell-operation":(0,a.w5)((function(t){return[(0,a.Wm)(h,{props:t},{default:(0,a.w5)((function(){return[(0,a.Wm)(W,{data:t,afterFunc:e.afterSubmit,loading:e.loading},null,8,["data","afterFunc","loading"])]})),_:2},1032,["props"])]})),_:1},8,["rows","loading","columns","selected","pagination","onRequest"])])]})),_:1})]})),_:1})}],["__scopeId","data-v-49633c20"]]);q()(ne,"components",{QPage:ae.Z,QCard:b.Z,QCardSection:v.Z,QSeparator:y.Z,QTable:T.Z,QTr:I.Z,QTh:j.Z,QCheckbox:oe.Z,QTd:re.Z})}}]);