import{o as a,a as o,c as n,f as t,s as r,i as c,x as i,j as u,U as m,y as d,u as p}from"./entry.debd92e4.js";import{_ as x}from"./BaseIcon.b53940c3.js";const f={__name:"PillTagPlain",props:{label:{type:String,required:!0},icon:{type:String,default:null},small:Boolean},setup(l){return(e,s)=>(a(),o("div",{class:t(["inline-flex items-center capitalize leading-none text-slate-700 dark:text-slate-100",[l.small?"text-xs":"text-sm"]])},[l.icon?(a(),n(x,{key:0,path:l.icon,h:"h-4",w:"w-4",class:t(l.small?"mr-1":"mr-2"),size:l.small?14:null},null,8,["path","class","size"])):r("",!0),c("span",null,i(l.label),1)],2))}},h={__name:"PillTag",props:{label:{type:String,required:!0},color:{type:String,required:!0},icon:{type:String,default:null},small:Boolean,outline:Boolean},setup(l){const e=l,s=u(()=>[e.small?"py-1 px-3":"py-1.5 px-4",e.outline?m[e.color]:d[e.color]]);return(g,y)=>(a(),n(f,{class:t(["border rounded-full dark:border-slate-100",p(s)]),icon:l.icon,label:l.label,small:l.small},null,8,["class","icon","label","small"]))}};export{h as _,f as a};
