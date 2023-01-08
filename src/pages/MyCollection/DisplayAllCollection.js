import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import getNftsForContract from "src/services/Alchemy/getNftsForContract";
import DisplayAllNft from "@components/organisms/AllCollection/DisplayAllNft";

export default function DisplayAllCollection() {
  const [state, setState] = useState();

  const location = useLocation();
  const { address } = location.state;

  console.log(address);
  getNftsForContract(address).then((result) => {
    if(!state)
    setState(result.nfts);
  });

  return <div>{state ? <DisplayAllNft array={state} /> : null}</div>;
}
