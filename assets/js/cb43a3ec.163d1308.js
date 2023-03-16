"use strict";(self.webpackChunkscrypt_ts_docs=self.webpackChunkscrypt_ts_docs||[]).push([[5090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=o(n),f=i,k=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return n?r.createElement(k,s(s({ref:t},d),{},{components:n})):r.createElement(k,s({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var o=2;o<a;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=n(7462),i=(n(7294),n(3905));const a={},s=void 0,l={unversionedId:"reference/interfaces/SignatureRequest",id:"reference/interfaces/SignatureRequest",title:"SignatureRequest",description:"scrypt-ts / SignatureRequest",source:"@site/docs/reference/interfaces/SignatureRequest.md",sourceDirName:"reference/interfaces",slug:"/reference/interfaces/SignatureRequest",permalink:"/reference/interfaces/SignatureRequest",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SignTransactionOptions",permalink:"/reference/interfaces/SignTransactionOptions"},next:{title:"SignatureResponse",permalink:"/reference/interfaces/SignatureResponse"}},p={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"address",id:"address",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"inputIndex",id:"inputindex",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"satoshis",id:"satoshis",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"scriptHex",id:"scripthex",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"sigHashType",id:"sighashtype",level:3},{value:"Defined in",id:"defined-in-5",level:4}],d={toc:o};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/reference/"},"scrypt-ts")," / SignatureRequest"),(0,i.kt)("h1",{id:"interface-signaturerequest"},"Interface: SignatureRequest"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SignatureRequest")," contains required informations for a signer to sign a certain input of a transaction."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reference/interfaces/SignatureRequest#address"},"address")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reference/interfaces/SignatureRequest#data"},"data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reference/interfaces/SignatureRequest#inputindex"},"inputIndex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reference/interfaces/SignatureRequest#satoshis"},"satoshis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reference/interfaces/SignatureRequest#scripthex"},"scriptHex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reference/interfaces/SignatureRequest#sighashtype"},"sigHashType"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"address"},"address"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"address"),": ",(0,i.kt)("a",{parentName:"p",href:"/reference/#addressesoption"},(0,i.kt)("inlineCode",{parentName:"a"},"AddressesOption"))),(0,i.kt)("p",null,"The address(es) of corresponding private key(s) required to sign the input."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"dist/bsv/abstract-signer.d.ts:13"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"data"},"data"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"data"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown")),(0,i.kt)("p",null,"The extra information for signing."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"dist/bsv/abstract-signer.d.ts:19"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inputindex"},"inputIndex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"inputIndex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The index of input to sign."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"dist/bsv/abstract-signer.d.ts:9"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"satoshis"},"satoshis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"satoshis"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The previous output satoshis value of the input to spend."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"dist/bsv/abstract-signer.d.ts:11"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scripthex"},"scriptHex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"scriptHex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The previous output script of input, default value is a P2PKH locking script for the ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," if omitted."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"dist/bsv/abstract-signer.d.ts:15"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sighashtype"},"sigHashType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"sigHashType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The sighash type, default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGHASH_ALL | SIGHASH_FORKID")," if omitted."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"dist/bsv/abstract-signer.d.ts:17"))}u.isMDXComponent=!0}}]);