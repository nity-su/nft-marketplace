import styled from "styled-components";
import NFT from "./NFT";

const NftBox = styled.div`
  display: flex;
  justify-content: center;
  
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
    <NftBox>
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
  );
}

export default NFTList;
