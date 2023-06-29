---
sidebar_position: 4
---

# Built-ins

## Global Functions

The following functions come with `sCrypt`.

### Assert

- `assert(condition: boolean, errorMsg?: string)` Throw an `Error` with the optional error message if `condition` is `false`. Otherwise, nothing happens.

```ts
assert(1n === 1n)        // nothing happens
assert(1n === 2n)        // throws Error('Execution failed')
assert(false, 'hello')   // throws Error('Execution failed, hello')
```

### Fill

- `fill(value: T, length: number): T[length] ` Returns an `FixedArray` with all `size` elements set to `value`, where `value` can be any type. 

:::note
`length` must be a [compiled-time constant](./how-to-write-a-contract.md#compile-time-constant).
:::


```ts
// good
fill(1n, 3) // numeric literal 3
fill(1n, M) // const M = 3
fill(1n, Demo.N) // `N` is a static readonly property of class `Demo`
```

### Math

- `abs(a: bigint): bigint` Returns the absolute value of `a`.

```ts
abs(1n)  // 1n
abs(0n)  // 0n
abs(-1n) // 1n
```

- `min(a: bigint, b: bigint): bigint` Returns the smallest of `a` and `b`.

```ts
min(1n, 2n) // 1n
```

- `max(a: bigint, b: bigint): bigint` Returns the lagest of `a` and `b`.

```ts
max(1n, 2n) // 2n
```

- `within(x: bigint, min: bigint, max: bigint): boolean` Returns `true` if `x` is within the specified range (left-inclusive and right-exclusive), `false` otherwise.

```ts
within(0n, 0n, 2n) // true
within(1n, 0n, 2n) // true
within(2n, 0n, 2n) // false
```

### Hashing

- `ripemd160(a: ByteString): Ripemd160` Returns the [RIPEMD160](https://en.wikipedia.org/wiki/RIPEMD) hash result of `a`.
- `sha1(a: ByteString): Sha1` Returns the [SHA1](https://en.wikipedia.org/wiki/SHA-1) hash result of `a`.
- `sha256(a: ByteString): Sha256` Returns the [SHA256](https://www.movable-type.co.uk/scripts/sha256.html) hash result of `a`.
- `hash160(a: ByteString): Ripemd160` Actually returns `ripemd160(sha256(a))`
- `hash256(a: ByteString): Sha256` Actually returns `sha256(sha256(a))`

### ByteString Operations

- `int2ByteString(n: bigint, size?: bigint): ByteString` If `size` is omitted, convert `n` is converted to a `ByteString` in [sign-magnitude](https://en.wikipedia.org/wiki/Signed_number_representations#Sign%E2%80%93magnitude) little endian format, with as few bytes as possible (a.k.a., minimally encoded). Otherwise, converts the number `n` to a `ByteString` of the specified size, including the sign bit; fails if the number cannot be accommodated.

```ts
// as few bytes as possible
int2ByteString(128n)   // '8000', little endian
int2ByteString(127n)   // '7f'
int2ByteString(0n)     // ''
int2ByteString(-1n)    // '81'
int2ByteString(-129n)  // '8180', little endian

// specified size
int2ByteString(1n, 3n)        // '010000', 3 bytes
int2ByteString(-129n, 3n)     // '810080', 3 bytes

// Error: -129 cannot fit in 1 byte
int2ByteString(-129n, 1n)
```

- `byteString2Int(a: ByteString): bigint` Convert ByteString in sign-magnitude little endian format to bigint.

```ts
byteString2Int(toByteString('8000'))    // 128n
byteString2Int(toByteString(''))        // 0n
byteString2Int(toByteString('00'))      // 0n
byteString2Int(toByteString('81'))      // -1n

byteString2Int(toByteString('010000'))  // 1n
byteString2Int(toByteString('810080'))  // -129n
```

- `len(a: ByteString): number` Returns the byte length of `a`. 

```ts
const s1 = toByteString('0011', false) // '0011', 2 bytes
len(s1) // 2

const s2 = toByteString('hello', true) // '68656c6c6f', 5 bytes
len(s2) // 5
```

- `reverseByteString(b: ByteString, size: number): ByteString` Returns reversed bytes of `b` which is of `size` bytes. It is often useful when converting a number between little-endian and big-endian.

:::note
`size` must be a [compiled-time constant](./how-to-write-a-contract.md#compile-time-constant).
:::

```ts
const s1 = toByteString('793ff39de7e1dce2d853e24256099d25fa1b1598ee24069f24511d7a2deafe6c') 
reverseByteString(s1, 32) // 6cfeea2d7a1d51249f0624ee98151bfa259d095642e253d8e2dce1e79df33f79
```

- `slice(byteString: ByteString, start: BigInt, end?: BigInt): ByteString` return a sub-byte string from `start` to, but not including, `end`. If `end` is not specified, the sub-byte string continues to the last byte.

```ts
const message = toByteString('001122')
slice(message, 1n) // '1122'
slice(message, 1n, 2n) // '11'
```

### Bitwise Operator

Bigint in the Bitcoin is stored in [sign–magnitude format](https://en.wikipedia.org/wiki/Signed_number_representations#Sign%E2%80%93magnitude), not [two's complement format](https://en.wikipedia.org/wiki/Signed_number_representations#Two's_complement) commonly used. If the operands are all nonnegative, the result of the operation is consistent with TypeScript's bitwise operator, except `~`. Otherwise, the operation results may be inconsistent and thus undefined. It is strongly recommended to **NEVER** apply bitwise operations on negative numbers.

- `and(x: bigint, y: bigint): bigint` Bitwise AND

```ts
and(13n, 5n) // 5n
and(0x0a32c845n, 0x149f72n) // 0x00108840n, 1083456n
```

- `or(x: bigint, y: bigint): bigint` Bitwise OR

```ts
or(13n, 5n) // 13n
or(0x0a32c845n, 0x149f72n) // 0xa36df77n, 171368311n
```

- `xor(x: bigint, y: bigint): bigint` Bitwise XOR

```ts
xor(13n, 5n) // 8n
xor(0x0a32c845n, 0x149f72n) // 0x0a265737n, 170284855n
```

- `invert(x: bigint): bigint` Bitwise NOT

```ts
invert(13n)  // -114n
```

- `lshift(x: bigint, n: bigint): bigint` Arithmetic left shift, returns `x * 2^n`.

```ts
lshift(2n, 3n)   // 16n
```

- `rshift(x: bigint, n: bigint): bigint` Arithmetic right shift, returns `x / 2^n`.

```ts
rshift(21n, 3n)    // 2n
rshift(1024n, 11n) // 0n
```

### Exit

- `exit(status: boolean): void` Call this function will terminate contract execution. If `status` is `true` then the contract succeeds; otherwise, it fails.

## `SmartContract` Methods

The following `@method`s come with the `SmartContract` base class.

### `compile`

Function `static async compile(): Promise<TranspileError[]>` compiles the contract and returns transpile errors if compiling fails.

```ts
// returns transpile errors if compiling fails
const transpileErrors = await Demo.compile()
```

### `scriptSize`

Function `get scriptSize(): number` returns the byte length of the contract locking script.

```ts
const demo = new Demo()
const size = demo.scriptSize
```

### `loadArtifact`

Function `static loadArtifact(artifact: Artifact)` loads the contract artifact file in order to initialize the contract class, it's usually called at the front end.

```ts
import { TicTacToe } from './contracts/tictactoe';
var artifact = require('../artifacts/src/contracts/tictactoe.json');
TicTacToe.loadArtifact(artifact);
```

You may visit [here](https://academy.scrypt.io/en/courses/Build-a-Tic-tac-toe-Game-with-sCrypt-614c387bc0974f55df5af1e5/lessons/2/chapters/1) for more details about how to add a front end to a contract.

### `checkSig`

Function `checkSig(signature: Sig, publicKey: PubKey): boolean` verifies an ECDSA signature. It takes two inputs: an ECDSA signature and a public key. 

It returns if the signature matches the public key.

:::caution
All signature checking functions (`checkSig` and `checkMultiSig`) follow the [**NULLFAIL** rule](https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#NULLFAIL): if the signature is invalid, the entire contract aborts and fails immediately, unless the signature is an empty ByteString, in which case these functions return `false`.
:::

For example, Pay-to-Public-Key-Hash ([P2PKH](https://learnmeabitcoin.com/guide/p2pkh)) can be implemented as below.

```ts
class P2PKH extends SmartContract {
  // public key hash of the recipient.
  @prop()
  readonly pubKeyHash: PubKeyHash

  constructor(pubKeyHash: PubKeyHash) {
    super(...arguments)
    this.pubKeyHash = pubKeyHash
  }

  @method()
  public unlock(sig: Sig, pubkey: PubKey) {
    // check if the passed public key belongs to the specified public key hash
    assert(hash160(pubkey) == this.pubKeyHash, 'public key hashes are not equal')
    // check signature validity
    assert(this.checkSig(sig, pubkey), 'signature check failed')
  }
}
```

### `checkMultiSig`

Function `checkMultiSig(signatures: Sig[], publickeys: PubKey[]): boolean` verifies an array of ECDSA signatures. It takes two inputs: an array of ECDSA signatures and an array of public keys.

The function compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the `signatures` array using the same order as their corresponding public keys were placed in the `publickeys` array. If all signatures are valid, `true` is returned, `false` otherwise.

```ts
class MultiSigPayment extends SmartContract {
  // public key hashes of the 3 recipients
  @prop()
  readonly pubKeyHashes: FixedArray<PubKeyHash, 3>

  constructor(pubKeyHashes: FixedArray<PubKeyHash, 3>) {
    super(...arguments)
    this.pubKeyHashes = pubKeyHashes
  }

  @method()
  public unlock(
      signatures: FixedArray<Sig, 3>, 
      publicKeys: FixedArray<PubKey, 3>
    ) {
    // check if the passed public keys belong to the specified public key hashes
    for (let i = 0; i < 3; i++) {
      assert(hash160(publicKeys[i]) == this.pubKeyHashes[i], 'public key hash mismatch¸')
    }
    // validate signatures
    assert(this.checkMultiSig(signatures, publicKeys), 'checkMultiSig failed')
  }
}
```

### `buildStateOutput`

Function `buildStateOutput(amount: bigint): ByteString` creates an output containing the latest state. It takes an input: the number of satoshis in the output.

```ts
class Counter extends SmartContract {
  // ...

  @method(SigHash.ANYONECANPAY_SINGLE)
  public incOnChain() {
    // ... update state
      
    // construct the new state output 
    const output: ByteString = this.buildStateOutput(this.ctx.utxo.value)

    // ... verify outputs of current tx
  }
}
```

### `buildChangeOutput`

Function `buildChangeOutput(): ByteString` creates a P2PKH change output. It will calculate the change amount (`this.changeAmount`) automatically, and use the signer's address by default, unless `changeAddress` field is explicitly set in `MethodCallOptions`.

```ts
class Auction extends SmartContract {

  // ...

  @method()
  public bid(bidder: PubKeyHash, bid: bigint) {
    
    // ...

    // Auction continues with a higher bidder.
    const auctionOutput: ByteString = this.buildStateOutput(bid)

    // Refund previous highest bidder.
    const refundOutput: ByteString = Utils.buildPublicKeyHashOutput(
        highestBidder,
        highestBid
    )
    let outputs: ByteString = auctionOutput + refundOutput

    // Add change output.
    outputs += this.buildChangeOutput()

    assert(hash256(outputs) == this.ctx.hashOutputs, 'hashOutputs check failed')
  }
}

const { tx: callTx, atInputIndex } = await auction.methods.bid(
  PubKeyHash(toHex(publicKeyHashNewBidder)),
  BigInt(balance + 1),
  {
    fromUTXO: getDummyUTXO(balance),
    changeAddress: addressNewBidder, // specify the change address of method calling tx explicitly
  } as MethodCallOptions<Auction>
)
```

:::note
`this.changeAmount` and `this.buildChangeOutput` can be accessed directly when using the [default call tx builder](../how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx.md#default-1), but if you use use a [customized call tx builder](../how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx.md#customize-1), you need to explicitly [set the transaction change output](..//bitcoin-basics/bsv.md#constructing-transactions) in the builder beforehand.
:::

```ts
const unsignedTx: bsv.Transaction = new bsv.Transaction()
  // add inputs and outputs
  // ...
  // add change output explicitly
  // otherwise you cannot call `this.changeAmount` and `this.buildChangeOutput` in the contract
  .change(options.changeAddress);
```

### `fromTx`

Function `static fromTx(tx: bsv.Transaction, atOutputIndex: number, offchainValues?: Record<string, any>)` creates an instance with its state synchronized to a given transaction output, identified by `tx` the transaction and `atOutputIndex` the output index. It is needed to [create an up-to-date instance of a contract](./../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#create-a-smart-contract-instance-from-a-transaction).

```ts
// create an instance from a transaction output
const instance = ContractName.fromTx(tx, atOutputIndex)

// we're good here, the `instance` is state synchronized with the on-chain transaction
```

If the contract contains @prop's of type `HashedMap` or `HashedSet`, the values of all these properties at this transaction must be passed in the third argument.

```ts
// e.g. the contract has two stateful properties of type `HashedMap` or `HashedSet`
// @prop(true) mySet: HashedSet<bigint>
// @prop() myMap: HashedMap<bigint, bigint>
const instance = ContractName.fromTx(tx, atOutputIndex, {
    // pass the values of all these properties at the transaction moment
    'mySet': currentSet,
    'myMap': currentMap,
})
```

### `buildDeployTransaction`

Function `async buildDeployTransaction(utxos: UTXO[], amount: number, changeAddress?: bsv.Address | string): Promise<bsv.Transaction>` creates a tx to deploy the contract. The first parameter `utxos` represents one or more [P2PKH](https://learnmeabitcoin.com/technical/p2pkh) inputs for paying transaction fees. The second parameter `amount` is the balance of contract output. The last parameter `changeAddress` is optional and represents a change address. Users override it to [cutomize a deployment tx](../how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx.md#customize) as below.


```ts
override async buildDeployTransaction(utxos: UTXO[], amount: number, changeAddress?: bsv.Address | string): Promise<bsv.Transaction> {
    const deployTx = new bsv.Transaction()
      // add p2pkh inputs for paying tx fees
      .from(utxos) 
      // add contract output
      .addOutput(new bsv.Transaction.Output({
        script: this.lockingScript,
        satoshis: amount,
      }))
    // add the change output if passing `changeAddress`
    if (changeAddress) {
      deployTx.change(changeAddress);
      if (this._provider) {
        deployTx.feePerKb(await this.provider.getFeePerKb());
      }
    }

    return deployTx;
  }
```

### `bindTxBuilder`

Function `bindTxBuilder(methodName: string, txBuilder: MethodCallTxBuilder<SmartContract>):void` binds the customized transaction builder `MethodCallTxBuilder`, which returns a `ContractTransation`, to a contract public `@method` identified by `methodName`.

```ts

/**
 * A transaction builder.
 * The default transaction builder only supports fixed-format call transactions. 
 * Some complex contracts require a custom transaction builder to successfully call the contract.
 */
export interface MethodCallTxBuilder<T extends SmartContract> {
  (current: T, options: MethodCallOptions<T>, ...args: any): Promise<ContractTransaction>
}


// bind a customized tx builder for the public method `instance.unlock()`
instance.bindTxBuilder("unlock", (options: MethodCallOptions<T>, ...args: any) => {
  // ...
})
```

You may visit [here](../how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx.md#customize-1) to see more details on how to customize tx builder.


### `multiContractCall`

When the `@method`s of multiple contracts is called in a transaction, the transaction builders for each contract collectively construct the `ContractTransation`. Function `static async multiContractCall(partialContractTx: ContractTransaction, signer: Signer): Promise<MultiContractTransaction>` signs and broadcasts the final transaction.

```ts
const partialContractTx1 = await counter1.methods.incrementOnChain(
    {
        multiContractCall: true,
    } as MethodCallOptions<Counter>
)

const partialContractTx2 = await counter2.methods.incrementOnChain(
    {
        multiContractCall: true,
        partialContractTx: partialContractTx1
    } as MethodCallOptions<Counter>
);

const {tx: callTx, nexts} = await SmartContract.multiContractCall(partialContractTx2, signer)


console.log('Counter contract counter1, counter2 called: ', callTx.id)
```



## Standard Libraries

`sCrypt` comes with standard libraries that define many commonly used functions.

### `Utils`

The `Utils` library provides a set of commonly used utility functions.

- `static toLEUnsigned(n: bigint, l: bigint): ByteString` Convert the signed integer `n` to an unsigned integer of `l` bytes, in sign-magnitude little endian format.

```ts
Utils.toLEUnsigned(10n, 3n)   // '0a0000'
Utils.toLEUnsigned(-10n, 2n)  // '0a00'
```

- `static fromLEUnsigned(bytes: ByteString): bigint` Convert ByteString to unsigned integer.

```ts
Utils.fromLEUnsigned(toByteString('0a00'))  // 10n
Utils.fromLEUnsigned(toByteString('8a'))    // 138n, actually converts 8a00 to unsigned integer
```

- `static readVarint(buf: ByteString): ByteString` Read a [VarInt](https://learnmeabitcoin.com/technical/varint) field from `buf`.

```ts
Utils.readVarint(toByteString('0401020304')) // '01020304'
```

- `static writeVarint(buf: ByteString): ByteString` Convert `buf` to a [VarInt](https://learnmeabitcoin.com/technical/varint) field, including the preceding length.

```ts
Utils.writeVarint(toByteString('010203')) // '03010203'
```

- `static buildOutput(outputScript: ByteString, outputSatoshis: bigint): ByteString` Build a transaction output with the specified script and satoshi amount.

```ts
const lockingScript = toByteString('01020304')
Utils.buildOutput(lockingScript, 1n) // '01000000000000000401020304'
```

- `static buildPublicKeyHashScript(pubKeyHash: PubKeyHash ): ByteString` Build a [Pay to Public Key Hash (P2PKH)](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#Pay_to_Public_Key_Hash_.28P2PKH.29) script from a public key hash.

```ts
const pubKeyHash = PubKeyHash(toByteString('0011223344556677889900112233445566778899'))
Utils.buildPublicKeyHashScript(pubKeyHash) // '76a914001122334455667788990011223344556677889988ac'
```

- `static buildPublicKeyHashOutput(pubKeyHash: PubKeyHash, amount: bigint): ByteString` Build a P2PKH output from the public key hash.

```ts
const pubKeyHash = PubKeyHash(toByteString('0011223344556677889900112233445566778899'))
Utils.buildPublicKeyHashOutput(pubKeyHash, 1n) // '01000000000000001976a914001122334455667788990011223344556677889988ac'
```

- `static buildOpreturnScript(data: ByteString): ByteString` Build a data-carrying [FALSE OP_RETURN](https://wiki.bitcoinsv.io/index.php/OP_RETURN) script from `data` payload.

```ts
const data = toByteString('hello world', true)
Utils.buildOpreturnScript(data) // '006a0b68656c6c6f20776f726c64'
```

### `HashedMap`


`HashedMap` provides a map/hashtable-like data structure. It is different to use `HashedMap` in on-chain and off-chain context.

#### On-chain

The main difference between `HashedMap` and other data types we’ve [previously introduced](../how-to-write-a-contract/#data-types) is that it does NOT store raw data (i.e., keys and values) in the contract on the blockchain. It stores their hashed values instead, to minimize on-chain storage, which is expensive.

These guidelines must be followed when using `HashedMap` in a contract `@method`, i.e., on-chain context.

* Only the following methods can be called.

	- `set(key: K, val: V): HashedMap`: Adds a new element with a specified key and value. If an element with the same key already exists, the element will be updated.
	- `canGet(key: K, val: V): boolean`: Returns `true` if the specified **key and value pair** exists, otherwise returns `false`.
	- `has(key: K): boolean`: Returns `true` if the specified key exists, otherwise returns `false`.
  - `delete(key: K): boolean`: Returns `true` if a key exists and has been removed, otherwise returns `false`.
	- `clear(): void`: Remove all key and value pairs.
	- `size: number`: Returns the number of elements.

:::note 
`get()` is not listed, since the value itself is not stored and thus must be passed in and verified using `canGet()`.
:::

* The aforementioned methods can only be used in public `@method`s, NOT in non-public `@method`s, including constructors.

* `HashedMap` can be used as an `@prop`, either stateful or not:

```ts
@prop() map: HashedMap<KeyType, ValueType>; // valid
@prop(true) map: HashedMap<KeyType, ValueType> // also valid
```

* It CANNOT be used as a `@method` parameter, regardless of public or not:

```ts
@method public unlock(map: HashedMap<KeyType, ValueType>) // invalid as a parameter type
@method foo(map: HashedMap<KeyType, ValueType>) // invalid as a parameter type
```

* No nesting is allowed currently. That is, key and value cannot contain a `HashedMap`.
```ts
type Map1 = HashedMap<KeyType1, ValueType1>
HashedMap<KeyType2, Map1> // invalid
HashedMap<Map1, ValueType2> // invalid

type KeyType = {
  key1: KeyType1
  key2: KeyType2
}
HashedMap<KeyType, ValueType> // valid
```

A full example may look like this:

```ts
class MyContract extends SmartContract {
  @prop(true)
  myMap: HashedMap<bigint, bigint>;

  // HashedMap can be a parameter in constructor
  constructor(map: HashedMap<bigint, bigint>) {
    // assignment is ok, but not calling method
    this.myMap = map;
  }

  @method()
  public unlock(key: bigint, val: bigint) {
    this.myMap.set(key, val);
    assert(this.myMap.has(key));
    assert(this.myMap.canGet(key, val));
    assert(this.myMap.delete(key));
    assert(!this.myMap.has(key));
  }
}
```

#### Off-chain

`HashedMap` acts just like the JavaScript/TypeScript [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) when used in off-chain code (that is, not in a contract's `@method`). For example, you can create an instance like this:

```ts
// create an empty map
let hashedMap = new HashedMap<bigint, ByteString>();

// create from (key,value) pairs
let hashedMap1 = new HashedMap([['key1', 'value1'], ['key2', 'value2']]);
```

Also, you can call its functions like this:

```ts
hashedMap.set(key, value);
const v = hashedMap.get(key);   // <----
hashedMap.has(key);
hashedMap.delete(key);
...
```
:::note
`get()` can be called since the HashedMap stores the original key and value off chain.
:::

Only when the key is an object is `HashedMap` different from `Map`. `HashedMap` will treat two keys the same if they have the same values, while `Map` will only if they reference the same object. For instance:

```ts
interface ST {
  a: bigint;
}

let map = new Map<ST, bigint>();
map.set({a: 1n}, 1n);
map.set({a: 1n}, 2n);
console.log(map.size); // output ‘2’ cause two keys {a: 1n} reference differently
console.log(map.get({a: 1n})); // output ‘undefined’


let hashedMap = new HashedMap<ST, bigint>();
hashedMap.set({a: 1n}, 1n);
hashedMap.set({a: 1n}, 2n);
console.log(hashedMap.size); // output ‘1’
console.log(hashedMap.get({a: 1n})); // output ‘2n’
```

### `HashedSet`


`HashedSet` library provides a set-like data structure. It can be regarded as a special `HashedMap` where a value is the same with its key and is thus omitted. Values are hashed before being stored in contracts on the blockchain, as in `HashedMap`.

#### On-chain

When used in public `@method`s, `HashedSet` also has almost all of the same restrictions as `HashedMap`. Except for the methods on its own whitelist that can be called in `@method`s as following:

- `add(value: T): HashedSet`: Inserts a new element with a specified value in to a set, if there isn't an element with the same value already in the set.

- `has(value: T): boolean`: Returns `true` if an element with the specified value exists in the set, otherwise returns `false`.

- `delete(value: T): boolean`: Returns `true` if an element in the Set existed and has been removed, or false if the element does not exist.

- `clear(): void`: Delete all entries of the set.

- `size: number`: Returns the size of set, i.e. the number of the entries it contains.


#### Off-chain

`HashedSet` can be used the same as a JavaScript `Set` in off-chain code .

```ts
let hashedSet = new HashedSet<bigint>()
hashedSet.add(1n);
hashedSet.has(1n);
hashedSet.delete(1n);
...
```

Similar to `HashedMap`, `HashedSet` will treat two objects as identical if their values equal, rather than requiring that they reference to the same object.

```ts
interface ST {
  a: bigint;
}

let set = new Set<ST>();
set.add({a: 1n});
set.add({a: 1n});
console.log(set.size); // output ‘2’
console.log(set.has({a: 1n})); // output ‘false’


let hashedSet = new HashedSet<ST, bigint>();
hashedSet.add({a: 1n});
hashedSet.add({a: 1n});
console.log(hashedSet.size); // output ‘1’
console.log(hashedSet.has({a: 1n})); // output ‘true’
```

### `Constants`

`Constants` defines some commonly used constant values.

```ts
class Constants {
    // number of string to denote input sequence
    static readonly InputSeqLen: bigint = BigInt(4);
    // number of string to denote output value
    static readonly OutputValueLen: bigint = BigInt(8);
    // number of string to denote a public key (compressed)
    static readonly PubKeyLen: bigint = BigInt(33);
    // number of string to denote a public key hash
    static readonly PubKeyHashLen: bigint = BigInt(20);
    // number of string to denote a tx id
    static readonly TxIdLen: bigint = BigInt(32);
    // number of string to denote a outpoint
    static readonly OutpointLen: bigint = BigInt(36);
}
```
