"use strict";(self.webpackChunkscrypt_ts_docs=self.webpackChunkscrypt_ts_docs||[]).push([[701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),k=p(n),m=l,h=k["".concat(s,".").concat(m)]||k[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},o),{},{components:n})):r.createElement(h,a({ref:t},o))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=k;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:l,a[1]=d;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const i={},a=void 0,d={unversionedId:"reference/classes/Sha256",id:"reference/classes/Sha256",title:"Sha256",description:"scrypt-ts / Sha256",source:"@site/docs/reference/classes/Sha256.md",sourceDirName:"reference/classes",slug:"/reference/classes/Sha256",permalink:"/scrypt-ts-docs/reference/classes/Sha256",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sha1",permalink:"/scrypt-ts-docs/reference/classes/Sha1"},next:{title:"Sig",permalink:"/scrypt-ts-docs/reference/classes/Sig"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Accessors",id:"accessors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"_asm",id:"_asm",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"_literal",id:"_literal",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"_type",id:"_type",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"_typeResolver",id:"_typeresolver",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"_value",id:"_value",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"Accessors",id:"accessors-1",level:2},{value:"finalType",id:"finaltype",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"literal",id:"literal",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"type",id:"type",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"value",id:"value",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"Methods",id:"methods-1",level:2},{value:"checkValue",id:"checkvalue",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"clone",id:"clone",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"serialize",id:"serialize",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"toASM",id:"toasm",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"toHex",id:"tohex",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-16",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"toLiteral",id:"toliteral",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Inherited from",id:"inherited-from-17",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"toString",id:"tostring",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-18",level:4}],o={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/scrypt-ts-docs/reference/"},"scrypt-ts")," / Sha256"),(0,l.kt)("h1",{id:"class-sha256"},"Class: Sha256"),(0,l.kt)("p",null,"a SHA-256 hash type."),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Sha256")),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Sha256"))))),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("h3",{id:"constructors"},"Constructors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#constructor"},"constructor"))),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#_asm"},"_","asm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#_literal"},"_","literal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#_type"},"_","type")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#_typeresolver"},"_","typeResolver")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#_value"},"_","value"))),(0,l.kt)("h3",{id:"accessors"},"Accessors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#finaltype"},"finalType")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#literal"},"literal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#type"},"type")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#value"},"value"))),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#checkvalue"},"checkValue")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#clone"},"clone")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#equals"},"equals")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#serialize"},"serialize")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#toasm"},"toASM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#tohex"},"toHex")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#tojson"},"toJSON")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#toliteral"},"toLiteral")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/scrypt-ts-docs/reference/classes/Sha256#tostring"},"toString"))),(0,l.kt)("h2",{id:"constructors-1"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"new Sha256"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"bytesVal"),")"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytesVal")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".constructor"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:96"),(0,l.kt)("h2",{id:"properties-1"},"Properties"),(0,l.kt)("h3",{id:"_asm"},"_","asm"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("strong",{parentName:"p"},"_","asm"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".","_","asm"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:23"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"_literal"},"_","literal"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("strong",{parentName:"p"},"_","literal"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".","_","literal"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:22"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"_type"},"_","type"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("strong",{parentName:"p"},"_","type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".","_","type"),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:24"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"_typeresolver"},"_","typeResolver"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("strong",{parentName:"p"},"_","typeResolver"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeResolver")),(0,l.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".","_","typeResolver"),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:25"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"_value"},"_","value"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("strong",{parentName:"p"},"_","value"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"ValueType")),(0,l.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".","_","value"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:21"),(0,l.kt)("h2",{id:"accessors-1"},"Accessors"),(0,l.kt)("h3",{id:"finaltype"},"finalType"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"finalType"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".finalType"),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:29"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"literal"},"literal"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"literal"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".literal"),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:30"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"type"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".type"),(0,l.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:31"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"value"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"ValueType")),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ValueType")),(0,l.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".value"),(0,l.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:28"),(0,l.kt)("h2",{id:"methods-1"},"Methods"),(0,l.kt)("h3",{id:"checkvalue"},"checkValue"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"checkValue"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"ValueType")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ValueType"),"[]")))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ValueType")),(0,l.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".checkValue"),(0,l.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:37"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"clone"},"clone"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"clone"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"ScryptType")),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ScryptType")),(0,l.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".clone"),(0,l.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:40"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"equals"},"equals"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"equals"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"obj"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"obj")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ScryptType"))))),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".equals"),(0,l.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:38"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"serialize"},"serialize"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"serialize"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".serialize"),(0,l.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:98"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"toasm"},"toASM"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"toASM"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"returns-8"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".toASM"),(0,l.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:32"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tohex"},"toHex"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"toHex"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"returns-9"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-15"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".toHex"),(0,l.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:33"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tojson"},"toJSON"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"unknown")),(0,l.kt)("h4",{id:"returns-10"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"unknown")),(0,l.kt)("h4",{id:"inherited-from-16"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".toJSON"),(0,l.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:35"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"toliteral"},"toLiteral"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"toLiteral"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"returns-11"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-17"},"Inherited from"),(0,l.kt)("p",null,"Sha256","_",".toLiteral"),(0,l.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,l.kt)("p",null,"node_modules/scryptlib/dist/scryptTypes.d.ts:97"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tostring"},"toString"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"toString"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"format?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"format")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},'"hex"')),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"'hex'"))))),(0,l.kt)("h4",{id:"returns-12"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"overrides"},"Overrides"),(0,l.kt)("p",null,"Sha256","_",".toString"),(0,l.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/types.ts#L142"},"src/builtins/types.ts:142")))}u.isMDXComponent=!0}}]);