import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "cY-52xF22be_Dh0BEucEboFBeHwSKDhW",
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(config);

// Fetch all the NFTs owned by elanhalpern.eth
const main = async (address) => {
  // Get all NFTs
  console.log("main", address);
  let result = await alchemy.nft.getNftsForOwner(address);
  console.log(address);
  return result;
  // Print NFTs
};

// Execute the code
async function runMain(address) {
  console.log("runMain", address);
  if (!address) {
    return;
  }

  try {
    const result = await main(address);
    console.log("result", result);
    return result;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default runMain;
