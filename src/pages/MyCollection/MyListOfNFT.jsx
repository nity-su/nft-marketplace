import React from "react";
import { useEffect } from "react";

import styled from "styled-components";
import DisplayAllNFT from "./DisplayAllNFT";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 76px;
`;

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 240px);
  column-gap: 16px;
  row-gap: 48px;
  grid-template-rows: auto;
`;

export default function MyListOfNFT({ array }) {
  useEffect(() => {});

  return (
    <Container>
      <CollectionGrid>
        <DisplayAllNFT array={array} />
      </CollectionGrid>
    </Container>
  );
}
