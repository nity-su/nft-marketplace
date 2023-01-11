import ERC20ABI from "@contracts/ERC20Interface";

export default async function ApproveRequest({
  fromAddress,
  toAddress,
  ERC20CA,
  amount,
  web3,
}) {
  // const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(ERC20ABI, ERC20CA);
  // await contract.methods
  //   .approve(toAddress, amount)
  //   .send({ from: fromAddress })
  //   .then(console.log);
  const request = contract.methods
    .approve(toAddress, amount)
    .send.request({ from: fromAddress }, (error, data) => {
      console.log(error);
    });
  return request;
}
