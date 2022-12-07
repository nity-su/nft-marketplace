import React from "react";
import styled from "styled-components";
import TestImg2 from "@components/organisms/tradeplace/newjeans.png";
import NaviBox from "@components/organisms/home/NaviBox";

const BackGroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const TradeplaceBackGroundContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 867px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 1024px;
  background-color: gray;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const NftImg = styled.div`
  margin-top: 50px;
  margin-left: 35px;
  width: 399px;
  height: 381px;
  border-radius: 20px;
  background-image: url(${TestImg2});
  background-repeat: no-repeat;
  background-size: cover;
`;

const PriceBox = styled.div`
  margin-top: 10px;
  margin-left: 35px;
`;

const PriceTextBox = styled.div`
  width: 50px;
  height: 30px;
  font-size: 22px;
  font-weight: bold;
`;

const PriceBox_2 = styled.div`
  margin-top: 10px;
  width: 399px;
  height: 90px;
  flex-direction: row;
`;

const PriceTextBox2 = styled.div`
  width: 150px;
  height: 44px;
  font-size: 36px;
  font-weight: bold;
`;

const PriceTextBox3 = styled.div`
  width: 150px;
  height: 44px;
  font-size: 16px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  width: 399px;
  height: 71px;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  flex-direction: row;
`;

const ButtonBuy = styled.div`
  width: 196px;
  height: 71px;
  display: flex;
  justify-content: center;
  background-color: silver;
  font-size: 32px;
  font-weight: bold;
  font-style: color white;
`;

const ButtonSuggest = styled.div`
  width: 196px;
  height: 71px;
  display: flex;
  justify-content: center;
  background-color: silver;
  font-size: 32px;
  font-weight: bold;
  font-style: color white;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const NFTTitle = styled.div`
  width: 523px;
  height: 80px;
  margin-top: 50px;
  margin-left: 35px;
  font-size: 32px;
  font-weight: bold;
`;

const UserInfoBox = styled.div`
  width: 523px;
  height: 35px;
  margin-top: 10px;
  margin-left: 35px;
  background-color: white;
  border-radius: 15px;
`;

const NFTDetailBox = styled.div`
  width: 523px;
  height: 248px;
  margin-top: 10px;
  margin-left: 35px;
  background-color: white;
  border-radius: 15px;
`;

const NFTInfoBox_Title = styled.div`
  width: 594px;
  height: 44px;
  margin-top: 10px;
  margin-left: 15px;
  font-size: 32px;
  font-weight: bold;
`;

const NFTInfoBox_Detail = styled.div`
  width: 495px;
  height: 44px;
  margin-top: 10px;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`;

const TransactionDetailBox = styled.div`
  width: 525px;
  margin-top: 10px;
  margin-left: 35px;
  background-color: white;
  border-radius: 15px;
`;

function Tradeplace() {
  return (
    <BackGroundContainer>
      <NaviBox></NaviBox>
      <TradeplaceBackGroundContainer>
        <Container>
          <LeftBox>
            <NftImg></NftImg>
            <PriceBox>
              <PriceTextBox>Price</PriceTextBox>
              <PriceBox_2>
                <PriceTextBox2>1,000</PriceTextBox2>
                <PriceTextBox3>KLAY</PriceTextBox3>
              </PriceBox_2>
              <ButtonContainer>
                <ButtonBuy>구매</ButtonBuy>
                <ButtonSuggest>가격 제안</ButtonSuggest>
              </ButtonContainer>
            </PriceBox>
          </LeftBox>
          <RightBox>
            <NFTTitle>
              NEW JEANS 블루 북 어텐션 하이프보이 쿠키 굿즈 Attention
            </NFTTitle>
            <UserInfoBox></UserInfoBox>
            <NFTDetailBox>
              <NFTInfoBox_Title>상세 정보</NFTInfoBox_Title>
              <NFTInfoBox_Detail>
                어디서든 편하게 들을 수 있는 세련된 이지리스닝 팝을 추구하는
                동시에 과장 없는 자연스러운 사운드 엔지니어링으로 NewJeans
                맴버들 본연의 목소리를 살리는 프로듀싱을 진행했다.앨범의 수록돈
                4곡은 NewJeans 멤버들의 순수하고 자연스러운 매력과 10대 고유의
                에너지를 오롯이 담아내고 있다.
              </NFTInfoBox_Detail>
            </NFTDetailBox>
            <TransactionDetailBox></TransactionDetailBox>
          </RightBox>
        </Container>
      </TradeplaceBackGroundContainer>
    </BackGroundContainer>
  );
}

export default Tradeplace;
