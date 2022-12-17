import styled from "styled-components";
import ItemCards from "@components/molecules/ItemCards";
import { useEffect, useState } from "react";
import temp from "../../../contracts/temp.json";
import Web3 from "web3";
import "./css/Album.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 220vh;
  background-color: white;
`;
const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-left: -510px;
`;
const Container3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  margin-left: 50px;
`;

const GapBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1%;
  height: 1vh;
  background-color: white;
`;

const TradingLine = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 20px;

  background-color: #6246ea;
`;
const TradingLine2 = styled.div`
  width: 100%;
  height: 1px;
  margin-top: -435px;

  background-color: gray;
`;
const TradingLine3 = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 130px;

  background-color: gray;
`;
const TradingLine4 = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 130px;

  background-color: gray;
`;
const TradingLine5 = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 125px;

  background-color: gray;
`;
const TradingLine6 = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 130px;

  background-color: gray;
`;
const TradingLine7 = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 130px;

  background-color: gray;
`;
const TradingLine8 = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 130px;

  background-color: gray;
`;
const TradingLine9 = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 130px;

  background-color: gray;
`;
const TradingLine10 = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 130px;

  background-color: gray;
`;

const TradingLine11 = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 130px;

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

  border: 2px solid #6246ea;
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

  background-color: #6246ea;
  border-radius: 12px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #ffffff;
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
      <Container>
        <ItemCardsBox>
          <Container2>
            <ButtonTop className="top">TOP</ButtonTop>
            <GapBox />
            <ButtonTop className="ViewAll">View all</ButtonTop>
          </Container2>
          <Container3>
            <Collection>Collection</Collection>
            <Collection>Name</Collection>
            <Collection>Price</Collection>
            <Collection>Vloum</Collection>
          </Container3>
          <TradingLine />
          <ItemCards url={state} />
          <TradingLine2 />
          <TradingLine3 />
          <TradingLine4 />
          <TradingLine5 />
          <TradingLine6 />
          <TradingLine7 />
          <TradingLine8 />
          <TradingLine9 />
          <TradingLine10 />
          <TradingLine11 />
        </ItemCardsBox>
      </Container>
    </>
  );
}
