import React from "react";
import CollectionCall from "@components/organisms/MyCollection/CollectionCall";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
`;

export default function MyCollection() {
  const [state, setState] = useState();

  window.ethereum
    .request({ method: "eth_requestAccounts" })
    .then((accounts) => {
      setState(accounts[0]);
    });

  console.log(state);

  return (
    <div>
      <Container>{state ? <CollectionCall address={state} /> : null}</Container>
    </div>
  );
}
