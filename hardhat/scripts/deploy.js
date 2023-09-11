const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Deploy the NFT Contract
  // const nftContract = await hre.ethers.deployContract("CryptoDevsNFT");
  // await nftContract.waitForDeployment();
  // console.log("CryptoDevsNFT deployed to:", nftContract.target);

  // Deploy the Fake Marketplace Contract
  // const fakeNftMarketplaceContract = await hre.ethers.deployContract(
  //   "FakeNFTMarketplace"
  // );
  // await fakeNftMarketplaceContract.waitForDeployment();
  // console.log(
  //   "FakeNFTMarketplace deployed to:",
  //   fakeNftMarketplaceContract.target
  // );

  // Deploy the DAO Contract
  // const amount = hre.ethers.parseEther("0.01"); // You can change this value from 1 ETH to something else
  // const daoContract = await hre.ethers.deployContract("CryptoDevsDAO", [
  //   fakeNftMarketplaceContract.target,
  //   nftContract.target,
  // ], {value: amount,});
  // await daoContract.waitForDeployment();
  // console.log("CryptoDevsDAO deployed to:", daoContract.target);

  // Sleep for 30 seconds to let Etherscan catch up with the deployments
  // await sleep(30 * 1000);

  // Verify the NFT Contract
  await hre.run("verify:verify", {
    address: "0x55896B054327144B9b9229B5A8abd34d6754F638",
    constructorArguments: [],
  });

  // Verify the Fake Marketplace Contract
  await hre.run("verify:verify", {
    address: "0xf48D1F1356C51C02d6697cA4E9050946c1009495",
    constructorArguments: [],
  });

  // Verify the DAO Contract
  await hre.run("verify:verify", {
    address: "0xa52ed3E03EEd3D666d6c532B5C09a5673CB7700A",
    constructorArguments: [
      "0xf48D1F1356C51C02d6697cA4E9050946c1009495",
      "0x55896B054327144B9b9229B5A8abd34d6754F638",
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});