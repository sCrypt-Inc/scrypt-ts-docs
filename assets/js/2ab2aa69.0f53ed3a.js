"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[2807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="Tutorial 3: Oracle",s={unversionedId:"tutorials/oracle",id:"tutorials/oracle",title:"Tutorial 3: Oracle",description:"Overview",source:"@site/docs/tutorials/oracle.md",sourceDirName:"tutorials",slug:"/tutorials/oracle",permalink:"/tutorials/oracle",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tutorial 2: Auction",permalink:"/tutorials/auction"},next:{title:"Tutorial 4: Tic Tac Toe",permalink:"/tutorials/tic-tac-toe"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"What is an Oracle?",id:"what-is-an-oracle",level:3},{value:"Rabin Signatures",id:"rabin-signatures",level:3},{value:"Contract Properties",id:"contract-properties",level:2},{value:"Public Method - <code>unlock</code>",id:"public-method---unlock",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-3-oracle"},"Tutorial 3: Oracle"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this tutorial, we will go over how to build a smart contract that consumes off-chain data from an oracle. Specifically, we will implement a smart contract that lets two players bet on the price of BSV at some point in the future. It retrieves prices from an oracle."),(0,r.kt)("h3",{id:"what-is-an-oracle"},"What is an Oracle?"),(0,r.kt)("p",null,"A blockchain oracle is a third-party service or agent that provides external data to a blockchain network. It is a bridge between the blockchain and the external world, enabling smart contracts to access, verify, and incorporate data from outside the blockchain. This allows smart contracts to execute based on real-world events and conditions, enhancing their utility and functionality."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4247).Z,width:"768",height:"404"})," "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.bitnovo.com/en/what-is-a-blockchain-oracle/"},"Credit: bitnovo")),(0,r.kt)("p",null,"The data supplied by oracles can include various types of information, such as stock prices, weather data, election results, and sports scores."),(0,r.kt)("h3",{id:"rabin-signatures"},"Rabin Signatures"),(0,r.kt)("p",null,"A digital signature is required to verify the authenticity and integrity of arbitrary data provided by known oracles in a smart contract. Instead of ECDSA used in Bitcoin, we use an alternative digital signature algorithm called ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rabin_signature_algorithm"},"Rabin signatures"),". This is because Rabin signature verification is orders of magnitude cheaper than ECDSA.\nWe have implemented ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scrypt-ts-lib/blob/master/src/rabinSignature.ts"},"Rabin signature")," as part of the standard libraries ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/scrypt-ts-lib"},(0,r.kt)("inlineCode",{parentName:"a"},"scrypt-ts-lib")),", which can be imported and used directly. "),(0,r.kt)("h2",{id:"contract-properties"},"Contract Properties"),(0,r.kt)("p",null,"Our contract will take signed pricing data from the ",(0,r.kt)("a",{parentName:"p",href:"https://witnessonchain.com"},"WitnessOnChain oracle"),". Depending if the price target is reached or not, it will pay out a reward to one of the two players."),(0,r.kt)("p",null,"There are quite a few properties which our price betting smart contract will require:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Price target that needs to be reached.\n@prop()\ntargetPrice: bigint\n\n// Symbol of the pair, e.g. "BSV_USDC"\n@prop()\nsymbol: ByteString\n\n// Timestamp window in which the price target needs to be reached.\n@prop()\ntimestampFrom: bigint\n@prop()\ntimestampTo: bigint\n\n// Oracles Rabin public key.\n@prop()\noraclePubKey: RabinPubKey\n\n// Addresses of both players.\n@prop()\naliceAddr: Addr\n@prop()\nbobAddr: Addr\n')),(0,r.kt)("p",null,"Notice that the type ",(0,r.kt)("inlineCode",{parentName:"p"},"RabinPubKey"),", which represents a Rabin public key, is not a standard type. You can import it the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { RabinPubKey } from 'scrypt-ts-lib'\n")),(0,r.kt)("h2",{id:"public-method---unlock"},"Public Method - ",(0,r.kt)("inlineCode",{parentName:"h2"},"unlock")),(0,r.kt)("p",null,"The contract will have only a single public method, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"unlock"),". As parameters, it will take the oracles signature, the signed message from the oracle, and a signature of the winner, who can unlock the funds:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\npublic unlock(msg: ByteString, sig: RabinSig, winnerSig: Sig) {\n    // Verify oracle signature.\n    assert(\n        RabinVerifierWOC.verifySig(msg, sig, this.oraclePubKey),\n        'Oracle sig verify failed.'\n    )\n\n    // Decode data.\n    const exchangeRate = PriceBet.parseExchangeRate(msg)\n\n    // Validate data.\n    assert(\n        exchangeRate.timestamp >= this.timestampFrom,\n        'Timestamp too early.'\n    )\n    assert(\n        exchangeRate.timestamp <= this.timestampTo,\n        'Timestamp too late.'\n    )\n    assert(exchangeRate.symbol == this.symbol, 'Wrong symbol.')\n\n    // Decide winner and check their signature.\n    const winner =\n        exchangeRate.price >= this.targetPrice\n            ? this.alicePubKey\n            : this.bobPubKey\n    assert(this.checkSig(winnerSig, winner))\n}\n")),(0,r.kt)("p",null,"Let's walk through each part."),(0,r.kt)("p",null,"First, we verify that the passed signature is correct. For that we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"RabinVerifierWOC")," library from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/scrypt-ts-lib"},(0,r.kt)("inlineCode",{parentName:"a"},"scrypt-ts-lib"))," package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { RabinPubKey, RabinSig, RabinVerifierWoc } from 'scrypt-ts-lib'\n")),(0,r.kt)("p",null,"Now, we can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"verifySig")," method of the verification library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Verify oracle signature.\nassert(\n    RabinVerifierWOC.verifySig(msg, sig, this.oraclePubKey),\n    'Oracle sig verify failed.'\n)\n")),(0,r.kt)("p",null,"The verification method requires the message signed by the oracle, the oracles signature for the message, and the oracle's public key, which we already set via the constructor."),(0,r.kt)("p",null,"Next, we need to parse information from the chunk of data that is the signed message and assert on it. For a granular description of the message format check out the ",(0,r.kt)("inlineCode",{parentName:"p"},'"Exchange Rate"')," section in the ",(0,r.kt)("a",{parentName:"p",href:"https://witnessonchain.com"},"WitnessOnChain API docs"),"."),(0,r.kt)("p",null,"We need to implement the static method ",(0,r.kt)("inlineCode",{parentName:"p"},"parseExchangeRate")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Parses signed message from the oracle.\n@method()\nstatic parseExchangeRate(msg: ByteString): ExchangeRate {\n    // 4 bytes timestamp (LE) + 8 bytes rate (LE) + 1 byte decimal + 16 bytes symbol\n    return {\n        timestamp: Utils.fromLEUnsigned(slice(msg, 0n, 4n)),\n        price: Utils.fromLEUnsigned(slice(msg, 4n, 12n)),\n        symbol: slice(msg, 13n, 29n),\n    }\n}\n")),(0,r.kt)("p",null,"We parse out the following data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," - The time at which this exchange rate is present."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"price")," - The exchange rate encoded as an integer -> (priceFloat * (10^decimal))."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symbol")," - The symbol of the token pair, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"BSV_USDC"),".")),(0,r.kt)("p",null,"Finally, we wrap the parsed values in a custom type, named ",(0,r.kt)("inlineCode",{parentName:"p"},"ExchangeRate")," and return it. Here's the definition of the type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type ExchangeRate = {\n    timestamp: bigint\n    price: bigint\n    symbol: ByteString\n}\n")),(0,r.kt)("p",null,"Now we can validate the data. First, we check if the timestamp of the exchange rate is within our specified range that we bet on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"assert(\n    exchangeRate.timestamp >= this.timestampFrom,\n    'Timestamp too early.'\n)\nassert(\n    exchangeRate.timestamp <= this.timestampTo,\n    'Timestamp too late.'\n)\n")),(0,r.kt)("p",null,"Additionally, we check if the exchange rate is actually for the correct token pair:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"assert(exchangeRate.symbol == this.symbol, 'Wrong symbol.')\n")),(0,r.kt)("p",null,"Lastly, upon having all the necessary information, we can choose the winner and check their signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const winner =\n    exchangeRate.price >= this.targetPrice\n        ? this.alicePubKey\n        : this.bobPubKey\nassert(this.checkSig(winnerSig, winner))\n")),(0,r.kt)("p",null,"As we can see, if the target price is reached, only Alice is able to unlock the funds, and if not, then only Bob is able to do so."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations! You have completed the oracle tutorial!"),(0,r.kt)("p",null,"The full code along with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/blob/master/tests/priceBet.test.ts"},"tests")," can be found in sCrypt's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/priceBet.ts"},"boilerplate repository"),"."))}u.isMDXComponent=!0},4247:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oracle-7481098240b7afec96efbac61f80ea47.jpeg"}}]);