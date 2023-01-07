// Github: https://github.com/alchemyplatform/alchemy-sdk-js
// Setup: npm install alchemy-sdk
import { Network, Alchemy } from "alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "SF8OJ6n9AXQ8ViiDRTnFrv1-rBd_3VY-", // Replace with your Alchemy API Key.
  network: Network.ETH_GOERLI, // Replace with your network.
};
/**
 *  @param {string} NFT Contract 주소
 *  @return NFT 관련 데이터가 Promise 형태로 반환
 */
const alchemy = new Alchemy(settings);
export default function getNftsForContract(address) {
  return alchemy.nft.getNftsForContract(address);
}
