import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/images/metamusic_test_logo.png";
import UserProfile from "../../assets/images/user_profile.png";
import SearchLens from "../../assets/images/searchlens.png";
import Wallet from "../../assets/images/wallet.png";

const Navibox = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: white;
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

function NaviBox() {
  return (
    <Navibox>
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
    </Navibox>
  );
}

export default NaviBox;
