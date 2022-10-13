import{_ as $}from"./BaseButton.e0beffbd.js";import{A as k,j as _,o as d,c as C,w as l,i as s,b as e,Q as f,x as r,u as n,s as j,B as V,a as g,E as z,C as F,F as q,f as h,h as w,e as A}from"./entry.debd92e4.js";import{_ as E}from"./SectionTitle.47ce2200.js";import{n as L,o as D,B as H}from"./mdi.deb107fc.js";import{a as U,C as G,_ as O}from"./CardBox.9404004b.js";import{_ as Q}from"./PillTag.5f7877bb.js";import{_ as B}from"./BaseIcon.b53940c3.js";import{_ as Y}from"./SectionMain.51b5d319.js";import"./_plugin-vue_export-helper.a1a6add7.js";const I=s("h3",{class:"text-4xl"},"$",-1),J={class:"text-5xl font-black"},K={class:"text-xl text-gray-500 dark:text-gray-400"},R={class:"text-right"},W={class:"text-2xl"},X={class:"text-lg text-gray-500 dark:text-gray-400"},Z={class:"space-y-6"},ee={class:"text-lg ml-3"},te={__name:"CardBoxPricing",props:{item:{type:Object,required:!0,validator:t=>t.title&&t.subTitle},price:{type:[String,Number],required:!0},period:{type:String,required:!0},isMain:Boolean},setup(t){const a=t,c=k(!0),i=_(()=>!a.isMain),o=_(()=>i.value&&c.value);return(x,m)=>(d(),C(O,{class:h([t.isMain?"shadow-2xl":"lg:my-12"]),rounded:"rounded-2xl","has-component-layout":""},{default:l(()=>[s("header",{class:"p-6 border-gray-50 dark:border-slate-800 border-b",onClick:m[0]||(m[0]=V(u=>c.value=!c.value,["prevent"]))},[e(f,{mobile:""},{default:l(()=>[s("div",null,[e(f,{type:"justify-start",mobile:""},{default:l(()=>[I,s("h1",J,r(t.price),1),s("h1",K," /"+r(t.period),1)]),_:1}),e(Q,{label:t.item.label,color:t.item.labelType,class:"mt-3",small:""},null,8,["label","color"])]),e(f,{mobile:""},{default:l(()=>[s("div",R,[s("h1",W,r(t.item.title),1),s("h1",X,r(t.item.subTitle),1)]),n(i)?(d(),C(B,{key:0,path:n(o)?n(L):n(D),size:"48",w:"w-16",h:"h-16",class:"ml-6 lg:hidden"},null,8,["path"])):j("",!0)]),_:1})]),_:1})]),e(U,{class:h({"hidden lg:block":n(o)})},{default:l(()=>[s("div",Z,[(d(!0),g(q,null,z(t.item.options,(u,y)=>(d(),g("div",{key:y,class:"flex items-center"},[e(B,{path:n(H),size:"24",w:"w-8",h:"h-8"},null,8,["path"]),s("span",ee,[s("b",null,r(u.main),1),F(" "+r(u.sub),1)])]))),128))])]),_:1},8,["class"]),e(G,{class:h({"hidden lg:block":n(o)})},{default:l(()=>[e(w,null,{default:l(()=>[e($,{class:"flex-1",color:"info",label:"Subscribe",outline:!t.isMain},null,8,["outline"])]),_:1})]),_:1},8,["class"])]),_:1},8,["class"]))}},se=s("h1",{class:"text-5xl lg:text-6xl font-black"},"Sample Pricing",-1),ne=s("h2",{class:"text-2xl"},"some catchy headline",-1),le={class:"grid grid-cols-1 gap-6 lg:grid-cols-3"},_e={__name:"PricingView",setup(t){const a=k("monthly"),c={monthly:{beginner:19,standard:29,pro:39},yearly:{beginner:199,standard:299,pro:399}},i=_(()=>a.value==="monthly"?"mo":"yr"),o=_(()=>c[a.value]),x={title:"Beginner",subTitle:"Essentials",label:"Good start",labelType:"contrast",options:[{main:"5",sub:"units"},{main:"100",sub:"minutes"},{main:"1",sub:"user"}]},m={title:"Standard",subTitle:"Basic options",label:"Most popular",labelType:"info",options:[{main:"25",sub:"units"},{main:"1,000",sub:"minutes"},{main:"10",sub:"users"},{main:"Hosted",sub:"runners"}]},u={title:"Pro",subTitle:"All options",label:"For large projects",labelType:"contrast",options:[{main:"100",sub:"units"},{main:"10,000",sub:"minutes"},{main:"Unlimited",sub:"users"},{main:"Hosted",sub:"runners"},{main:"SLA",sub:"guaranteed"}]};return(y,p)=>{const v=$,S=w,T=E,b=te,M=Y,P=A;return d(),g("div",null,[e(P,{name:"zen"},{default:l(()=>[e(T,{custom:""},{default:l(()=>[se,ne,e(S,{type:"justify-center",class:"mt-12",glue:"","no-wrap":""},{default:l(()=>[e(v,{label:"Monthly",outline:a.value!=="monthly",color:"contrast","rounded-full":"","no-focus-ring":"",addon:"",onClick:p[0]||(p[0]=N=>a.value="monthly")},null,8,["outline"]),e(v,{label:"Yearly",outline:a.value!=="yearly",color:"contrast","rounded-full":"","no-focus-ring":"",addon:"",onClick:p[1]||(p[1]=N=>a.value="yearly")},null,8,["outline"])]),_:1})]),_:1}),e(M,null,{default:l(()=>[s("div",le,[e(b,{item:x,price:n(o).beginner,period:n(i),class:"xl:ml-12"},null,8,["price","period"]),e(b,{item:m,price:n(o).standard,period:n(i),"is-main":""},null,8,["price","period"]),e(b,{item:u,price:n(o).pro,period:n(i),class:"xl:mr-12"},null,8,["price","period"])])]),_:1})]),_:1})])}}};export{_e as default};
