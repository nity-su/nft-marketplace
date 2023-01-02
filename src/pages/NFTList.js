import styled from "styled-components";
import NFT from "./NFT";

const NftBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const NFTListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  width: 70%;
  margin-bottom: 20px;
`;

function NFTList() {
  return (
    <Section>
      <NftBox className="NFTListFonts">
        <NFTListWrapper>
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
        </NFTListWrapper>
      </NftBox>
    </Section>
  );
}

export default NFTList;

const Section = styled.section`
  .NFTListFonts {
    font-family: "Noto Sans KR", sans-serif;
  }
`;
