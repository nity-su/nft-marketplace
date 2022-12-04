import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`;

const Rank = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;

  color: #000000;
  width: 24px;
  height: 24px;
`;

const Pic = styled.img`
  width: 68px;
  height: 68px;
  margin: 0px 15px 0px 25px;
  background-color: pink;

  border-radius: 10px;
`;

const TitleText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  margin-right: 20px;
`;

const NftPrice = styled.span`
  margin-right: 24px;
`;

const Volume = styled.span``;

export default function ItemCard({ rank }) {
  return (
    <Container>
      <Rank>{rank}</Rank>
      <Pic></Pic>
      <TitleText>뉴진스 앨범</TitleText>
      <NftPrice>100 Eth</NftPrice>
      <Volume>1,000 Ether</Volume>
    </Container>
  );
}
