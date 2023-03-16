"use strict";(self.webpackChunkscrypt_ts_docs=self.webpackChunkscrypt_ts_docs||[]).push([[1567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=o(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||k[u]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,d={unversionedId:"reference/modules/bsv.Networks",id:"reference/modules/bsv.Networks",title:"bsv.Networks",description:"scrypt-ts / bsv / Networks",source:"@site/docs/reference/modules/bsv.Networks.md",sourceDirName:"reference/modules",slug:"/reference/modules/bsv.Networks",permalink:"/reference/modules/bsv.Networks",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bsv.crypto.IOpts",permalink:"/reference/interfaces/bsv.crypto.IOpts"},next:{title:"bsv.Script.Interpreter",permalink:"/reference/modules/bsv.Script.Interpreter"}},s={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"Type",id:"type",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Variables",id:"variables-1",level:2},{value:"defaultNetwork",id:"defaultnetwork",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"livenet",id:"livenet",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"mainnet",id:"mainnet",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"testnet",id:"testnet",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Functions",id:"functions-1",level:2},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"remove",id:"remove",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4}],p={toc:o};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/reference/"},"scrypt-ts")," / ",(0,a.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv")," / Networks"),(0,a.kt)("h1",{id:"namespace-networks"},"Namespace: Networks"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv"),".Networks"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/interfaces/bsv.Networks.Network"},"Network"))),(0,a.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Networks#type"},"Type"))),(0,a.kt)("h3",{id:"variables"},"Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Networks#defaultnetwork"},"defaultNetwork")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Networks#livenet"},"livenet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Networks#mainnet"},"mainnet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Networks#testnet"},"testnet"))),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Networks#add"},"add")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Networks#get"},"get")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Networks#remove"},"remove"))),(0,a.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"livenet"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"testnet"')," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/reference/interfaces/bsv.Networks.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:929"),(0,a.kt)("h2",{id:"variables-1"},"Variables"),(0,a.kt)("h3",{id:"defaultnetwork"},"defaultNetwork"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"defaultNetwork"),": ",(0,a.kt)("a",{parentName:"p",href:"/reference/interfaces/bsv.Networks.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:934"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"livenet"},"livenet"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"livenet"),": ",(0,a.kt)("a",{parentName:"p",href:"/reference/interfaces/bsv.Networks.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:931"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mainnet"},"mainnet"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"mainnet"),": ",(0,a.kt)("a",{parentName:"p",href:"/reference/interfaces/bsv.Networks.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network"))),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:932"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"testnet"},"testnet"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"testnet"),": ",(0,a.kt)("a",{parentName:"p",href:"/reference/interfaces/bsv.Networks.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network"))),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:933"),(0,a.kt)("h2",{id:"functions-1"},"Functions"),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"add"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,a.kt)("a",{parentName:"p",href:"/reference/interfaces/bsv.Networks.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"data")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/reference/interfaces/bsv.Networks.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network"))),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:936"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"get"},"get"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"get"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"keys"),"): ",(0,a.kt)("a",{parentName:"p",href:"/reference/interfaces/bsv.Networks.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network"))),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"/reference/interfaces/bsv.Networks.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"keys")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),"[]")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/reference/interfaces/bsv.Networks.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network"))),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:938"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"remove"},"remove"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"remove"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"network"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"network")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/reference/modules/bsv.Networks#type"},(0,a.kt)("inlineCode",{parentName:"a"},"Type")))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:937"))}k.isMDXComponent=!0}}]);