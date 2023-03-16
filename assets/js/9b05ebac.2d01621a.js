"use strict";(self.webpackChunkscrypt_ts_docs=self.webpackChunkscrypt_ts_docs||[]).push([[7945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||o[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,s={unversionedId:"reference/classes/bsv.Transaction.Input.PublicKeyHash",id:"reference/classes/bsv.Transaction.Input.PublicKeyHash",title:"bsv.Transaction.Input.PublicKeyHash",description:"scrypt-ts / bsv / Transaction / Input / PublicKeyHash",source:"@site/docs/reference/classes/bsv.Transaction.Input.PublicKeyHash.md",sourceDirName:"reference/classes",slug:"/reference/classes/bsv.Transaction.Input.PublicKeyHash",permalink:"/reference/classes/bsv.Transaction.Input.PublicKeyHash",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bsv.Transaction.Input-1",permalink:"/reference/classes/bsv.Transaction.Input-1"},next:{title:"bsv.Transaction.Output",permalink:"/reference/classes/bsv.Transaction.Output"}},p={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"output",id:"output",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"outputIndex",id:"outputindex",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"prevTxId",id:"prevtxid",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"script",id:"script",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"sequenceNumber",id:"sequencenumber",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods-1",level:2},{value:"getPreimage",id:"getpreimage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"getSignatures",id:"getsignatures",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"isValidSignature",id:"isvalidsignature",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"setScript",id:"setscript",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-9",level:4}],u={toc:d};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/"},"scrypt-ts")," / ",(0,r.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv")," / ",(0,r.kt)("a",{parentName:"p",href:"/reference/modules/bsv.Transaction"},"Transaction")," / ",(0,r.kt)("a",{parentName:"p",href:"/reference/modules/bsv.Transaction.Input"},"Input")," / PublicKeyHash"),(0,r.kt)("h1",{id:"class-publickeyhash"},"Class: PublicKeyHash"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/modules/bsv.Transaction"},"Transaction"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/modules/bsv.Transaction.Input"},"Input"),".PublicKeyHash"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Input"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PublicKeyHash"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash#constructor"},"constructor"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash#output"},"output")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash#outputindex"},"outputIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash#prevtxid"},"prevTxId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash#script"},"script")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash#sequencenumber"},"sequenceNumber"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash#getpreimage"},"getPreimage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash#getsignatures"},"getSignatures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash#isvalidsignature"},"isValidSignature")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash#setscript"},"setScript"))),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new PublicKeyHash"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1"},"Input"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:381"),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"output"},"output"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"output"),": ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Output"},(0,r.kt)("inlineCode",{parentName:"a"},"Output"))),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1"},"Input"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1#output"},"output")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:380"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"outputindex"},"outputIndex"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"outputIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1"},"Input"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1#outputindex"},"outputIndex")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:377"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"prevtxid"},"prevTxId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"prevTxId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1"},"Input"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1#prevtxid"},"prevTxId")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:376"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"script"},"script"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"script"),": ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1"},"Input"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1#script"},"script")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:379"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sequencenumber"},"sequenceNumber"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"sequenceNumber"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1"},"Input"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1#sequencenumber"},"sequenceNumber")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:378"),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"getpreimage"},"getPreimage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getPreimage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"tx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputIndex"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sigtype?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isLowS?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Transaction-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sigtype?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isLowS?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1"},"Input"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1#getpreimage"},"getPreimage")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:385"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getsignatures"},"getSignatures"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getSignatures"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"tx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"privateKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputIndex"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sigtype?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Transaction-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"privateKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.PrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PrivateKey")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sigtype?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1"},"Input"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1#getsignatures"},"getSignatures")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:384"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isvalidsignature"},"isValidSignature"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isValidSignature"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"tx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sig"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Transaction-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sig")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1"},"Input"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1#isvalidsignature"},"isValidSignature")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:382"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setscript"},"setScript"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setScript"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"script"),"): ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKeyHash"))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script")))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input.PublicKeyHash"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKeyHash"))),(0,r.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1"},"Input"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.Transaction.Input-1#setscript"},"setScript")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:383"))}o.isMDXComponent=!0}}]);