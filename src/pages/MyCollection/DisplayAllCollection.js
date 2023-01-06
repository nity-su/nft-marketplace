import React from "react";
import getNftsForContract from "src/services/Alchemy/getNftsForContract";

export default function DisplayAllCollection({ address }) {
  getNftsForContract(address).then((NFTs) =>
    NFTs.map((nft) => console.log(nft.id.tokenId))
  );

  return <div>DisplayAllCollection</div>;
}
