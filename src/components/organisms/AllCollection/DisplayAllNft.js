import styled from "styled-components";
import Mp4FileFormat from "../Mp4FileFormatComponent";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 76px;
`;

const Img = styled.img`
  width: 220px;
  height: 230px;
  background-color: gray;
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
          const uri =
            "https://gateway.ipfs.io/" + nft.media[0].raw.replace("://", "/");
          console.log(nft.media[0].format);
          return nft.media[0].format === "png" ? (
            <Img key={i} src={uri} />
          ) : (
            <Mp4FileFormat key={i} url={uri} />
          );
        })}
      </CollectionGrid>
    </Container>
  );
}
/*
      <CollectionBox
              thumbnail={nft.media[0].thumbnail}
              ERC721CA={nft.contract.address}
              name={nft.contract.name}
              tokenID={nft.tokenId}
              title={nft.title}
              key={i}
            ></CollectionBox>
            */
