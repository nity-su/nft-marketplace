import React from "react";
import { useEffect, useState } from "react";
import runMain from "@services/Alchemy/getNFT";
import styled from "styled-components";
import CollectionBox from "@components/organisms/AllCollection/CollectionBoxForProductRegister";

const Container = styled.div`
  width: 240px;
  height: 340px;
`;
const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 240px);
  column-gap: 16px;
  row-gap: 48px;
  grid-template-rows: auto;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 76px;
`;
export default function DisplayAllNFT({ array }) {
  const [state, setState] = useState();
  // console.log(array);
  useEffect(() => {
    async function CallAllNFT() {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const { ownedNfts } = await runMain(accounts[0]);
      console.log(ownedNfts);

      const filteredNFT = ownedNfts.filter((nft) => {
        return array.includes(nft.contract.address);
      });

      const list = filteredNFT.map((nft) => {
        return {
          url:
            "https://gateway.ipfs.io/" + nft.media[0].raw.replace("://", "/"),
          format: nft.media[0].format,
          address: nft.contract.address,
          tokenId: nft.tokenId,
          name: nft.rawMetadata.name,
        };
      });

      setState(list);
    }
    CallAllNFT();
  }, [array]);
  return (
    <FlexContainer>
      <CollectionGrid>
        {state
          ? state.map((info, i) => {
              return (
                <Container>
                  {/* {info.format === "png" ? (
                    <Img key={i} src={info.url} />
                  ) : (
                    <Mp4FileFormat key={i} url={info.url} />
                  )} */}
                  <CollectionBox
                    thumbnail={info.url}
                    ERC721CA={info.address}
                    tokenID={info.tokenId}
                    name={info.name}
                  />
                </Container>
              );
            })
          : null}
      </CollectionGrid>
    </FlexContainer>
  );
}

// const list = await Promise.all(
// NftsOwned.ownedNfts.filter((result) => {
//   if (array.includes(result.contract.address)) {
//     return true;
//   } else {
//     return false;
//   }
// })
// );
