import styled from "styled-components";
import CollectionBox from "@components/organisms/AllCollection/CollectionBoxForProductBuy";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 76px;
`;

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 240px);
  column-gap: 16px;
  row-gap: 48px;
  grid-template-rows: auto;
`;
export default function DisplayAllNft({ array }) {
  console.log(array.length);
  return (
    <Container>
      <CollectionGrid>
        {array.map((nft, index) => {
          console.log("nft", nft);
          const raw =
            "https://gateway.ipfs.io/" + nft.media[0].raw.replace("://", "/");
          return (
            <CollectionBox
              thumbnail={raw}
              ERC721CA={nft.contract.address}
              name={nft.contract.name}
              tokenID={nft.tokenId}
              title={nft.title}
              description={nft.description}
              format={nft.media[0].format}
              index={index}
              key={index}
            ></CollectionBox>
          );
        })}
      </CollectionGrid>
    </Container>
  );
}
