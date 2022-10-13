import{t as _,u as x,v as h,a as b,w as v,x as w,y as S}from"./mdi.deb107fc.js";import{_ as p}from"./CardBox.9404004b.js";import{j as o,o as f,c as y,w as i,b as s,Q as c,u as l,i as r,x as a,C as $}from"./entry.debd92e4.js";import{_ as g}from"./PillTag.5f7877bb.js";import{a as q}from"./SectionTitleLineWithButton.0de1be1e.js";import{_ as C}from"./UserAvatar.d9f353de.js";const T={class:"text-center space-y-1 md:text-left md:mr-6"},N={class:"text-xl"},B={class:"text-gray-500 dark:text-slate-400"},k={class:"text-center md:text-right space-y-2"},j={class:"text-sm text-gray-500"},A={__name:"CardBoxTransaction",props:{amount:{type:Number,required:!0},date:{type:String,required:!0},business:{type:String,required:!0},type:{type:String,required:!0},name:{type:String,required:!0},account:{type:String,required:!1}},setup(e){const t=e,n=o(()=>t.type==="withdrawal"?{icon:_,type:"danger"}:t.type==="deposit"?{icon:x,type:"success"}:t.type==="invoice"?{icon:h,type:"warning"}:{icon:b,type:"info"});return(d,m)=>(f(),y(p,{class:"mb-6 last:mb-0","is-hoverable":""},{default:i(()=>[s(c,null,{default:i(()=>[s(c,{type:"justify-start"},{default:i(()=>[s(q,{icon:l(n).icon,color:l(n).type,class:"md:mr-6"},null,8,["icon","color"]),r("div",T,[r("h4",N,"$"+a(e.amount),1),r("p",B,[r("b",null,a(e.date),1),$(" via "+a(e.business),1)])])]),_:1}),r("div",k,[r("p",j,a(e.name),1),r("div",null,[s(g,{color:l(n).type,label:e.type,small:""},null,8,["color","label"])])])]),_:1})]),_:1}))}},V={class:"text-center md:text-left overflow-hidden"},D={class:"text-xl text-ellipsis"},I={class:"text-gray-500 dark:text-slate-400"},E={__name:"CardBoxClient",props:{name:{type:String,required:!0},login:{type:String,required:!0},date:{type:String,required:!0},progress:{type:Number,default:0},text:{type:String,default:null},type:{type:String,default:null}},setup(e){const t=e,n=o(()=>t.type?t.type:t.progress?t.progress>=60?"success":t.progress>=40?"warning":"danger":"info"),d=o(()=>({success:v,warning:w,danger:S,info:null})[n.value]),m=o(()=>{var u;return(u=t.text)!=null?u:`${t.progress}%`});return(u,M)=>(f(),y(p,{class:"mb-6 last:mb-0","is-hoverable":""},{default:i(()=>[s(c,null,{default:i(()=>[s(c,{type:"justify-start"},{default:i(()=>[s(C,{class:"w-12 h-12 mr-6",username:e.name},null,8,["username"]),r("div",V,[r("h4",D,a(e.name),1),r("p",I,a(e.date)+" @ "+a(e.login),1)])]),_:1}),s(g,{color:l(n),label:l(m),icon:l(d)},null,8,["color","label","icon"])]),_:1})]),_:1}))}};export{A as _,E as a};
