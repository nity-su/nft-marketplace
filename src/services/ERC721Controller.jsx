import Web3 from "web3";
import ERC721ABI from "@contracts/ERC721Interface";
const CA = "0x135b5E858a2f72fF77A2d0d10e5260A687E3b213";
export default async function ApprovalRequest({ ERC721CA, tokenID }) {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);

    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const contract = await new web3.eth.Contract(ERC721ABI, ERC721CA);
    await contract.methods
      .approve(CA, tokenID)
      .send({ from: account[0] })
      .catch((x) => {
        console.log(x);
      });
  } else {
    console.log("metamask is not installed");
  }
}
