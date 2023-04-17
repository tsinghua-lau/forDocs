import{V as d,_ as E,c as _,a as D,w as u,b as o,r as A,o as m,d as l}from"./app.4acad237.js";const{defineComponent:b}=d,h=b({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:r,withCtx:t,createVNode:s,Fragment:p,openBlock:F,createElementBlock:c}=d;function a(i,C){const n=r("el-button");return F(),c(p,null,[s(n,null,{default:t(()=>[e("默认按钮")]),_:1}),s(n,{type:"primary"},{default:t(()=>[e("主要按钮")]),_:1}),s(n,{type:"success"},{default:t(()=>[e("成功按钮")]),_:1}),s(n,{type:"info"},{default:t(()=>[e("信息按钮")]),_:1}),s(n,{type:"warning"},{default:t(()=>[e("警告按钮")]),_:1}),s(n,{type:"danger"},{default:t(()=>[e("危险按钮")]),_:1})],64)}return{render:a,...{}}}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:r,withCtx:t,createVNode:s,Fragment:p,openBlock:F,createElementBlock:c}=d;function a(i,C){const n=r("el-button");return F(),c(p,null,[s(n,null,{default:t(()=>[e("默认按钮")]),_:1}),s(n,{type:"primary"},{default:t(()=>[e("主要按钮")]),_:1}),s(n,{type:"success"},{default:t(()=>[e("成功按钮")]),_:1}),s(n,{type:"info"},{default:t(()=>[e("信息按钮")]),_:1}),s(n,{type:"warning"},{default:t(()=>[e("警告按钮")]),_:1}),s(n,{type:"danger"},{default:t(()=>[e("危险按钮")]),_:1})],64)}return{render:a,...{}}}()}}),J=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"不同尺寸","slug":"不同尺寸","link":"#不同尺寸","children":[]}],"relativePath":"guide/install.md","lastUpdated":1675387745000}'),f=o("h1",{id:"button-按钮",tabindex:"-1"},"Button 按钮",-1),B=o("p",null,"常用的操作按钮。",-1),g=o("h2",{id:"基础用法",tabindex:"-1"},"基础用法",-1),x=o("p",null,"基础的按钮用法。",-1),v=o("div",null,[l("使用 "),o("code",null,"type"),l("、"),o("code",null,"plain"),l("、"),o("code",null,"round"),l(" 和 "),o("code",null,"circle"),l(" 属性来定义 Button 的样式。")],-1),k=o("div",{class:"language-vue"},[o("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"默认按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"primary"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"主要按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"success"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"成功按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"info"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"信息按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"warning"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"警告按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"danger"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"危险按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"})])])],-1),V=o("h2",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1),w=o("p",null,"提供三种不同尺寸的按钮。",-1),N=o("div",{class:"language-vue"},[o("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"默认按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"primary"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"主要按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"success"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"成功按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"info"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"信息按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"warning"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"警告按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"danger"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"危险按钮"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"el-button"),o("span",{style:{color:"#89DDFF"}},">")]),l(`
`),o("span",{class:"line"})])])],-1);function T(e,r,t,s,p,F){const c=A("render-demo-0"),a=A("demo"),y=A("render-demo-1");return m(),_("div",null,[f,B,g,x,D(a,{customClass:"undefined",sourceCode:`<template>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</template>
`},{description:u(()=>[v]),highlight:u(()=>[k]),default:u(()=>[D(c)]),_:1}),V,w,D(a,{customClass:"undefined",sourceCode:`<el-button>默认按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button type="success">成功按钮</el-button>
<el-button type="info">信息按钮</el-button>
<el-button type="warning">警告按钮</el-button>
<el-button type="danger">危险按钮</el-button>
`},{highlight:u(()=>[N]),default:u(()=>[D(y)]),_:1})])}const O=E(h,[["render",T]]);export{J as __pageData,O as default};