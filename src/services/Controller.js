import Web3 from "web3";
import BuyAbi from "@contracts/BuyController.json";

export function AllowBuy({ fromAddress, REC721AD }) {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(BuyAbi);

  contract.methods.allowBuy(REC721AD, 0, 25).send({ from: fromAddress });
}
//ERC721AD, 0, 25
export function Buy({ fromAddress, REC721AD, tokenID, price }) {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(BuyAbi);
  contract.methods.buy(REC721AD, tokenID, price).send({ from: fromAddress });
}
