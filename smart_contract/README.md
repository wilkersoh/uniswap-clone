Start Flow: 
1. Empty folder of this smart_contract
2. npx hardhat ( install all needed ethereum stuff in local, no more needed go to remix )

Compile and Build ( inside smart_contract folder )
1. npx hardhat compile
2. npx hardhat run scripts/deploy.js --network rinkeby 

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
