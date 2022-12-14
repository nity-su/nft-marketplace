import styled from "styled-components";
import ItemCards from "@components/molecules/ItemCards";
import { useEffect, useState } from "react";
import temp from "../../../contracts/temp.json";
import Web3 from "web3";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const TradingMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 2px;
  margin-left: 315px;

  background-color: #6246ea;
`;

const ButtonTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 130px;
  height: 40px;
  left: 264px;
  top: 58px;

  border: 3px solid #6246ea;
  border-radius: 12px;
`;

const Collection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 18px;
  left: 291px;
  top: 105px;
  border: 3px solid #6246ea;
`;

const ItemCardsBox = styled.div``;

export default function TopAlbum() {
  const [state, setState] = useState("");
  useEffect(() => {
    async function getMethods() {
      const provider =
        process.env.PROVIDER_URL ||
        "https://eth-goerli.g.alchemy.com/v2/SF8OJ6n9AXQ8ViiDRTnFrv1-rBd_3VY-";

      var web3Provider = new Web3.providers.HttpProvider(provider);

      var web3 = new Web3(web3Provider);
      var myContract = new web3.eth.Contract(
        temp,
        "0x4F0d0f87a5D6bCE5Fa517fAa69339DD10F31209f"
      );
      console.log(myContract.options.address);
      const tokenURIPath = await myContract.methods
        .tokenURI(0)
        .call()
        .catch((err) => console.log(err));

      const uri = "https://gateway.ipfs.io/" + tokenURIPath.replace("://", "/");

      const result = await fetch(uri, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((err) => {
          console.log(err);
        });

      const imgUri =
        "https://gateway.ipfs.io/" + result.image.replace("://", "/");
      setState(imgUri);

      // await fetch(imgUri, { method: "GET" })
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => setState(imgUri));
    }

    getMethods();

    // web3.eth
    //   .get("0x145B667e023c016FE07dDB01a8B211C5b45ef2eC")
    //   .then((result) => {
    //     console.log("blance ", result);
    //     setState(result);
    //   });
  }, []);

  return (
    <>
      <ButtonTop>TOP</ButtonTop>
      <ButtonTop>View all</ButtonTop>
      <Collection>COLLECTION</Collection>
      <div>price</div>
      <div>volume</div>
      <TradingMenu></TradingMenu>
      <Container>
        <ItemCardsBox>
          <ItemCards url={state} />
        </ItemCardsBox>
      </Container>
      <TradingMenu></TradingMenu>
    </>
  );
}
