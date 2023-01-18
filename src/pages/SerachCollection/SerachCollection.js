import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import styled from "styled-components";
import { Cloudinary } from "@cloudinary/url-gen";
import CollectionBox from "@components/organisms/SerachCollection/CollectionBox";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dzg47jvzj",
  },
});
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
  const location = useLocation();
  const name = location.state;
  console.log(location.pathname);
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
    <>
      {location.pathname === "/SerachCollection" && (
        <Container>
          <CollectionGrid>
            {contractAddr
              ? contractAddr.map((result) => {
                  return (
                    <CollectionBox
                      address={result.address.toLowerCase()}
                      cloudinary={cld}
                    />
                  );
                })
              : null}
          </CollectionGrid>
        </Container>
      )}
      <Outlet />
    </>
  );
}
