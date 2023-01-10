import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import swapButton from "../swap/swapButton";
import PopupSwapNode from "../swap/PopupSwapNode";
import { useCallback } from "react";
import { useRef } from "react";
import Web3 from "web3";

const Container = styled.div``;

const Button = styled.button`
  height: 50px;
`;

const SwapContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 37%;
  height: 200px;
  width: 100%;
`;

const SwapTitle = styled.div`
  font-size: 24px;
  width: 100%;
  text-align: center;
  margin-top: 6%;
`;

const SwapWindow = styled.div`
  width: 510px;
  height: 720px;
  border-radius: 12px;
  padding: 0px 24px;
  background-color: rgba(178, 155, 214, 0.8);
`;

const ButtonBox = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const CancelBtn = styled.div`
  border: purple 1px solid;
  border-radius: 12px;
  color: #fff;
  padding: 8px;
`;

const ConfirmBtn = styled.div`
  border: purple 1px solid;
  color: #fff;
  border-radius: 12px;
  padding: 8px;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
const InputTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  width: 100%;
  box-sizing: content-box;
`;

const SubTitleForInput = styled.span`
  padding-left: 0px 0px 0px 4px;
  width: 15%;
  height: 32px;
  background-color: #ccd4cde2;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
  border: solid 1px black;
`;

const ETHbalance = styled.span``;

/**
 * @todo 나중에 텍스트 숫자 제한 할 것.
 */
const Input = styled.input`
  width: 85%;
  height: 32px;
  border: 1px solid black;
  padding: 0px;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
`;

const BreakLineOne = styled.hr`
  margin-top: 32px;
  margin-bottom: 23px;
`;

const DropDownMenu = styled(Link)`
  color: black;
  background-color: whitesmoke;
  text-decoration: none;
  padding: 4px 0px;
  width: 100%;
`;

export default function DropButton({ address }) {
  const [state, setState] = useState();
  const [popUpOn, setPopUpOn] = useState();
  const currentSwapProcess = useRef();
  const [count, setCount] = useState();
  const [balance, setBalance] = useState();

  async function getBalance() {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    await web3.eth
      .getBalance(accounts[0])
      .then((result) => setBalance(web3.utils.fromWei(result, "ether")));
  }

  useEffect(() => {}, []);

  const refCallback = useCallback((node) => {
    if (node !== null) {
      console.log("REF");
      currentSwapProcess.current = true;
    }

    if (node === null) {
      // currentSwapProcess.current = false;
    }
  }, []);

  function onHandler() {
    setPopUpOn(() => {
      if (state === true) return false;
    });
    setState(!state);
  }

  function openHandlerForProfile() {
    setState(false);
  }

  return (
    <Section>
      <Dropdown
        open={state}
        triger={
          <Button className="ProfileTextBox" onClick={onHandler}>
            Profile
          </Button>
        }
        menu={[
          <div className="ProfileContent">
            <DropDownMenu>프로필</DropDownMenu>
            <DropDownMenu
              to="/register-collection"
              onClick={openHandlerForProfile}
              state={{ address: address }}
            >
              Create Collection
            </DropDownMenu>

            <DropDownMenu to="/MyCollection" onClick={openHandlerForProfile}>
              MyCollection
            </DropDownMenu>

            <DropDownMenu
              id="SwapButton"
              onClick={() => {
                // swapButton();
                setPopUpOn((swap) => {
                  if (swap) {
                    getBalance();
                  }

                  return !swap;
                });
              }}
            >
              SWAP
              {popUpOn ? (
                <PopupSwapNode>
                  <span ref={refCallback}></span>
                  <SwapContainer
                    onClick={(event) => {
                      console.log("event");
                      event.stopPropagation();
                    }}
                  >
                    <SwapWindow>
                      <SwapTitle>SWAP</SwapTitle>
                      <InputTextBox>
                        <Input
                          id="SwapValue"
                          type="number"
                          onChange={(e) => {
                            if (e.target.value < 0) {
                              e.target.value = 0;
                            }
                            setCount(e.target.value);
                          }}
                        />
                        <SubTitleForInput htmlFor="SwapValue">
                          ETH
                        </SubTitleForInput>
                      </InputTextBox>
                      <ETHbalance>Balance: {balance}</ETHbalance>
                      <BreakLineOne />
                      <InputTextBox>
                        <Input
                          id="SwapValue"
                          type="number"
                          onChange={(e) => {
                            if (e.target.value < 0) {
                              e.target.value = 0;
                            }
                            setCount(e.target.value);
                          }}
                        />
                        <SubTitleForInput htmlFor="SwapValue">
                          CSW
                        </SubTitleForInput>
                      </InputTextBox>
                      <ButtonBox>
                        <ConfirmBtn
                          onClick={() => {
                            swapButton(count);
                          }}
                        >
                          확인
                        </ConfirmBtn>
                        <CancelBtn>취소</CancelBtn>
                      </ButtonBox>
                    </SwapWindow>
                  </SwapContainer>
                </PopupSwapNode>
              ) : null}
            </DropDownMenu>
          </div>,
        ]}
      />
    </Section>
  );
}

const Dropdown = function ({ menu, triger, open }) {
  return (
    <Container>
      {triger}
      {open ? (
        <ul>
          {menu.map((Btn, index) => (
            <li key={index}>{Btn}</li>
          ))}
        </ul>
      ) : null}
    </Container>
  );
};

const Section = styled.section`
  .ProfileTextBox {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
    font-size: 20px;
    background-color: white;
    border: 0px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .ProfileContent {
    position: fixed;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
