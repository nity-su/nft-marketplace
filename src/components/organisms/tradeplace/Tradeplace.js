import React from "react";
import styled from "styled-components";
import TestImg2 from "src/components/assets/images/newjeans.png";
import TxBoxTab from "./TxDetail/TxBoxTab";

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
  margin-top: 30px;
  margin-left: 35px;
`;

const PriceTextBox1 = styled.div`
  width: 50px;
  height: 30px;
  font-size: 22px;
  font-weight: bold;
`;

const PriceTextBox2 = styled.div`
  margin-top: 10px;
  width: 399px;
  height: 90px;
  flex-direction: row;
`;

const PriceTextBoxDetail = styled.div`
  margin-top: 10px;
  width: 300px;
  height: 44px;
  font-size: 36px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e78ff;
  border-radius: 15px;
`;

const ButtonSuggest = styled.div`
  width: 196px;
  height: 71px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e78ff;
  border-radius: 15px;
  font-size: 32px;
  font-weight: bold;
`;

const RightBox = styled.div`
  margin-left: 20px;
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
  margin-top: 30px;
  margin-left: 35px;
  display: flex;
  border-radius: 15px;
  color: #3f3f3f;
`;

const SupplierBox = styled.div`
  width: 500px;
  height: 33px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SupplierImgBox = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 20px;
  background-image: url(${TestImg2});
  background-repeat: no-repeat;
  background-size: cover;
`;

const SupplierTextBox = styled.div`
  margin-top: 18px;
  margin-left: 10px;
  width: 210px;
  height: 33px;
  font-size: 14px;
  font-weight: bold;
`;

const NFTDetailBox = styled.div`
  width: 523px;
  height: 248px;
  margin-top: 10px;
  margin-left: 35px;
  border-radius: 15px;
`;

const NFTInfoBoxTitle = styled.div`
  width: 594px;
  height: 44px;
  margin-top: 20px;
  margin-left: 15px;
  font-size: 32px;
  font-weight: bold;
`;

const NFTInfoBoxDetail = styled.div`
  width: 495px;
  height: 44px;
  margin-top: 10px;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`;

const BuySuggestButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  padding: 0px 0px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 15px;
`;

function clickMe() {
  alert("페이지 링크 예정");
}

function TradeplaceEX() {
  return (
    <Section>
      <BackGroundContainer className="TradeplaceDefaultFont">
        <TradeplaceBackGroundContainer>
          <Container>
            <LeftBox>
              <NftImg></NftImg>
              <PriceBox>
                <PriceTextBox1>Price</PriceTextBox1>
                <PriceTextBox2>
                  <PriceTextBoxDetail>1,000 Klay</PriceTextBoxDetail>
                </PriceTextBox2>
                <ButtonContainer>
                  <BuySuggestButton onClick={clickMe}>
                    <ButtonBuy className="buybutton">구매</ButtonBuy>
                  </BuySuggestButton>
                  <BuySuggestButton onClick={clickMe}>
                    <ButtonSuggest>
                      <ButtonBuy className="buybutton">가격 제안</ButtonBuy>
                    </ButtonSuggest>
                  </BuySuggestButton>
                </ButtonContainer>
              </PriceBox>
            </LeftBox>
            <RightBox>
              <NFTTitle className="TradeplaceAlbumTitle">
                NEW JEANS 블루 북 어텐션 하이프보이 쿠키 굿즈 Attention
              </NFTTitle>
              <UserInfoBox>
                <SupplierBox>
                  <SupplierImgBox></SupplierImgBox>
                  <SupplierTextBox>공급자 : Meta Music</SupplierTextBox>
                </SupplierBox>
                <SupplierBox>
                  <SupplierTextBox>소유자 : 0x0000. . .</SupplierTextBox>
                </SupplierBox>
              </UserInfoBox>
              <NFTDetailBox>
                <NFTInfoBoxTitle className="TradeplaceAlbumDetailTitle">
                  상세 정보
                </NFTInfoBoxTitle>
                <NFTInfoBoxDetail className="TradeplaceAlbumDetail">
                  어디서든 편하게 들을 수 있는 세련된 이지리스닝 팝을 추구하는
                  동시에 과장 없는 자연스러운 사운드 엔지니어링으로 NewJeans
                  맴버들 본연의 목소리를 살리는 프로듀싱을 진행했다.앨범의
                  수록돈 4곡은 NewJeans 멤버들의 순수하고 자연스러운 매력과 10대
                  고유의 에너지를 오롯이 담아내고 있다.
                </NFTInfoBoxDetail>
              </NFTDetailBox>
              <TxBoxTab></TxBoxTab>
            </RightBox>
          </Container>
        </TradeplaceBackGroundContainer>
      </BackGroundContainer>
    </Section>
  );
}

export default TradeplaceEX;

const Section = styled.section`
  .TradeplaceDefaultFont {
    font-family: "Noto Sans KR", sans-serif;
  }

  .buybutton {
    font-size: 32px;
    font-weight: bold;
    color: white;
  }

  .TradeplaceAlbumTitle {
    font-size: 30px;
    line-height: 1.4;
  }

  .TradeplaceAlbumDetailTitle {
    font-size: 26px;
  }

  .TradeplaceAlbumDetail {
    font-size: 15px;
    font-weight: 500;
    color: #3f3f3f;
    line-height: 1.7;
  }
`;
