import React from "react";
import styled from "styled-components";
import Mainpick from "../../assets/images/Mainpick2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Introduce_page/Carousel";

const BackGroundBox = styled.div`
  width: 100%;
  height: 1200px;
  background-size: cover;
  justify-content: center;
`;

const MetaMusicIntroBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MetaMusicIntroContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MetaMusicIntroText = styled.div`
  width: 680px;
  height: 512px;
`;

const MetaMusicIntroImg = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background-image: url(${Mainpick});
  background-repeat: no-repeat;
  background-size: cover;
`;

const NewCollectionContainerBox = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NewCollectionContainer = styled.div`
  width: 1000px;
  height: 381px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const NewCollectionTitle = styled.div``;

const NewCollectionImgBox = styled.div`
  margin-top: 20px;
  height: 350px;
  align-items: center;
  justify-content: center;
`;

function Introduce() {
  return (
    <Section>
      <BackGroundBox className="IntroduceTextStyle">
        <MetaMusicIntroBox>
          <MetaMusicIntroContainer>
            <MetaMusicIntroText>
              <div className="h2">What is MetaMusic?</div>
              <div className="p">
                Meta Music은 음악 팬 분들을 위한 NFT 음악 거래 플랫폼입니다.
              </div>
              <div className="p">
                이 세상에 하나 밖에없는 나만의 아티스트 앨범을 지금 바로
                소유해보세요.
              </div>
            </MetaMusicIntroText>
            <MetaMusicIntroImg></MetaMusicIntroImg>
          </MetaMusicIntroContainer>
        </MetaMusicIntroBox>
        <NewCollectionContainerBox>
          <NewCollectionContainer>
            <NewCollectionTitle className="NewCollection">
              New Collection
            </NewCollectionTitle>
            <NewCollectionImgBox>
              <Carousel></Carousel>
            </NewCollectionImgBox>
          </NewCollectionContainer>
        </NewCollectionContainerBox>
      </BackGroundBox>
    </Section>
  );
}

export default Introduce;

const Section = styled.section`
  .IntroduceTextStyle {
    font-family: "Noto Sans KR", sans-serif;

    .h2 {
      margin-top: 150px;
      margin-left: 40px;
      font-weight: 700;
      font-size: 50px;
      color: #6246ea;
    }

    .p {
      margin-top: 40px;
      margin-left: 40px;
      margin-right: 40px;
      font-weight: 500;
      font-size: 20px;
      color: gray;
    }

    .NewCollection {
      font-weight: 700;
      font-size: 30px;
      margin-left: 10px;
      color: #6246ea;
    }
  }
`;
