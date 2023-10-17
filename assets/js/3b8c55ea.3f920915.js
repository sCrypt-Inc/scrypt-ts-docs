"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[3217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},o="Installation",l={unversionedId:"installation",id:"installation",title:"Installation",description:"Prerequisite",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"Bitcoin Basics",permalink:"/bitcoin-basics/"}},p={},s=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"The sCrypt CLI Tool",id:"the-scrypt-cli-tool",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"Node.js")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"NPM")," on your machine by following the instructions over ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"here"),".")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Require ",(0,a.kt)("inlineCode",{parentName:"p"},"Node.js")," version ",(0,a.kt)("inlineCode",{parentName:"p"},">=16"),".")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, install the scrypt cli"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g scrypt-cli\n")),(0,a.kt)("p",null,"This will install the scrypt cli globally to your machine, after which you can create scrypt projects."),(0,a.kt)("h2",{id:"the-scrypt-cli-tool"},"The sCrypt CLI Tool"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scrypt-cli"},"sCrypt CLI tool")," is used to easily create, compile and publish ",(0,a.kt)("inlineCode",{parentName:"p"},"sCrypt")," projects. The CLI provides best practice project scaffolding including dependencies such as sCrypt, a test framework (",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org"},"Mocha"),"), code auto-formatting (",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io"},"Prettier"),"), linting (",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org"},"ES Lint"),"), & more."),(0,a.kt)("p",null,"We can run the CLI tool directly with ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," and try it out by creating a demo project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx scrypt-cli project demo\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also simply fork ",(0,a.kt)("a",{parentName:"p",href:"https://replit.com/@msinkec/scryptTS-demo"},"the demo contract Repl")," and play with the code in your browser.")))}u.isMDXComponent=!0}}]);