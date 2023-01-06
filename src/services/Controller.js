import Web3 from "web3";
import BuyAbi from "./BuyController.json";

export async function allowBuy({ fromAddress, REC721AD, price, tokenID }) {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(
    BuyAbi,
    "0x135b5e858a2f72ff77a2d0d10e5260a687e3b213"
  );
  console.log(fromAddress);

  await contract.methods
    .allowBuy(REC721AD, tokenID, price)
    .send({ from: fromAddress });
}
//ERC721AD, 0, 25
export async function buy({ fromAddress, REC721AD, tokenID, price }) {
  console.log(fromAddress);
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(
    BuyAbi,
    "0x135b5e858a2f72ff77a2d0d10e5260a687e3b213"
  );

  const estimateGas = await contract.methods
    .buy("0x33E86B0f916213D417e02A6c20f437047F3c7677", 0, 25)
    .estimateGas({ from: fromAddress });
  console.log(estimateGas);

  await contract.methods
    .buy(REC721AD, tokenID, price)
    .send({ from: fromAddress });
}
