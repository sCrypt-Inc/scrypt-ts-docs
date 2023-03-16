"use strict";(self.webpackChunkscrypt_ts_docs=self.webpackChunkscrypt_ts_docs||[]).push([[7097],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(a),N=r,f=k["".concat(s,".").concat(N)]||k[N]||o[N]||i;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l=void 0,p={unversionedId:"reference/modules/bsv.Transaction.Sighash",id:"reference/modules/bsv.Transaction.Sighash",title:"bsv.Transaction.Sighash",description:"scrypt-ts / bsv / Transaction / Sighash",source:"@site/docs/reference/modules/bsv.Transaction.Sighash.md",sourceDirName:"reference/modules",slug:"/reference/modules/bsv.Transaction.Sighash",permalink:"/reference/modules/bsv.Transaction.Sighash",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bsv.Transaction.Input",permalink:"/reference/modules/bsv.Transaction.Input"},next:{title:"bsv.Transaction",permalink:"/reference/modules/bsv.Transaction"}},s={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"sighash",id:"sighash",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"sighashPreimage",id:"sighashpreimage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"sign",id:"sign",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"verify",id:"verify",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:d};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/"},"scrypt-ts")," / ",(0,r.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv")," / ",(0,r.kt)("a",{parentName:"p",href:"/reference/modules/bsv.Transaction"},"Transaction")," / Sighash"),(0,r.kt)("h1",{id:"namespace-sighash"},"Namespace: Sighash"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/modules/bsv"},"bsv"),".",(0,r.kt)("a",{parentName:"p",href:"/reference/modules/bsv.Transaction"},"Transaction"),".Sighash"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Transaction.Sighash#sighash"},"sighash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Transaction.Sighash#sighashpreimage"},"sighashPreimage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Transaction.Sighash#sign"},"sign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/modules/bsv.Transaction.Sighash#verify"},"verify"))),(0,r.kt)("h2",{id:"functions-1"},"Functions"),(0,r.kt)("h3",{id:"sighash"},"sighash"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"sighash"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"transaction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sighashType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subscript"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"satoshisBN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flags?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transaction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Transaction-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sighashType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscript")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"satoshisBN")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.crypto.BN"},(0,r.kt)("inlineCode",{parentName:"a"},"BN")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"flags?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:418"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sighashpreimage"},"sighashPreimage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"sighashPreimage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"transaction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sighashType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subscript"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"satoshisBN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flags?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transaction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Transaction-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sighashType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscript")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"satoshisBN")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.crypto.BN"},(0,r.kt)("inlineCode",{parentName:"a"},"BN")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"flags?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:410"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sign"},"sign"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"sign"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"transaction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"privateKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sighashType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputIndex"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subscript"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"satoshisBN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flags?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.crypto.Signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature"))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transaction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Transaction-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"privateKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.PrivateKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PrivateKey")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sighashType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscript")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"satoshisBN")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.crypto.BN"},(0,r.kt)("inlineCode",{parentName:"a"},"BN")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"flags?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/reference/classes/bsv.crypto.Signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:426"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"verify"},"verify"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"verify"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"transaction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"signature"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputIndex"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subscript"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"satoshisBN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flags?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transaction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Transaction-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signature")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Transaction.Signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.PublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscript")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"satoshisBN")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/reference/classes/bsv.crypto.BN"},(0,r.kt)("inlineCode",{parentName:"a"},"BN")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"flags?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:435"))}o.isMDXComponent=!0}}]);