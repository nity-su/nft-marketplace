import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/images/metamusic_test_logo.png";
import TestImg from "../../assets/images/testimg.jpg";
import UserProfile from "../../assets/images/user_profile.png";
import SearchLens from "../../assets/images/searchlens.png";
import Wallet from "../../assets/images/wallet.png";
//import CommingSoonCarousel from "./Introduce_page/Carousel";

const BackGroundBox = styled.div`
  width: 100%;
  height: 1200px;
  background-size: cover;
`;

const NaviBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LogoBox = styled.div`
  width: 200px;
  height: 100px;
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-size: contain;
`;

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SearchBox = styled.div`
  margin-top: 10px;
  width: 340px;
  height: 50px;
  border-color: black;
  border-width: solid;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: whitesmoke;
`;

const LensBox = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  background-image: url(${SearchLens});
`;

const LensTextBox = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  width: 53px;
  height: 17px;
  display: flex;
  justify-content: center;
  text-decoration-color: gray;
  font-size: 20px;
`;

const MarketAllBox = styled.div`
  margin-top: 25px;
  width: 100px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const QnABox = styled.div`
  margin-top: 25px;
  width: 100px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const ProfileBox = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const ProfileImgBox = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${UserProfile});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProfileTextBox = styled.div`
  width: 100px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const ConnectWalletContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const ConnectWalletImg = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${Wallet});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ConnectWalletText = styled.div`
  width: 170px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
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
      <NaviBox>
        <LogoBox></LogoBox>
        <SearchBoxContainer>
          <SearchBox>
            <LensBox></LensBox> <LensTextBox>Search</LensTextBox>
          </SearchBox>
        </SearchBoxContainer>
        <MarketAllBox>Market All</MarketAllBox>
        <QnABox>Q&A</QnABox>
        <ProfileBox>
          <ProfileImgBox></ProfileImgBox>
          <ProfileTextBox>Profile</ProfileTextBox>
        </ProfileBox>
        <ConnectWalletContainer>
          <ConnectWalletImg></ConnectWalletImg>
          <ConnectWalletText>Connect Wallet</ConnectWalletText>
        </ConnectWalletContainer>
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
