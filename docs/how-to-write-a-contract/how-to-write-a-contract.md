---
sidebar_position: 1
---

# How to Write a Contract

A smart contract is a class that extends the `SmartContract` base class. A simple example is shown below.

```ts
import { SmartContract, method, prop, assert } from "scrypt-ts"

class Demo extends SmartContract {
  @prop()
  readonly x: bigint

  constructor(x: bigint) {
    super(...arguments)
    this.x = x
  }

  @method()
  public unlock(x: bigint) {
    assert(this.add(this.x, 1n) == x, 'incorrect sum')
  }

  @method()
  add(x0: bigint, x1:bigint) : bigint {
    return x0 + x1
  }
}
```

Class members decorated with `@prop` and `@method` will end up on the blockchain and thus must be a strict subset of TypeScript. Everywhere decorated with them can be regarded in the on-chain context. Members decorated with neither are regular TypeScript and are kept off chain. The significant benefit of `sCrypt` is that both on-chain and off-chain code are written in the same language: TypeScript.

:::note
You can use [the sCrypt template Repl](https://replit.com/@msinkec/sCrypt) and play with the code in your browser!
:::

## Properties

A smart contract can have two kinds of properties:

1. With `@prop` decorator: these properties are **only allowed to have [types](#data-types) specified below** and they shall only be initialized in the constructor.

2. Without `@prop` decorator: these properties are regular TypeScript properties without any special requirement, meaning they can use any types. Accessing these properties is prohibited in methods decorated with the `@method` decorator.


### `@prop` decorator

Use this decorator to mark any property that intends to be stored on chain.

This decorator takes a `boolean` parameter. By default, it is set to `false`, meaning the property cannot be changed after the contract is deployed. If the value is `true`, the property is a so-called [stateful](./stateful-contract) property and its value can be updated in subsequent contract calls.

```ts
// good, `a` is stored on chain, and it's readonly after the contract is deployed
@prop()
readonly a: bigint

// valid, but not good enough, `a` cannot be changed after the contract is deployed
@prop()
a: bigint

// good, `b` is stored on chain, and its value can be updated in subsequent contract calls
@prop(true)
b: bigint

// invalid, `b` is a stateful property that cannot be readonly
@prop(true)
readonly b: bigint

// good
@prop()
static c: bigint = 1n

// invalid, static property must be initialized when declared
@prop()
static c: bigint

// invalid, stateful property cannot be static
@prop(true)
static c: bigint = 1n

// good, `UINT_MAX` is a compile-time constant, and no need to typed explicitly
static readonly UINT_MAX = 0xffffffffn

// valid, but not good enough, `@prop()` is not necessary for the CTC
@prop()
static readonly UINT_MAX = 0xffffffffn

// invalid
@prop(true)
static readonly UINT_MAX = 0xffffffffn
```

## Constructor

A smart contract must have an explicit constructor if it has at least one `@prop` that is not `static`.

The `super` method **must** be called in the constructor and all the arguments of the constructor should be passed to `super`
in the same order as they are passed into the constructor. For example,

```ts
class A extends SmartContract {
  readonly p0: bigint

  @prop()
  readonly p1: bigint

  @prop()
  readonly p2: boolean

  constructor(p0: bigint, p1: bigint, p2: boolean) {
    super(...arguments)  // same as super(p0, p1, p2)
    this.p0 = p0
    this.p1 = p1
    this.p2 = p2
  }
}
```
[`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) is an array containing the values of the arguments passed to that function. `...` is the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).


## Methods

Like properties, a smart contract can also have two kinds of methods:

1. With `@method` decorator: these methods can only call **methods also decorated by `@method` or [functions](#functions) specified below**. Also, **only the properties decorated by `@prop` can be accessed**.

2. Without `@method` decorator: these methods are just  regular TypeScript class methods.


### `@method` decorator

1. Use this decorator to mark any method that intends to run on chain.
2. It takes a [sighash flag](./scriptcontext.md#sighash-type) as a parameter.


### Public `@method`s

Each contract **must** have at least one public `@method`. It is denoted with the `public` modifier and does not return any value. It is visible outside the contract and acts as the main method into the contract (like `main` in C and Java).

A public `@method` can be called from an external transaction. The call succeeds if it runs to completion without violating any conditions in [assert()](./built-ins.md#assert). An example is shown below.

```ts
@method()
public unlock(x: bigint) {
  // only succeeds if x is 1
  assert(this.add(this.x, 1n) == x, "unequal")
}
```

:::note
In addition to the following special cases, the last statement of a public `@method` method **must** be an `assert()` statement.
:::


1. last statement is a `console.log();` statement, and the `console.log();` statement is preceded by an `assert()` statement.
2. last statement is `for` statement, and the last statement in the loop body is `assert()` statement.
3. last statement is `if-else` statement, and the last statement of each conditional branch is `assert()` statement.

```ts
class PublicMethodDemo extends SmartContract {


  @method()
  public foo() {
    // valid, last statement is `assert();` statement
    assert(true); 
  }

  @method()
  public foo() {
    // valid, `console.log` calling will be ignored when verifying the last `assert` statement
    assert(true); // 
    console.log();
    console.log();
  }

  @method()
  public foo() {
    // valid, last statement is `for` statement
    for (let index = 0; index < 3; index++) {
        assert(true);
    }
  }

  @method()
  public foo(z: bigint) {
    // valid, last statement is `if-else` statement
    if(z > 3n) {
        assert(true)
    } else {
        assert(true)
    }
  }

  @method()
  public foo() {
    // invalid, the last statement of public method should be an `assert` function call
  }

  @method()
  public foo() {
    assert(true);
    return 1n;  // invalid, because a public method cannot return any value
  }

  @method()
  public foo() {
    // invalid, the last statement in the for statement body doesn't end with `assert()` statement.
    for (let index = 0; index < 3; index++) {
        assert(true);
        z + 3n;
    }
  }

  @method()
  public foo() {
    // invalid, not each conditional branch end with `assert()` statement.
    if(z > 3n) {
      assert(true)
    } else {
        
    }
  }

  @method()
  public foo() {
    // invalid, not each conditional branch end with `assert()` statement.
    if(z > 3n) {
      assert(true)
    }
  }
}
```

### Non-public `@method`s

Without a `public` modifier, a `@method` is internal and cannot be directly called from an external transaction.

```ts
@method()
add(x0: bigint, x1:bigint) : bigint {
  return x0 + x1
}
```

:::note
**Recursion is disallowed**. A `@method`, public and not, cannot call itself, either directly in its own body or indirectly calls another method that transitively calls itself.
:::

```ts
class MethodsDemo extends SmartContract {
  @prop()
  readonly x: bigint;
  @prop()
  readonly y: bigint;

  constructor(x: bigint, y: bigint) {
    super(...arguments);
    this.x = x;
    this.y = y;
  }

  // good, non-public static method without access `@prop` properties
  @method()
  static sum(a: bigint, b: bigint): bigint {
    return a + b;
  }

  // good, non-public method
  @method()
  xyDiff(): bigint {
    return this.x - this.y
  }

  // good, public method
  @method()
  public add(z: bigint) {
    // good, call `sum` with the class name
    assert(z == MethodsDemo.sum(this.x, this.y), 'add check failed');
  }

  // good, another public method
  @method()
  public sub(z: bigint) {
    // good, call `xyDiff` with the class instance
    assert(z == this.xyDiff(), 'sub check failed');
  }

  // valid but bad, public static method
  @method()
  public static alwaysPass() {
    assert(true)
  }
}
```

## Data Types

Types used in `@prop` and `@method` are restricted to these kinds:

### Basic Types

#### boolean

A simple value `true` or `false`.
```ts
let isDone: boolean = false
```

#### `bigint`

`bigint` can represent arbitrarily large integers. A  [bigint literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) is a number with suffix `n`:

```ts
11n
0x33FEn
const previouslyMaxSafeInteger = 9007199254740991n
const alsoHuge = BigInt(9007199254740991)
// 9007199254740991n
const hugeHex: bigint = BigInt("0x1fffffffffffff")
// 9007199254740991n
```

#### `ByteString`

In a smart contract context (i.e., in `@method`s or `@prop`s), a `ByteString` represents a byte array.

A literal `string` can be converted in to a `ByteString` using function `toByteString(literal: string, isUtf8: boolean = false): ByteString`:

* If not passing `isUtf8` or `isUtf8` is `false`, then `literal` should be in the format of hex literal, which can be represented by the regular expression: `/^([0-9a-fA-F]{2})*$/`
* Otherwise, `literal` should be in the format of utf8 literal, e.g., `hello world`.

:::note
`toByteString` **ONLY** accepts string literals for its first argument, and boolean literals for the second.
:::

```ts
let a = toByteString('0011') // valid, `0011` is a valid hex literal
// 0011
let b = toByteString('hello world', true) // valid
// 68656c6c6f20776f726c64

toByteString('0011', false) // valid
// 30303131

toByteString(b, true) // invalid, not passing string literal to the 1st parameter

toByteString('001') // invalid, `001` is not a valid hex literal
toByteString('hello', false) // invalid, `hello` is not a valid hex literal

toByteString('hello', 1 === 1) // invalid, not passing boolean literal to the 2nd parameter

let c = true
toByteString('world', c) // invalid, not passing boolean literal to the 2nd parameter
```

`ByteString` has the following operators and methods:

* `==` / `===`: compare

* `+`: concatenate

```ts
const str0 = toByteString('01ab23ef68')
const str1 = toByteString('656c6c6f20776f726c64')

// comparison
str0 == str1
str0 === str1
// false

// concatenation
str0 + str1
// '01ab23ef68656c6c6f20776f726c64'
```

#### `number`

Type `number` is not allowed in `@prop`s and `@method`s, except in the following cases. We can use `Number()` function to convert `bigint` to `number`.

* Array index

```ts
let arr: FixedArray<bigint, 3> = [1n, 3n, 3n]
let idx: bigint = 2n
let item = arr[Number(idx)]
```

* Loop variable

``` ts
for (let i: number = 0 i < 10 i++) {
  let j: bigint = BigInt(i) // convert number to bigint
}
```

It can also be used in defining [compile-time constants](#compile-time-constant).


### Fixed Size Array

All arrays **must** be of fixed size and be declared as type of `FixedArray<T, SIZE>`, whose `SIZE` must be a [CTC](#compile-time-constant) described later.
The common TypeScript arrays declared as `T[]` or `Array<T>` are not allowed in `@prop`s and `@method`s, as they are of dynamic size.

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n]

// set to all 0s
const N = 20
let aab: FixedArray<bigint, N> = fill(0n, N)

// 2-dimensional array
let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]]
```

:::caution
A `FixedArray` behaves differently in an on-chain and off-chain context, when passed as a function argument. It is *passed by reference* off chain, as a regular TypeScript/JavaScript array, while *passed by value* on chain. It is thus strongly recommended to NEVER mutate a `FixedArray` parameter's element inside a function.

```ts
class DemoContract extends SmartContract {

    @prop(true)
    readonly a: FixedArray<bigint, 3>

    constructor(a: FixedArray<bigint, 3>) {
        super(...arguments)
        this.a = a
    }

    @method()
    onchainChange(a: FixedArray<bigint, 3>) {
        a[0] = 0
    }

    offchainChange(a: FixedArray<bigint, 3>) {
        a[0] = 0
    }

    @method()
    public main(a: FixedArray<bigint, 3>) {
      this.onchainChange(this.a)
      // note: a[0] is not changed on chain
      assert(this.a[0] == 1n)
    }
}

const arrayA: FixedArray<bigint, 3> = [1n, 2n, 3n]
const instance = new DemoContract(arrayA);

instance.offchainChange(arrayA)
// note: arrayA[0] is changed off chain
assert(arrayA[0] = 0n)
```
:::

### User-defined Types

Users can be define customized types using `type` or `interface`, made of basic types.[^1]

```ts
type ST = {
  a: bigint
  b: boolean
}

interface ST1 {
  x: ST
  y: ByteString
}

type Point = {
  x: number
  y: number
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}

interface Point2 {
  x: number
  y: number
}

// Exactly the same as the earlier example
function printCoord(pt: Point2) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}

```

[^1]: A user-defined type is also passed by value on chain, and by reference off chain, same as a `FixedArray`. It is thus strongly recommended to NEVER mutate the field of a parameter, which is of a user-defined type, inside a function.

### Domain Types

There are several domain types, specific to the Bitcoin context, used to further improve type safety. They are all subtypes of `ByteString`. That is, they can be used where a `ByteString` is expected, but not vice versa.


* `PubKey` - a public key

* `Sig` - a signature type in [DER format](https://academy.bit2me.com/en/que-son-firmas-estrictas-der), including sighash flags at the end

* `Ripemd160` - a RIPEMD-160 hash

* `PubKeyHash` - an alias for `Ripemd160`, usually representing a bitcoin address.

* `Sha1` - a SHA-1 hash

* `Sha256` - a SHA-256 hash

* `SigHashType` - a sighash

* `SigHashPreimage` - a sighash preimage

* `OpCodeType` - a Script [opcode](https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script)

```ts
@method()
public unlock(sig: Sig, pubkey: PubKey) {
    // hash160() takes a ByteString as input, but can accept pubkey here, which if of type PubKey
    assert(hash160(pubkey) == this.pubKeyHash)
    assert(this.checkSig(sig, pubkey), 'signature check failed')
}
```

### Import Types

All types can be imported from `scrypt-ts` package:

```ts
import {
    ByteString,
    Pubkey,
    FixedArray,
    Sig,
    PubKeyHash
} from 'scrypt-ts'
```

This may not when work [`isolatedModules`](https://www.typescriptlang.org/tsconfig#isolatedModules) is enabled. At this time you need to use [Type-Only Imports](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export):


```ts
import type {
    ByteString,
    FixedArray
} from 'scrypt-ts'
```




## Statements

There are some constraints on these following statements within `@method`s, except [variable declarations](#Variable-declarations).

### Variable declarations

Variables can be declared in `@method`s by keywords `const` / `var` / `let`, like in normal TypeScript.

```ts
let a : bigint = 1n
var b: boolean = false
const byte: ByteString = toByteString("ff")
```

### `for`

Bitcoin does not allow unbounded loops for security reasons, to prevent DoS attacks. All loops must be bounded at compile time. So if you want to loop inside `@method`, you must strictly use the following format:

```ts
for (let $i = 0; $i < $maxLoopCount; $i++) {
  ...
}
```

:::note
* the initial value must be `0` or `0n`, the operator `<` (no `<=`), and increment `$i++` (no pre-increment `++$i`).
* `$maxLoopCount` must be a [CTC](#compile-time-constant).
* `$i` can be arbitrary name, e.g., `i`, `j`, or `k`. It can be both a `number` or a `bigint` type.
* `break` and `continue` are currently not allowed, but can be emulated like
:::

```ts
// emulate break
let x = 3n
let done = false
for (let i = 0; i < 3; i++) {
    if (!done) {
        x = x * 2n
        if (x >= 8n) {
            done = true
        }
    }
}
```

### `return`

Due to the lack of native return semantics support in Bitcoin Script, a function currently must end with a `return` statement and it is the only valid place for a `return` statement. This requirement may be relaxed in the future.

```ts
@method() m(x: bigint): bigint {
   if (x > 2n) return x  // invalid
   return x + 1n         // valid
}
```

This is usually not a problem since it can be circumvented as follows:
```ts
@method()
abs(a: bigint): bigint {
    if (a > 0) {
        return a
    } else {
        return -a
    }
}
```
can be rewritten as
```ts
@method()
abs(a: bigint): bigint {
    let ret : bigint = 0

    if (a > 0) {
        ret = a
    } else {
        ret = -a
    }
    return ret
}
```

## Compile-time Constant

A compile-time constant, CTC for short, is a special variable whose value can be determined at compile time. A CTC must be defined in one of the following ways.


* A number literal like:

```ts
3
```

* A `const` variable, whose value must be a numeric literal. Expressions cannot be used for now.

```ts
const N1 = 3 // valid
const N2: number = 3 // invalid, no explicit type `number` allowed
const N3 = 3 + 3 // invalid, no expression allowed
```

* A `static` `readonly` property:

```ts
class X {
  static readonly M1 = 3 // valid
  static readonly M2: number = 3 // invalid
  static readonly M3 = 3 + 3 // invalid
}
```


A CTC is required in these cases.

* Array size

```ts
let arr1: FixedArray<bigint, 3> = [1n, 2n, 3n]
// `typeof` is needed since FixedArray takes a type as the array size, not a value
let arr1: FixedArray<bigint, typeof N1> = [1n, 2n, 3n]
let arr2: FixedArray<bigint, typeof X.M1> = [1n, 2n, 3n]
```

* Loop count in `for` statement

```ts
for(let i=0; i< 3; i++) {}
for(let i=0; i< N1; i++) {}
for(let i=0; i< X.M1; i++) {}
```

## Functions

### Built-in Functions
You can refer to [Built-ins](./built-ins.md) for a full list of functions and libraries built into `scryptTS`.

### Whitelisted Functions
Be default, all Javascript/TypeScript built-in functions and global variables are not allowed in `@method`s, except the following kinds.

#### `console.log`

`console.log` can be used for debugging purposes.
```ts
@method()
add(x0: bigint, x1:bigint) : bigint {
  console.log(x0)
  return x0 + x1
}
```


## Operators

**sCrypt** is a subset of TypeScript. Only the following operators can be used directly.


| Operator | Description |
| :-----| :----: |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Remainder |
| `++` | Increment |
| `--` | Decrement |
| `==` | Equal to |
| `!=` | Not equal to |
| `===` | Same as `==` |
| `!==` | Same as `!=` |
| `>` | Greater than |
| `>=` | Greater than or equal to |
| `<` | Less than |
| `<=` | Less than or equal to |
| `&&` | Logical AND |
| <code>&#124;&#124;</code> | Logical OR |
| `!` | Logical NOT |
| `cond ? expr1 : expr2 ` | ternary |
| `+=` | Add and assign |
| `-=` | Subtract and assign |
| `*=` | Multiply and assign |
| `/=` | Divide and assign |
| `%=` | Assign remainder |

:::note
`**` is not supported currently.
:::