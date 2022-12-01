"use strict";(self.webpackChunkscrypt_ts_docs=self.webpackChunkscrypt_ts_docs||[]).push([[746],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=o.createContext({}),p=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=p(t.components);return o.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?o.createElement(k,r(r({ref:e},s),{},{components:n})):o.createElement(k,r({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,r=new Array(l);r[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,r[1]=c;for(var p=2;p<l;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2280:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const l={sidebar_position:5},r="How to Deploy & Call a Contract",c={unversionedId:"getting-started/how-to-deploy-and-call-a-contract",id:"getting-started/how-to-deploy-and-call-a-contract",title:"How to Deploy & Call a Contract",description:"Concepts",source:"@site/docs/getting-started/how-to-deploy-and-call-a-contract.md",sourceDirName:"getting-started",slug:"/getting-started/how-to-deploy-and-call-a-contract",permalink:"/scrypt-ts-docs/getting-started/how-to-deploy-and-call-a-contract",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to Debug a Contract",permalink:"/scrypt-ts-docs/getting-started/how-to-debug-a-contract"},next:{title:"Tutorials",permalink:"/scrypt-ts-docs/category/tutorials"}},i={},p=[{value:"Concepts",id:"concepts",level:2},{value:"UTXO",id:"utxo",level:3},{value:"Contract Deployment",id:"contract-deployment",level:3},{value:"Contract Call",id:"contract-call",level:3},{value:"How to",id:"how-to",level:2},{value:"1. Build a contract instance:",id:"1-build-a-contract-instance",level:3},{value:"2. Build a tx:",id:"2-build-a-tx",level:3},{value:"The <code>lockTo</code> Relation",id:"the-lockto-relation",level:4},{value:"The <code>unlockFrom</code> Relation",id:"the-unlockfrom-relation",level:4},{value:"3. Send the tx:",id:"3-send-the-tx",level:3},{value:"Example",id:"example",level:2}],s={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-deploy--call-a-contract"},"How to Deploy & Call a Contract"),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("h3",{id:"utxo"},"UTXO"),(0,a.kt)("h3",{id:"contract-deployment"},"Contract Deployment"),(0,a.kt)("h3",{id:"contract-call"},"Contract Call"),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("p",null,"Generally speaking, if you want to deploy or call the contract to BSV network, it takes three steps:"),(0,a.kt)("h3",{id:"1-build-a-contract-instance"},"1. Build a contract instance:"),(0,a.kt)("p",null,"Giving proper parameters to get an up-to-date contract instance, like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let instance = new MyContract(...args);\n")),(0,a.kt)("h3",{id:"2-build-a-tx"},"2. Build a tx:"),(0,a.kt)("p",null,"Build a tx corresponding to your business logic, especially to set the tx's proper input & output script with contract instance."),(0,a.kt)("p",null,"Conceptually speaking, a contract instance has two kinds of relation with txs:"),(0,a.kt)("h4",{id:"the-lockto-relation"},"The ",(0,a.kt)("inlineCode",{parentName:"h4"},"lockTo")," Relation"),(0,a.kt)("p",null,"A contract ",(0,a.kt)("inlineCode",{parentName:"p"},"instance")," has a ",(0,a.kt)("inlineCode",{parentName:"p"},"lockTo")," relation with a ",(0,a.kt)("inlineCode",{parentName:"p"},"tx")," means that the ",(0,a.kt)("inlineCode",{parentName:"p"},"instance")," forms the locking script in one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"tx"),"'s outputs."),(0,a.kt)("p",null,"From the perspective of ",(0,a.kt)("inlineCode",{parentName:"p"},"tx"),", it may look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"tx.addOutput(new bsv.Transaction.Output({\n  script: instance.lockingScript,\n  ...\n}))\n")),(0,a.kt)("p",null,"From the perspective of ",(0,a.kt)("inlineCode",{parentName:"p"},"instance"),", the binding can be declared like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"instance.lockTo = { tx, outputIndex: 0 };\n")),(0,a.kt)("h4",{id:"the-unlockfrom-relation"},"The ",(0,a.kt)("inlineCode",{parentName:"h4"},"unlockFrom")," Relation"),(0,a.kt)("p",null,"A contract ",(0,a.kt)("inlineCode",{parentName:"p"},"prevInstance")," has a ",(0,a.kt)("inlineCode",{parentName:"p"},"unlockFrom")," relation with a ",(0,a.kt)("inlineCode",{parentName:"p"},"tx")," means that a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"prevInstance"),"'s public(entry) ",(0,a.kt)("inlineCode",{parentName:"p"},"@method")," will form the unlocking script in one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"tx")," inputs."),(0,a.kt)("p",null,"From the perspective of ",(0,a.kt)("inlineCode",{parentName:"p"},"tx"),", it may look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"tx.addInput(new bsv.Transaction.Input({\n  script: prevInstance.getUnlockingScript( inst => inst.customEntryMethod(...args) )\n  ...\n}))\n")),(0,a.kt)("p",null,"From the perspective of ",(0,a.kt)("inlineCode",{parentName:"p"},"prevInstance"),", the binding can be declared like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"prevInstance.unlockFrom = { tx, inputIndex: 0};\n")),(0,a.kt)("h3",{id:"3-send-the-tx"},"3. Send the tx:"),(0,a.kt)("p",null,"The final step is to sign and send the tx to the network. If everything is fine, the tx will be accpected by miners."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Here is a complete example code to deploy & call the ",(0,a.kt)("inlineCode",{parentName:"p"},"Demo")," contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// compile contract to get low-level asm\nawait Demo.compile();\n\n// build contract instance\nconst demo = new Demo(2n);\nconst balance = 1000;\n\n// build contract deploy tx\nconst utxos = await fetchUtxos();\nconst unsignedDeployTx =\n  new bsv.Transaction()\n    .from(utxos)\n    .addOutput(new bsv.Transaction.Output({\n      // get the locking script for `demo` instance\n      script: demo.lockingScript, \n      satoshis: balance,\n    }));\n\n// send contract deploy tx\nconst deployTx = await signAndSend(unsignedDeployTx);\nconsole.log('contract deployed: ', deployTx.id)\n\n// build contract call tx\nconst unsignedCallTx =\n  new bsv.Transaction()\n    .addInput(new bsv.Transaction.Input({\n      prevTxId: deployTx.id,\n      outputIndex: outputIdx,\n      script: demo.getUnlockingScript(() => {\n        // call public method to get the unlocking script for `demo` instance.\n        demo.unlock(3n);\n      }),\n      output: deployTx.outputs[outputIdx]\n    }))\n    .addOutput(\n      new bsv.Transaction.Output({\n        script: bsv.Script.buildPublicKeyHashOut(publicKey.toAddress()),\n        satoshis: balance / 2\n      })\n    );\n\n// send contract call tx\nconst callTx = await signAndSend(unsignedCallTx);\nconsole.log('contract called: ', callTx.id)\n")))}d.isMDXComponent=!0}}]);