import React from "react";
import styled from "styled-components";
import TestImg from "../../assets/images/testimg.jpg";
import NaviBox from "./NaviBox";
//import CommingSoonCarousel from "./Introduce_page/Carousel";

const BackGroundBox = styled.div`
  width: 100%;
  height: 1200px;
  background-size: cover;
`;

const MetaMusicIntroBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MetaMusicIntro = styled.div`
  margin-top: 50px;
  width: 800px;
  height: 550px;
  border-radius: 20px;
  background-image: url(${TestImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CommingSoonContainerBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CommingSoonContainer = styled.div`
  width: 1000px;
  height: 381px;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;
  background-color: white;
`;

const CommingSoonTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

const CommingSoonImgBox = styled.div`
  margin-top: 20px;
  width: 950px;
  height: 350px;
  display: flex;
  justify-content: space-around;
`;

const CommingSoonImg1 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: red;
`;

const CommingSoonImg2 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: green;
`;

const CommingSoonImg3 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: blue;
`;

function Introduce() {
  return (
    <BackGroundBox>
      <NaviBox></NaviBox>
      <MetaMusicIntroBox>
        <MetaMusicIntro></MetaMusicIntro>
      </MetaMusicIntroBox>
      <CommingSoonContainerBox>
        <CommingSoonContainer>
          <CommingSoonTitle>COMMING SOON</CommingSoonTitle>
          <CommingSoonImgBox>
            <CommingSoonImg1></CommingSoonImg1>
            <CommingSoonImg2></CommingSoonImg2>
            <CommingSoonImg3></CommingSoonImg3>
          </CommingSoonImgBox>
        </CommingSoonContainer>
      </CommingSoonContainerBox>
    </BackGroundBox>
  );
}

export default Introduce;
