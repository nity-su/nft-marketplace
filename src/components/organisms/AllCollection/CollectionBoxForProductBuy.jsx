import styled from "styled-components";
import { useEffect, useState } from "react";
import PopupImgNode from "./PopupImgNode";
import ERC20Controll from "@services/ERC20Controller";
import { buy } from "@services/BuyController";
import Web3 from "web3";
import abi from "@contracts/BuyController.json";

const CA = "0x135b5e858a2f72ff77a2d0d10e5260a687e3b213";
const ERC20CA = "0x01a0d7c9aa51c1196a283ccca870b0e6cb1f47ba";

const Container = styled.div`
  width: 240px;
  height: 340px;
`;
const Img = styled.img`
  width: 220px;
  height: 230px;
  background-color: gray;
`;
const TitleText = styled.div``;
const PriceText = styled.div``;

export default function CollectionBox({ thumbnail, ERC721CA, tokenID, title }) {
  const [state, setState] = useState();
  const [price, setprice] = useState(0);
  // const web3
  useEffect(() => {
    // if (!price) {
    //   return;
    // }

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, CA);
    contract.methods
      .tokenIdToPrice(ERC721CA, tokenID)
      .call()
      .then((p) => setprice(Number(p)));
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Img
        src={thumbnail}
        onClick={() => {
          console.log(ERC721CA, tokenID, price);
          if (price === 0) {
            return;
          }
          setState(!state);
        }}
      />
      <TitleText>{title}</TitleText>
      <PriceText>{price}</PriceText>
      {state ? (
        <PopupImgNode>
          <button
            onClick={() => {
              //  temp();
            }}
          >
            구매하기
          </button>
        </PopupImgNode>
      ) : null}
    </Container>
  );
}

// async function temp() {
//   const accounts = await window.ethereum.request({
//     method: "eth_requestAccounts",
//   });

//   const web3 = new Web3(window.ethereum);
//   const batch = new web3.BatchRequest();
//   console.log(accounts[0]);
//   batch.add(
//     await ERC20Controll({
//       fromAddress: accounts[0],
//       toAddress: CA,
//       ERC20CA: ERC20CA,
//       amount: price,
//       web3: web3,
//     })
//   );
//   batch.add(
//     await buy({
//       REC721CA: ERC721CA,
//       tokenID: tokenID,
//       fromAddress: accounts[0],
//       price,
//       web3: web3,
//     })
//   );
//   await batch.execute();
//   // setState(!state);
// }

// const PopupContainer = styled.div`
//   .modal-close {
//     color: #aaa;
//     line-height: 50px;
//     font-size: 80%;
//     position: absolute;
//     right: 0;
//     text-align: center;
//     top: 0;
//     width: 70px;
//     text-decoration: none;
//     &:hover {
//       color: black;
//     }
//   }
// `;
