import styled from "styled-components";
import { useState } from "react";
import ERC721Controller from "@services/ERC721Controller";

const Container = styled.div`
  width: 240px;
  height: 340px;
`;
const Img = styled.img`
  width: 220px;
  height: 230px;
  background-color: gray;
`;
const TitleText = styled.span``;
const PriceText = styled.span``;

export default function CollectionBox({ thumbnail, ERC721CA, tokenID }) {
  const [state, setState] = useState();

  return (
    <Container>
      <Img
        src={thumbnail}
        onClick={() => {
          console.log(ERC721CA, tokenID);
          ERC721Controller({ ERC721CA, tokenID });
          setState(!state);
        }}
      />
      <TitleText>title</TitleText>
      <PriceText>price</PriceText>
    </Container>
  );
}

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
