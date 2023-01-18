import React from "react";
import styled from "styled-components";
import { Alchemy, Network } from "alchemy-sdk";
import { useState } from "react";
import { useEffect } from "react";
import CollectionBox from "./CollectionBox";
import DisplayAllNFT from "@components/organisms/MyCollection/DisplayAllNFT";

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
  const [switchPageAllNft, setSwitchToPage] = useState(true);
  // const [MyListNft,setMyListNft] = useState();

  useEffect(() => {
    if (state) {
      return;
    }
    async function call() {
      const contracts = await main(address).then((result) => result.contracts);
      const settleResult = await Promise.allSettled(
        contracts.map((contract) => {
          return fetchCall(contract.address);
        })
      );

      console.log("settleResult", settleResult);

      const allCorretContract = await Promise.all(
        settleResult.map((result) => {
          if (result.status === "fulfilled") {
            const promise = result.value.json();
            console.log(result);
            console.log(promise);
            if (promise) {
              return promise;
            } else {
              //eslint-disable-next-line
              return; //undefined
            }
          } else {
            //eslint-disable-next-line
            return; //undefined
          }
        })
      );

      const all = allCorretContract
        .filter((element) => element.length !== 0)
        .map((result) => result[0].address);

      setState(all);
      // await Promise.all(allCorretContract.filter(result=>{
      //   if(result[0]){
      //     if(result[0].address)
      //   }else{
      //     return false;
      //   }
      // }));

      // const contracts =await main(address)
      //  .then(async (contracts) => {
      //  return await Promise.allSettled(
      //    contracts.map((contract) => {
      //      return fetchCall(contract.address);
      //    })
      //  ).then(async (results) => {
      //    const all = [];

      //  results.map(async (result, num) => {
      //    if (result.status === "fulfilled") {
      //      const promise = result.value.json();

      //      const Address = await promise
      //        .then((x) => (x[0] ? x[0].address : null))
      //        .catch((err) => console.log(err));
      //      if (Address !== null) {
      //        return;
      //      }
      //    }
      //    if (result.status === "rejected") {
      //    }
      //      });
      //      return all;
      //    });
      //  })
      //  .then((all) => {
      //    console.log(all);
      //    setState(all);
      //  });
    }
    call();
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
      <Nav>
        <ul>
          <li
            onClick={() => {
              setSwitchToPage(true);
            }}
          >
            Collection
          </li>

          <li
            onClick={() => {
              setSwitchToPage(false);
            }}
          >
            NFTS
          </li>
        </ul>
      </Nav>
      {state ? (
        switchPageAllNft ? (
          <CollectionGrid>
            <CollectionBox contracts={state} />;
          </CollectionGrid>
        ) : (
          <DisplayAllNFT array={state}></DisplayAllNFT>
        )
      ) : null}
    </>
  );
}

const Nav = styled.nav`
  margin: 25px;
  background: #f9f9f9;
  padding: 16px;
  ul {
    list-style: none;
    display: flex;

    li {
      margin: 50px;

      text-decoration: none;
      color: #8f8f8f;
      font-size: 24px;
      font-weight: 400;
      transition: all 0s ease-in-out;
      position: relative;
      text-transform: uppercase;

      &::before {
        content: attr(data-item);
        transition: 0s;
        color: #8254ff;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0;
        overflow: hidden;
      }

      &:hover {
        &::before {
          width: 100%;
          transition: all 0s ease-in-out;
        }
      }
    }
  }
`;
