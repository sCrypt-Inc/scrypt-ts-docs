"use strict";(self.webpackChunkscrypt_ts_docs=self.webpackChunkscrypt_ts_docs||[]).push([[2018],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:e},p),{},{components:n})):r.createElement(y,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3242:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:9},i="How to Publish a Contract to NPM",s={unversionedId:"how-to-publish-a-contract",id:"how-to-publish-a-contract",title:"How to Publish a Contract to NPM",description:"What is a Smart Contract Library?",source:"@site/docs/how-to-publish-a-contract.md",sourceDirName:".",slug:"/how-to-publish-a-contract",permalink:"/how-to-publish-a-contract",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"How to Integrate With a Frontend",permalink:"/how-to-integrate-a-frontend"},next:{title:"How to Customize a Contract Tx",permalink:"/how-to-customize-a-contract-tx"}},l={},c=[{value:"What is a Smart Contract Library?",id:"what-is-a-smart-contract-library",level:2},{value:"Write a Smart Contract Library",id:"write-a-smart-contract-library",level:2},{value:"Test a Smart Contract Library",id:"test-a-smart-contract-library",level:2},{value:"Create and Publish a Library Project Using sCrypt CLI",id:"create-and-publish-a-library-project-using-scrypt-cli",level:2},{value:"Advanced",id:"advanced",level:3},{value:"Related Tools",id:"related-tools",level:2},{value:"<code>scrypt-ts-lib</code>",id:"scrypt-ts-lib",level:3}],p={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-publish-a-contract-to-npm"},"How to Publish a Contract to NPM"),(0,a.kt)("h2",{id:"what-is-a-smart-contract-library"},"What is a Smart Contract Library?"),(0,a.kt)("p",null,"A smart contract library can provide methods which can be reused in many contracts. Developers can use existing libraries to reduce the cost of developing their own contracts."),(0,a.kt)("p",null,"A smart contract library is different from a smart contract in these ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A smart contract library can not have any public/entry ",(0,a.kt)("inlineCode",{parentName:"p"},"@method"),"s, which means a library can not be deployed or called directly through a tx. They can only be called within a smart contract or another library.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A smart contract library can not have any stateful properties, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"@prop(true)")," properties. But a property declared as ",(0,a.kt)("inlineCode",{parentName:"p"},"@prop()")," is fine."))),(0,a.kt)("h2",{id:"write-a-smart-contract-library"},"Write a Smart Contract Library"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"scrypt-ts")," we can create a smart contract library class like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class MyLib extends SmartContractLib {\n\n  @prop()\n  readonly buf: ByteString;\n\n  constructor(buf: ByteString) {\n    super(...arguments);\n    this.buf = buf;\n  }\n\n  @method()\n  append(content: ByteString) {\n    this.buf += content;\n  }\n\n  @method()\n  static add(x: bigint, y: bigint): bigint {\n    return x + y;\n  }\n\n}\n")),(0,a.kt)("p",null,"A smart contract library can be declared as a  class that extends ",(0,a.kt)("inlineCode",{parentName:"p"},"SmartContractLib"),". It may also have ",(0,a.kt)("inlineCode",{parentName:"p"},"@prop"),"s and ",(0,a.kt)("inlineCode",{parentName:"p"},"@method"),"s like smart contracts which have the same rules ",(0,a.kt)("a",{parentName:"p",href:"./how-to-write-a-contract"},"introduced before"),". A smart contract library can be used within ",(0,a.kt)("inlineCode",{parentName:"p"},"@method"),"s like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class MyContract extends SmartContract {\n  @method()\n  public unlock(x: ByteString) {\n    let myLib = new MyLib(hexToByteString('0123'));\n    myLib.append(x);\n    assert(MyLib.add(1n, 2n) === 3n, 'incorrect sum');\n  }\n}\n")),(0,a.kt)("h2",{id:"test-a-smart-contract-library"},"Test a Smart Contract Library"),(0,a.kt)("p",null,"You can test your smart contract library as a normal class, for example, writing some unit tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"describe('Test SmartContractLib `MyLib`', () => {\n  it('should pass unit test successfully.', () => {\n    expect(MyLib.add(1n, 2n)).to.eq(3n)\n  })\n})\n")),(0,a.kt)("p",null,"Also you can write a smart contract using the library, then have some tests for the contract, like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class TestLib extends SmartContract {\n  @method\n  public unlock(x: bigint) {\n    assert(MyLib.add(1n, 2n) == x, 'incorrect sum')\n  }\n}\n\ndescribe('Test SmartContractLib `Lib`', () => {\n  before(async() => {\n    await TestLib.compile()\n  })\n\n  it('should pass integration test successfully.', () => {\n    let testLib = new TestLib()\n    let result = testLib.verify(self => self.unlock(3n))\n    expect(result.success, result.error).to.be.true\n  }\n})\n\n")),(0,a.kt)("h2",{id:"create-and-publish-a-library-project-using-scrypt-cli"},"Create and Publish a Library Project Using sCrypt CLI"),(0,a.kt)("p",null,"The following command will create a demo scryptTS library along with tests and  scaffolding:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt project --lib <your-lib-name>\n")),(0,a.kt)("p",null,"Note the ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," option is turned on."),(0,a.kt)("p",null,"You can publish the library on ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM")," by running the following command in the project's root directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm publish\n")),(0,a.kt)("p",null,"This will build the project and publish it on NPM. After the library is published, users can simply import it in any other project just like regular NPM packages."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Named imports are not supported yet. You should only import like the following.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { MyLib } from \u201cmy_package\u201d\n")),(0,a.kt)("h3",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"For the import system working properly, you should always publish the auto-generated sCrypt contracts (including ",(0,a.kt)("inlineCode",{parentName:"p"},"scrypt.index.json")," file) along with the javascript outputs. The structure of the package could be like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node_modules\n|__ my_package\n    |__ dist\n        |__ myLib.js\n        |__ myLib.d.ts\n    |__ artifacts\n        |__ myLib.scrypt\n    |__ scrypt.index.json\n    \u2026\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"scrypt.index.json")," file will be generated at TypeScript compile time in the same directory of your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," which should be placed in the root folder. It shall not be moved or modified manually. The folder for auto-generated ",(0,a.kt)("inlineCode",{parentName:"p"},".scrypt")," files (",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts")," in the upper file tree) can be changed by configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"outDir")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"compilerOptions": {\n  "plugins": [\n    {\n      "transform": "scrypt-ts/dist/transformation/transformer",\n      "transformProgram": "true",\n      "outDir": "my_scrypts_dir"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"You should always publish the auto-generated sCrypt files along with the package. If you are familiar with sCrypt development and want to apply some improvements to the auto-generated files, for example using an inline asm function to replace an ordinary function to reduce the final script size, you could just modify the auto-generated file as you wish before publishing it. Take a look at how ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scrypt-ts-lib/tree/master/optimizations"},"scrytp-ts-lib")," does it."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You should modify the auto-generated files with caution and make sure that the modification passes the tests.")),(0,a.kt)("h2",{id:"related-tools"},"Related Tools"),(0,a.kt)("h3",{id:"scrypt-ts-lib"},(0,a.kt)("inlineCode",{parentName:"h3"},"scrypt-ts-lib")),(0,a.kt)("p",null,"It\u2019s a collection of smart contract libraries provided by us. You can find some useful tools ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scrypt-ts-lib"},"here"),". Also you are welcome to contribute."))}u.isMDXComponent=!0}}]);