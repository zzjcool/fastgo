"use strict";(globalThis["webpackChunkfast_front"]=globalThis["webpackChunkfast_front"]||[]).push([[158],{222:(t,n,e)=>{e.d(n,{x:()=>o});var a=e(1569);const s="/user";async function o(t,n){return(0,a.api)({url:s+"/login",method:"post",data:{name:t,password:n}})}},7326:(t,n,e)=>{e.r(n),e.d(n,{default:()=>d});var a=e(9835);const s=(0,a.Uk)(" hhhh ");function o(t,n,e,o,r,c){const i=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(i,{class:"flex flex-center column q-gutter-lg"},{default:(0,a.w5)((()=>[s])),_:1})}e(9665);var r=e(499),c=e(6928),i=e(222);const l=(0,a.aZ)({name:"AdminPage",setup(){console.log("https://api.fastgo.run");const t=(0,c.t)(),n=(0,r.BK)((0,r.qj)({name:"",password:""}));async function e(n,e){await(0,i.x)(n,e).then((n=>{this.$q.notify({type:"positive",message:"登陆成功！"}),t.setToken(n.data.token),this.$router.push({name:"home"})})).catch((t=>{null!=t&&(console.log(t),this.$q.notify({type:"negative",message:"用户名或密码错误！"}))}))}return{loginOnclick:e,loginData:n}}});var u=e(1639),h=e(9885),g=e(9984),p=e.n(g);const f=(0,u.Z)(l,[["render",o]]),d=f;p()(l,"components",{QPage:h.Z})}}]);