import{z as _,W as f,o as c,a as b,b as e,w as o,e as w,f as V,B as g,h as $,u as r}from"./entry.debd92e4.js";import{b as h,z as y}from"./mdi.deb107fc.js";import{_ as k}from"./SectionFullScreen.651cd70b.js";import{_ as x}from"./CardBox.9404004b.js";import{_ as v}from"./FormCheckRadio.4fe48de8.js";import{_ as t}from"./FormField.c2e44356.js";import{_ as m}from"./FormControl.670162d6.js";import{_ as n}from"./BaseButton.e0beffbd.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./BaseIcon.b53940c3.js";const M={__name:"LoginView",setup(B){const a=_({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:!0}),i=f(),u=()=>{i.push("/dashboard")};return(L,s)=>{const p=w;return c(),b("div",null,[e(p,null,{default:o(()=>[e(k,{bg:"purplePink"},{default:o(({cardClass:d})=>[e(x,{class:V(d),"is-form":"",onSubmit:g(u,["prevent"])},{footer:o(()=>[e($,null,{default:o(()=>[e(n,{type:"submit",color:"info",label:"Login"}),e(n,{to:"/dashboard",color:"info",outline:"",label:"Back"})]),_:1})]),default:o(()=>[e(t,{label:"Login",help:"Please enter your login"},{default:o(()=>[e(m,{modelValue:a.login,"onUpdate:modelValue":s[0]||(s[0]=l=>a.login=l),icon:r(h),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(t,{label:"Password",help:"Please enter your password"},{default:o(()=>[e(m,{modelValue:a.pass,"onUpdate:modelValue":s[1]||(s[1]=l=>a.pass=l),icon:r(y),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(v,{modelValue:a.remember,"onUpdate:modelValue":s[2]||(s[2]=l=>a.remember=l),name:"remember",label:"Remember","input-value":!0},null,8,["modelValue"])]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1})])}}};export{M as default};
