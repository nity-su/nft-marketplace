import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/images/MetaMusic_Logo_02.png";
import { Link, Outlet } from "react-router-dom";
import ConnectWallet from "./NaviBox_page/ConnectWallet";
import DropButton from "./NaviBox/DropButton";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

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
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const QnABox = styled.div`
  width: 100px;
  height: 24px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

// const ProfileImgBox = styled.div`
//   width: 24px;
//   height: 24px;
//   background-image: url(${UserProfile});
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

// const ProfileTextBox = styled.div`
//   width: 100px;
//   height: 24px;
//   display: flex;
//   justify-content: center;
// `;


const Label = styled.label`
  width: 50px;
  height: 15xp;
`;


function clickhi() {
  window.scroll({
    top: 2400,
    left: 100,
    behavior: "smooth",
  });
}

function NaviBox() {
  let navigate = useNavigate();
  const routeChange = (name) => {
    // let path = `newPath`;
    navigate("/temp", { state: name });
  };
  let serachInfo;
  const [address, setAddr] = useState();

  return (
    <Section>
      <Navibox className="NaviBoxFonts">
        <LogoBox to="/"></LogoBox>
        <div>
          <input
            placeholder="Search"
            className="testsearch"
            onChange={(e) => {
              serachInfo = e.target.value;
            }}
          />
          <Label htmlFor="testsearch" onClick={() => routeChange(serachInfo)}>
            클릭
          </Label>
        </div>
        <MarketAllBoxLink to="/allcollection">Market All</MarketAllBoxLink>
        <QnABox onClick={clickhi}>FAQ</QnABox>
        {/* <ProfileBox onClick={clickMe}>
          <ProfileImgBox></ProfileImgBox>
          <ProfileTextBox>Profile</ProfileTextBox>
        </ProfileBox> */}
        <ProfileBox>
          <DropButton address={address} />
        </ProfileBox>
        <ConnectWallet setAddr={setAddr} />
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
    font-family: "Noto Sans KR", sans-serif;
  }

  .NaviBoxFonts {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
    font-size: 20px;
  }
`;
