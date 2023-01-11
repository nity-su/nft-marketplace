import React from "react";
import { useEffect, useState } from "react";
import runMain from "@components/organisms/RegisterCollection/getNFT";

export default function DisplayAllNFT({ array }) {
  const [state, setState] = useState();
  useEffect(() => {
    async function CallAllNFT() {
      const NftsOwned = await runMain();

      const list = await Promise.all(
        NftsOwned.ownedNfts.filter((result) => {
          if (array.includes(result.contract.address)) {
            return true;
          } else {
            return false;
          }
        })
      );

      setState(list);
    }
    CallAllNFT();
  }, [array]);
  return <div>{state.map((nft) => {})}</div>;
}
