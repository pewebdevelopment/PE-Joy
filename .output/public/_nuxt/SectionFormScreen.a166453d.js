import{j as w,k,l as y,m as b,p as v,aa as B,a9 as R,o as r,a as l,i as a,b as e,w as o,F as P,E as C,u as c,s as i,r as S,f as N,C as t,ab as T}from"./entry.0166a11c.js";import{g as L,a as V}from"./colorsPremium.66e9baff.js";import{J as u}from"./JustboilLogo.1cde41d6.js";import{_ as Y}from"./BaseButton.29826059.js";const j={key:0,class:"space-y-12 px-12"},E={class:"hidden lg:block"},F=a("div",{class:"text-center text-white py-12 md:py-0"},[a("h1",{class:"text-5xl lg:text-6xl font-black"},"All instances"),a("h2",{class:"text-2xl"},"managed from one place")],-1),D={class:"hidden md:block py-12 md:py-0 text-center text-white text-opacity-50 dark:text-opacity-80"},I=t(" Instagram "),J=t(" | "),$=t(" Telegram "),q=t(" | "),z=t(" Teletype "),A={class:"hidden md:block text-white"},M={key:1,class:"md:hidden space-y-12 py-12"},G={class:"text-white text-opacity-50"},H=t(" Instagram "),K=t(" | "),O=t(" Telegram "),Q=t(" | "),U=t(" Teletype "),W={class:"text-white"},ae={__name:"SectionFormScreen",props:{bg:{type:String,required:!0,validator:n=>["purplePink","pinkRed","yellowRed","redYellow"].includes(n)},hasPromo:Boolean},setup(n){const _=n,m=w(()=>{if(k().darkMode)return y;switch(_.bg){case"purplePink":return v;case"pinkRed":return b;case"yellowRed":return V;case"redYellow":return L}return""}),h=B().name,p={login:"Login",signup:"Signup",remind:"Remind",error:"Error"};return(g,Z)=>{const f=R("Basebuttons"),s=T;return r(),l("section",{class:N(["flex flex-col items-center md:flex-row md:justify-around md:px-6 min-h-screen transition-background-image duration-1000",c(m)])},[n.hasPromo?(r(),l("div",j,[a("div",E,[e(f,{type:"justify-center",glue:""},{default:o(()=>[(r(),l(P,null,C(p,(x,d)=>e(Y,{key:d,"rounded-full":"",to:{name:d},"active-soft":d===c(h),label:x,color:"whiteDark"},null,8,["to","active-soft","label"])),64))]),_:1})]),F,a("div",D,[e(s,{to:"/"},{default:o(()=>[I]),_:1}),J,e(s,{to:"/"},{default:o(()=>[$]),_:1}),q,e(s,{to:"/"},{default:o(()=>[z]),_:1})]),a("div",A,[e(s,{to:"/"},{default:o(()=>[e(u,{class:"w-auto h-12 mx-auto"})]),_:1})])])):i("",!0),S(g.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl"}),n.hasPromo?(r(),l("div",M,[a("div",G,[e(s,{to:"/"},{default:o(()=>[H]),_:1}),K,e(s,{to:"/"},{default:o(()=>[O]),_:1}),Q,e(s,{to:"/"},{default:o(()=>[U]),_:1})]),a("div",W,[e(s,{to:"/"},{default:o(()=>[e(u,{class:"w-auto h-8 mx-auto"})]),_:1})])])):i("",!0)],2)}}};export{ae as _};
