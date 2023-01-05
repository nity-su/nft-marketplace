import Web3 from "web3";
import ERC720ABI from "@contracts/ERC720Interface";

export default async function ApprovalRequest({ ERC721CA, toAddress, amount }) {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    const contract = await new web3.eth.Contract(ERC720ABI, ERC721CA);
    await contract.methods
      .approve(toAddress, amount)
      .then(console.log)
      .catch((x) => {
        console.log(x);
      });
  } else {
    console.log("metamask is not installed");
  }
}
