import React from "react";
import styled from "styled-components";
import TestImg2 from "@components/organisms/tradeplace/newjeans.png";
import NaviBox from "@components/organisms/home/NaviBox";
import "../home/css/tradeplace.css";
import { height } from "@mui/system";

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

const PriceTextBoxDetail1 = styled.div`
  width: 150px;
  height: 44px;
  font-size: 36px;
  font-weight: bold;
`;

const PriceTextBoxDetail2 = styled.div`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e78ff;
  border-radius: 15px;
`;

const ButtonBuyText = styled.div`
  font-size: 32px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
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

const ButtonSuggestText = styled.div`
  font-size: 32px;
  font-weight: bold;
  display: flex;
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
  display: flex;
  background-color: whitesmoke;
  border-radius: 15px;
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
  background-color: whitesmoke;
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

const TransactionBox = styled.div`
  width: 525px;
  height: 380px;
  margin-top: 10px;
  margin-left: 35px;
  background-color: whitesmoke;
  border-radius: 15px;
`;

const TransactionTitleBox = styled.div`
  width: 523px;
  height: 76px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TransactionTitleTextBox = styled.div`
  width: 162px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;

const Line = styled.div`
  width: 523px;
  height: 1px;
  background-color: black;
`;

const TransactionContentBox = styled.div`
  width: 523px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TransactionContentTextBox = styled.div`
  width: 97px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
`;

const TransactionDetailBox = styled.div`
  width: 523px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
`;

const TransactionDetailIndivBox = styled.div`
  width: 523px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TransactionDetailIndivTextBox = styled.div`
  width: 97px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
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
              <PriceTextBox1>Price</PriceTextBox1>
              <PriceTextBox2>
                <PriceTextBoxDetail1>1,000</PriceTextBoxDetail1>
                <PriceTextBoxDetail2>KLAY</PriceTextBoxDetail2>
              </PriceTextBox2>
              <ButtonContainer>
                <ButtonBuy>
                  <ButtonBuyText>
                    <h1>구매</h1>
                  </ButtonBuyText>
                </ButtonBuy>
                <ButtonSuggest>
                  <ButtonSuggestText>
                    <h1>가격 제안</h1>
                  </ButtonSuggestText>
                </ButtonSuggest>
              </ButtonContainer>
            </PriceBox>
          </LeftBox>
          <RightBox>
            <NFTTitle>
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
              <NFTInfoBox_Title>상세 정보</NFTInfoBox_Title>
              <NFTInfoBox_Detail>
                어디서든 편하게 들을 수 있는 세련된 이지리스닝 팝을 추구하는
                동시에 과장 없는 자연스러운 사운드 엔지니어링으로 NewJeans
                맴버들 본연의 목소리를 살리는 프로듀싱을 진행했다.앨범의 수록돈
                4곡은 NewJeans 멤버들의 순수하고 자연스러운 매력과 10대 고유의
                에너지를 오롯이 담아내고 있다.
              </NFTInfoBox_Detail>
            </NFTDetailBox>
            <TransactionBox>
              <TransactionTitleBox>
                <TransactionTitleTextBox>거래 내역</TransactionTitleTextBox>
                <TransactionTitleTextBox>가격 제안</TransactionTitleTextBox>
                <TransactionTitleTextBox>유틸리티</TransactionTitleTextBox>
              </TransactionTitleBox>
              <Line></Line>
              <TransactionContentBox>
                <TransactionContentTextBox>Event</TransactionContentTextBox>
                <TransactionContentTextBox>Price</TransactionContentTextBox>
                <TransactionContentTextBox>From</TransactionContentTextBox>
                <TransactionContentTextBox>To</TransactionContentTextBox>
                <TransactionContentTextBox>Date</TransactionContentTextBox>
              </TransactionContentBox>
              <Line></Line>
              <TransactionDetailBox>
                <TransactionDetailIndivBox>
                  <TransactionDetailIndivTextBox>
                    Transfer
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    -
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    지갑주소
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    지갑주소
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    00 days ago
                  </TransactionDetailIndivTextBox>
                </TransactionDetailIndivBox>
                <TransactionDetailIndivBox>
                  <TransactionDetailIndivTextBox>
                    Transfer
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    -
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    지갑주소
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    지갑주소
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    00 days ago
                  </TransactionDetailIndivTextBox>
                </TransactionDetailIndivBox>
                <TransactionDetailIndivBox>
                  <TransactionDetailIndivTextBox>
                    Transfer
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    -
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    지갑주소
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    지갑주소
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    00 days ago
                  </TransactionDetailIndivTextBox>
                </TransactionDetailIndivBox>
                <TransactionDetailIndivBox>
                  <TransactionDetailIndivTextBox>
                    Transfer
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    -
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    지갑주소
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    지갑주소
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    00 days ago
                  </TransactionDetailIndivTextBox>
                </TransactionDetailIndivBox>
                <TransactionDetailIndivBox>
                  <TransactionDetailIndivTextBox>
                    Transfer
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    -
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    지갑주소
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    지갑주소
                  </TransactionDetailIndivTextBox>
                  <TransactionDetailIndivTextBox>
                    00 days ago
                  </TransactionDetailIndivTextBox>
                </TransactionDetailIndivBox>
              </TransactionDetailBox>
            </TransactionBox>
          </RightBox>
        </Container>
      </TradeplaceBackGroundContainer>
    </BackGroundContainer>
  );
}

export default Tradeplace;
