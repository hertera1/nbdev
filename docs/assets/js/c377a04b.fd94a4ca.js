"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[394],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r,o=n(7462),a=n(3366),c=(n(7294),n(3905)),i=["components"],l={},p=void 0,u={unversionedId:"index",id:"index",title:"index",description:"Process and export Jupyter Notebooks fast",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/fastai/nbprocess/tree/main/packages/create-docusaurus/templates/shared/docs/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"06b_mdx",permalink:"/06b_mdx"}},s={},d=[{value:"Install",id:"install",level:2},{value:"How to use",id:"how-to-use",level:2}],f=(r="CodeOutputBlock",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),m={toc:d};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"#hide\nfrom nbprocess.read import *\n")),(0,c.kt)("h1",{id:"nbprocess"},"nbprocess"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Process and export Jupyter Notebooks fast")),(0,c.kt)("p",null,"This file will become your README and also the index of your documentation."),(0,c.kt)("h2",{id:"install"},"Install"),(0,c.kt)("p",null,"With pip:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"pip install nbprocess\n")),(0,c.kt)("p",null,"With conda:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"conda install -c fastai nbprocess\n")),(0,c.kt)("h2",{id:"how-to-use"},"How to use"),(0,c.kt)("p",null,"Fill me in please! Don't forget code examples:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"1+1\n")),(0,c.kt)(f,{lang:"",mdxType:"CodeOutputBlock"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"2\n"))))}b.isMDXComponent=!0}}]);