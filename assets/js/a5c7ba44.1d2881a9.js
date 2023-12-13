"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[7062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=r,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Fungible Tokens - FTs",s={unversionedId:"tokens/ft/ft",id:"tokens/ft/ft",title:"Fungible Tokens - FTs",description:"Just like NFTs, scrypt-ord also supports fungible tokens. Under the hood it utilizes the bsv-20 protocol.",source:"@site/docs/tokens/ft/ft.md",sourceDirName:"tokens/ft",slug:"/tokens/ft/",permalink:"/tokens/ft/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Transfer Existing NFT to a Smart Contract",permalink:"/tokens/nft/existing"},next:{title:"Transfer Existing FT to a Smart Contract",permalink:"/tokens/ft/existing"}},c={},l=[{value:"v1",id:"v1",level:2},{value:"Deployment",id:"deployment",level:3},{value:"Mint and Transfer",id:"mint-and-transfer",level:3},{value:"v2",id:"v2",level:2},{value:"Deploy+Mint",id:"deploymint",level:3},{value:"Transfer",id:"transfer",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fungible-tokens---fts"},"Fungible Tokens - FTs"),(0,r.kt)("p",null,"Just like NFTs, ",(0,r.kt)("inlineCode",{parentName:"p"},"scrypt-ord")," also supports fungible tokens. Under the hood it utilizes the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.1satordinals.com/bsv20"},(0,r.kt)("inlineCode",{parentName:"a"},"bsv-20")," protocol"),"."),(0,r.kt)("p",null,"BSV-20 is a protocol for creating fungible tokens on the Bitcoin SV blockchain. Fungible tokens are interchangeable with each other, and can be used to represent a variety of assets, such as currencies, securities, and in-game items."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scrypt-ord")," supports both v1 and v2 of the ",(0,r.kt)("inlineCode",{parentName:"p"},"BSV-20")," FT protocol."),(0,r.kt)("h2",{id:"v1"},"v1"),(0,r.kt)("p",null,"Tokens utilizing the first version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"bsv-20")," must be initialized by a ",(0,r.kt)("strong",{parentName:"p"},"deployment")," inscription, which specifies the token's ticker symbol, amount and mint limit. For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.1satordinals.com/bsv20#v1-mint-first-is-first-mode"},"1Sat docs"),"."),(0,r.kt)("p",null,"To create a v1 token smart contract, have it extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"BSV20V1")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class HashLockFT extends BSV20V1 {\n    @prop()\n    hash: Sha256\n\n    constructor(tick: ByteString, max: bigint, lim: bigint, dec: bigint, hash: Sha256) {\n        super(tick, max, lim, dec)\n        this.init(...arguments)\n        this.hash = hash\n    }\n\n    @method()\n    public unlock(message: ByteString) {\n        assert(this.hash == sha256(message), 'hashes are not equal')\n    }\n}\n")),(0,r.kt)("p",null,"As you can see above, the constructor of contract extending the ",(0,r.kt)("inlineCode",{parentName:"p"},"BSV20V1")," takes as parameters all of the needed information for the token deployment, succeeded by other parameters needed you use for your contract (",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," in this particular example).\nEach constructor extending the ",(0,r.kt)("inlineCode",{parentName:"p"},"BSV20V1")," class must also call the instances ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," method and pass the constructors arguments. It is important to call this function ",(0,r.kt)("strong",{parentName:"p"},"after")," the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"super"),"."),(0,r.kt)("h3",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"Here's an example of how you would deploy the new FT:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'HashLockFT.loadArtifact();\n\nconst tick = toByteString("DOGE", true);\nconst max = 100000n;\nconst lim = max / 10n;\nconst dec = 0n\n\nconst hashLock = new HashLockFT(\n  tick,\n  max,\n  lim,\n  dec,\n  sha256(toByteString("secret0", true))\n);\nawait hashLock.connect(getDefaultSigner());\nawait hashLock.deployToken();\n')),(0,r.kt)("h3",{id:"mint-and-transfer"},"Mint and Transfer"),(0,r.kt)("p",null,"Once the deployment transaction was successfully broadcast, the token is ready for minting."),(0,r.kt)("p",null,"Here's how you can mint some amount:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Minting\nconst amt = 1000n;\nconst mintTx = await hashLock.mint(amt);\nconsole.log("Minted tx: ", mintTx.id);\n')),(0,r.kt)("p",null,"Note, that if the amount exceeds the limit set above, or the token was already wholely minted, the transaction won't be considered valid by 1Sat indexers."),(0,r.kt)("p",null,"The minted amount can then be transferred by calling the contract, as in ",(0,r.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#contract-call"},"regular sCrypt contracts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Transfer\nfor (let i = 0; i < 3; i++) {\n  // The recipient contract.\n  // Because this particular contract doesn\'t enforce subsequent outputs,\n  // it could be any other contract or just a P2PKH.\n  const receiver = new HashLockFT(\n    tick,\n    max,\n    lim,\n    dec,\n    sha256(toByteString(`secret${i + 1}`, true))\n  );\n  const recipients: Array<FTReceiver> = [\n    {\n      instance: receiver,\n      amt: 10n,\n    },\n  ];\n\n  // Unlock and transfer.\n  const { tx } = await hashLock.methods.unlock(\n    toByteString(`secret:${i}`, true),\n    {\n      transfer: recipients,\n    }\n  );\n  console.log("Transfer tx: ", tx.id);\n  \n  // Update instance for next iteration.\n  hashLock = recipients[0].instance as HashLockFT;\n}\n')),(0,r.kt)("p",null,"Note that the new recipient smart contract instance is passed as a parameter named ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," during the call to the deployed instance. The ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," parameter is an array of contract instances that extend ",(0,r.kt)("inlineCode",{parentName:"p"},"BSV20V1"),"."),(0,r.kt)("h2",{id:"v2"},"v2"),(0,r.kt)("p",null,"Version 2 of the ",(0,r.kt)("inlineCode",{parentName:"p"},"BSV-20")," token protocol simplifies the process of minting a new fungible token. In this version, the deployment and minting are done within a single transaction. Unlike v1, v2 lacks a token ticker field. The token is identified by an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field, which is the transaction id and output index where the token was minted, in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"<txid>_<vout>"),"."),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.1satordinals.com/bsv20#new-in-v2-tickerless-mode"},"official 1Sat documentation")," for more info."),(0,r.kt)("p",null,"To create a v2 token smart contract, have it extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"BSV20V2")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class HashLockFTV2 extends BSV20V2 {\n    @prop()\n    hash: Sha256\n\n    constructor(id: ByteString, sym: ByteString, max: bigint, dec: bigint, hash: Sha256) {\n        super(id, sym, max, dec)\n        this.init(...arguments)\n        this.hash = hash\n    }\n\n    @method()\n    public unlock(message: ByteString) {\n        assert(this.hash == sha256(message), 'hashes are not equal')\n    }\n}\n")),(0,r.kt)("h3",{id:"deploymint"},"Deploy+Mint"),(0,r.kt)("p",null,"In v1, tokens are deployed and minted in separate transactions, but in v2, all tokens are deployed and minted in one transactions. Here's an example of how you would deploy the new v2 FT:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"HashLockFTV2.loadArtifact()\n\nconst sym = toByteString('sCrypt', true)\nconst max = 10000n  // Whole token amount.\nconst dec = 0n      // Decimal precision.\n\n// Since we cannot know the id of the token deployment transaction at the time of deployment, the id is empty.\nhashLock = new HashLockFTV2(\n    toByteString(''),\n    sym,\n    max,\n    dec,\n    sha256(toByteString('super secret', true))\n)\nawait hashLock.connect(getDefaultSigner())\n\ntokenId = await hashLock.deployToken()\nconsole.log('token id: ', tokenId)\n")),(0,r.kt)("p",null,"v2 supports adding additional meta information when deploying token, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const tokenId = await hashLock.deployToken({\n  icon: \"/content/<Inscription Origin OR B protocol outpoint>\"\n})\nconsole.log('token id: ', tokenId)\n")),(0,r.kt)("p",null,"The whole token supply is minted within the first transaction, and whoever can unlock the deployment UTXO will gain full control of the whole supply. Additionally, the smart contract itself can enforce rules for the distribution of the tokens."),(0,r.kt)("h3",{id:"transfer"},"Transfer"),(0,r.kt)("p",null,"The minted amount can be transferred by invoking the contract, similar to ",(0,r.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#contract-call"},"standard sCrypt contracts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Transfer\nfor (let i = 0; i < 3; i++) {\n  // The recipient contract.\n  // Because this particular contract doesn\'t enforce subsequent outputs,\n  // it could be any other contract or just a P2PKH.\n  const receiver = new HashLockFTV2(\n    toByteString(tokenId, true),\n    sym,\n    max,\n    dec,\n    sha256(toByteString(`secret${i + 1}`, true))\n  );\n  const recipients: Array<FTReceiver> = [\n    {\n      instance: receiver,\n      amt: 10n,\n    },\n  ];\n\n  // Unlock and transfer.\n  const { tx } = await hashLock.methods.unlock(\n    toByteString(`secret:${i}`, true),\n    {\n      transfer: recipients,\n    }\n  );\n  console.log("Transfer tx: ", tx.id);\n  \n  // Update instance for next iteration.\n  hashLock = recipients[0].instance as HashLockFTV2;\n}\n')),(0,r.kt)("p",null,"The new recipient smart contract instance is provided as a ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," parameter when calling the deployed instance. The ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," parameter consists of an array of contract instances derived from ",(0,r.kt)("inlineCode",{parentName:"p"},"BSV20V2"),"."),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);