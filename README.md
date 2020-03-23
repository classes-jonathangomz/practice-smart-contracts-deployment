- [X] Create new project (```truffle init```)
- [X] Create smart contract and his logic
- [ ] Compile the contracts (```truffle compile```)
- [ ] Add smart contracts deployment files
- [ ] Deploy the contracts to the local blockchain (```truffle migrate```)
- [ ] Verify deployment on Ganache
- [ ] Verify Piggy contract executing his functions (```truffle console```)

```Javascript
let instance = await Piggy.deployed()

instance.sum(2, 2).then(r => console.log(r.toString()))

instance.getBalanceFromAccount(accounts[5]).then(r => console.log(r.toString()))

instance.getBalance().then(r => console.log(r.toString()))

instance.addFunds({from: accounts[9], value: 1000000000000000000}) // Add 1 ether... creo, o tal vez no, no sé jaja

instance.getBalance().then(r => console.log(r.toString()))
```

#### Next exercise: Test the contracts with truffle test command.
- [ ] Test basic functions of the Piggy contract (```truffle test```)
- [ ] Implement new tests for complex functions and test it
