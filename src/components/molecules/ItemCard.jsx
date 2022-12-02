import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Rank = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;

  color: #000000;
`;

const Pic = styled.img`
  width: 62px;
  height: 68px;
  margin: 0px 15px 0px 25px;
  background-color: pink;
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

export default function ItemCard() {
  return (
    <Container>
      <Rank>1</Rank>
      <Pic></Pic>
      <TitleText>뉴진스 앨범</TitleText>
      <NftPrice>100 Eth</NftPrice>
      <Volume>1,000 Ether</Volume>
    </Container>
  );
}
