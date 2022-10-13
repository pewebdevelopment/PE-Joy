import{j as p,L as I,ac as P,u as l,o as T,c as M,w as e,b as o,h,s as R,B as Z,i as a,r as F,A as x,k as G,a as H,e as K,C as _}from"./entry.debd92e4.js";import{s as z,w as Q,Z as X,E as Y,a9 as ll,D as W,aa as ol,ab as m,k as el}from"./mdi.deb107fc.js";import{_ as k}from"./SectionMain.51b5d319.js";import{_ as b}from"./CardBox.9404004b.js";import{_ as n}from"./BaseButton.e0beffbd.js";import{_ as O}from"./NotificationBar.4e47aee9.js";import{_ as L}from"./BaseDivider.9c775b9f.js";import{_ as nl}from"./OverlayLayer.d887cdd2.js";import{_ as U}from"./CardBoxComponentTitle.89a6e6d5.js";import{_ as B}from"./SectionTitle.47ce2200.js";import{_ as j}from"./FormField.c2e44356.js";import{_ as A}from"./FormCheckRadioGroup.e022a4a9.js";import{_ as tl}from"./SectionTitleLineWithButton.0de1be1e.js";import{C as al}from"./CardBoxComponentEmpty.637a50f9.js";import{_ as N}from"./PillTag.5f7877bb.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./BaseIcon.b53940c3.js";import"./FormCheckRadio.4fe48de8.js";const il={class:"space-y-3"},E={__name:"CardBoxModal",props:{title:{type:String,required:!0},button:{type:String,default:"info"},buttonLabel:{type:String,default:"Done"},hasCancel:Boolean,modelValue:{type:[String,Number,Boolean],default:null}},emits:["update:modelValue","cancel","confirm"],setup(g,{emit:w}){const y=g,v=p({get:()=>y.modelValue,set:t=>w("update:modelValue",t)}),C=t=>{v.value=!1,w(t)},c=()=>C("confirm"),f=()=>C("cancel");return window.addEventListener("keydown",t=>{t.key==="Escape"&&v.value&&f()}),(t,u)=>I((T(),M(nl,{onOverlayClick:f},{default:e(()=>[I(o(b,{class:"shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50","is-modal":""},{footer:e(()=>[o(h,null,{default:e(()=>[o(n,{label:g.buttonLabel,color:g.button,onClick:c},null,8,["label","color"]),g.hasCancel?(T(),M(n,{key:0,label:"Cancel",color:g.button,outline:"",onClick:f},null,8,["color"])):R("",!0)]),_:1})]),default:e(()=>[o(U,{title:g.title},{default:e(()=>[g.hasCancel?(T(),M(n,{key:0,icon:l(z),color:"whiteDark",small:"","rounded-full":"",onClick:Z(f,["prevent"])},null,8,["icon","onClick"])):R("",!0)]),_:1},8,["title"]),a("div",il,[F(t.$slots,"default")])]),_:3},512),[[P,l(v)]])]),_:3},512)),[[P,l(v)]])}},ul=a("p",null,"This is sample modal",-1),sl=a("p",null,"Lorem ipsum dolor",-1),dl=a("p",null,"This is sample modal",-1),cl=a("p",null,"Lorem ipsum dolor",-1),rl=a("p",null,"This is sample modal",-1),ml=a("p",null,"Lorem ipsum dolor",-1),fl=_("Dark mode"),_l={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"},bl=_("Modal examples"),pl={class:"space-y-12"},hl=a("div",{class:"space-y-3"},[a("p",null,"Click to see in action")],-1),gl=a("div",{class:"space-y-3"},[a("p",null,"Click to see in action")],-1),vl=a("div",{class:"space-y-3"},[a("p",null,"Click to see in action")],-1),wl=a("h1",{class:"text-2xl text-gray-500 dark:text-slate-400"},"Notifications",-1),Cl={class:"flex items-center justify-center mt-6"},xl=a("b",null,"Info state",-1),kl=_(". NotificationBar "),Bl=a("b",null,"Success state",-1),yl=_(". NotificationBar "),Vl=a("b",null,"Warning state",-1),Sl=_(". NotificationBar "),$l=a("b",null,"Danger state",-1),Dl=_(". NotificationBar "),Ol=a("b",null,"Contrast",-1),Nl=_(". NotificationBar "),Ul=_("Buttons"),Ll=_("Pills"),Tl=_("Cards"),Ml={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},Al=a("div",{class:"space-y-3"},[a("p",null,"Card with title, icon & footer")],-1),El=_(" Just body & footer "),no={__name:"UiView",setup(g){const w=x(!1),y=x(!1),v=x(!1),C=x([]),c=p(()=>C.value.indexOf("outline")>-1),f=x([]),t=p(()=>f.value.indexOf("outline")>-1),u=p(()=>f.value.indexOf("small")>-1),s=p(()=>f.value.indexOf("disabled")>-1),d=p(()=>f.value.indexOf("rounded")>-1),V=x(["icon"]),S=p(()=>V.value.indexOf("outline")>-1),$=p(()=>V.value.indexOf("small")>-1),D=p(()=>V.value.indexOf("icon")>-1?Q:null),q=G();return(Il,i)=>{const J=K;return T(),H("div",null,[o(J,{name:"zen"},{default:e(()=>[o(E,{modelValue:w.value,"onUpdate:modelValue":i[0]||(i[0]=r=>w.value=r),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:e(()=>[ul,sl]),_:1},8,["modelValue"]),o(E,{modelValue:y.value,"onUpdate:modelValue":i[1]||(i[1]=r=>y.value=r),title:"Unhandled exception",button:"danger"},{default:e(()=>[dl,cl]),_:1},8,["modelValue"]),o(E,{modelValue:v.value,"onUpdate:modelValue":i[2]||(i[2]=r=>v.value=r),title:"Success",button:"success"},{default:e(()=>[rl,ml]),_:1},8,["modelValue"]),o(B,{first:""},{default:e(()=>[fl]),_:1}),o(k,null,{default:e(()=>[o(b,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:e(()=>[a("div",_l,[o(n,{label:"Toggle",color:"contrast",onClick:i[3]||(i[3]=r=>l(q).setDarkMode())})])]),_:1})]),_:1}),o(B,null,{default:e(()=>[bl]),_:1}),o(k,null,{default:e(()=>[a("div",pl,[o(b,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:i[4]||(i[4]=r=>w.value=!0)},{footer:e(()=>[o(h,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o(U,{title:"Please confirm action"},{default:e(()=>[o(n,{icon:l(z),color:"whiteDark",small:"","rounded-full":""},null,8,["icon"])]),_:1}),hl]),_:1}),o(b,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:i[5]||(i[5]=r=>y.value=!0)},{footer:e(()=>[o(h,null,{default:e(()=>[o(n,{label:"Done",color:"danger"})]),_:1})]),default:e(()=>[o(U,{title:"Unhandled exception"}),gl]),_:1}),o(b,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:i[6]||(i[6]=r=>v.value=!0)},{footer:e(()=>[o(n,{label:"Done",color:"success"})]),default:e(()=>[o(U,{title:"Success"}),vl]),_:1})])]),_:1}),o(B,{custom:""},{default:e(()=>[wl,a("div",Cl,[o(A,{modelValue:C.value,"onUpdate:modelValue":i[7]||(i[7]=r=>C.value=r),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),o(k,null,{default:e(()=>[o(O,{color:"info",icon:l(X),outline:l(c)},{right:e(()=>[o(n,{label:"Button",color:l(c)?"info":"white",outline:l(c),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[xl,kl]),_:1},8,["icon","outline"]),o(O,{color:"success",icon:l(Y),outline:l(c)},{right:e(()=>[o(n,{label:"Button",color:l(c)?"success":"white",outline:l(c),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[Bl,yl]),_:1},8,["icon","outline"]),o(O,{color:"warning",icon:l(ll),outline:l(c)},{right:e(()=>[o(n,{label:"Button",color:l(c)?"warning":"white",outline:l(c),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[Vl,Sl]),_:1},8,["icon","outline"]),o(O,{color:"danger",icon:l(W),outline:l(c)},{right:e(()=>[o(n,{label:"Button",color:l(c)?"danger":"white",outline:l(c),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[$l,Dl]),_:1},8,["icon","outline"]),o(O,{color:"contrast",icon:l(ol),outline:l(c)},{default:e(()=>[Ol,Nl]),_:1},8,["icon","outline"])]),_:1}),o(B,null,{default:e(()=>[Ul]),_:1}),o(k,null,{default:e(()=>[o(b,null,{default:e(()=>[o(j,{label:"Settings"},{default:e(()=>[o(A,{modelValue:f.value,"onUpdate:modelValue":i[8]||(i[8]=r=>f.value=r),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",rounded:"Rounded",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),o(L),o(h,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"])]),_:1}),o(L),o(h,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1}),o(L),o(h,null,{default:e(()=>[o(n,{color:"lightDark",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",icon:l(m),small:l(u),outline:l(t),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1})]),_:1})]),_:1}),o(B,null,{default:e(()=>[Ll]),_:1}),o(k,null,{default:e(()=>[o(b,null,{default:e(()=>[o(j,{label:"Settings"},{default:e(()=>[o(A,{modelValue:V.value,"onUpdate:modelValue":i[9]||(i[9]=r=>V.value=r),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",icon:"Icon"}},null,8,["modelValue"])]),_:1}),o(L),o(h,null,{default:e(()=>[o(N,{color:"contrast",label:"Contrast",small:l($),outline:l(S),icon:l(D)},null,8,["small","outline","icon"]),o(N,{color:"info",label:"Info",small:l($),outline:l(S),icon:l(D)},null,8,["small","outline","icon"]),o(N,{color:"success",label:"Success",small:l($),outline:l(S),icon:l(D)},null,8,["small","outline","icon"]),o(N,{color:"warning",label:"Warning",small:l($),outline:l(S),icon:l(D)},null,8,["small","outline","icon"]),o(N,{color:"danger",label:"Danger",small:l($),outline:l(S),icon:l(D)},null,8,["small","outline","icon"])]),_:1})]),_:1})]),_:1}),o(B,null,{default:e(()=>[Tl]),_:1}),o(k,null,{default:e(()=>[a("div",Ml,[o(b,null,{footer:e(()=>[o(h,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o(U,{title:"With title & icon"},{default:e(()=>[o(n,{icon:l(el),color:"whiteDark","rounded-full":""},null,8,["icon"])]),_:1}),Al]),_:1}),o(b,null,{footer:e(()=>[o(h,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[El]),_:1})]),o(tl,{icon:l(W),title:"Empty variation"},null,8,["icon"]),o(b,null,{default:e(()=>[o(al)]),_:1})]),_:1})]),_:1})])}}};export{no as default};
