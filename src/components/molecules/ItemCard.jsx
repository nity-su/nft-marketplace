import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  
`;

const Rank = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  margin-right: -140px;
  
  color: #000000;
  
  height: 24px;
  
`;

const Pic = styled.img`
  width: 100px;
  height: 100px;
  margin: 0px 15px 0px 25px;
  background-color: pink;
  
  border-radius: 10px;
`;

const TitleText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-left: -35px;
  margin-right: 10px;
`;

const NftPrice = styled.span`
  margin-right: 5px;
`;

const Volume = styled.span``;

export default function ItemCard({ rank, url }) {
  return (
    <Container>
      <Rank>{rank}</Rank>
      <Pic src={url}></Pic>
      <TitleText>뉴진스 앨범</TitleText>
      <NftPrice>100 Eth</NftPrice>
      <Volume>1,000 Ether</Volume>
    </Container>
  );
}
