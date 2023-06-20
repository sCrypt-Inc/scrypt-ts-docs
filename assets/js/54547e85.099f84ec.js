"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[9404],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(a),h=o,u=m["".concat(i,".").concat(h)]||m[h]||d[h]||r;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:1},l="Tutorial 1: Hello World",c={unversionedId:"tutorials/hello-world",id:"tutorials/hello-world",title:"Tutorial 1: Hello World",description:"Overview",source:"@site/docs/tutorials/hello-world.md",sourceDirName:"tutorials",slug:"/tutorials/hello-world",permalink:"/tutorials/hello-world",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/category/tutorials"},next:{title:"Tutorial 2: Auction",permalink:"/tutorials/auction"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Create a new project",id:"create-a-new-project",level:2},{value:"Contract Deployment &amp; Call",id:"contract-deployment--call",level:2}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-1-hello-world"},"Tutorial 1: Hello World"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this tutorial, we will go over how to quickly create a \u201cHello World\u201d smart contract, deploy and call it."),(0,o.kt)("h2",{id:"create-a-new-project"},"Create a new project"),(0,o.kt)("p",null,"Make sure ",(0,o.kt)("a",{parentName:"p",href:"../../installation"},"all prerequisite tools")," are installed."),(0,o.kt)("p",null,"Run the following commands to create a new project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx scrypt-cli project helloworld\ncd helloworld\nnpm install\n")),(0,o.kt)("p",null,"The resulting project will contain a sample smart contract ",(0,o.kt)("inlineCode",{parentName:"p"},"src/contracts/helloworld.ts"),", along with all the scaffolding. Let's modify it to the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { assert, ByteString, method, prop, sha256, Sha256, SmartContract } from 'scrypt-ts'\n\nexport class Helloworld extends SmartContract {\n\n    @prop()\n    hash: Sha256;\n\n    constructor(hash: Sha256){\n        super(...arguments);\n        this.hash = hash;\n    }\n\n    @method()\n    public unlock(message: ByteString) {\n        assert(sha256(message) == this.hash, 'Hash does not match')\n    }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Helloworld")," contract stores the sha256 hash of a message in the contract property ",(0,o.kt)("inlineCode",{parentName:"p"},"hash"),". Only a message which hashes to the value set in ",(0,o.kt)("inlineCode",{parentName:"p"},"this.hash")," will unlock the contract."),(0,o.kt)("p",null,"Now let\u2019s look at what is in the smart contract."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"SmartContract"),": all smart contracts must extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"SmartContract")," base class.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"@prop"),":  the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/#properties"},(0,o.kt)("inlineCode",{parentName:"a"},"@prop")," decorator")," marks a contract property.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"@method"),": the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/#method-decorator"},(0,o.kt)("inlineCode",{parentName:"a"},"@method")," decorator")," marks a contract method. A ",(0,o.kt)("a",{parentName:"p",href:"../how-to-write-a-contract/#public-methods"},"public method")," is an entry point to a contract.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"assert"),": throws an error and makes the method call fail if its first argument is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". Here it ensures the passed message hashed to the expected digest."))),(0,o.kt)("h2",{id:"contract-deployment--call"},"Contract Deployment & Call"),(0,o.kt)("p",null,"Before we deploy the contract, follow ",(0,o.kt)("a",{parentName:"p",href:"../../how-to-deploy-and-call-a-contract/faucet"},"the instruction")," to fund a Bitcoin key."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#contract-deployment"},"deploy a smart contract"),", simply call its ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," method.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#contract-call"},"call a smart contract"),", call one of its public method."))),(0,o.kt)("p",null,"Overwrite ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy.ts")," in the root of the project with the following code to deploy and call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Helloworld")," contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Helloworld } from './src/contracts/helloworld'\nimport { getDefaultSigner } from './tests/utils/txHelper'\nimport { toByteString, sha256 } from 'scrypt-ts'\n\n(async () => {\n\n    const message = toByteString('hello world', true)\n\n    await Helloworld.compile()\n    const instance = new Helloworld(sha256(message))\n\n    // connect to a signer\n    await instance.connect(getDefaultSigner())\n\n    // deploy the contract and lock up 42 satoshis in it\n    const deployTx = await instance.deploy(42)\n    console.log('Helloworld contract deployed: ', deployTx.id)\n\n    // contract call\n    const { tx: callTx } = await instance.methods.unlock(message)\n    console.log('Helloworld contract `unlock` called: ', callTx.id)\n\n})()\n")),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx ts-node deploy.ts\n")),(0,o.kt)("p",null,"You will see some output like:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1188).Z,width:"2608",height:"332"})),(0,o.kt)("p",null,"You can view ",(0,o.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/tx/b10744292358eda2cfae3baae5cd486e30136b086011f7953aed9098f62f4245"},"the deployment transaction")," using the WhatsOnChain blockchain explorer:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1742).Z,width:"2804",height:"1986"})),(0,o.kt)("p",null,"You can also view ",(0,o.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/tx/f28175616b6dd0ebe2aad41505aabb5bf2864e2e6d1157168183f51b6194d3e6"},"the calling transaction"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6163).Z,width:"2796",height:"1872"})),(0,o.kt)("p",null,"Congrats! You have deployed and called your first Bitcoin smart contract."))}d.isMDXComponent=!0},6163:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hello-world-contract-call-tx-1a0015e52e9ec93079e218f2546f6c44.png"},1742:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hello-world-contract-deploy-tx-4e9d8282743454a6460ec59ad79db821.png"},1188:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hello-world-deploy-and-call-output-1386d4f977aad2046b7a7f0622feea32.png"}}]);