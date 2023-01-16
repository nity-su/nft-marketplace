import styled from "styled-components";
import TestImg1 from "@assets/images/newjeans.png";
import { Link } from "react-router-dom";

const LinkBox = styled(Link)``;

const NFTWrapper = styled.div`
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 15px 0px #00000040;
`;

const ColorBox = styled.div`
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: blueviolet;
  background-image: url(${TestImg1});
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextsBox = styled.div`
  width: 90%;
  margin-top: 20px;
`;

const BoldText = styled.p`
  font-weight: 700;
  margin-bottom: 7.5px;
`;

function NFT() {
  return (
    <LinkBox to="/tradeplaceEX">
      <NFTWrapper>
        <ColorBox />
        <DetailBox>
          <TextsBox>
            <BoldText>NFT</BoldText>
            <p>뉴진스 앨범</p>
          </TextsBox>
          <TextsBox>
            <BoldText>Price</BoldText>
            <p>1,000 klay</p>
          </TextsBox>
        </DetailBox>
      </NFTWrapper>
    </LinkBox>
  );
}

export default NFT;
