import React from "react";
import runMain from "../../../services/Alchemy/getNFT";
import { useEffect, useState } from "react";
import styled from "styled-components";
import isAuthenticated from "@services/isAuth";

const Ul = styled.ul`
  width: 80vw;
  margin-top: 64px;
`;

export default function SelectContract({ address, setContractAddress }) {
  const [contractAddressArray, setState] = useState([]);

  useEffect(() => {
    async function getNFTByAddress() {
      //   await runMain().then((x) => setState(x.ownedNfts));

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const array = await runMain(address)
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
        .catch(console.log);

      const promiseAll = await Promise.all(
        array.map(async (element) => {
          const isAuth = await isAuthenticated(
            element.contract.address,
            accounts[0]
          );
          if (isAuth) return element;
        })
      );
      const result = promiseAll.filter((x) => x !== undefined);
      console.log(result);

      setState(result);
    }
    getNFTByAddress();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function checkOnlyOne(target) {
    const boxs = document.getElementsByName("cotract_address");
    //예외처리하기
    boxs.forEach((v) => {
      if (v !== target) {
        v.checked = false;
      }
    });

    return new Promise(function (resolve, reject) {
      resolve(true);
    });
  }

  return (
    <Ul>
      {contractAddressArray &&
        contractAddressArray.map((element, index) => {
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
                onChange={(e) =>
                  checkOnlyOne(e.target).then(() => {
                    setContractAddress({
                      name: element.contract.name,
                      address: element.contract.address,
                    });
                  })
                }
              />
            </li>
          );
        })}
    </Ul>
  );
}
