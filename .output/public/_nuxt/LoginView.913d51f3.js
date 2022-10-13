import{_ as P}from"./FormControl.85be05b6.js";import{_ as F}from"./FormField.6d2a64f7.js";import{j as v,R as k,o as c,c as g,w as o,f as p,s as R,i as C,x as T,t as N,u as m,z as A,A as u,a9 as H,a as U,b as e,e as j,B as z,C as D,Q as E,h as I}from"./entry.0166a11c.js";import{_ as M}from"./BaseButton.29826059.js";import{_ as Q}from"./BaseIcon.b2323036.js";import{_ as q}from"./CardBox.134634a6.js";import{_ as G}from"./SectionFormScreen.a166453d.js";import{R as J,b as K}from"./mdi.deb107fc.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./colorsPremium.66e9baff.js";import"./JustboilLogo.1cde41d6.js";const O={__name:"ButtonTextLink",props:{to:{type:String,default:null},href:{type:String,default:null},icon:{type:String,default:null},label:{type:String,default:null},small:Boolean},setup(t){const l=t,s=v(()=>l.to?k:"a");return(a,d)=>(c(),g(N(m(s)),{to:t.to,href:t.href,class:p(["inline-flex items-center cursor-pointer",{"text-sm":t.small}])},{default:o(()=>[t.icon?(c(),g(Q,{key:0,path:t.icon,w:"w-4",h:"h-4",class:p([t.small?"mr-1":"mr-2"])},null,8,["path","class"])):R("",!0),C("span",null,T(t.label),1)]),_:1},8,["to","href","class"]))}},W=D(" Forgot password? "),ie={__name:"LoginView",setup(t){const l=A({login:"johndoe",pass:"secret",remember:["remember"]}),s=u(!1);setTimeout(()=>{s.value=!0},750);const a=u(!1),d=v(()=>a.value?"animate-shake":""),w=()=>{a.value=!0,s.value=!1,setTimeout(()=>{a.value=!1,i.value=!1},2e3)},i=u(!0);return(X,n)=>{const f=P,_=F,x=H("FormCheckRadioPicker"),h=E,b=M,B=I,V=O,y=q,S=G,$=j;return c(),U("div",null,[e($,null,{default:o(()=>[e(S,{bg:"purplePink","has-promo":""},{default:o(({cardClass:L})=>[C("div",null,[e(y,{class:p([L,m(d)]),"is-form":"",onSubmit:z(w,["prevent"])},{footer:o(()=>[e(h,{mobile:""},{default:o(()=>[e(B,null,{default:o(()=>[e(b,{label:"Login",type:"submit",color:"info",tip:s.value?"Click to see error state":null},null,8,["tip"]),e(b,{label:"Sign up",to:"/signup",color:"info",outline:""})]),_:1}),e(V,{to:"/",icon:m(J),label:"Home",small:""},null,8,["icon"])]),_:1})]),default:o(()=>[e(_,{label:"Login",error:a.value,help:"Please enter your login"},{default:o(()=>[e(f,{modelValue:l.login,"onUpdate:modelValue":n[0]||(n[0]=r=>l.login=r),error:a.value,"icon-right":m(K),name:"login",placeholder:"user@example.com",autocomplete:"username"},null,8,["modelValue","error","icon-right"])]),_:1},8,["error"]),e(_,{label:"Password",error:a.value,help:"Click icon to show/hide"},{default:o(()=>[e(f,{modelValue:l.pass,"onUpdate:modelValue":n[1]||(n[1]=r=>l.pass=r),error:a.value,"tip-right":i.value?null:"Click to show/hide",type:"password",name:"password",placeholder:"Password",autocomplete:"current-password",onRightIconClick:n[2]||(n[2]=r=>i.value=!0)},null,8,["modelValue","error","tip-right"])]),_:1},8,["error"]),e(h,{mobile:""},{default:o(()=>[e(x,{modelValue:l.remember,"onUpdate:modelValue":n[3]||(n[3]=r=>l.remember=r),name:"remember",options:{remember:"Remember"},spaced:""},null,8,["modelValue"]),e(m(k),{to:"/remind",class:"text-sm"},{default:o(()=>[W]),_:1})]),_:1})]),_:2},1032,["class","onSubmit"])])]),_:1})]),_:1})])}}};export{ie as default};
