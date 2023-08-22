---
sidebar_position: 5
---

# How to Test a Contract

Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause **real economic losses**.


Create a sample project with [the sCrypt CLI Tool](./installation.md#the-scrypt-cli-tool):

```sh
npx scrypt-cli project demo
```

Now we will take a look at the file `tests/demo.test.ts`. This file contains code for deployment of our `Demo` contract on the Bitcoin testnet or local and a subsequent public method call on the contract.


## Compile the Contract

First, call function `SmartContract.compile()` to compile the contract before doing any testing.

```ts
await Demo.compile()
```

## Instantiate the Contract

Instantiate the contract and connect a [signer](./how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#signer).

```ts
instance = new Demo(sha256(toByteString('hello world', true)))
// connect a signer
await instance.connect(getDefaultSigner())
```


## Contract Deployment

To deploy a smart contract, simply call its `deploy()` method:

```ts
const deployTx = await instance.deploy(1)
console.log('Demo contract deployed: ', deployTx.id)
```

## Call a Public Method

You can call a contract's public `@method` on the blockchain as follows:

```ts
// build and send tx by calling `unlock()` on methods object.
const { tx: callTx, atInputIndex } = await instance.methods.unlock(
    toByteString('hello world', true)
)
console.log('Demo contract called: ', callTx.id)
```

### Verify the Tx input for the method call

In the previous step, the signed `tx` for the contract call and its input index are returned. You can call `verifyScript` on the returned `tx` to verify that the contract method call at the given tx input index is successful.

```ts
let result = tx.verifyScript(atInputIndex)
console.log(result.success) // Output: true or false
```

## Integrate with a testing framework

You can use whatever testing framework you like to write unit tests for your contract. For example, a test using [Mocha](https://mochajs.org/) is shown below:

```js

describe('Test SmartContract `Demo`', () => {
    let instance: Demo

    before(async () => {
        await Demo.compile()
        instance = new Demo(sha256(toByteString('hello world', true)))
        await instance.connect(getDefaultSigner())
    })

    it('should pass the public method unit test successfully.', async () => {
        const deployTx = await instance.deploy(1)
        console.log('Demo contract deployed: ', deployTx.id)

        const { tx: callTx, atInputIndex } = await instance.methods.unlock(
            toByteString('hello world', true)
        )
        console.log('Demo contract called: ', callTx.id)

        const result = callTx.verifyScript(atInputIndex)
        expect(result.success, result.error).to.eq(true)
    })

    it('should throw with wrong message.', async () => {
        const deployTx = await instance.deploy(1)
        console.log('Demo contract deployed: ', deployTx.id)

        return expect(
            instance.methods.unlock(toByteString('wrong message', true))
        ).to.be.rejectedWith(/Hash does not match/)
    })
})
```

## Running the tests


Compared to other blockchains, smart contracts on Bitcoin are **pure**.

* Given the same input, its public method always returns the same boolean output: success or failure. It has no internal state.
* A public method call causes no side effects.


Thus, you can run tests in two different environments:


1. **Local**: Running tests without touching the Bitcoin blockchain. Transactions are constructed with dummy UTXOs. If it passes tests off chain, we are confident it will behave the same on chain. 

Run the tests in the `Local` environment using the following command:

```sh
npm run test
```


2. **Testnet**: Running tests on the testnet of Bitcoin blockchain. Transactions are constructed with real UTXOs on the testnet.


Run the tests in the `Testnet` environment using the following command:

```sh
npm run testnet
```

:::note
Run tests in a `Testnet` environment. Need to get some test coins from [faucet](./how-to-deploy-and-call-a-contract/faucet.md).
:::


## Test a Stateful Contract

Stateful contact testing is very similar to what we have described above. The only different is that you have to be aware of smart contract instance changes after method calls.

As described in the [Overview](./how-to-write-a-contract/stateful-contract.md#overview), for each method call, a tx contains new contract UTXO(s) with the latest updated state, i.e., the next instance. From the perspective of the current spending tx, the public `@method` of a contract instance is called in one of its inputs, and the next contract instance is stored in one (or more) of its outputs.

Now, let's look at how to test the `incrementOnChain` method call:

```ts
// initialize the first instance, i.e., deployment
let counter = new Counter(0n);
// connect it to a signer
await counter.connect(getDefaultSigner());


const deployTx = await counter.deploy(1)
console.log('Counter contract deployed: ', deployTx.id)

// set the current instance to be the first instance
let current = counter;

// create the next instance from the current
let nextInstance = current.next();

// apply the same updates on the next instance locally
nextInstance.increment();

// call the method of current instance to apply the updates on chain
const { tx: tx_i, atInputIndex } = await current.methods.incrementOnChain(
  {
    // the `next` instance and its balance should be provided here
    next: {
      instance: nextInstance,
      balance
    }
  } as MethodCallOptions<Counter>
);

// check the validity of the input script generated for the method call.
let result = tx_i.verifyScript(atInputIndex);
expect(result.success, result.error).to.eq(true);

```

In general, we call the method of a stateful contract in 3 steps:

### 1. Build the `current` instance

The `current` instance refers to the contract instance containing the latest state on the blockchain. The first instance is in the deployment transaction. In the above example, we initialize the `current` instance to be the first instance like this:

```ts
let current = counter;
```

### 2. Create a `next` instance and apply updates to it off chain

The `next` instance is the new instance in the UTXO of the method calling tx.

To create the `next` of a specific contract instance, you can simply call `next()` on it:

```ts
let nextInstance = instance.next();
```

It will make a deep copy of all properties and methods of `instance` to create a new one.

Then, you should apply all the state updates to the `next` instance. Please note that these are just local/off-chain updates and are yet to be applied to the blockchain.

```ts
nextInstance.increment();
```
This is the **SAME** method we call on chain in `incrementOnChain`, thanks to the fact that both the on-chain smart contract and off-chain code are written in TypeScript.

### 3. Call the method on the `current` instance to apply updates on chain

As described in [this section](#call-a-public-method), we can build a call transaction. The only difference here is that we pass in the `next` instance and its balance as a method call option in a stateful contract. So the method (i.e., `incrementOnChain`) have all the information to verify that all updates made to the `next` instance follow the state transition rules in it.

```ts
const { tx: tx_i, atInputIndex } = await current.methods.incrementOnChain(
  {
    // the `next` instance and its balance should be provided here
    next: {
      instance: nextInstance,
      balance
    }
  } as MethodCallOptions<Counter>
);
```

Finally, we can check the validity of the method call as before.

```ts
let result = tx_i.verifyScript(atInputIndex);
expect(result.success, result.error).to.eq(true);
```

### Running the tests

As before, we can just use the following command:

```sh
npm run test
```

or

```sh
npm run testnet
```