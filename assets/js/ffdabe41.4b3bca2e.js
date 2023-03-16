"use strict";(self.webpackChunkscrypt_ts_docs=self.webpackChunkscrypt_ts_docs||[]).push([[9761],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var s=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=s.createContext({}),p=function(e){var n=s.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return s.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=i,h=u["".concat(d,".").concat(g)]||u[g]||l[g]||r;return t?s.createElement(h,a(a({ref:n},c),{},{components:t})):s.createElement(h,a({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<r;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var s=t(7462),i=(t(7294),t(3905));const r={sidebar_position:12},a="How to Add a Signer",o={unversionedId:"how-to-add-a-signer",id:"how-to-add-a-signer",title:"How to Add a Signer",description:"As described in this section, a signer is an abstraction of private keys, which can be used to sign messages and transactions. A simple signer would be a single private key, while a complex signer is a wallet.",source:"@site/docs/how-to-add-a-signer.md",sourceDirName:".",slug:"/how-to-add-a-signer",permalink:"/how-to-add-a-signer",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"How to Verify a Contract",permalink:"/how-to-verify-a-contract"},next:{title:"Call Multiple Contracts in a Single Tx",permalink:"/how-to-call-multiple-contracts"}},d={},p=[{value:"Implementation",id:"implementation",level:2},{value:"Base Class <code>Signer</code>",id:"base-class-signer",level:3},{value:"<code>SensiletSigner</code>",id:"sensiletsigner",level:3},{value:"Use your signer",id:"use-your-signer",level:2}],c={toc:p};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-add-a-signer"},"How to Add a Signer"),(0,i.kt)("p",null,"As described in ",(0,i.kt)("a",{parentName:"p",href:"/how-to-test-a-contract#signer"},"this section"),", a signer is an abstraction of private keys, which can be used to sign messages and transactions. A simple signer would be a single private key, while a complex signer is a wallet."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scryptTS")," provides the following signers by default:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"TestWallet")," : a simple wallet that can hold multiple private keys, with in-memory utxo management. Should only be used for testing."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SensiletSigner"),": a signer powered by the popular smart contract wallet ",(0,i.kt)("a",{parentName:"li",href:"https://sensilet.com/"},"Sensilet"),". Can be used in production.")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("h3",{id:"base-class-signer"},"Base Class ",(0,i.kt)("inlineCode",{parentName:"h3"},"Signer")),(0,i.kt)("p",null,"If you want to implement your own signer, you must inherit from the base class ",(0,i.kt)("inlineCode",{parentName:"p"},"Signer"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * A `Signer` is a class which in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to perform operations.\n */\nexport abstract class Signer {\n\n  provider?: Provider;\n  readonly _isSigner: boolean;\n\n  constructor(provider?: Provider) {\n    this._isSigner = true;\n    this.provider = provider;\n  }\n\n  /**\n   * Connect a provider to `this`.\n   * @param provider The target provider.\n   * @returns \n   */\n  abstract connect(provider: Provider): Promise<this>;\n\n  // Account\n\n  /**\n   * \n   * @returns A promise which resolves to the address to the default private key of the signer.\n   */\n  abstract getDefaultAddress(): Promise<bsv.Address>;\n\n  /**\n   * \n   * @returns A promise which resolves to the public key of the default private key of the signer.\n   */\n  abstract getDefaultPubKey(): Promise<bsv.PublicKey>;\n\n  /**\n   * \n   * @param address The request address, using the default address if omitted.\n   * @returns The public key result.\n   * @throws If the private key for the address does not belong this signer.\n   */\n  abstract getPubKey(address?: AddressOption): Promise<bsv.PublicKey>;\n\n  // Signing\n\n  /**\n   * Sign a raw transaction hex string.\n   * \n   * @param rawTxHex The raw transaction hex to sign.\n   * @param options The options for signing, see the details of `SignTransactionOptions`.\n   * @returns A promise which resolves to the signed transaction hex string.\n   * @throws If any input of the transaction can not be signed properly.\n   */\n  abstract signRawTransaction(rawTxHex: string, options: SignTransactionOptions): Promise<string>;\n\n  /**\n   * Sign a transaction object.\n   * @param tx The transaction object to sign.\n   * @param options The options for signing, see the details of `SignTransactionOptions`.\n   * @returns A promise which resolves to the signed transaction object.\n   */\n  abstract signTransaction(tx: bsv.Transaction, options?: SignTransactionOptions): Promise<bsv.Transaction>;\n\n  /**\n   * Sign a message string.\n   * @param message The message to be signed.\n   * @param address The optional address whose private key will be used to sign `message`, using the default private key if omitted.\n   * @returns A promise which resolves to the signautre of the message. \n   */\n  abstract signMessage(message: string, address?: AddressOption): Promise<string>;\n\n  /**\n   * Get the requested transaction signatures for the raw transaction.\n   * @param rawTxHex The raw transaction hex to get signatures from.\n   * @param sigRequests The signature requst informations, see details in `SignatureRequest`.\n   * @returns A promise which resolves to a list of `SignatureReponse` corresponding to `sigRequests`.\n   */\n  abstract getSignatures(rawTxHex: string, sigRequests: SignatureRequest[]): Promise<SignatureResponse[]>;\n\n  /**\n   * Get the connected provider.\n   * @returns the connected provider.\n   * @throws if no provider is connected to `this`.\n   */\n  get connectedProvider(): Provider {\n    if (!this.provider) {\n      throw new Error(`the provider of singer ${this.constructor.name} is not set yet!`);\n    }\n    if (!this.provider.isConnected()) {\n      throw new Error(`the provider of singer ${this.constructor.name} is not connected yet!`);\n    }\n\n    return this.provider;\n  }\n\n  /**\n   * Sign the transaction, then broadcast the transaction\n   * @param tx A transaction is signed and broadcast\n   * @param options The options for signing, see the details of `SignTransactionOptions`.\n   * @returns A promise which resolves to the transaction id.\n   */\n  async signAndsendTransaction(tx: bsv.Transaction, options?: SignTransactionOptions): Promise<TransactionResponse> {\n    await tx.sealAsync();\n    const signedTx = await this.signTransaction(tx, options);\n    await this.connectedProvider.sendTransaction(signedTx);\n    return signedTx;\n  };\n\n  /**\n   * Get a list of the P2PKH UTXOs.\n   * @param address The address of the returned UTXOs belongs to.\n   * @param options The optional query conditions, see details in `UtxoQueryOptions`. \n   * @returns  A promise which resolves to a list of UTXO for the query options.\n   */\n  listUnspent(address: AddressOption, options?: UtxoQueryOptions): Promise<UTXO[]> {\n    // default implemention using provider, can be overrided.\n    return this.connectedProvider.listUnspent(address, options);\n  }\n\n  /**\n   * Get the balance of BSVs in satoshis for an address.\n   * @param address The query address.\n   * @returns A promise which resolves to the address balance status.\n   */\n  getBalance(address?: AddressOption): Promise<{ confirmed: number, unconfirmed: number }> {\n    // default implemention using provider, can be overrided.\n    return this.connectedProvider.getBalance(address);\n  }\n\n  // Inspection\n  /**\n   * Check if an object is a `Signer`\n   * @param value The target object\n   * @returns Returns `true` if and only if `object` is a Provider.\n   */\n  static isSigner(value: any): value is Signer {\n    return !!(value && value._isSigner);\n  }\n\n}\n")),(0,i.kt)("p",null,"It is recommended that your signer implements all ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract")," methods. For non-",(0,i.kt)("inlineCode",{parentName:"p"},"abstract")," methods, the default implementation is usually sufficient."),(0,i.kt)("h3",{id:"sensiletsigner"},(0,i.kt)("inlineCode",{parentName:"h3"},"SensiletSigner")),(0,i.kt)("p",null,"Next, we use the Sensilet wallet as an example to show how to implement a",(0,i.kt)("inlineCode",{parentName:"p"},"SensiletSigner"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"connect")," method, you usually attempt to connect to a provider and save it:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"override async connect(provider: Provider): Promise<this> {\n    // we should make sure sensilet is connected  before we connect a provider.\n    const isSensiletConnected = await this.isSensiletConnected();\n\n    if(!isSensiletConnected) {\n      Promise.reject(new Error('Sensilet is not connected!'))\n    }\n\n    if(!provider.isConnected()) {\n      // connect the provider\n      await provider.connect();\n    }\n\n    this.provider = provider;\n    return this;\n}\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Returns the address to the default private key of the wallet in ",(0,i.kt)("inlineCode",{parentName:"li"},"getDefaultAddress"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Get an object that can directly interact with the Sensilet wallet,\n * if there is no connection with the wallet, it will request to establish a connection.\n * @returns SensiletWalletAPI\n */\nasync getConnectedTarget(): Promise<SensiletWalletAPI> {\n\n    const isSensiletConnected = await this.isSensiletConnected();\n    if (!isSensiletConnected) {\n      // trigger connecting to sensilet account when it's not connected.\n      try {\n        const addr = await this._target.requestAccount();\n        this._address = bsv.Address.fromString(addr);\n      } catch (e) {\n        throw new Error('Sensilet requestAccount failed')\n      }\n    }\n    return this.getSensilet();\n}\n\noverride async getDefaultAddress(): Promise<bsv.Address> {\n    // \n    const sensilet = await this.getConnectedTarget();\n    const address = await sensilet.getAddress();\n    return bsv.Address.fromString(address);\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Returns the public key to the default private key of the wallet in ",(0,i.kt)("inlineCode",{parentName:"li"},"getDefaultPubKey"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"override async getDefaultPubKey(): Promise<PublicKey> {\n    const sensilet = await this.getConnectedTarget();\n    const pubKey = await sensilet.getPublicKey();\n    return Promise.resolve(new bsv.PublicKey(pubKey));\n}\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Since Sensilet is a single-address wallet, we simply ignore the ",(0,i.kt)("inlineCode",{parentName:"li"},"getPubKey")," method:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"override async getPubKey(address: AddressOption): Promise<PublicKey> {\n    throw new Error(`Method ${this.constructor.name}#getPubKey not implemented.`);\n}\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Both ",(0,i.kt)("inlineCode",{parentName:"li"},"signTransaction")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"signRawTransaction")," sign the transaction, but their parameters are different. ",(0,i.kt)("inlineCode",{parentName:"li"},"signRawTransaction")," converts the parameters and delegates the implementation of the signing to ",(0,i.kt)("inlineCode",{parentName:"li"},"signTransaction"),".")),(0,i.kt)("p",null,"The following are types used in these two functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"\n/** \n * `SignatureRequest` contains required informations for a signer to sign a certain input of a transaction.\n */\nexport interface SignatureRequest {\n  /** The index of input to sign. */\n  inputIndex: number;\n  /** The previous output satoshis value of the input to spend. */\n  satoshis: number;\n  /** The address(es) of corresponding private key(s) required to sign the input. */\n  address: AddressesOption;\n  /** The previous output script of input, default value is a P2PKH locking script for the `address` if omitted. */\n  scriptHex?: string;\n  /** The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted. */\n  sigHashType?: number;\n  /** The extra information for signing. */\n  data?: unknown;\n}\n\n/** \n * `SignatureResponse` contains the signing result corresponding to a `SignatureRequest`.\n */\nexport interface SignatureResponse {\n  /** The index of input. */\n  inputIndex: number;\n  /** The signature.*/\n  sig: string;\n  /** The public key bound with the `sig`. */\n  publicKey: string;\n  /** The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted. */\n  sigHashType: number;\n}\n\n/** \n * `SignTransactionOptions` is the options can be provided when signing a transaction.\n*/\nexport interface SignTransactionOptions {\n  /** The `SignatureRequest` for the some inputs of the transaction. */\n  sigRequests?: SignatureRequest[];\n  /** The address(es) whose corresponding private key(s) should be used to sign the tx. */\n  address?: AddressesOption;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"signTransaction")," will convert the above parameter types to the parameter types required by the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.sensilet.com/guide/sensilet-api.html#signtx"},"sensilet api"),". And call the sensilet api to complete the signature, which is implemented in ",(0,i.kt)("inlineCode",{parentName:"p"},"getSignatures")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"override async signRawTransaction(rawTxHex: string, options: SignTransactionOptions): Promise<string> {\n    // convert `rawTxHex` to a transation object\n    const sigReqsByInputIndex: Map<number, SignatureRequest> = (options?.sigRequests || []).reduce((m, sigReq) => { m.set(sigReq.inputIndex, sigReq); return m; }, new Map());\n    const tx = new bsv.Transaction(rawTxHex);\n    tx.inputs.forEach((_, inputIndex) => {\n      const sigReq = sigReqsByInputIndex.get(inputIndex);\n      if (!sigReq) {\n        throw new Error(`\\`SignatureRequest\\` info should be provided for the input ${inputIndex} to call #signRawTransaction`)\n      }\n      const script = sigReq.scriptHex ? new bsv.Script(sigReq.scriptHex) : bsv.Script.buildPublicKeyHashOut(sigReq.address.toString());\n      // set ref output of the input\n      tx.inputs[inputIndex].output = new bsv.Transaction.Output({\n        script,\n        satoshis: sigReq.satoshis\n      })\n    });\n\n    const signedTx = await this.signTransaction(tx, options);\n    return signedTx.toString();\n}\n\noverride async signTransaction(tx: Transaction, options?: SignTransactionOptions): Promise<Transaction> {\n\n    const network = await this.getNetwork();\n    // Generate default `sigRequests` if not passed by user\n    const sigRequests: SignatureRequest[] = options?.sigRequests?.length ? options.sigRequests :\n\n      tx.inputs.map((input, inputIndex) => {\n        const useAddressToSign = options && options.address ? options.address :\n          input.output?.script.isPublicKeyHashOut()\n            ? input.output.script.toAddress(network)\n            : this._address;\n\n        return {\n          inputIndex,\n          satoshis: input.output?.satoshis,\n          address: useAddressToSign,\n          scriptHex: input.output?.script?.toHex(),\n          sigHashType: DEFAULT_SIGHASH_TYPE,\n        }\n      })\n\n    const sigResponses = await this.getSignatures(tx.toString(), sigRequests);\n\n    // Set the acquired signature as an unlocking script for the transaction\n    tx.inputs.forEach((input, inputIndex) => {\n      const sigResp = sigResponses.find(sigResp => sigResp.inputIndex === inputIndex);\n      if (sigResp && input.output?.script.isPublicKeyHashOut()) {\n        var unlockingScript = new bsv.Script(\"\")\n        .add(Buffer.from(sigResp.sig, 'hex'))\n        .add(Buffer.from(sigResp.publicKey, 'hex'));\n        \n        input.setScript(unlockingScript)\n      }\n    })\n\n    return tx;\n}\n\n/**\n * Get signatures with sensilet api\n * @param rawTxHex a transation raw hex\n * @param sigRequests a `SignatureRequest` array for the some inputs of the transaction.\n * @returns a `SignatureResponse` array\n */\nasync getSignatures(rawTxHex: string, sigRequests: SignatureRequest[]): Promise<SignatureResponse[]> {\n    const network = await this.getNetwork()\n    // convert `sigRequests` to the parameter type required by sensilet `signTx` api\n    const inputInfos = sigRequests.flatMap((sigReq) => {\n      const addresses = parseAddresses(sigReq.address, network);\n      return addresses.map(address => {\n        return {\n          txHex: rawTxHex,\n          inputIndex: sigReq.inputIndex,\n          scriptHex: sigReq.scriptHex || bsv.Script.buildPublicKeyHashOut(address).toHex(),\n          satoshis: sigReq.satoshis,\n          sigtype: sigReq.sigHashType || DEFAULT_SIGHASH_TYPE,\n          address: address.toString()\n        }\n      });\n    });\n\n    const sensilet = await this.getConnectedTarget();\n    // call sensilet `signTx` api to sign transaction\n    // https://doc.sensilet.com/guide/sensilet-api.html#signtx\n    const sigResults = await sensilet.signTx({\n      list: inputInfos\n    });\n\n    return inputInfos.map((inputInfo, idx) => {\n      return {\n        inputIndex: inputInfo.inputIndex,\n        sig: sigResults.sigList[idx].sig,\n        publicKey: sigResults.sigList[idx].publicKey,\n        sigHashType: sigRequests[idx].sigHashType || DEFAULT_SIGHASH_TYPE\n      }\n    })\n}\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Sensilet supports signing messages, if your wallet does not support it, you can throw an exception in the ",(0,i.kt)("inlineCode",{parentName:"li"},"signMessage")," function:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"override async signMessage(message: string, address?: AddressOption): Promise<string> {\n    if (address) {\n      throw new Error(`${this.constructor.name}#signMessge with \\`address\\` param is not supported!`);\n    }\n    const sensilet = await this.getConnectedTarget();\n    return sensilet.signMessage(message);\n}\n")),(0,i.kt)("p",null,"So far, we have implemented all abstract methods. The remaining non-abstract methods can reuse the default implementation, that is, delegating to the connected ",(0,i.kt)("a",{parentName:"p",href:"/how-to-test-a-contract#provider"},"provider"),". If you have a customized implementation, you can override them. For example, we can use the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.sensilet.com/guide/sensilet-api.html#getbsvbalance"},"Sensilet api ",(0,i.kt)("inlineCode",{parentName:"a"},"getBsvBalance"))," to obtain the balance of an address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"override getBalance(address?: AddressOption): Promise<{ confirmed: number, unconfirmed: number }> {\n    if(address) {\n      return this.connectedProvider.getBalance(address);\n    }\n    return this.getConnectedTarget().then(target => target.getBsvBalance()).then(r => r.balance)\n}\n")),(0,i.kt)("p",null,"Now we have implemented ",(0,i.kt)("inlineCode",{parentName:"p"},"SensiletSigner"),". The full code is ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/xhliu/73104028deaf95c8b6665bf96496fe11#file-sensiletsigner-ts-L44"},"here"),"."),(0,i.kt)("h2",{id:"use-your-signer"},"Use your signer"),(0,i.kt)("p",null,"Just connect your signer to a smart contract instance like any other signers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// declare your signer\nconst your_signer = new YourSigner(new DefaultProvider());\n// connect the signer to the contract instance\nawait instance.connect(your_signer);\n")))}l.isMDXComponent=!0}}]);