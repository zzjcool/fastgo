"use strict";(self["webpackChunkfast_front"]=self["webpackChunkfast_front"]||[]).push([[858],{93858:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(59835),l={class:"col",style:{width:"400px","max-width":"90%"}},o={class:"col",style:{width:"400px","max-width":"90%"}},a={class:"col",style:{width:"400px","max-width":"90%"}},u={class:"col",style:{width:"400px","max-width":"90%"}},i={class:"col",style:{width:"400px","max-width":"90%"}},s={class:"col",style:{width:"400px","max-width":"90%"}};function c(e,t,n,c,m,d){var p=(0,r.up)("q-icon"),f=(0,r.up)("q-input"),w=(0,r.up)("q-btn"),y=(0,r.up)("q-form"),b=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(b,{class:"flex column items-center flex-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,{class:"items-center flex flex-center column q-col-gutter-md"},{default:(0,r.w5)((function(){return[(0,r._)("div",l,[(0,r.Wm)(f,{color:"primary","label-color":"secondary","bg-color":"white",outlined:"",modelValue:e.submitData.email,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.submitData.email=t}),label:"邮箱",rules:[function(t){return e.rules.email(t)||"请输入合法的邮箱"},function(e){return""!=e||"不能为空"}]},{prepend:(0,r.w5)((function(){return[(0,r.Wm)(p,{name:"person",color:"primary"})]})),_:1},8,["modelValue","rules"])]),(0,r._)("div",o,[(0,r.Wm)(f,{color:"primary","label-color":"secondary","bg-color":"white",outlined:"",modelValue:e.submitData.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.submitData.name=t}),label:"用户名",rules:[function(e){return""!=e||"不能为空"}]},{prepend:(0,r.w5)((function(){return[(0,r.Wm)(p,{name:"person",color:"primary"})]})),_:1},8,["modelValue","rules"])]),(0,r._)("div",a,[(0,r.Wm)(f,{color:"primary","label-color":"secondary","bg-color":"white",type:e.status.pwd1?"password":"text",outlined:"",modelValue:e.submitData.password,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.submitData.password=t}),rules:[function(e){return""!=e||"不能为空"}],label:"密码"},{prepend:(0,r.w5)((function(){return[(0,r.Wm)(p,{name:"lock",color:"primary"})]})),append:(0,r.w5)((function(){return[(0,r.Wm)(p,{name:e.status.pwd1?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[2]||(t[2]=function(t){return e.status.pwd1=!e.status.pwd1})},null,8,["name"])]})),_:1},8,["type","modelValue","rules"])]),(0,r._)("div",u,[(0,r.Wm)(f,{color:"primary","label-color":"secondary","bg-color":"white",type:e.status.pwd2?"password":"text",outlined:"",modelValue:e.submitData.password2,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.submitData.password2=t}),hint:"两次密码需要保持一致",rules:[function(t){return t==e.submitData.password||"两次密码不同"}],label:"重复密码"},{prepend:(0,r.w5)((function(){return[(0,r.Wm)(p,{name:"lock",color:"primary"})]})),append:(0,r.w5)((function(){return[(0,r.Wm)(p,{name:e.status.pwd2?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[4]||(t[4]=function(t){return e.status.pwd2=!e.status.pwd2})},null,8,["name"])]})),_:1},8,["type","modelValue","rules"])]),(0,r._)("div",i,[(0,r.Wm)(f,{color:"primary","label-color":"secondary","bg-color":"white",outlined:"",modelValue:e.submitData.code,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.submitData.code=t}),label:"邀请码",rules:[function(t){return e.rules.uuid(t)||"请输入正确的邀请码"},function(e){return""!=e||"不能为空"}]},{prepend:(0,r.w5)((function(){return[(0,r.Wm)(p,{name:"key",color:"primary"})]})),_:1},8,["modelValue","rules"])]),(0,r._)("div",s,[(0,r.Wm)(w,{unelevated:"",color:"primary",label:"注册",type:"submit",style:{width:"100%"},onClick:t[7]||(t[7]=function(t){return e.loginOnclick(e.submitData)})})])]})),_:1})]})),_:1})}var m=n(47798),d=n.n(m),p=n(1001),f=n.n(p),w=(n(69665),n(92138)),y=n(60499),b=n(28339),h=n(36201),v=n.n(h),x=n(19302),g=(0,r.aZ)({name:"RegisterPage",setup:function(){var e=(0,b.yj)(),t=(0,b.tv)(),n=(0,x.Z)(),r=(0,y.iH)({email:v().isEmail,require:v().NonNullable,uuid:v().isUUID}),l=(0,y.iH)({email:"",name:"",password:"",password2:"",code:e.query.code}),o=(0,y.iH)({pwd1:!0,pwd2:!0});function a(e){return u.apply(this,arguments)}function u(){return u=f()(d()().mark((function e(r){return d()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:(0,w.z2)(r).then((function(e){n.notify({type:"positive",message:"注册成功,请登陆！"}),t.push({name:"login"})})).catch((function(e){null!=e&&(console.log(e),n.notify({type:"negative",message:"注册失败，请检查邀请码是否正确"}))}));case 1:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}return{loginOnclick:a,submitData:l,status:o,rules:r}}}),_=n(11639),V=n(69885),D=n(8326),W=n(66611),k=n(22857),q=n(24455),Z=n(69984),U=n.n(Z);const C=(0,_.Z)(g,[["render",c]]);var Q=C;U()(g,"components",{QPage:V.Z,QForm:D.Z,QInput:W.Z,QIcon:k.Z,QBtn:q.Z})}}]);