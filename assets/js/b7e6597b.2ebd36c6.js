"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[6672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,y=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},i="How to Integrate sCrypt Service",c={unversionedId:"advanced/how-to-integrate-scrypt-service",id:"advanced/how-to-integrate-scrypt-service",title:"How to Integrate sCrypt Service",description:"Before interacting with a sCrypt contract, we must create a contract instance representing the latest state of the contract on chain. Such an instance can be created by calling the  fromTx method. However, this means your application needs to track and record all contract-related transactions, especially for a stateful contract.",source:"@site/docs/advanced/how-to-integrate-scrypt-service.md",sourceDirName:"advanced",slug:"/advanced/how-to-integrate-scrypt-service",permalink:"/advanced/how-to-integrate-scrypt-service",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to Debug ScriptContext Failure",permalink:"/advanced/how-to-debug-scriptcontext"},next:{title:"Transitioning from Ethereum to sCrypt",permalink:"/ethereum-devs"}},l={},s=[{value:"Get Your API Key",id:"get-your-api-key",level:2},{value:"Step 1: Create Your Free Account",id:"step-1-create-your-free-account",level:3},{value:"Step 2: Get API Key",id:"step-2-get-api-key",level:3},{value:"Integration",id:"integration",level:2},{value:"Step 1: Initialize Client",id:"step-1-initialize-client",level:3},{value:"Step 2: Connect <code>ScryptProvider</code> with your signer",id:"step-2-connect-scryptprovider-with-your-signer",level:3},{value:"Step 3: Get Contract ID",id:"step-3-get-contract-id",level:3},{value:"Step 4: Get Contract Instance",id:"step-4-get-contract-instance",level:3},{value:"Interact with the Contract",id:"interact-with-the-contract",level:2},{value:"Read",id:"read",level:3},{value:"Write",id:"write",level:3},{value:"Listen to Events",id:"listen-to-events",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-integrate-scrypt-service"},"How to Integrate sCrypt Service"),(0,r.kt)("p",null,"Before interacting with a ",(0,r.kt)("inlineCode",{parentName:"p"},"sCrypt")," contract, we must create a contract instance representing the latest state of the contract on chain. Such an instance can be created by calling the  ",(0,r.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#create-a-smart-contract-instance-from-a-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"fromTx"))," method. However, this means your application needs to track and record all contract-related transactions, especially for a stateful contract."),(0,r.kt)("p",null,"An easier alternative is to leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"sCrypt")," infrastructure service, which tracks such transactions, so you can focus on your application logic."),(0,r.kt)("h2",{id:"get-your-api-key"},"Get Your API Key"),(0,r.kt)("h3",{id:"step-1-create-your-free-account"},"Step 1: Create Your Free Account"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://scrypt.io"},"sCrypt homepage")," to create your free account."),(0,r.kt)("h3",{id:"step-2-get-api-key"},"Step 2: Get API Key"),(0,r.kt)("p",null,"Login and click on the copy icon to copy your API Key."),(0,r.kt)("h2",{id:"integration"},"Integration"),(0,r.kt)("p",null,"Once you have an API key, you can easily integrate sCrypt service into your app by following these simple steps."),(0,r.kt)("h3",{id:"step-1-initialize-client"},"Step 1: Initialize Client"),(0,r.kt)("p",null,"You can pass the API key, along with ",(0,r.kt)("inlineCode",{parentName:"p"},"network"),", to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Scrypt.init")," function to initialize an sCrypt client in your app. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Scrypt, bsv } from 'scrypt-ts'\n\nScrypt.init({\n  apiKey: 'YOUR_API_KEY',\n  network: bsv.Networks.testnet,\n})\n")),(0,r.kt)("h3",{id:"step-2-connect-scryptprovider-with-your-signer"},"Step 2: Connect ",(0,r.kt)("inlineCode",{parentName:"h3"},"ScryptProvider")," with your signer"),(0,r.kt)("p",null,"Connect signer to ",(0,r.kt)("inlineCode",{parentName:"p"},"ScryptProvider"),", the required ",(0,r.kt)("a",{parentName:"p",href:"/how-to-test-a-contract#provider"},"provider")," to use sCrypt service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const signer = new TestWallet(myPrivateKey)\nawait signer.connect(new ScryptProvider())\n")),(0,r.kt)("h3",{id:"step-3-get-contract-id"},"Step 3: Get Contract ID"),(0,r.kt)("p",null,"Each contract is uniquely identified by the transaction that ",(0,r.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#contract-deployment"},"deploy")," it and the output it is in, which we regard as its ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const counter = new Counter(0n)\n// connect signer\nawait counter.connect(signer)\n\nconst balance = 1\nconst deployTx = await counter.deploy(balance)\nconsole.log('contract Counter deployed: ', deployTx.id)\n\nconst contractId = {\n    /** The deployment transaction id */\n    txId: deployTx.id,\n    /** The output index */\n    outputIndex: 0,\n}\n")),(0,r.kt)("p",null,"You can usually get the ID of a contract from its creator, who publicizes it so others can interact with it."),(0,r.kt)("h3",{id:"step-4-get-contract-instance"},"Step 4: Get Contract Instance"),(0,r.kt)("p",null,"Once you have the contract ID, you can easily create a contract instance as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const currentInstance = await Scrypt.contractApi.getLatestInstance(\n  Counter,\n  contractId\n)\n\n// connect signer\nawait currentInstance.connect(signer)\n")),(0,r.kt)("p",null,"For a stateless contract, the instance points to the deployment tx; for a stateful one, it points to the latest tip in a chain of txs, which sCrypt service tracks automatically."),(0,r.kt)("h2",{id:"interact-with-the-contract"},"Interact with the Contract"),(0,r.kt)("p",null,"Once you have the instance after following the steps above, you can easily read from the contract, write to it, and listen to it."),(0,r.kt)("h3",{id:"read"},"Read"),(0,r.kt)("p",null,"You read an instance's properties using the dot operator, like any other object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// read @prop count\nconsole.log(counter.count)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reading does NOT broadcast a transaction to the blockchain.")),(0,r.kt)("h3",{id:"write"},"Write"),(0,r.kt)("p",null,"To update a contract instance, you call its public method as ",(0,r.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#contract-call"},"before"),", which writes to the blockchain by broadcasting a transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// call the method of current instance to apply the updates on chain\nconst { tx } = await currentInstance.methods.incrementOnChain()\n\nconsole.log(`Counter contract called,  tx: ${tx.id}`)\n")),(0,r.kt)("h3",{id:"listen-to-events"},"Listen to Events"),(0,r.kt)("p",null,"Often, your app needs to be notified when a contract gets called and updated. It is essential to be able to listen to such events in real time that can alert your app whenever something relevant occurs on chain. For example, in your front-end, you can refresh the web page to show the user the latest state of a contract, upon event notifications."),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"sCrypt")," service, you can easily subscribe to a contract's events by its contract ID, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Scrypt.contractApi.subscribe")," method. It takes two parameters:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"options: SubscribeOptions<T>"),": it includes a contract class, a contract ID, and a optional list of method names monitored.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface SubscribeOptions<T> {\n  clazz: new (...args: any) => T;\n  id: ContractId;\n  methodNames?: Array<string>;\n}\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"methodNames")," is set, you will be notified only when public functions in the list are called. Otherwise, you will be notified when ANY public function is called."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"callback: (event: ContractCalledEvent<T>) => void"),": a callback funciton upon receiving notifications. ")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ContractCalledEvent<T>")," contains relevant information on how the contract is called:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"methodName: string"),", which public method is called")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"args: SupportedParamType[]"),", arguments the public method is called with ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tx: bsv.Transaction"),", transaction where contract is called from")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"nexts: Array[T]"),", includes the new contract instances created by this call. If a stateful contract is called, ",(0,r.kt)("inlineCode",{parentName:"p"},"nexts")," contains the contract instances containing the new state generated by this call. You can read the latest state from the new contract instance to, e.g., display the new state to users. If a stateless contract is called, ",(0,r.kt)("inlineCode",{parentName:"p"},"nexts")," is empty."))),(0,r.kt)("p",null,"Below is an example of listening to events when ",(0,r.kt)("inlineCode",{parentName:"p"},"incrementOnChain")," method is called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const subscription = Scrypt.contractApi.subscribe({\n  clazz: Counter, // contract class\n  id: contractId, // contract id\n  methodNames: ['incrementOnChain']\n}, (event: ContractCalledEvent<Counter>) => {\n  // callback when receiving a notification\n  console.log(`${event.methodName} is called with args: ${event.args}`)\n});\n")))}u.isMDXComponent=!0}}]);