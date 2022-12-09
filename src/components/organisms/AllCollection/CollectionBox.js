import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 240px;
  height: 340px;
`;
const Img = styled.img`
  width: 220px;
  height: 230px;
  background-color: gray;
`;
const TitleText = styled.span``;
const PriceText = styled.span``;

export default function CollectionBox({ title, price }) {
  return (
    <Container>
      <Img />
      <TitleText>title</TitleText>
      <PriceText>price</PriceText>
    </Container>
  );
}
