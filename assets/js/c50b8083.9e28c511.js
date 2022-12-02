"use strict";(self.webpackChunkscrypt_ts_docs=self.webpackChunkscrypt_ts_docs||[]).push([[746],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,c(c({ref:e},p),{},{components:n})):a.createElement(h,c({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,c=new Array(r);c[0]=u;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:o,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2280:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:5},c="How to Deploy & Call a Contract",l={unversionedId:"getting-started/how-to-deploy-and-call-a-contract",id:"getting-started/how-to-deploy-and-call-a-contract",title:"How to Deploy & Call a Contract",description:"Concepts",source:"@site/docs/getting-started/how-to-deploy-and-call-a-contract.md",sourceDirName:"getting-started",slug:"/getting-started/how-to-deploy-and-call-a-contract",permalink:"/scrypt-ts-docs/getting-started/how-to-deploy-and-call-a-contract",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to Debug a Contract",permalink:"/scrypt-ts-docs/getting-started/how-to-debug-a-contract"},next:{title:"Tutorials",permalink:"/scrypt-ts-docs/category/tutorials"}},i={},s=[{value:"Concepts",id:"concepts",level:2},{value:"Contract Deployment",id:"contract-deployment",level:3},{value:"Contract Call",id:"contract-call",level:3},{value:"Steps",id:"steps",level:2},{value:"1. Build a contract instance",id:"1-build-a-contract-instance",level:3},{value:"2. Build a tx",id:"2-build-a-tx",level:3},{value:"The <code>lockTo</code> Relation",id:"the-lockto-relation",level:4},{value:"The <code>unlockFrom</code> Relation",id:"the-unlockfrom-relation",level:4},{value:"3. Send the tx",id:"3-send-the-tx",level:3},{value:"Example",id:"example",level:2}],p={toc:s};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-deploy--call-a-contract"},"How to Deploy & Call a Contract"),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"To simplify and better understand how Bitcoin SV smart contract works, we shall clarify some basic concepts first. "),(0,o.kt)("h3",{id:"contract-deployment"},"Contract Deployment"),(0,o.kt)("p",null,"We can define a contract deployment as this procedure:"),(0,o.kt)("p",null,"Assume we\u2019re building a new tx as a normal ",(0,o.kt)("a",{parentName:"p",href:"https://learnmeabitcoin.com/technical/p2pkh"},"P2PKH")," transaction. The only difference here is we add an output that contains the locking script generated by a contract instance. "),(0,o.kt)("p",null,"If the new tx is broadcast and accepted by miners, we say it\u2019s a successful deployment for the contract and the instance is called a contract genesis instance."),(0,o.kt)("h3",{id:"contract-call"},"Contract Call"),(0,o.kt)("p",null,"We can define a contract call as this procedure:"),(0,o.kt)("p",null,"Assume we have an UTXO that contains the locking script from a certain contract instance, which we can name as ",(0,o.kt)("inlineCode",{parentName:"p"},"prevInstance"),". "),(0,o.kt)("p",null,"Now we\u2019re building a new tx to spend this UTXO in one of its inputs, and we need to prepare the corresponding unlocking script for this UTXO. The unlocking script is actually composed of the arguments passed for calling ",(0,o.kt)("inlineCode",{parentName:"p"},"prevInstance.entryMethod"),". "),(0,o.kt)("p",null,"Meanwhile, we may also add an output that contains the locking script generated by an instance, which we name as ",(0,o.kt)("inlineCode",{parentName:"p"},"curInstance"),", of the same contract."),(0,o.kt)("p",null,"So if the new tx is broadcast and accepted by miners, we say it\u2019s a successful call from the ",(0,o.kt)("inlineCode",{parentName:"p"},"prevInstance"),". And if ",(0,o.kt)("inlineCode",{parentName:"p"},"curInstance")," exists, we say the up-to-date or the latest instance of contract is also changing from the ",(0,o.kt)("inlineCode",{parentName:"p"},"prevInstance")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"curInstance"),"."),(0,o.kt)("p",null,"Keep in mind that the latest or up-to-date instance of a contract always has exactly the same locking script with its current UTXO."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tx with Contract Instance",src:n(8449).Z,width:"741",height:"264"})),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("p",null,"Generally speaking, if you want to deploy or call the contract to BSV network, it takes three steps:"),(0,o.kt)("h3",{id:"1-build-a-contract-instance"},"1. Build a contract instance"),(0,o.kt)("p",null,"Giving proper parameters to get an up-to-date contract instance, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let instance = new MyContract(...args);\n")),(0,o.kt)("h3",{id:"2-build-a-tx"},"2. Build a tx"),(0,o.kt)("p",null,"Build a tx corresponding to your business logic, especially to set the tx's proper input & output script with contract instance."),(0,o.kt)("p",null,"Conceptually speaking, a contract instance has two kinds of relation with txs:"),(0,o.kt)("h4",{id:"the-lockto-relation"},"The ",(0,o.kt)("inlineCode",{parentName:"h4"},"lockTo")," Relation"),(0,o.kt)("p",null,"A contract ",(0,o.kt)("inlineCode",{parentName:"p"},"instance")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"lockTo")," relation with a ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," means that the ",(0,o.kt)("inlineCode",{parentName:"p"},"instance")," forms the locking script in one of the ",(0,o.kt)("inlineCode",{parentName:"p"},"tx"),"'s outputs."),(0,o.kt)("p",null,"From the perspective of ",(0,o.kt)("inlineCode",{parentName:"p"},"tx"),", it may look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tx.addOutput(new bsv.Transaction.Output({\n  script: instance.lockingScript,\n  ...\n}))\n")),(0,o.kt)("p",null,"From the perspective of ",(0,o.kt)("inlineCode",{parentName:"p"},"instance"),", the binding can be declared like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"instance.lockTo = { tx, outputIndex: 0 };\n")),(0,o.kt)("h4",{id:"the-unlockfrom-relation"},"The ",(0,o.kt)("inlineCode",{parentName:"h4"},"unlockFrom")," Relation"),(0,o.kt)("p",null,"A contract ",(0,o.kt)("inlineCode",{parentName:"p"},"prevInstance")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"unlockFrom")," relation with a ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," means that a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"prevInstance"),"'s public(entry) ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," will form the unlocking script in one of the ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," inputs."),(0,o.kt)("p",null,"From the perspective of ",(0,o.kt)("inlineCode",{parentName:"p"},"tx"),", it may look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tx.addInput(new bsv.Transaction.Input({\n  script: prevInstance.getUnlockingScript( inst => inst.customEntryMethod(...args) )\n  ...\n}))\n")),(0,o.kt)("p",null,"From the perspective of ",(0,o.kt)("inlineCode",{parentName:"p"},"prevInstance"),", the binding can be declared like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"prevInstance.unlockFrom = { tx, inputIndex: 0};\n")),(0,o.kt)("h3",{id:"3-send-the-tx"},"3. Send the tx"),(0,o.kt)("p",null,"The final step is to sign and send the tx to the network. If everything is fine, the tx will be accepted by miners."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is a complete example code to deploy & call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Demo")," contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// compile contract to get low-level asm\nawait Demo.compile();\n\n// build contract instance\nconst demo = new Demo(2n);\nconst balance = 1000;\n\n// build contract deploy tx\nconst utxos = await fetchUtxos();\nconst unsignedDeployTx =\n  new bsv.Transaction()\n    .from(utxos)\n    .addOutput(new bsv.Transaction.Output({\n      // get the locking script for `demo` instance\n      script: demo.lockingScript, \n      satoshis: balance,\n    }));\n\n// send contract deploy tx\nconst deployTx = await signAndSend(unsignedDeployTx);\nconsole.log('contract deployed: ', deployTx.id)\n\n// build contract call tx\nconst unsignedCallTx =\n  new bsv.Transaction()\n    .addInput(new bsv.Transaction.Input({\n      prevTxId: deployTx.id,\n      outputIndex: outputIdx,\n      script: demo.getUnlockingScript(() => {\n        // call public method to get the unlocking script for `demo` instance.\n        demo.unlock(3n);\n      }),\n      output: deployTx.outputs[outputIdx]\n    }))\n    .addOutput(\n      new bsv.Transaction.Output({\n        script: bsv.Script.buildPublicKeyHashOut(publicKey.toAddress()),\n        satoshis: balance / 2\n      })\n    );\n\n// send contract call tx\nconst callTx = await signAndSend(unsignedCallTx);\nconsole.log('contract called: ', callTx.id)\n")))}d.isMDXComponent=!0},8449:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/contract_tx-255a60a5cc50c5c3dcb7829fe80d05f8.svg"}}]);