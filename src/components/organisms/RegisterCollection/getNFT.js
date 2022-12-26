import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "SF8OJ6n9AXQ8ViiDRTnFrv1-rBd_3VY-",
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(config);

// Fetch all the NFTs owned by elanhalpern.eth
const main = async (address) => {
  // Get all NFTs
  console.log("main", address);
  let result = await alchemy.nft.getNftsForOwner(address);
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
