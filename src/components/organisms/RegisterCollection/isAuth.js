import Web3 from "web3";
import abi from "./abi.json";

async function isAuthenticated(address) {
  const web3 = new Web3(
    "https://goerli.infura.io/v3/b6b8a50b28304843adddcd4cf34098bd"
  );

  let contract = new web3.eth.Contract(abi, address);

  const result = await contract.methods.owner().call();
  if (result === "0x145B667e023c016FE07dDB01a8B211C5b45ef2eC") {
    return new Promise(function (resolve, reject) {
      resolve(true);
    });
  } else {
    new Promise(function (resolve, reject) {
      resolve(false);
    });
  }
}
