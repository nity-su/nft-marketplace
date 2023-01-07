import React from "react";
import CollectionCall from "@components/organisms/MyCollection/CollectionCall";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-top: 128px;
  padding-left: 48px;
  padding-right: 48px;
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
