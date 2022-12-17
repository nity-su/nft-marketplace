import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/images/MetaMusic_Logo_02.png";
import UserProfile from "../../assets/images/user_profile.png";
import SearchLens from "../../assets/images/searchlens.png";
import Wallet from "../../assets/images/wallet.png";
import { Link, Outlet } from "react-router-dom";

const Navibox = styled.div`
  opacity: 0.9;
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 999;
`;

const LogoBox = styled(Link)`
  width: 200px;
  height: 70px;
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
  margin-left: 80px;
  width: 53px;
  height: 17px;
  display: flex;
  justify-content: center;
  text-decoration-color: gray;
  font-size: 20px;
`;

const MarketAllBoxLink = styled(Link)`
  margin-top: 25px;
  width: 100px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;

  text-decoration: none;
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

function clickMe() {
  alert("페이지 링크 예정");
}

function NaviBox() {
  return (
    <>
      <Navibox>
        <LogoBox to="/"></LogoBox>
        <SearchBoxContainer>
          <SearchBox>
            <LensBox></LensBox>
            <LensTextBox classNAme="app">
              <input type="text" placeholder="Search" className="search" />
            </LensTextBox>
          </SearchBox>
        </SearchBoxContainer>
        <MarketAllBoxLink to="/allcollection">Market All</MarketAllBoxLink>
        {/* <MarketAllBox>Market All</MarketAllBox> */}
        <QnABox onClick={clickMe}>FAQ</QnABox>
        <ProfileBox onClick={clickMe}>
          <ProfileImgBox></ProfileImgBox>
          <ProfileTextBox>Profile</ProfileTextBox>
        </ProfileBox>
        <ConnectWalletContainer onClick={clickMe}>
          <ConnectWalletImg></ConnectWalletImg>
          <ConnectWalletText>Connect Wallet</ConnectWalletText>
        </ConnectWalletContainer>
      </Navibox>
      <Outlet />
    </>
  );
}

export default NaviBox;
