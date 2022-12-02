import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/images/metamusic_test_logo.png";

const BackGroundBox = styled.div`
  width: 100%;
  height: 867px;
  background-size: cover;
`;

const NaviBox = styled.div`
  width: 100%;
  height: 70px;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LogoBox = styled.div`
  width: 90px;
  height: 50px;
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-size: contain;
`;

const SearchBox = styled.div`
  width: 340px;
  height: 30px;
  border-radius: 30;
  background-color: white;
  flex-direction: row;
`;

const LensBox = styled.div`
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const LensTextBox = styled.div`
  width: 53px;
  height: 17px;
  display: flex;
  justify-content: center;
  background-color: yellow;
  text-decoration-color: gray;
`;

const MarketAllBox = styled.div`
  width: 100px;
  height: 24px;
  display: flex;
  justify-content: center;
`;

const QnABox = styled.div`
  width: 100px;
  height: 24px;
  display: flex;
  justify-content: center;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const ProfileImgBox = styled.div`
  width: 33px;
  height: 33px;
  background-color: black;
`;

const ProfileTextBox = styled.div`
  width: 100px;
  height: 24px;
  display: flex;
  justify-content: center;
  background-color: yellow;
  text-decoration-color: gray;
`;

const MetaMusicIntroBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MetaMusicIntro = styled.div`
  width: 893px;
  height: 400px;
  background-color: orange;
`;

const CommingSoonContainerBox = styled.div`
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

const CommingSoonTitle = styled.div``;

const CommingSoonImgBox = styled.div`
  width: 950px;
  height: 350px;
  background-color: blueviolet;
  display: flex;
  justify-content: space-around;
`;

const CommingSoonImg1 = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
`;

const CommingSoonImg2 = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
`;

const CommingSoonImg3 = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
`;

function Introduce() {
  return (
    <BackGroundBox>
      <NaviBox>
        <LogoBox></LogoBox>
        <SearchBox>
          <LensBox></LensBox> <LensTextBox>Search</LensTextBox>
        </SearchBox>
        <MarketAllBox>Market All</MarketAllBox>
        <QnABox>Q&A</QnABox>
        <ProfileBox>
          <ProfileImgBox></ProfileImgBox>
          <ProfileTextBox>Profile</ProfileTextBox>
        </ProfileBox>
      </NaviBox>
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
