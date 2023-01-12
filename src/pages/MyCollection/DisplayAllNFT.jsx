import React from "react";
import { useEffect } from "react";
// import { useEffect, useState } from "react";
import runMain from "@components/organisms/MyCollection/getNFT";
// import Web3 from "web3";

export default function DisplayAllNFT({ array }) {
  // const [state, setState] = useState();
  // console.log(array);
  useEffect(() => {
    async function CallAllNFT() {
      // const NftsOwned = await runMain(array);
      // console.log(NftsOwned);
      const list = await Promise.all(array.map((address) => runMain(address)));
      const listNFTS = list.map((nftsList) => {
        return nftsList.nfts;
      });

      listNFTS.map((nft) => console.log(nft));

      // console.log(listTokenID);

      // console.log(list);

      // setState(list)
    }
    CallAllNFT();
  }, [array]);
  return (
    <div>
      {/* {state
        ? state.map((nft) => {
            console.log(nft);
          })
        : null} */}
    </div>
  );
}

// const list = await Promise.all(
// NftsOwned.ownedNfts.filter((result) => {
//   if (array.includes(result.contract.address)) {
//     return true;
//   } else {
//     return false;
//   }
// })
// );
