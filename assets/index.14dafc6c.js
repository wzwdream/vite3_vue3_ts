import{a as l,c as u,b as e,s as i,v as r,e as h,w as c,r as p,o as t,f as o,j as a,g as E,E as F}from"./index.65c458eb.js";import{E as w}from"./el-card.422752b6.js";const v=l({name:"ConditionalRenderingTsx",props:{isShow:{type:Boolean,defualt:!0,required:!0}},setup(s){const n=()=>s.isShow?u("span",null,[e("\u6211\u662Fif")]):u("span",null,[e("\u6211\u662Felse")]);return()=>u(w,{shadow:"hover",header:"TSX\u8BED\u6CD5"},{default:()=>[u("p",null,[e("tsx\u8BED\u6CD5\u7684\u6761\u4EF6\u6E32\u67D3\u53EF\u4EE5\u4F7F\u7528 `v-show`, `if/else`, `\u4E09\u76EE\u8FD0\u7B97`\u7B49")]),u("p",null,[e("v-show: "),i(u("span",null,[e("\u6211\u662Fv-show")]),[[r,s.isShow]])]),u("p",null,[e("if/else:"),n()]),s.isShow?u("p",null,[e("\u6211\u662F\u4E09\u76EE1")]):u("p",null,[e("\u6211\u662F\u4E09\u76EE2")])]})}}),_=o("p",null,"\u6A21\u677F\u8BED\u6CD5\u8FD8\u662F\u6307\u4EE4: `v-show`, `v-if`",-1),f=e("v-show: "),C=e("v-if: "),D={key:0},m={key:1},B=l({__name:"ConditionalRenderingVue",props:{isShow:{type:Boolean,defualt:!0,required:!0}},setup(s){const n=s;return(S,x)=>{const d=p("el-card");return t(),h(d,{shadow:"hover",header:"\u6A21\u677F\u8BED\u6CD5"},{default:c(()=>[_,o("p",null,[f,i(o("span",null,"\u6211\u662Fv-show",512),[[r,n.isShow]])]),o("p",null,[C,n.isShow?(t(),a("span",D,"\u6211\u662Fv-if")):(t(),a("span",m,"\u6211\u662Fv-else"))])]),_:1})}}}),y=l({name:"ConditionalRendering",setup(){const s=E(!0),n=()=>{s.value=!s.value};return()=>u("div",null,[u(F,{type:"primary",onClick:n},{default:()=>[s.value?"\u9690\u85CF":"\u663E\u793A"]}),u("p",null,[e("Vue\u7684\u6A21\u677F\u8BED\u6CD5\u7684\u63D2\u503C\u4F7F\u7528\u7684\u662F \u53CC\u5927\u62EC\u53F7 `"),"{{}}",e("`, jsx/tsx\u4E2D\u7684\u63D2\u503C\u4F7F\u7528\u7684\u662F \u5355\u5927\u62EC\u53F7 `"),"{}",e("`")]),u("div",{class:"box"},[u(v,{isShow:s.value},null),u(B,{isShow:s.value},null)])])}});export{y as default};
