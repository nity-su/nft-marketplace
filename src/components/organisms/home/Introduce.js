import React from "react";
import styled from "styled-components";
import TestImg from "../../assets/images/testimg.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Introduce_page/Carousel";
import "../home/css/styles.css";

const BackGroundBox = styled.div`
  width: 100%;
  height: 1200px;
  background-size: cover;
  justify-content: center;
`;

const MetaMusicIntroBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MetaMusicIntro = styled.div`
  margin-top: 80px;
  margin-right: 20px;
  width: 1100px;
  height: 750px;
  border-radius: 20px;
  background-image: url(${TestImg});
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
    <BackGroundBox>
      <MetaMusicIntroBox>
        <MetaMusicIntro></MetaMusicIntro>
      </MetaMusicIntroBox>
      <NewCollectionContainerBox>
        <NewCollectionContainer>
          <NewCollectionTitle className="NewCollectionTextStyle">
            New Collection
          </NewCollectionTitle>
          <NewCollectionImgBox>
            <Carousel></Carousel>
          </NewCollectionImgBox>
        </NewCollectionContainer>
      </NewCollectionContainerBox>
    </BackGroundBox>
  );
}

export default Introduce;
