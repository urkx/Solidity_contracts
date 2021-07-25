# Solidity contracts

Some contracts for solidity and ethereum learning.

Use Ganache as test network server.

Install Truffle globaly from NPM
> npm install truffle@4.1.15 -g

## Projects in this repo

### compile-and-deploy
A kind of sandbox used to learn "low-level" mechanisms of Ethereum and Solidity. In this module, contracts are compiled and tested with JavaScript.

### ethereum-truffle
A truffle module.

Compile contracts
``` console 
truffle compile 
```

Deploy contracts in development network
 ``` console 
 truffle deploy --network development
 ```

Truffle console (in development network)
``` console
truffle console --network development
```

Deploy contracts in Ganache again
``` console 
truffle deploy --reset --network development
```

Get instance of deployed contract to interact with it (in Truffle console)
``` js 
UserContract.deployed().then(c => instance = c);
Migrations.deployed().then(c => instance = c);
```
