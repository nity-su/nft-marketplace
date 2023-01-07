import styled from "styled-components";
import CollectionBox from "@components/organisms/AllCollection/CollectionBox";

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
          console.log(nft.media);
          return (
            <CollectionBox
              thumbnail={nft.media[0].thumbnail}
              key={i}
            ></CollectionBox>
          );
        })}
      </CollectionGrid>
    </Container>
  );
}
