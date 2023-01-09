import React from "react";
import { useEffect } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

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

export default function DownLoad() {
  const { state } = useLocation();
  const name = state;

  const [contractAddr, setcontractAddr] = useState([]);
  useEffect(() => {
    if (!name) {
      return;
    }
    async function fetchGetName() {
      await fetch("https://csw-api.vercel.app/sql/getName", {
        method: "POST",
        body: JSON.stringify({ name: `${name}` }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((x) => {
          return x.json();
        })
        .then((x) => {
          console.log(x);
          setcontractAddr(x);
        });
    }
    fetchGetName();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <CollectionGrid>
        {contractAddr ? contractAddr.map((address) => {}) : null}
      </CollectionGrid>
    </Container>
  );
}
