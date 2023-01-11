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
  return (
    <Container>
      <CollectionGrid>
        {array.map((nft, i) => {
          console.log("nft", nft);
          return (
            <CollectionBox
              thumbnail={nft.media[0].thumbnail}
              ERC721CA={nft.contract.address}
              name={nft.contract.name}
              tokenID={nft.tokenId}
              title={nft.title}
              description={nft.description}
              format={nft.media[0].format}
              key={i}
            ></CollectionBox>
          );
        })}
      </CollectionGrid>
    </Container>
  );
}
