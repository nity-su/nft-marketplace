import React from "react";
import runMain from "./getNFT";
import { useEffect, useState } from "react";

export default function SelectContract({ address }) {
  const [contractAddressArray, setState] = useState([]);

  useEffect(() => {
    async function getNFTByAddress() {
      //   await runMain().then((x) => setState(x.ownedNfts));
      await runMain(address)
        .then((x) => {
          return x.ownedNfts;
        })
        .then((x) => {
          let array = [];
          x.forEach((element) => {
            let result = array.find(
              (s) => element.contract.address === s.contract.address
            );
            if (!result) {
              array.push(element);
            }
          });

          return array;
        })
        .then((array) => setState(array))
        .catch(console.log);
    }
    getNFTByAddress();
  }, );
  /*
  const web3 = new Web3(
    "https://goerli.infura.io/v3/b6b8a50b28304843adddcd4cf34098bd"
  );

  let contract = new web3.eth.Contract(
    abi,
    "0x4f0d0f87a5d6bce5fa517faa69339dd10f31209f"
  );

  contract.methods.owner().call().then(console.log);
  소유권 증명
*/
  function checkOnlyOne(target) {
    console.log(target.value);
    const boxs = document.getElementsByName("cotract_address");
    boxs.forEach((v) => {
      if (v !== target) {
        v.checked = false;
      }
    });
  }

  return (
    <form>
      {contractAddressArray.map((element, index) => {
        const id = `cotract_address_${index}`;
        return (
          <li key={index}>
            <label htmlFor={id}>
              {element.contract.address} NFT name: {element.contract.name}
            </label>
            <input
              id={id}
              type="checkbox"
              name="cotract_address"
              value={element.contract.address}
              onChange={(e) => checkOnlyOne(e.target)}
            />
          </li>
        );
      })}
    </form>
  );
}
