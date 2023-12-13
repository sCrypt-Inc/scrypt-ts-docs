"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[2997],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>m});var r=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var c=r.createContext({}),l=function(t){var n=r.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},p=function(t){var n=l(t.components);return r.createElement(c.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(e),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return e?r.createElement(f,i(i({ref:n},p),{},{components:e})):r.createElement(f,i({ref:n},p))}));function m(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var o=e.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=e[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},3552:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=e(7462),a=(e(7294),e(3905));const o={title:"Multiple Inputs with Different Contracts",sidebar_position:2},i=void 0,s={unversionedId:"tokens/ft/multiple",id:"tokens/ft/multiple",title:"Multiple Inputs with Different Contracts",description:"Suppose we would like to unlock FTs within a single transaction that are located in different smart contracts. We can utilize the same technique demonstrated in the section for calling multiple contract instances.",source:"@site/docs/tokens/ft/multiple.md",sourceDirName:"tokens/ft",slug:"/tokens/ft/multiple",permalink:"/tokens/ft/multiple",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Multiple Inputs with Different Contracts",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Transfer Existing FT to a Smart Contract",permalink:"/tokens/ft/existing"},next:{title:"View BSV20 Token Transactions",permalink:"/tokens/ft/how-to-verify-a-BSV20-transaction"}},c={},l=[],p={toc:l};function u(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Suppose we would like to unlock FTs within a single transaction that are located in different smart contracts. We can utilize the same technique demonstrated in the ",(0,a.kt)("a",{parentName:"p",href:"/advanced/how-to-call-multiple-contracts"},"section for calling multiple contract instances"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// One sender is regular bsv-20 P2PKH.\nconst sender0 = BSV20V2P2PKH.fromUTXO(utxo)\nawait sender0.connect(signer)\n\n// Second sender is a hash lock contract.\nconst sender1 = HashLockFTV2.fromUTXO(utxo)\nawait sender1.connect(signer)\n\n// Recipient will be a single hash lock contract.\nconst recipientAmt = 6n\nconst recipients: Array<FTReceiver> = [\n    {\n        instance: new HashLockFTV2(\n            tokenId,\n            amount,\n            dec,\n            sha256(toByteString('next super secret', true))\n        ),\n        amt: recipientAmt,\n    },\n];\n\nconst totalTokenAmt = sender0.getAmt() + sender1.getAmt()\nconst tokenChangeAmt = totalTokenAmt - recipientAmt\n\nconst ordPubKey = await signer.getDefaultPubKey()\n\nsender0.bindTxBuilder(\n    'unlock',\n    async (\n        current: BSV20V2P2PKH,\n        options: OrdiMethodCallOptions<BSV20V2P2PKH>\n    ): Promise<ContractTransaction> => {\n        const tx = new bsv.Transaction()\n        const nexts: StatefulNext<SmartContract>[] = []\n\n        for (let i = 0; i < recipients.length; i++) {\n            const receiver = recipients[i]\n\n            if (receiver.instance instanceof BSV20V2) {\n                receiver.instance.setAmt(receiver.amt)\n            } else {\n                throw new Error('Unsupported receiver, only BSV-20!')\n            }\n\n            tx.addOutput(\n                new bsv.Transaction.Output({\n                    script: receiver.instance.lockingScript,\n                    satoshis: 1,\n                })\n            )\n\n            nexts.push({\n                instance: receiver.instance,\n                balance: 1,\n                atOutputIndex: i,\n            })\n        }\n\n        if (tokenChangeAmt > 0n) {\n            const p2pkh = new BSV20V2P2PKH(\n                tokenId,\n                amount,\n                dec,\n                Addr(ordPubKey.toAddress().toByteString())\n            )\n\n            p2pkh.setAmt(tokenChangeAmt)\n\n            tx.addOutput(\n                new bsv.Transaction.Output({\n                    script: p2pkh.lockingScript,\n                    satoshis: 1,\n                })\n            )\n\n            nexts.push({\n                instance: p2pkh,\n                balance: 1,\n                atOutputIndex: nexts.length,\n            })\n        }\n\n        tx.change(ordPubKey.toAddress())\n\n        tx.addInput(current.buildContractInput())\n\n        return Promise.resolve({\n            tx: tx,\n            atInputIndex: 0,\n            nexts,\n        })\n    }\n)\n\nlet partialContractTx = await sender0.methods.unlock(\n    (sigResps) => findSig(sigResps, ordPubKey),\n    PubKey(ordPubKey.toByteString()),\n    {\n        pubKeyOrAddrToSign: ordPubKey,\n        multiContractCall: true,\n    } as OrdiMethodCallOptions<BSV20V2P2PKH>\n)\n\nsender1.bindTxBuilder(\n    'unlock',\n    async (\n        current: HashLockFTV2,\n        options: MethodCallOptions<HashLockFTV2>\n    ): Promise<ContractTransaction> => {\n        if (options.partialContractTx) {\n            const tx = options.partialContractTx.tx\n            tx.addInput(current.buildContractInput())\n\n            return Promise.resolve({\n                tx: tx,\n                atInputIndex: 1,\n                nexts: partialContractTx.nexts,\n            })\n        }\n\n        throw new Error('no partialContractTx')\n    }\n)\n\npartialContractTx = await sender1.methods.unlock(message1, {\n    partialContractTx,\n    transfer: recipients,\n    pubKeyOrAddrToSign: ordPubKey,\n    multiContractCall: true,\n} as OrdiMethodCallOptions<BSV20V2P2PKH>)\n\nconst { tx } = await SmartContract.multiContractCall(\n    partialContractTx,\n    signer\n)\n\nconsole.log('Transfer tx:', tx.id)\n")),(0,a.kt)("p",null,"In the above code, a partial transaction is constructed, which unlocks the first UTXO containing a ",(0,a.kt)("inlineCode",{parentName:"p"},"BSV20V2P2PKH")," instance. The actual contract call doesn't execute yet, as we set the ",(0,a.kt)("inlineCode",{parentName:"p"},"multiContractCall")," flag within the method call parameters."),(0,a.kt)("p",null,"We then feed that partially constructed transaction via the second contract call, which will unlock the ",(0,a.kt)("inlineCode",{parentName:"p"},"HashLockFTV2")," instance. Just like the first call, this call also has the ",(0,a.kt)("inlineCode",{parentName:"p"},"multiContractCall")," flag set."),(0,a.kt)("p",null,"Once the transaction is fully built, we can sign and broadcast it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"SmartContract.multiContractCall")," function."),(0,a.kt)("p",null,"The above code is an example based on v2, but the same can be achieved using v1."))}u.isMDXComponent=!0}}]);