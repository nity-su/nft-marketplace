import Web3 from "web3";

const abi = [
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default async function isAuthenticated(contractAddr, ownerAddr) {
  const web3 = new Web3(
    "https://goerli.infura.io/v3/b6b8a50b28304843adddcd4cf34098bd"
  );

  console.log(contractAddr, ownerAddr);

  let contract = new web3.eth.Contract(abi, contractAddr);

  const result = await contract.methods.owner().call();
  console.log(result);
  if (result === ownerAddr) {
    return new Promise(function (resolve, reject) {
      resolve(true);
    });
  } else {
    new Promise(function (resolve, reject) {
      resolve(false);
    });
  }
}
