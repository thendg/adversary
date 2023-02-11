async function main() {
  const contract = await ethers.getContractFactory("Adversary");
  const deployedContract = await contract.deploy();

  const [deployer] = await ethers.getSigners();
  console.log("Contract address:", deployedContract.address);
  console.log(
    "Contract:",
    `https://goerli.etherscan.io/address/${deployedContract.address}`
  );
  console.log("Deployed from account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
