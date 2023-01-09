import styled from "styled-components";
import { useState } from "react";
import PopupImgNode from "./PopupImgNode";
import ERC721Controller from "@services/ERC721Controller";
import { allowBuy } from "@services/BuyController";

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

export default function CollectionBox({
  thumbnail,
  ERC721CA,
  tokenID,
  name,
  fromAddress,
  title,
}) {
  const [state, setState] = useState();
  const [price, setPrice] = useState();
  // const [coin, setPriceCoin] = useState();
  return (
    <Container>
      <Img
        src={thumbnail}
        onClick={() => {
          console.log(ERC721CA, tokenID);
          ERC721Controller({ ERC721CA, tokenID });
          setState(!state);
        }}
      />
      <TitleText>title</TitleText>
      <PriceText>price</PriceText>
      {state ? (
        <PopupImgNode>
          <ModalWindow onClick={() => {}}>
            <div id="open-modal" className="modal-window">
              <div className="box">
                <NameTextBox>
                  <NameText>{name}</NameText>
                </NameTextBox>
                <SaleWrapper>
                  <SalePriceTitle>판매가</SalePriceTitle>
                  <form>
                    <fieldset>
                      <SaleBox>
                        <SalePrice
                          id="sale_price"
                          type="text"
                          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"
                          required
                          onChange={(e) => {
                            //coin변환
                            //text만 입력 가능하게.
                            setPrice(Number(e.target.value));
                          }}
                        ></SalePrice>
                        <CoinName>CSW</CoinName>
                      </SaleBox>
                    </fieldset>
                  </form>
                </SaleWrapper>
                <SaleLine />
                <Proceeds>coin_To_Eth:</Proceeds>
                <SaleLine />
                <CancelBtn
                  onClick={() => {
                    setState(!state);
                  }}
                >
                  취소
                </CancelBtn>
                <ConfirmBtn
                  onClick={() => {
                    window.ethereum
                      .request({ method: "eth_requestAccounts" })
                      .then((accounts) => {
                        allowBuy({
                          REC721AD: ERC721CA,
                          tokenID,
                          fromAddress: accounts[0],
                          price: price,
                        });
                      });
                  }}
                >
                  등록
                </ConfirmBtn>
              </div>
            </div>
          </ModalWindow>
        </PopupImgNode>
      ) : null}
    </Container>
  );
}

const NameTextBox = styled.div`
  padding: 12px 0px;
`;

const NameText = styled.h1``;
const SaleWrapper = styled.div``;
const SalePriceTitle = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;
const SalePrice = styled.input`
  width: 85%;
  background-color: #f3e6e6;
  margin-right: 4px;
  padding-right: 8px;
  border-radius: 4px;
`;

const CoinName = styled.span`
  width: 15%;
`;

const SaleLine = styled.hr`
  margin-top: 16px;
`;

const SaleBox = styled.div`
  border-radius: 14px;
`;

const Proceeds = styled.div``;

const ConfirmBtn = styled.div``;
const CancelBtn = styled.div``;

const ModalWindow = styled.div`
  .modal-window {
    position: fixed;
    background-color: rgba(224, 213, 162, 0.45);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    transition: all 0.7s;
    & > div {
      width: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2em;
      background: white;
    }
    header {
      font-weight: bold;
    }
    h1 {
      font-size: 150%;
      margin: 0 0 15px;
    }
    .box {
      border: black 2px solid;
    }
  }
`;

// const PopupContainer = styled.div`
//   .modal-close {
//     color: #aaa;
//     line-height: 50px;
//     font-size: 80%;
//     position: absolute;
//     right: 0;
//     text-align: center;
//     top: 0;
//     width: 70px;
//     text-decoration: none;
//     &:hover {
//       color: black;
//     }
//   }
// `;
