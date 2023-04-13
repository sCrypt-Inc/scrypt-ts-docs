"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[6672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),y=r,h=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return n?a.createElement(h,c(c({ref:t},p),{},{components:n})):a.createElement(h,c({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},c="How to Integrate sCrypt Service",i={unversionedId:"advanced/how-to-integrate-scrypt-service",id:"advanced/how-to-integrate-scrypt-service",title:"How to Integrate sCrypt Service",description:"Before interacting with a sCrypt contract, we must create a contract instance representing the latest state of the contract on chain. Such an instance can be created by calling the  fromTx method. However, this means your application needs to track and record all contract-related transactions, especially for a stateful contract.",source:"@site/docs/advanced/how-to-integrate-scrypt-service.md",sourceDirName:"advanced",slug:"/advanced/how-to-integrate-scrypt-service",permalink:"/docs/advanced/how-to-integrate-scrypt-service",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to Debug ScriptContext Failure",permalink:"/docs/advanced/how-to-debug-scriptcontext"},next:{title:"Tutorials",permalink:"/docs/category/tutorials"}},s={},l=[{value:"Get Your API Key",id:"get-your-api-key",level:2},{value:"Step 1: Create Your Free Account",id:"step-1-create-your-free-account",level:3},{value:"Step 2: Get API Key",id:"step-2-get-api-key",level:3},{value:"Integration",id:"integration",level:2},{value:"Step 1: Initialize Client",id:"step-1-initialize-client",level:2},{value:"Step 2: Connect <code>ScryptProvider</code> with your signer",id:"step-2-connect-scryptprovider-with-your-signer",level:2},{value:"Step 3: Get Contract ID",id:"step-3-get-contract-id",level:2},{value:"Step 4: Get Contract Instance",id:"step-4-get-contract-instance",level:2},{value:"Read",id:"read",level:3},{value:"Write",id:"write",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-integrate-scrypt-service"},"How to Integrate sCrypt Service"),(0,r.kt)("p",null,"Before interacting with a ",(0,r.kt)("inlineCode",{parentName:"p"},"sCrypt")," contract, we must create a contract instance representing the latest state of the contract on chain. Such an instance can be created by calling the  ",(0,r.kt)("a",{parentName:"p",href:"/docs/how-to-deploy-and-call-a-contract/#create-a-smart-contract-instance-from-a-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"fromTx"))," method. However, this means your application needs to track and record all contract-related transactions, especially for a stateful contract."),(0,r.kt)("p",null,"An easier alternative is to leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"sCrypt")," infrastructure service, which tracks such transactions, so you can focus on your application logic."),(0,r.kt)("h2",{id:"get-your-api-key"},"Get Your API Key"),(0,r.kt)("h3",{id:"step-1-create-your-free-account"},"Step 1: Create Your Free Account"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://scrypt.io"},"sCrypt homepage")," to create your free account."),(0,r.kt)("h3",{id:"step-2-get-api-key"},"Step 2: Get API Key"),(0,r.kt)("p",null,"Login and click on the copy icon to copy your API Key."),(0,r.kt)("h2",{id:"integration"},"Integration"),(0,r.kt)("p",null,"Once you have an API key, you can easily integrate sCrypt service into your app by following these simple steps."),(0,r.kt)("h2",{id:"step-1-initialize-client"},"Step 1: Initialize Client"),(0,r.kt)("p",null,"You can pass the API key, along with ",(0,r.kt)("inlineCode",{parentName:"p"},"network"),", to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Scrypt.init")," function to initialize an sCrypt client in your app. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Scrypt } from 'scrypt-ts'\n\nScrypt.init({\n  apiKey: 'YOUR_API_KEY',\n  network: 'testnet',\n})\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For now, you can use the test key ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha_test_api_key")," on testnet.")),(0,r.kt)("h2",{id:"step-2-connect-scryptprovider-with-your-signer"},"Step 2: Connect ",(0,r.kt)("inlineCode",{parentName:"h2"},"ScryptProvider")," with your signer"),(0,r.kt)("p",null,"Connect signer to ",(0,r.kt)("inlineCode",{parentName:"p"},"ScryptProvider"),", the required ",(0,r.kt)("a",{parentName:"p",href:"/docs/how-to-test-a-contract#provider"},"provider")," to use sCrypt service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const signer = new TestWallet(myPrivateKey)\nawait signer.connect(new ScryptProvider())\n")),(0,r.kt)("h2",{id:"step-3-get-contract-id"},"Step 3: Get Contract ID"),(0,r.kt)("p",null,"Each contract is uniquely identified by the transaction that ",(0,r.kt)("a",{parentName:"p",href:"/docs/how-to-deploy-and-call-a-contract/#contract-deployment"},"deploy")," it and the output it is in, which we regard as its ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const demo = new Demo(1n, 2n)\n// connect signer\nawait demo.connect(signer)\n\nconst balance = 1\nconst deployTx = await demo.deploy(balance)\nconsole.log('contract Voting deployed: ', deployTx.id)\n\nconst contractId = {\n    /** The deployment transaction id */\n    txId: deployTx.id,\n    /** The output index */\n    outputIndex: 0,\n}\n")),(0,r.kt)("p",null,"You can usually get the ID of a contract from its creator, who publicizes it so others can interact with it."),(0,r.kt)("h2",{id:"step-4-get-contract-instance"},"Step 4: Get Contract Instance"),(0,r.kt)("p",null,"Once you have the contract ID, you can easily create a contract instance as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const currentInstance = await Scrypt.contractApi.getLatestInstance(\n  Demo,\n  contractId\n)\n\n// connect signer\nawait currentInstance.connect(signer)\n")),(0,r.kt)("p",null,"For a stateless contract, the instance points to the deployment tx; for a stateful one, it points to the latest tip in a chain of txs, which sCrypt service tracks automatically."),(0,r.kt)("p",null,"Once you have the instance, you can easily read from the contract and write to it."),(0,r.kt)("h3",{id:"read"},"Read"),(0,r.kt)("p",null,"You read an instance's properties using the dot operator, like any other object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// read @prop x\nconsole.log(demo.x)\n// read @prop y\nconsole.log(demo.y)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reading does NOT broadcast a transaction to the blockchain.")),(0,r.kt)("h3",{id:"write"},"Write"),(0,r.kt)("p",null,"To update a contract instance, you call its public method as ",(0,r.kt)("a",{parentName:"p",href:"/docs/how-to-deploy-and-call-a-contract/#contract-call"},"before"),", which writes to the blockchain by broadcasting a transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// call the method of current instance to apply the updates on chain\nconst { tx } = await currentInstance.methods.add(3n)\n\nconsole.log(`Demo contract called,  tx: ${tx.id}`)\n")))}d.isMDXComponent=!0}}]);