import{B as r,bB as d,j as l,a1 as p,D as c,F as m,J as h,K as u,w as f,a5 as C,L as _}from"./vendor.bf608252.js";/* empty css               */import{_ as g,a as v,b}from"./index.a0c994af.js";import{b as y}from"./index.36d47694.js";import"./index.d0105eed.js";/* empty css               *//* empty css                */import"./index.0f8f8b16.js";import"./index.4c0cd400.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.e50a4201.js";/* empty css               */import"./lock.79679ba2.js";const B=r({name:"SwitchItem",components:{Switch:d},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=v("setting-switch-item"),{t:n}=b(),a=l(()=>e.def?{checked:e.def}:{});function o(s){e.event&&y(e.event,s)}return{prefixCls:t,t:n,handleChange:o,getBindValue:a}}});function w(e,t,n,a,o,s){const i=p("Switch");return c(),m("div",{class:_(e.prefixCls)},[h("span",null,u(e.title),1),f(i,C(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var K=g(B,[["render",w],["__scopeId","data-v-194612c4"]]);export{K as default};