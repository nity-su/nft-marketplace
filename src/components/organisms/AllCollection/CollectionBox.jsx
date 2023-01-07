import styled from "styled-components";
import { useState } from "react";
import Web3 from "web3";
import TokenUriABI from "@contracts/TokenUri.json";

const Container = styled.div`
  width: 240px;
  height: 340px;
`;
const Img = styled.img`
  width: 220px;
  height: 230px;
  background-color: gray;
`;
const TitleText = styled.span``;
const PriceText = styled.span``;

export default function CollectionBox({ thumbnail, title, price }) {
  // const [state, setState] = useState();

  // async function getMethods() {
  //   const provider =
  //     process.env.PROVIDER_URL ||
  //     "https://goerli.infura.io/v3/b6b8a50b28304843adddcd4cf34098bd";

  //   var web3Provider = new Web3.providers.HttpProvider(provider);

  //   var web3 = new Web3(web3Provider);
  //   var myContract = new web3.eth.Contract(TokenUriABI, address);
  //   console.log(myContract.options.address);
  //   const tokenURIPath = await myContract.methods
  //     .tokenURI(tokenId)
  //     .call()
  //     .catch((err) => console.log(err));

  //   const uri = "https://gateway.ipfs.io/" + tokenURIPath.replace("://", "/");

  //   const result = await fetch(uri, {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       return data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   const imgUri =
  //     "https://gateway.ipfs.io/" + result.image.replace("://", "/");
  //   setState(imgUri);

  //   // await fetch(imgUri, { method: "GET" })
  //   //   .then((response) => {
  //   //     return response.json();
  //   //   })
  //   //   .then((data) => setState(imgUri));
  // }

  return (
    <Container>
      <Img src={thumbnail} />
      <TitleText>title</TitleText>
      <PriceText>price</PriceText>
    </Container>
  );
}
