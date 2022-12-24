import styled from "styled-components";
import LogoImg from "../../assets/images/MetaMusic_Logo_02.png";
import UserProfile from "../../assets/images/user_profile.png";
import { Link, Outlet } from "react-router-dom";
import ConnectWallet from "./NaviBox_page/ConnectWallet";

const Navibox = styled.div`
  opacity: 0.9;
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 999;
`;

const LogoBox = styled(Link)`
  width: 200px;
  height: 70px;
  margin-top: 35px;
  margin-left: 10px;
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-size: contain;
`;

const MarketAllBoxLink = styled(Link)`
  width: 100px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const QnABox = styled.div`
  width: 100px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const ProfileBox = styled.div`
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

function clickMe() {
  alert("페이지 링크 예정");
}

function NaviBox() {
  return (
    <Section>
      <Navibox>
        <LogoBox to="/"></LogoBox>

        <input placeholder="Search" className="searchbox" />

        <MarketAllBoxLink to="/allcollection">Market All</MarketAllBoxLink>
        <QnABox onClick={clickMe}>FAQ</QnABox>
        <ProfileBox onClick={clickMe}>
          <ProfileImgBox></ProfileImgBox>
          <ProfileTextBox>Profile</ProfileTextBox>
        </ProfileBox>
        <ConnectWallet />
      </Navibox>
      <Outlet />
    </Section>
  );
}

export default NaviBox;

const Section = styled.section`
  .searchbox {
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    border-radius: 20px;
  }
`;
