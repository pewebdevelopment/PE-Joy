import{I as $,j as S,A as q,o as v,c as U,w as o,b as e,i as r,x as k,u as t,Q as C,C as p,z as b,a as j,e as B,B as V,h as x}from"./entry.debd92e4.js";import{K as P,b as y,a as R,c as A,z as M,a0 as h}from"./mdi.deb107fc.js";import{_ as z}from"./SectionMain.51b5d319.js";import{_}from"./CardBox.9404004b.js";import{_ as E}from"./BaseDivider.9c775b9f.js";import{_ as n}from"./FormField.c2e44356.js";import{_ as u}from"./FormControl.670162d6.js";import{_ as F}from"./FormFilePicker.5d042f7a.js";import{_ as d}from"./BaseButton.e0beffbd.js";import{_ as O}from"./UserAvatarCurrentUser.e18f3327.js";import{_ as Y}from"./FormCheckRadio.4fe48de8.js";import{_ as D}from"./PillTag.5f7877bb.js";import{_ as L}from"./SectionTitleLineWithButton.0de1be1e.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./BaseIcon.b53940c3.js";import"./UserAvatar.d9f353de.js";const T={class:"space-y-3 text-center md:text-left lg:mx-12"},H={class:"flex justify-center md:block"},I={class:"text-2xl"},K=p(" Howdy, "),Q=p("! "),G=r("p",null,[p("Last login "),r("b",null,"12 mins ago"),p(" from "),r("b",null,"127.0.0.1")],-1),J={class:"flex justify-center md:block"},W={__name:"UserCard",setup(g){const m=$(),i=S(()=>m.userName),s=q(!1);return(f,c)=>(v(),U(_,null,{default:o(()=>[e(C,{type:"justify-around lg:justify-center"},{default:o(()=>[e(O,{class:"lg:mx-12"}),r("div",T,[r("div",H,[e(Y,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=w=>s.value=w),name:"notifications-switch",type:"switch",label:"Notifications","input-value":!0},null,8,["modelValue"])]),r("h1",I,[K,r("b",null,k(t(i)),1),Q]),G,r("div",J,[e(D,{label:"Verified",color:"info",icon:t(P)},null,8,["icon"])])])]),_:1})]),_:1}))}},X={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},fe={__name:"ProfileView",setup(g){const m=$(),i=b({name:m.userName,email:m.userEmail}),s=b({password_current:"",password:"",password_confirmation:""}),f=()=>{m.setUser(i)},c=()=>{};return(w,a)=>{const N=B;return v(),j("div",null,[e(N,{name:"zen"},{default:o(()=>[e(z,null,{default:o(()=>[e(L,{icon:t(y),title:"Profile",main:""},{default:o(()=>[e(d,{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",label:"Buy dashboard",icon:t(R),color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(W,{class:"mb-6"}),r("div",X,[e(_,{"is-form":"",onSubmit:V(f,["prevent"])},{footer:o(()=>[e(x,null,{default:o(()=>[e(d,{color:"info",type:"submit",label:"Submit"}),e(d,{color:"info",label:"Options",outline:""})]),_:1})]),default:o(()=>[e(n,{label:"Avatar",help:"Max 500kb"},{default:o(()=>[e(F,{label:"Upload"})]),_:1}),e(n,{label:"Name",help:"Required. Your name"},{default:o(()=>[e(u,{modelValue:i.name,"onUpdate:modelValue":a[0]||(a[0]=l=>i.name=l),icon:t(y),name:"username",required:"",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(n,{label:"E-mail",help:"Required. Your e-mail"},{default:o(()=>[e(u,{modelValue:i.email,"onUpdate:modelValue":a[1]||(a[1]=l=>i.email=l),icon:t(A),type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"]),e(_,{"is-form":"",onSubmit:V(c,["prevent"])},{footer:o(()=>[e(x,null,{default:o(()=>[e(d,{type:"submit",color:"info",label:"Submit"}),e(d,{color:"info",label:"Options",outline:""})]),_:1})]),default:o(()=>[e(n,{label:"Current password",help:"Required. Your current password"},{default:o(()=>[e(u,{modelValue:s.password_current,"onUpdate:modelValue":a[2]||(a[2]=l=>s.password_current=l),icon:t(M),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(E),e(n,{label:"New password",help:"Required. New password"},{default:o(()=>[e(u,{modelValue:s.password,"onUpdate:modelValue":a[3]||(a[3]=l=>s.password=l),icon:t(h),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1}),e(n,{label:"Confirm password",help:"Required. New password one more time"},{default:o(()=>[e(u,{modelValue:s.password_confirmation,"onUpdate:modelValue":a[4]||(a[4]=l=>s.password_confirmation=l),icon:t(h),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"])])]),_:1})]),_:1})])}}};export{fe as default};
