import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import swapButton from "../swap/swapButton";
import PopupSwapNode from "../swap/PopupSwapNode";
import { useCallback } from "react";
import { useRef } from "react";

const Container = styled.div``;

const Button = styled.button`
  height: 50px;
`;

const SwapContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100px;
  height: 200px;
  width: 100%;
`;

const SwapWindow = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 12px;
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
`;

/**
 * @todo 나중에 텍스트 숫자 제한 할 것.
 */
const Input = styled.input`
  margin-left: 8px;
  width: 60px;
`;

const DropDownMenu = styled(Link)`
  width: 100%;
`;

export default function DropButton({ address }) {
  const [state, setState] = useState();
  const [popUpOn, setPopUpOn] = useState();
  const currentSwapProcess = useRef();
  const [count, setCount] = useState();

  useEffect(() => {
    if (!currentSwapProcess.current) {
      // currentSwapProcess.current=true
    }
  }, []);

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
    setPopUpOn((swap) => {
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
            <DropDownMenu
              id="SwapButton"
              onClick={() => {
                // swapButton();
                setPopUpOn((swap) => {
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
                      <InputTextBox>
                        <label htmlFor="SwapValue">코인 수</label>
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
    gap: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
