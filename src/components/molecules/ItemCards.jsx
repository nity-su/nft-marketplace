import React from "react";
import ItemCard from "./ItemCard";
import styled from "styled-components";

const Container = styled.div`
  display: column;
  width: 950px;
  height: 550px;
  grid-template-columns: 1fr 1fr;
`;

const ItemCardsWrapper = styled.div`
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 20%);
  row-gap: 12px;
`;

export default function ItemCards({ url }) {
  const first_array = [];
  const second_array = [];

  for (let i = 1; i <= 10; i++) {
    if (i < 6) {
      first_array.push(i);
    } else {
      second_array.push(i);
    }
  }

  return (
    <Container>
      <ItemCardsWrapper>
        {first_array.map((x, index) => {
          return <ItemCard key={index} rank={x} url={url} />;
        })}
      </ItemCardsWrapper>
      <ItemCardsWrapper>
        {second_array.map((x, index) => {
          return <ItemCard key={index} rank={x} url={url} />;
        })}
      </ItemCardsWrapper>
    </Container>
  );
}
