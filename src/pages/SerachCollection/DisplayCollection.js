import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import getNftsForContract from "@services/Alchemy/getNftsForContract";
import DisplayAllNft from "@components/organisms/SerachCollection/DisplayAllNft";

const Container = styled.div``;

export default function DisplayCollection() {
  const [AllNFT, setAllNFT] = useState();
  const location = useLocation();
  const { address } = location.state;
  console.log(address);

  getNftsForContract(address).then((result) => {
    if (!AllNFT) setAllNFT(result.nfts);
  });
  console.log(AllNFT);
  return (
    <Container>{AllNFT ? <DisplayAllNft array={AllNFT} /> : null}</Container>
  );
}
