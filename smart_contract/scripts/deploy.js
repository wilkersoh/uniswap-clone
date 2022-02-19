const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory('Transactions');
  const transactionContract = await transactionFactory.deploy();

  await transactionContract.deployed();

  console.log('Transactions deloyed to: ', transactionContract.address);
};

/**
  1. npx hardhat compile
  2. npx hardhat run scripts/sample-script.js
*/
(async() => {
  try { 
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1)
  }
})()