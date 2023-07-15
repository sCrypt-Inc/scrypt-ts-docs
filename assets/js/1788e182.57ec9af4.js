"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[2813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:8},l="How to Integrate With a Frontend",i={unversionedId:"how-to-integrate-a-frontend/how-to-integrate-a-frontend",id:"how-to-integrate-a-frontend/how-to-integrate-a-frontend",title:"How to Integrate With a Frontend",description:"This section will show how to integrate your smart contract to a frontend, so users can interact with it.",source:"@site/docs/how-to-integrate-a-frontend/how-to-integrate-a-frontend.md",sourceDirName:"how-to-integrate-a-frontend",slug:"/how-to-integrate-a-frontend/",permalink:"/how-to-integrate-a-frontend/",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"How to Debug a Contract",permalink:"/how-to-debug-a-contract"},next:{title:"How to integrate DotWallet",permalink:"/how-to-integrate-a-frontend/how-to-integrate-dotwallet"}},c={},s=[{value:"Setup",id:"setup",level:2},{value:"Step 1",id:"step-1",level:3},{value:"React",id:"react",level:4},{value:"Next.js",id:"nextjs",level:4},{value:"Vue.js",id:"vuejs",level:4},{value:"Angular",id:"angular",level:4},{value:"Step 2",id:"step-2",level:3},{value:"Load Contract",id:"load-contract",level:2},{value:"1. Compile Contract",id:"1-compile-contract",level:3},{value:"2. Load Artifact",id:"2-load-artifact",level:3},{value:"Integrate Wallet",id:"integrate-wallet",level:2}],p={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-integrate-with-a-frontend"},"How to Integrate With a Frontend"),(0,r.kt)("p",null,"This section will show how to integrate your smart contract to a frontend, so users can interact with it.\nWe assume that you already have the basic knowledge of frontend development, so we will not spend much time introducing this part of the code, but mostly be focusing on how to interact with the smart contract in the front end project."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"step-1"},"Step 1"),(0,r.kt)("p",null,"Create your frontend project as usual."),(0,r.kt)("h4",{id:"react"},"React"),(0,r.kt)("p",null,"Run the following command to create a React project, named ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app helloworld --template typescript\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3823).Z,width:"2880",height:"1752"})),(0,r.kt)("p",null,"We will do most work under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory."),(0,r.kt)("h4",{id:"nextjs"},"Next.js"),(0,r.kt)("p",null,"Run the following command to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Next.js")," project, named ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app helloworld --typescript\n")),(0,r.kt)("h4",{id:"vuejs"},"Vue.js"),(0,r.kt)("p",null,"Run the following command to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Vue.js")," project, named ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @vue/cli create helloworld\n")),(0,r.kt)("p",null,"When setting up the project, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Manually select features")," and enable TypeScript."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(994).Z,width:"756",height:"236"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1734).Z,width:"2268",height:"474"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"For now, we must use ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," instead of ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," to bundle the project.")),(0,r.kt)("h4",{id:"angular"},"Angular"),(0,r.kt)("p",null,"Run the following command to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Angular")," project, named ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @angular/cli new helloworld\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Currently, we support frontend frameworks ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev"},"React"),", ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),", ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/"},"Angular"),". We anticipate to add supports for other frameworks over time.")),(0,r.kt)("h3",{id:"step-2"},"Step 2"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command of the ",(0,r.kt)("a",{parentName:"p",href:"/installation#the-scrypt-cli-tool"},"CLI")," to add ",(0,r.kt)("inlineCode",{parentName:"p"},"sCrypt")," support in your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd helloworld\nnpx scrypt-cli init\n")),(0,r.kt)("p",null,"This installs all the dependencies and configures the contract development environment.\nAfter this, we are ready to go!"),(0,r.kt)("h2",{id:"load-contract"},"Load Contract"),(0,r.kt)("p",null,"Before interacting with a smart contract at the front end, we need to load the contract class in two steps."),(0,r.kt)("p",null,"We'll take a look at how to generate the artifact by ourselves first."),(0,r.kt)("h3",{id:"1-compile-contract"},"1. Compile Contract"),(0,r.kt)("p",null,"Before you start, you need to get the contract source files, as a frontend developer."),(0,r.kt)("p",null,"Let's use the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/hello-world"},"Helloworld contract")," as an example. Copy and paste ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld.ts")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/contracts")," directory."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5982).Z,width:"2880",height:"1752"})),(0,r.kt)("p",null,"Run the following command to compile the contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx scrypt-cli compile\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4772).Z,width:"1720",height:"245"})),(0,r.kt)("p",null,"After the compilation, you will get an JSON artifact file at ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts/helloworld.json"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9813).Z,width:"3499",height:"1896"})),(0,r.kt)("h3",{id:"2-load-artifact"},"2. Load Artifact"),(0,r.kt)("p",null,"Now with the contract artifact file, you directly load it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Helloworld } from './contracts/helloworld';\nimport artifact from '../artifacts/helloworld.json';\nHelloworld.loadArtifact(artifact);\n")),(0,r.kt)("p",null,"Now you can create an instance from the contract class as before."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const message = toByteString('hello world', true)\nconst instance = new Helloworld(sha256(message))\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You cannot simply call ",(0,r.kt)("inlineCode",{parentName:"p"},"Helloworld.compile()")," at the front end, since it only works in NodeJS, not in browser.")),(0,r.kt)("h2",{id:"integrate-wallet"},"Integrate Wallet"),(0,r.kt)("p",null,"You will integrate ",(0,r.kt)("a",{parentName:"p",href:"https://sensilet.com/"},"Sensilet"),", a browser extension wallet similar to ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", into the project."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can refer to this ",(0,r.kt)("a",{parentName:"p",href:"/advanced/how-to-add-a-signer"},"guide")," to add support for other wallets.")),(0,r.kt)("p",null,"To request access to the wallet, you can use its ",(0,r.kt)("inlineCode",{parentName:"p"},"requestAuth")," method. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const provider = new DefaultProvider({\n    network: bsv.Networks.testnet\n});\n\nconst signer = new SensiletSigner(provider);\n\n// request authentication\nconst { isAuthenticated, error } = await signer.requestAuth();\nif (!isAuthenticated) {\n    // something went wrong, throw an Error with `error` message\n    throw new Error(error);\n}\n\n// authenticated\n// you can show user's default address\nconst userAddress = await signer.getDefaultAddress();\n// ...\n")),(0,r.kt)("p",null,"Now you can connect the wallet to the contract instance as before."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await instance.connect(signer);\n")),(0,r.kt)("p",null,"Afterwards, you can interact with the contract from the front end by ",(0,r.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#contract-call"},"calling its method")," as usual."),(0,r.kt)("p",null,"Go ",(0,r.kt)("a",{parentName:"p",href:"https://academy.scrypt.io"},"here")," to see a full example on how to build a Tic-Tac-Toe game on chain."))}d.isMDXComponent=!0},9813:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contract-artifacts-35da79daeae5915947f5517922725c1a.png"},5982:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/copy-contract-source-db12bc435f01da4826e3ce062c96a0f9.png"},3823:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/react-scaffold-6d54c45b844980171db6411cdc8a0f8c.png"},4772:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scrypt-cli-compile-ee52118826f8ba2639d4f153bf39cfc8.png"},994:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vue-cli-1-c87354a82900aa66470426993592ad33.png"},1734:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vue-cli-2-6b9917d97c25f09f7e8456c03230cf94.png"}}]);