"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[7105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:6},i="Tutorial 6: Voting",s={unversionedId:"tutorials/voting",id:"tutorials/voting",title:"Tutorial 6: Voting",description:"Overview",source:"@site/docs/tutorials/voting.md",sourceDirName:"tutorials",slug:"/tutorials/voting",permalink:"/tutorials/voting",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Tutorial 5: Zero Knowledge Proofs",permalink:"/tutorials/zkp"},next:{title:"Tutorial 7: Escrow",permalink:"/tutorials/escrow"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Contract",id:"contract",level:2},{value:"Properties",id:"properties",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:3},{value:"Final Code",id:"final-code",level:3},{value:"Frontend",id:"frontend",level:2},{value:"Setup Project",id:"setup-project",level:3},{value:"Install the sCrypt SDK",id:"install-the-scrypt-sdk",level:3},{value:"Compile Contract",id:"compile-contract",level:3},{value:"Contract Deployment",id:"contract-deployment",level:3},{value:"Contract ID",id:"contract-id",level:4},{value:"Verify",id:"verify",level:3},{value:"Load Contract Artifact",id:"load-contract-artifact",level:3},{value:"Integrate Wallet",id:"integrate-wallet",level:3},{value:"Integrate sCrypt Service",id:"integrate-scrypt-service",level:3},{value:"Connect Signer to <code>ScryptProvider</code>",id:"connect-signer-to-scryptprovider",level:3},{value:"Fetch Latest Contract Instance",id:"fetch-latest-contract-instance",level:3},{value:"Read contract state",id:"read-contract-state",level:3},{value:"Update Contract State",id:"update-contract-state",level:3},{value:"Subscribe to Contract Event",id:"subscribe-to-contract-event",level:3},{value:"Deploy to GitHub Pages",id:"deploy-to-github-pages",level:3},{value:"Step 1. Add <code>homepage</code> to <code>package.json</code>",id:"step-1-add-homepage-to-packagejson",level:4},{value:"Step 2. Install <code>gh-pages</code> and add <code>scripts</code> in <code>package.json</code>",id:"step-2-install-gh-pages-and-add-scripts-in-packagejson",level:4},{value:"Step 3. Deploy the site",id:"step-3-deploy-the-site",level:4},{value:"Step 4. Update GitHub project settings",id:"step-4-update-github-project-settings",level:4},{value:"Conclusion",id:"conclusion",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-6-voting"},"Tutorial 6: Voting"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this tutorial, we will go over how to use sCrypt to build a full-stack voting dApp on Bitcoin, including the smart contract and an interactive front-end."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5713).Z,width:"1200",height:"660"})),(0,o.kt)("p",null,"On the web page, you can see the candidate list. Clicking the like button will cast one vote for the corresponding candidate. This will prompt the wallet to ask for a user's approval. A transaction calling the contract will be sent after her approval."),(0,o.kt)("p",null,"First, we will write and deploy the smart contract step by step. Afterward, we will build a front-end with React that allows users to cast votes and thus interact with the contract."),(0,o.kt)("h2",{id:"contract"},"Contract"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"For each candidate, there are two properties we need to store in the contract: her name and her votes received so far."),(0,o.kt)("p",null,"We define a type alias of ",(0,o.kt)("inlineCode",{parentName:"p"},"ByteString")," to represent a candidate name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type Name = ByteString\n")),(0,o.kt)("p",null,"We define a struct to represent a candidate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type Candidate = {\n  name: Name\n  votesReceived: bigint\n}\n")),(0,o.kt)("p",null,"We use a ",(0,o.kt)("inlineCode",{parentName:"p"},"FixedArray")," to store the list of candidates, which we alias as type ",(0,o.kt)("inlineCode",{parentName:"p"},"Candidates"),".\nSince candidates' vote counts can be updated, we mark it ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/stateful-contract#stateful-properties"},"stateful")," by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"@prop(true)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const N = 2\nexport type Candidates = FixedArray<Candidate, typeof N>\n\nexport class Voting extends SmartContract {  \n  @prop(true)\n  candidates: Candidates\n  // ...\n}\n")),(0,o.kt)("h3",{id:"constructor"},"Constructor"),(0,o.kt)("p",null,"Initialize all the ",(0,o.kt)("inlineCode",{parentName:"p"},"@prop")," properties in the constructor. Note that we only need to pass the candidate names in the argument, because the votes they received would be all 0 at the beginning."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(names: FixedArray<Name, typeof N>) {\n  super(...arguments)\n  // initialize fixed array\n  this.candidates = fill({\n      name: toByteString(''),\n      votesReceived: 0n\n  }, N)\n  // set names and set votes they received to 0\n  for (let i = 0; i < N; i++) {\n    this.candidates[i] = { name: names[i], votesReceived: 0n }\n  }\n}\n")),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("p",null,"The only way to interact with this contract is to vote for one candidate in the list, so we will have only 1 ",(0,o.kt)("strong",{parentName:"p"},"public")," method ",(0,o.kt)("inlineCode",{parentName:"p"},"vote"),". It takes only 1 parameter: the name of the candidate you want to vote for."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\npublic vote(name: Name) {\n  // 1) change contract state: add one vote to `candidate` in the list\n  // 2) propogate the state\n}\n")),(0,o.kt)("p",null,"We can simply use a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop to implement this: find the corresponding candidate in the list by name, then increment its vote by one. We implement this in a helper method ",(0,o.kt)("inlineCode",{parentName:"p"},"increaseVotesReceived"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// cast one vote to a candidate\n@method()\nincreaseVotesReceived(name: Name): void {\n  for (let i = 0; i < N; i++) {\n    if (this.candidates[i].name === name) {\n      this.candidates[i].votesReceived++\n    }\n  }\n}\n")),(0,o.kt)("p",null,"After we increment the candidate's votes and update the contract state, we make sure the new state is maintained in the spending transaction's output ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/stateful-contract#update-states"},"as usual"),". Another output is added if change is needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let outputs: ByteString = this.buildStateOutput(this.ctx.utxo.value)\noutputs += this.buildChangeOutput()\nassert(this.ctx.hashOutputs === hash256(outputs), 'hashOutputs mismatch')\n")),(0,o.kt)("p",null,"The public function ",(0,o.kt)("inlineCode",{parentName:"p"},"vote")," is now finished."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\npublic vote(name: Name) {\n  // change contract state: add one vote to `candidate` in the list\n  this.increaseVotesReceived(name)\n  \n  // restrict tx outputs\n  // to contain the latest state with the same balance\n  let outputs: ByteString = this.buildStateOutput(this.ctx.utxo.value)\n  // to contain the change output when necessary\n  outputs += this.buildChangeOutput()\n\n  assert(this.ctx.hashOutputs === hash256(outputs), 'hashOutputs mismatch')\n}\n")),(0,o.kt)("h3",{id:"final-code"},"Final Code"),(0,o.kt)("p",null,"You have completed the ",(0,o.kt)("inlineCode",{parentName:"p"},"Voting")," contract! The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/voting/blob/master/src/contracts/voting.ts"},"final complete code")," is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { assert, ByteString, hash256, method, prop, SmartContract, FixedArray, fill, toByteString } from 'scrypt-ts'\n\nexport type Name = ByteString\n\nexport type Candidate = {\n    name: Name\n    votesReceived: bigint\n}\n\nexport const N = 2\n\nexport type Candidates = FixedArray<Candidate, typeof N>\n\nexport class Voting extends SmartContract {\n    @prop(true)\n    candidates: Candidates\n\n    constructor(names: FixedArray<Name, typeof N>) {\n        super(...arguments)\n        // initialize fixed array\n        this.candidates = fill({\n            name: toByteString(''),\n            votesReceived: 0n,\n        }, N)\n        // set names and set votes they received to 0\n        for (let i = 0; i < N; i++) {\n            this.candidates[i] = {\n                name: names[i],\n                votesReceived: 0n,\n            }\n        }\n    }\n\n    /**\n     * vote for a candidate\n     * @param name candidate's name\n     */\n    @method()\n    public vote(name: Name) {\n        // change contract state: add one vote to `candidate` in the list\n        this.increaseVotesReceived(name)\n        // output containing the latest state and the same balance\n        let outputs: ByteString = this.buildStateOutput(this.ctx.utxo.value)\n        outputs += this.buildChangeOutput()\n        assert(this.ctx.hashOutputs === hash256(outputs), 'hashOutputs mismatch')\n    }\n\n    @method()\n    increaseVotesReceived(name: Name): void {\n        for (let i = 0; i < N; i++) {\n            if (this.candidates[i].name === name) {\n                this.candidates[i].votesReceived++\n            }\n        }\n    }\n}\n")),(0,o.kt)("h2",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"We will add a frontend to the voting smart contract according to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-integrate-a-frontend/"},"this guide"),"."),(0,o.kt)("h3",{id:"setup-project"},"Setup Project"),(0,o.kt)("p",null,"The front-end will be created using ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app voting --template typescript\n")),(0,o.kt)("h3",{id:"install-the-scrypt-sdk"},"Install the sCrypt SDK"),(0,o.kt)("p",null,"The sCrypt SDK enables you to easily compile, test, deploy, and call contracts."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"scrypt-cli")," command line to install the SDK."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd voting\nnpx scrypt-cli init\n")),(0,o.kt)("p",null,"This command will create a contract file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src\\contracts\\voting.ts"),", replace the content of the file with the contract written ",(0,o.kt)("a",{parentName:"p",href:"#final-code"},"above"),"."),(0,o.kt)("h3",{id:"compile-contract"},"Compile Contract"),(0,o.kt)("p",null,"Compile the contract with the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx scrypt-cli compile\n")),(0,o.kt)("p",null,"This command will generate a contract artifact file at ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacts\\voting.json"),"."),(0,o.kt)("h3",{id:"contract-deployment"},"Contract Deployment"),(0,o.kt)("p",null,"After ",(0,o.kt)("a",{parentName:"p",href:"#install-the-scrypt-sdk"},"installing the sCrypt SDK"),", you will have a script ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy.ts")," in the project directory, which can be used to deploy our ",(0,o.kt)("inlineCode",{parentName:"p"},"Voting")," contract after some minor modifications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Name, Voting, N } from './src/contracts/voting'\nimport { bsv, TestWallet, DefaultProvider, toByteString, FixedArray } from 'scrypt-ts'\n\nimport * as dotenv from 'dotenv'\n\n// Load the .env file\ndotenv.config()\n\n// Read the private key from the .env file.\n// The default private key inside the .env file is meant to be used for the Bitcoin testnet.\n// See https://scrypt.io/docs/bitcoin-basics/bsv/#private-keys\nconst privateKey = bsv.PrivateKey.fromWIF(process.env.PRIVATE_KEY || '')\n\n// Prepare signer. \n// See https://scrypt.io/docs/how-to-deploy-and-call-a-contract/#prepare-a-signer-and-provider\nconst signer = new TestWallet(privateKey, new DefaultProvider({\n    network: bsv.Networks.testnet\n}))\n\nasync function main() {\n    await Voting.loadArtifact()\n\n    const candidateNames: FixedArray<Name, typeof N> = [\n        toByteString('iPhone', true),\n        toByteString('Android', true)\n    ]\n\n    const instance = new Voting(\n        candidateNames\n    )\n\n    // Connect to a signer.\n    await instance.connect(signer)\n\n    // Contract deployment.\n    const amount = 1\n    const deployTx = await instance.deploy(amount)\n    console.log('Voting contract deployed: ', deployTx.id)\n}\n\nmain()\n")),(0,o.kt)("p",null,"Before deploying the contract, we need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file and save your private key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PRIVATE_KEY")," environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PRIVATE_KEY=xxxxx\n")),(0,o.kt)("p",null,"If you don't have a private key, you can follow ",(0,o.kt)("a",{parentName:"p",href:"../../how-to-deploy-and-call-a-contract/faucet"},"this guide")," to generate one using Sensilet wallet, then fund the private key's address with our ",(0,o.kt)("a",{parentName:"p",href:"https://scrypt.io/faucet/"},"faucet"),"."),(0,o.kt)("p",null,"Run the following command to deploy the contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run deploy:contract\n")),(0,o.kt)("p",null,"After success, you will see an output similar to the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8312).Z,width:"1372",height:"205"})),(0,o.kt)("h4",{id:"contract-id"},"Contract ID"),(0,o.kt)("p",null,"Your can get the deployed contract's ID: the TXID and the output index where the contract is located."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const contract_id = {\n  /** the deployment transaction id */\n  txId: "6751b645e1579e8e6201e3c59b900ad58e59868aa5e4ee89359d3f8ca1d66c8a",\n  /** the output index */\n  outputIndex: 0,\n};\n')),(0,o.kt)("h3",{id:"verify"},"Verify"),(0,o.kt)("p",null,"After a successful deployment of a smart contract, you can verify the deployed contract script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run verify:contract\n")),(0,o.kt)("p",null,"Upon execution, the designated contract code undergoes verification on sCrypt's servers. If successful, the outcome will be ",(0,o.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/script/cecb4f8799913df3e5af50bc81a24e3fef3216a92452d27cd97dcd7ccbce1f1b"},"displayed on WoC"),', under the "sCrypt" tab. See the ',(0,o.kt)("a",{parentName:"p",href:"/how-to-verify-a-contract"},'"How to Verify a Contract"')," page for more details."),(0,o.kt)("h3",{id:"load-contract-artifact"},"Load Contract Artifact"),(0,o.kt)("p",null,"Before writing the front-end code, we need to load the contract artifact in ",(0,o.kt)("inlineCode",{parentName:"p"},"src\\index.tsx"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Voting } from './contracts/voting';\nimport artifact from '../artifacts/voting.json';\nVoting.loadArtifact(artifact);\n")),(0,o.kt)("h3",{id:"integrate-wallet"},"Integrate Wallet"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"requestAuth")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"signer")," to request access to the wallet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// request authentication\nconst { isAuthenticated, error } = await signer.requestAuth();\nif (!isAuthenticated) {\n    // something went wrong, throw an Error with `error` message\n    throw new Error(error);\n}\n\n// authenticated\n// ...\n")),(0,o.kt)("h3",{id:"integrate-scrypt-service"},"Integrate sCrypt Service"),(0,o.kt)("p",null,"To interacte with the voting contract, we need to create a contract instance representing the latest state of the contract on chain. When both Alice and Bob vote on the webpage, we need to ensure that their contract instances are always up to date. After Alice votes, we have to notify Bob that the state of the contract has changed and synchronize his local contract instance to the latest state on chain."),(0,o.kt)("p",null,"Fortunately,",(0,o.kt)("inlineCode",{parentName:"p"},"sCrypt")," provides such infrastructure service, which abstracts away all the common complexities of communicating with the blockchain, so we do not have to track the contract state, which could be computationally demanding as blockchain grows. We can instead focus on our application's business logic."),(0,o.kt)("p",null,"To use it, we first have to initialize it according to ",(0,o.kt)("a",{parentName:"p",href:"/advanced/how-to-integrate-scrypt-service"},"this guide"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Scrypt.init({\n  apiKey: 'YOUR_API_KEY',\n  network: bsv.Networks.testnet\n})\n")),(0,o.kt)("h3",{id:"connect-signer-to-scryptprovider"},"Connect Signer to ",(0,o.kt)("inlineCode",{parentName:"h3"},"ScryptProvider")),(0,o.kt)("p",null,"It's required to connect your signer to ",(0,o.kt)("inlineCode",{parentName:"p"},"ScryptProvider")," when using sCrypt service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const provider = new ScryptProvider();\nconst signer = new SensiletSigner(provider);\n\nsignerRef.current = signer;\n")),(0,o.kt)("h3",{id:"fetch-latest-contract-instance"},"Fetch Latest Contract Instance"),(0,o.kt)("p",null,"We can fetch a contract's latest instance by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Scrypt.contractApi.getLatestInstance()")," using its ",(0,o.kt)("a",{parentName:"p",href:"#contract-id"},"contract ID"),". With this instance, we can easily read a contract's properties to display to the user on the webpage, or update the contract state by calling its public method as ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#contract-call"},"before")," when the user votes for a candidate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'function App() {\n  const [votingContract, setContract] = useState<Voting>();\n  const [error, setError] = React.useState("");\n  \n  // ...\n\n  async function fetchContract() {\n    try {\n      const instance = await Scrypt.contractApi.getLatestInstance(\n        Voting,\n        contract_id\n      );\n      setContract(instance);\n    } catch (error: any) {\n      console.error("fetchContract error: ", error);\n      setError(error.message);\n    }\n  }\n    \n  // ...\n}\n')),(0,o.kt)("h3",{id:"read-contract-state"},"Read contract state"),(0,o.kt)("p",null,"With the contract instance, we can read its lastest state and render it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'function byteString2utf8(b: ByteString) {\n  return Buffer.from(b, "hex").toString("utf8");\n}\n\nfunction App() {\n  // ...\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        <h2>What\'s your favorite phone?</h2>\n      </header>\n      <TableContainer\n        component={Paper}\n        variant="outlined"\n        style={{ width: 1200, height: "80vh", margin: "auto" }}\n      >\n        <Table>\n          <TableHead>\n            <TableRow>\n              <TableCell align="center">Iphone</TableCell>\n              <TableCell align="center">Android</TableCell>\n            </TableRow>\n          </TableHead>\n          <TableBody>\n            <TableRow>\n              <TableCell align="center">\n                <Box>\n                  <Box\n                    sx={{\n                      height: 200,\n                    }}\n                    component="img"\n                    alt={"iphone"}\n                    src={`${process.env.PUBLIC_URL}/${"iphone"}.png`}\n                  />\n                </Box>\n              </TableCell>\n              <TableCell align="center">\n                <Box>\n                  <Box\n                    sx={{\n                      height: 200,\n                    }}\n                    component="img"\n                    alt={"android"}\n                    src={`${process.env.PUBLIC_URL}/${"android"}.png`}\n                  />\n                </Box>\n              </TableCell>\n            </TableRow>\n            <TableRow>\n              <TableCell align="center">\n                <Box>\n                  <Typography variant={"h1"} >\n                    {votingContract?.candidates[0].votesReceived.toString()}\n                  </Typography>\n                  <Button\n                    variant="text"\n                    onClick={voting}\n                    name={votingContract?.candidates[0].name}\n                  >\n                    \ud83d\udc4d\n                  </Button>\n                </Box>\n              </TableCell>\n\n              <TableCell align="center">\n              <Divider orientation="vertical" flexItem />\n                <Box>\n                  <Typography variant={"h1"}>\n                    {votingContract?.candidates[1].votesReceived.toString()}\n                  </Typography>\n                  <Button\n                    variant="text"\n                    onClick={voting}\n                    name={votingContract?.candidates[1].name}\n                  >\n                    \ud83d\udc4d\n                  </Button>\n                </Box>\n              </TableCell>\n            </TableRow>\n          </TableBody>\n        </Table>\n      </TableContainer>\n      <Footer />\n      <Snackbar\n        open={error !== ""}\n        autoHideDuration={6000}\n        onClose={handleClose}\n      >\n        <Alert severity="error">{error}</Alert>\n      </Snackbar>\n\n      <Snackbar\n        open={success.candidate !== "" && success.txId !== ""}\n        autoHideDuration={6000}\n        onClose={handleSuccessClose}\n      >\n        <Alert severity="success">\n          {" "}\n          <Link\n            href={`https://test.whatsonchain.com/tx/${success.txId}`}\n            target="_blank"\n            rel="noreferrer"\n          >\n            {`"${byteString2utf8(success.candidate)}" got one vote,  tx: ${\n              success.txId\n            }`}\n          </Link>\n        </Alert>\n      </Snackbar>\n    </div>\n  );\n}\n')),(0,o.kt)("h3",{id:"update-contract-state"},"Update Contract State"),(0,o.kt)("p",null,"To update the contract's state, we need to call its public method. We create a function ",(0,o.kt)("inlineCode",{parentName:"p"},"voting()")," to handle the voting event triggered by a user."),(0,o.kt)("p",null,"Calling a contract public method is ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#contract-call"},"the same as before"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'async function voting(e: any) {\n  // ...\n\n  const signer = signerRef.current as SensiletSigner;\n\n  if (votingContract && signer) {\n    const { isAuthenticated, error } = await signer.requestAuth();\n    if (!isAuthenticated) {\n      throw new Error(error);\n    }\n\n    await votingContract.connect(signer);\n\n    // create the next instance from the current\n    const nextInstance = votingContract.next();\n\n    const candidateName = e.target.name;\n\n    // update state\n    nextInstance.increaseVotesReceived(candidateName);\n\n    // call the method of current instance to apply the updates on chain\n    votingContract.methods\n      .vote(candidateName, {\n        next: {\n          instance: nextInstance,\n          balance: votingContract.balance,\n        },\n      })\n      .then((result) => {\n        console.log(`Voting call tx: ${result.tx.id}`);\n      })\n      .catch((e) => {\n        setError(e.message);\n        fetchContract();\n        console.error("call error: ", e);\n      });\n  }\n}\n')),(0,o.kt)("p",null,"If successful, you will see the following log in the ",(0,o.kt)("inlineCode",{parentName:"p"},"console"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Voting call tx: fc8b3d03b8fa7469d66a165b017fe941fa8ab59c0979457cef2b6415d659e3f7\n")),(0,o.kt)("h3",{id:"subscribe-to-contract-event"},"Subscribe to Contract Event"),(0,o.kt)("p",null,"So far, we have a fully working app. However, there is a slight problem. When Alice clicks on the like button for a candadate in her browser, the candidate's vote count in Bob's browser does not increase, unless he manually refreshes.\nWe need a way to listen to contract event. "),(0,o.kt)("p",null,"We call ",(0,o.kt)("inlineCode",{parentName:"p"},"Scrypt.contractApi.subscribe(options: SubscribeOptions<T>, cb: (e: ContractCalledEvent<T>) => void): SubScription")," to subscribe to events that the contract has been called. When a contract gets called and updated, we refresh the UI in real time, re-render all the content on the page and show the updated vote count."),(0,o.kt)("p",null,"The subscribe function takes 2 parameters:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"options: SubscribeOptions<T>"),": it includes a contract class, a contract ID, and a optional list of method names monitored.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface SubscribeOptions<T> {\n  clazz: new (...args: any) => T;\n  id: ContractId;\n  methodNames?: Array<string>;\n}\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"methodNames")," is set, you will be notified only when public functions in the list are called. Otherwise, you will be notified when ANY public function is called."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"callback: (event: ContractCalledEvent<T>) => void"),": a callback funciton upon receiving notifications. ")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ContractCalledEvent<T>")," contains the relevant information when the contract is called, such as the public function name and function arguments when the call occurs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ContractCalledEvent<T> {\n  /** name of public function */\n  methodName: string;\n  /** public function arguments */\n  args: SupportedParamType[];\n  /** transaction where contract is called from */\n  tx: bsv.Transaction;\n  /**\n   * If a stateful contract is called, `nexts` contains the contract instance containing the new state generated by this call.\n   * If a stateless contract is called, `nexts` is empty.\n   */\n  nexts: Array<T>;\n}\n")),(0,o.kt)("p",null,"The code to subscribe to contract events is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"useEffect(() => {\n  const provider = new ScryptProvider();\n  const signer = new SensiletSigner(provider);\n\n  signerRef.current = signer;\n\n  fetchContract();\n\n  // subscribe by contract_id\n  const subscription = Scrypt.contractApi.subscribe({\n    clazz: Voting,\n    id: contract_id\n  }, (event: ContractCalledEvent<Voting>) => {\n    // update the contract instance \n    setSuccess({\n      txId: event.tx.id,\n      candidate: event.args[0] as ByteString,\n    });\n    setContract(event.nexts[0]);\n  });\n\n  return () => {\n    // unsubscribe\n    subscription.unsubscribe();\n  };\n}, []);\n")),(0,o.kt)("h3",{id:"deploy-to-github-pages"},"Deploy to GitHub Pages"),(0,o.kt)("p",null,"After pushing the frontend project to your GitHub account, it's easy to ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/deployment/#github-pages"},"publish a website with GitHub Pages"),", so that users can interact with your dApp with the browser."),(0,o.kt)("h4",{id:"step-1-add-homepage-to-packagejson"},"Step 1. Add ",(0,o.kt)("inlineCode",{parentName:"h4"},"homepage")," to ",(0,o.kt)("inlineCode",{parentName:"h4"},"package.json")),(0,o.kt)("p",null,"Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," and add a ",(0,o.kt)("inlineCode",{parentName:"p"},"homepage")," field for your project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "voting",\n  "homepage": "https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME"\n  ...\n}\n')),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8294).Z,width:"864",height:"970"})),(0,o.kt)("p",null,"For example, our demo repo is at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/voting"},"https://github.com/sCrypt-Inc/voting"),", so we set"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://sCrypt-Inc.github.io/voting\n")),(0,o.kt)("p",null,"as the homepage, where ",(0,o.kt)("inlineCode",{parentName:"p"},"sCrypt-Inc")," is our GitHub username, and ",(0,o.kt)("inlineCode",{parentName:"p"},"voting")," is the repo name."),(0,o.kt)("h4",{id:"step-2-install-gh-pages-and-add-scripts-in-packagejson"},"Step 2. Install ",(0,o.kt)("inlineCode",{parentName:"h4"},"gh-pages")," and add ",(0,o.kt)("inlineCode",{parentName:"h4"},"scripts")," in ",(0,o.kt)("inlineCode",{parentName:"h4"},"package.json")),(0,o.kt)("p",null,"Run the following command to install the dependency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save gh-pages\n")),(0,o.kt)("p",null,"Then add two scripts in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "predeploy": "npm run build",\n  "deploy": "gh-pages -d build",\n  ...\n},\n')),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8433).Z,width:"926",height:"414"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"predeploy")," script will run automatically before ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," is run.")),(0,o.kt)("h4",{id:"step-3-deploy-the-site"},"Step 3. Deploy the site"),(0,o.kt)("p",null,"Run the following command to deploy the website."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run deploy\n")),(0,o.kt)("h4",{id:"step-4-update-github-project-settings"},"Step 4. Update GitHub project settings"),(0,o.kt)("p",null,"After running the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," script, don't forget to update your GitHub project settings to use ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch. Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings --\x3e Code and automation/Pages"),", and select ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," as the branch used by the GitHub Pages site."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1898).Z,width:"2330",height:"1072"})),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Congratulations! You have successfully completed a fullstack voting dapp fully on Bitcoin."),(0,o.kt)("p",null,"The repo is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/voting"},"here"),". And an online example is ",(0,o.kt)("a",{parentName:"p",href:"http://classic.scrypt.io/voting"},"here"),"."))}d.isMDXComponent=!0},8312:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deploy-output-486d714ed87bd8e8262a39478f5a6df4.png"},1898:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gh-pages-e320e5d51812fa18ab92eda130ddb299.png"},8294:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/voting-homepage-53465e088848a4187f8164d992c36083.png"},8433:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/voting-scripts-07c44fec8dc0e8f7fbc6c29d7782bcf9.png"},5713:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/voting-ddf993c8be4218f84d9eadf8695d56d3.gif"}}]);