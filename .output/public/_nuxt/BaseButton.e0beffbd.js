import{j as n,R as m,v as y,o as a,a as r,c as s,w as b,s as i,f as c,u as o,x as g,t as h}from"./entry.debd92e4.js";import{_ as S}from"./BaseIcon.b53940c3.js";const k={__name:"BaseButton",props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},iconSize:{type:[String,Number],default:null},href:{type:String,default:null},target:{type:String,default:null},to:{type:[String,Object],default:null},type:{type:String,default:null},color:{type:String,default:"white"},as:{type:String,default:null},small:Boolean,outline:Boolean,active:Boolean,disabled:Boolean,roundedFull:Boolean},setup(t){const e=t,u=n(()=>e.as?e.as:e.to?m:e.href?"a":"button"),d=n(()=>{var l;return u.value==="button"?(l=e.type)!=null?l:"button":null}),f=n(()=>e.small&&e.icon?"px-1":"px-2"),p=n(()=>{const l=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",e.disabled?"cursor-not-allowed":"cursor-pointer",e.roundedFull?"rounded-full":"rounded",y(e.color,e.outline,!e.disabled,e.active)];return!e.label&&e.icon?l.push("p-1"):e.small?l.push("text-sm",e.roundedFull?"px-3 py-1":"p-1"):l.push("py-2",e.roundedFull?"px-6":"px-3"),e.disabled&&l.push(e.outline?"opacity-50":"opacity-70"),l});return(l,x)=>(a(),r("div",null,[(a(),s(h(o(u)),{class:c(o(p)),href:t.href,type:o(d),to:t.to,target:t.target,disabled:t.disabled},{default:b(()=>[t.icon?(a(),s(S,{key:0,path:t.icon,size:t.iconSize},null,8,["path","size"])):i("",!0),t.label?(a(),r("span",{key:1,class:c(o(f))},g(t.label),3)):i("",!0)]),_:1},8,["class","href","type","to","target","disabled"]))]))}};export{k as _};
