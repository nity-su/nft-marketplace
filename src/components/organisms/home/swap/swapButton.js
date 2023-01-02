import swap from "@contracts/swap.json";
import Web3 from "web3";

export default function swapButton(inputvalue) {
  if (!window.ethereum) {
    return;
  }

  const provider = window.ethereum;
  const web3 = new Web3(provider);
  const contract = new web3.eth.Contract(
    swap,
    "0xaD11F9264CFa2a0f94fbc38dF6d7fDc6e2978f49"
  );
  //메타마스크 로그인 확인
  console.log(contract.methods);
  const ethereum = window.ethereum;

  /**
   * wei 변환표
   * @see https://web3js.readthedocs.io/en/v1.2.11/web3-utils.html#fromwei
   */

  const valueToCoin = web3.utils.toWei(inputvalue, "szabo");
  console.log(valueToCoin);

  ethereum
    .request({ method: "eth_requestAccounts" })
    .then(
      async (address) =>
        await contract.methods
          .swap()
          .send({ from: address[0], value: valueToCoin })
    );

  // const ethereum = window.ethereum;
  // const address = await ethereum.request({
  //   method: "eth_requestAccounts",
  // });

  //   await contract.methods
  //     .swap(address[0])
  //     .estimateGas({ from: address[0] })
  //     .then(console.log);
}
