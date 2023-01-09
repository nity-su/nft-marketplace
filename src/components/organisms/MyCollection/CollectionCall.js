import React from "react";
import styled from "styled-components";
import { Alchemy, Network } from "alchemy-sdk";
import { useState } from "react";
import { useEffect } from "react";
import CollectionBox from "./CollectionBox";

const CollectionGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(20vw, 100%), 1fr));
  grid-auto-rows: minmax(180px, auto);
  column-gap: 16px;
  row-gap: 48px;
`;

const config = {
  apiKey: "SF8OJ6n9AXQ8ViiDRTnFrv1-rBd_3VY-",
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(config);

// Fetch all the NFTs owned by elanhalpern.eth
/**
 * @todo token Name이 나오도록 API 서버 수정, 추후에는 filter로 변환 필요
 */
const main = async (address) => {
  // Get all NFTs
  console.log("main", address);
  let result = await alchemy.nft.getContractsForOwner(address);
  return new Promise((reslove, resject) => {
    reslove(result);
  });
  // Print NFTs
};

export default function CollectionCall({ address }) {
  const [state, setState] = useState();

  useEffect(() => {
    if (state) {
      return;
    }

    main(address)
      .then((result) => result.contracts)
      .then((contracts) => {
        return Promise.allSettled(
          contracts.map((contract) => {
            return fetchCall(contract.address);
          })
        ).then(async (results) => {
          const all = [];

          results.map(async (result, num) => {
            if (result.status === "fulfilled") {
              const promise = result.value.json();
              const Address = await promise
                .then((x) => (x[0] ? x[0].address : null))
                .catch((err) => console.log(err));
              if (Address !== null) {
                all.push(Address);
              }
            }
            if (result.status === "rejected") {
            }
          });
          return all;
        });
      })
      .then((all) => {
        console.log(all);
        setState(all);
      });
    // eslint-disable-next-line
  }, []);

  function fetchCall(contractAD) {
    return fetch("https://csw-api.vercel.app/sql/getAddOfOwner", {
      method: "post",
      body: JSON.stringify({
        owner: `${contractAD}`,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  if (!address) {
    return;
  }

  return (
    <>
      {state ? (
        <CollectionGrid>
          <CollectionBox contracts={state} />;
        </CollectionGrid>
      ) : null}
    </>
  );
}
