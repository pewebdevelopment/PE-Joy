import{A as _,H as E,o as a,c as $,w as b,i as e,L,T,t as V,I as j,j as p,a as l,F as f,E as w,x as o,s as C,b as d,u as i,h as D,Q as F}from"./entry.debd92e4.js";import{q as H,r as q}from"./mdi.deb107fc.js";import{_ as x}from"./BaseButton.e0beffbd.js";import{_ as I}from"./UserAvatar.d9f353de.js";const Q={class:"checkbox"},U=e("span",{class:"check"},null,-1),z={__name:"TableCheckboxCell",props:{type:{type:String,default:"td"}},emits:["checked"],setup(v,{emit:y}){const c=_(!1);return E(c,g=>{y("checked",g)}),(g,k)=>(a(),$(V(v.type),{class:"lg:w-1"},{default:b(()=>[e("label",Q,[L(e("input",{"onUpdate:modelValue":k[0]||(k[0]=h=>c.value=h),type:"checkbox"},null,512),[[T,c.value]]),U])]),_:1}))}},G={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},J={key:0},K=e("th",null,null,-1),O=e("th",null,"Name",-1),R=e("th",null,"Company",-1),W=e("th",null,"City",-1),X=e("th",null,"Progress",-1),Y=e("th",null,"Created",-1),Z=e("th",null,null,-1),ee={class:"border-b-0 lg:w-6 before:hidden"},te={"data-label":"Name"},se={"data-label":"Company"},ae={"data-label":"City"},le={"data-label":"Progress",class:"lg:w-32"},oe=["value"],ne={"data-label":"Created",class:"lg:w-1 whitespace-nowrap"},re=["title"],ce={class:"before:hidden lg:w-1 whitespace-nowrap"},ue={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},me={__name:"TableSampleClients",props:{checkable:Boolean},setup(v){const y=j(),c=p(()=>y.clients),g=_(!1),k=_(!1),h=_(5),u=_(0),m=_([]),B=p(()=>c.value.slice(h.value*u.value,h.value*(u.value+1))),P=p(()=>Math.ceil(c.value.length/h.value)),M=p(()=>u.value+1),N=p(()=>{const n=[];for(let s=0;s<P.value;s++)n.push(s);return n}),S=(n,s)=>{const t=[];return n.forEach(r=>{s(r)||t.push(r)}),t},A=(n,s)=>{n?m.value.push(s):m.value=S(m.value,t=>t.id===s.id)};return(n,s)=>(a(),l(f,null,[m.value.length?(a(),l("div",G,[(a(!0),l(f,null,w(m.value,t=>(a(),l("span",{key:t.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},o(t.name),1))),128))])):C("",!0),e("table",null,[e("thead",null,[e("tr",null,[v.checkable?(a(),l("th",J)):C("",!0),K,O,R,W,X,Y,Z])]),e("tbody",null,[(a(!0),l(f,null,w(i(B),t=>(a(),l("tr",{key:t.id},[v.checkable?(a(),$(z,{key:0,onChecked:r=>A(r,t)},null,8,["onChecked"])):C("",!0),e("td",ee,[d(I,{username:t.name,class:"w-24 h-24 mx-auto lg:w-6 lg:h-6"},null,8,["username"])]),e("td",te,o(t.name),1),e("td",se,o(t.company),1),e("td",ae,o(t.city),1),e("td",le,[e("progress",{class:"flex w-2/5 self-center lg:w-full",max:"100",value:t.progress},o(t.progress),9,oe)]),e("td",ne,[e("small",{class:"text-gray-500 dark:text-slate-400",title:t.created},o(t.created),9,re)]),e("td",ce,[d(D,{type:"justify-start lg:justify-end","no-wrap":""},{default:b(()=>[d(x,{color:"info",icon:i(H),small:"",onClick:s[0]||(s[0]=r=>g.value=!0)},null,8,["icon"]),d(x,{color:"danger",icon:i(q),small:"",onClick:s[1]||(s[1]=r=>k.value=!0)},null,8,["icon"])]),_:1})])]))),128))])]),e("div",ue,[d(F,null,{default:b(()=>[d(D,null,{default:b(()=>[(a(!0),l(f,null,w(i(N),t=>(a(),$(x,{key:t,active:t===u.value,label:t+1,color:t===u.value?"lightDark":"whiteDark",small:"",onClick:r=>u.value=t},null,8,["active","label","color","onClick"]))),128))]),_:1}),e("small",null,"Page "+o(i(M))+" of "+o(i(P)),1)]),_:1})])],64))}};export{me as _};
