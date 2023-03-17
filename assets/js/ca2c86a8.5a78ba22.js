"use strict";(self.webpackChunkscrypt_ts_docs=self.webpackChunkscrypt_ts_docs||[]).push([[1403],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>p});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=i.createContext({}),c=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),h=c(n),p=a,b=h["".concat(s,".").concat(p)]||h[p]||d[p]||r;return n?i.createElement(b,o(o({ref:e},l),{},{components:n})):i.createElement(b,o({ref:e},l))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=h;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8989:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},o="Tutorial 3: Auction",u={unversionedId:"tutorials/auction",id:"tutorials/auction",title:"Tutorial 3: Auction",description:"Overview",source:"@site/docs/tutorials/auction.md",sourceDirName:"tutorials",slug:"/tutorials/auction",permalink:"/tutorials/auction",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tutorial 2: Tic Tac Toe",permalink:"/tutorials/tic-tac-toe"},next:{title:"Tutorial 4: How to Debug ScriptContext Failure",permalink:"/tutorials/how-to-debug-scriptcontext"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Contract Properties",id:"contract-properties",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Public Methods",id:"public-methods",level:2},{value:"Bid",id:"bid",level:3},{value:"Close",id:"close",level:3},{value:"Customize tx builder for <code>bid</code>",id:"customize-tx-builder-for-bid",level:2},{value:"Conclusion",id:"conclusion",level:2}],l={toc:c};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tutorial-3-auction"},"Tutorial 3: Auction"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In this tutorial, we will go over how to build an auction contract. It is open and transparent, where everyone can participate and the highest bidder wins when the bidding is over."),(0,a.kt)("p",null,"There are two ways to interact with the contract:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Bid: if a higher bid is found, the current highest bidder is updated, and the previous highest bidder is refunded."),(0,a.kt)("li",{parentName:"ol"},"Close: the auctioneer can close the auction after it expires and take the offer.")),(0,a.kt)("h2",{id:"contract-properties"},"Contract Properties"),(0,a.kt)("p",null,"According to the interactions above, this contract needs to store three properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The auctioneer, who starts the auction"),(0,a.kt)("li",{parentName:"ul"},"The deadline for the auction"),(0,a.kt)("li",{parentName:"ul"},"The highest bidder until now")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// The bidder's public key.\n@prop(true)\nbidder: PubKey\n\n// The auctioneer's public key.\n@prop()\nreadonly auctioneer: PubKey\n\n// Deadline of the auction. Can be block height or timestamp.\n@prop()\nreadonly auctionDeadline: bigint\n")),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("p",null,"Initialize all the ",(0,a.kt)("inlineCode",{parentName:"p"},"@prop")," properties in the constructor. Note that we don't need to pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"bidder")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(auctioneer: PubKey, auctionDeadline: bigint) {\n    super(...arguments)\n    // the initial bidder is the auctioneer himeself\n    this.bidder = auctioneer\n    this.auctioneer = auctioneer\n    this.auctionDeadline = auctionDeadline\n}\n")),(0,a.kt)("p",null,"When deploying the contract, the auctioneer locked the minimal bid into the contract, and at this time, the highest bidder would be himself."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const auction = new Auction(publicKeyAuctioneer, auctionDeadline)\nconst deployTx = await auction.deploy(minBid)\n")),(0,a.kt)("h2",{id:"public-methods"},"Public Methods"),(0,a.kt)("h3",{id:"bid"},"Bid"),(0,a.kt)("p",null,"In method ",(0,a.kt)("inlineCode",{parentName:"p"},"public bid(bidder: PubKeyHash, bid: bigint)"),", we need to check if the bidder has a higher bid than the previous one. If so, we update the highest bidder in the contract state and refund the previous bidder."),(0,a.kt)("p",null,"We can read the previous highest bid from the balance of the contract UTXO."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const highestBid: bigint = this.ctx.utxo.value\n")),(0,a.kt)("p",null,"Then it's easy to demand a higher bid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"assert(bid > highestBid, 'the auction bid is lower than the current highest bid')\n")),(0,a.kt)("p",null,"The spending/redeeming tx has these outputs."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lucid.app/publicSegments/view/bfe65136-2acd-4a46-ba63-a6ec4b6d7d4a/image.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Contract's new state output: records the new bidder and locks the new bid into contract UTXO.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Log the previous highest bidder\nconst highestBidder: PubKey = this.bidder\n// Change the public key of the highest bidder.\nthis.bidder = bidder\n\n// Auction continues with a higher bidder.\nconst auctionOutput: ByteString = this.buildStateOutput(bid)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A refund P2PKH output: pay back the previous bidder.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Refund previous highest bidder.\nconst refundOutput: ByteString = Utils.buildPublicKeyHashOutput(highestBidder, highestBid)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An optional change P2PKH output.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let outputs: ByteString = auctionOutput + refundOutput\n// Add change output.\nif (this.changeAmount > 0) {\n    outputs += this.buildChangeOutput()\n}\n")),(0,a.kt)("p",null,"At last, we require the transaction to have these outputs using ",(0,a.kt)("inlineCode",{parentName:"p"},"ScriptContext"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"assert(hash256(outputs) == this.ctx.hashOutputs, 'hashOutputs check failed')\n")),(0,a.kt)("p",null,"As ",(0,a.kt)("inlineCode",{parentName:"p"},"bid")," is called continuously, the state of the contract is constantly updated. The highest bidder, and the highest bid as well, is recorded in the latest contract UTXO until the auctioneer closes the auction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Call this public method to bid with a higher offer.\n@method()\npublic bid(bidder: PubKeyHash, bid: bigint) {\n    const highestBid: bigint = this.ctx.utxo.value\n    assert(bid > highestBid, 'the auction bid is lower than the current highest bid')\n\n    // Change the public key of the highest bidder.\n    const highestBidder: PubKey = this.bidder\n    this.bidder = bidder\n\n    // Auction continues with a higher bidder.\n    const auctionOutput: ByteString = this.buildStateOutput(bid)\n\n    // Refund previous highest bidder.\n    const refundOutput: ByteString = Utils.buildPublicKeyHashOutput(highestBidder, highestBid)\n\n    let outputs: ByteString = auctionOutput + refundOutput\n    // Add change output.\n    if (this.changeAmount > 0) {\n        outputs += this.buildChangeOutput()\n    }\n\n    assert(hash256(outputs) == this.ctx.hashOutputs, 'hashOutputs check failed')\n}\n")),(0,a.kt)("h3",{id:"close"},"Close"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lucid.app/publicSegments/view/0f40689c-9727-423e-81ed-0d5df338dece/image.png",alt:null})),(0,a.kt)("p",null,"Method ",(0,a.kt)("inlineCode",{parentName:"p"},"public close(sig: Sig)")," is simple, we require:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It can only be called by the auctioneer. That is why we need to pass in the caller's signature.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Check signature of the auctioneer.\nassert(this.checkSig(sig, this.auctioneer), 'signature check failed')\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now the auction deadline has passed")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"assert(this.ctx.locktime >= this.auctionDeadline, 'auction is not over yet')\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We don't place any constraint on transaction outputs here, because the auctioneer can send the highest bid to any address he controls, which is what we actually want.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Close the auction if deadline is reached.\n@method()\npublic close(sig: Sig) {\n    // Check deadline\n    assert(this.ctx.locktime >= this.auctionDeadline, 'auction is not over yet')\n    // Check signature of the auctioneer.\n    assert(this.checkSig(sig, this.auctioneer), 'signature check failed')\n}\n")),(0,a.kt)("h2",{id:"customize-tx-builder-for-bid"},"Customize tx builder for ",(0,a.kt)("inlineCode",{parentName:"h2"},"bid")),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"/how-to-customize-a-contract-tx#default-1"},"default tx builder")," cannot meet our demand when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"bid"),", since the second output - the refund P2PKH output - is not a new contract instance."),(0,a.kt)("p",null,"In Function ",(0,a.kt)("inlineCode",{parentName:"p"},"static bidTxBuilder(options: MethodCallOptions<Auction>, bidder: PubKeyHash, bid: bigint): Promise<ContractTransaction>"),", we add all three outputs as designed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const unsignedTx: Transaction = new Transaction()\n    // add contract input\n    .addInput(current.buildContractInput(options.fromUTXO))\n    // build next instance output\n    .addOutput(new Transaction.Output({script: nextInstance.lockingScript, satoshis: Number(bid),}))\n    // build refund output\n    .addOutput(\n        new Transaction.Output({\n            script: Script.fromHex(Utils.buildPublicKeyHashScript(current.bidder)),\n            satoshis: options.fromUTXO?.satoshis ?? current.from.tx.outputs[current.from.outputIndex].satoshis,\n        })\n    )\n    // build change output\n    .change(options.changeAddress)\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Congratulations, you have completed the ",(0,a.kt)("inlineCode",{parentName:"p"},"Auction")," contract!"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/src/contracts/auction.ts"},"final complete code")," is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export class Auction extends SmartContract {\n    static readonly LOCKTIME_BLOCK_HEIGHT_MARKER = 500000000\n    static readonly UINT_MAX = 0xffffffffn\n\n    // The bidder's public key.\n    @prop(true)\n    bidder: PubKey\n\n    // The auctioneer's public key.\n    @prop()\n    readonly auctioneer: PubKey\n\n    // Deadline of the auction. Can be block height or timestamp.\n    @prop()\n    readonly auctionDeadline: bigint\n\n    constructor(auctioneer: PubKey, auctionDeadline: bigint) {\n        super(...arguments)\n        this.bidder = auctioneer\n        this.auctioneer = auctioneer\n        this.auctionDeadline = auctionDeadline\n    }\n\n    // Call this public method to bid with a higher offer.\n    @method()\n    public bid(bidder: PubKey, bid: bigint) {\n        const highestBid: bigint = this.ctx.utxo.value\n        assert(bid > highestBid, 'the auction bid is lower than the current highest bid')\n\n        // Change the public key of the highest bidder.\n        const highestBidder: PubKey = this.bidder\n        this.bidder = bidder\n\n        // Auction continues with a higher bidder.\n        const auctionOutput: ByteString = this.buildStateOutput(bid)\n\n        // Refund previous highest bidder.\n        const refundOutput: ByteString = Utils.buildPublicKeyHashOutput(hash160(highestBidder), highestBid)\n        let outputs: ByteString = auctionOutput + refundOutput\n\n        // Add change output.\n        if (this.changeAmount > 0) {\n            outputs += this.buildChangeOutput()\n        }\n\n        assert(hash256(outputs) == this.ctx.hashOutputs, 'hashOutputs check failed')\n    }\n\n    // Close the auction if deadline is reached.\n    @method()\n    public close(sig: Sig) {\n        // Check deadline\n        assert(this.ctx.locktime >= this.auctionDeadline, 'auction is not over yet')\n\n        // Check signature of the auctioneer.\n        assert(this.checkSig(sig, this.auctioneer), 'signature check failed')\n    }\n\n    // User defined transaction builder for calling function `bid`\n    static bidTxBuilder(options: MethodCallOptions<Auction>, bidder: PubKey, bid: bigint): Promise<ContractTransaction> {\n        const current = options.current\n\n        const nextInstance = current.next()\n        nextInstance.bidder = bidder\n\n        const unsignedTx: Transaction = new Transaction()\n            // add contract input\n            .addInput(current.buildContractInput(options.fromUTXO))\n            // build next instance output\n            .addOutput(new Transaction.Output({script: nextInstance.lockingScript, satoshis: Number(bid),}))\n            // build refund output\n            .addOutput(\n                new Transaction.Output({\n                    script: Script.fromHex(Utils.buildPublicKeyHashScript(hash160(current.bidder))),\n                    satoshis: options.fromUTXO?.satoshis ?? current.from.tx.outputs[current.from.outputIndex].satoshis,\n                })\n            )\n            // build change output\n            .change(options.changeAddress)\n\n        return Promise.resolve({\n            tx: unsignedTx,\n            atInputIndex: 0,\n            nexts: [\n                {\n                    instance: nextInstance,\n                    atOutputIndex: 0,\n                    balance: Number(bid),\n                },\n            ],\n        })\n    }\n}\n")))}d.isMDXComponent=!0}}]);