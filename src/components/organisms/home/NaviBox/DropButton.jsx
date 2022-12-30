import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cotainer = styled.div``;

const Button = styled.button`
  height: 50px;
`;

const DropDownMenu = styled(Link)`
  width: 100%;
`;

export default function DropButton({ address }) {
  const [state, setState] = useState();

  function onHandler() {
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
          </div>,
        ]}
      />
    </Section>
  );
}

const Dropdown = function ({ menu, triger, open }) {
  return (
    <Cotainer>
      {triger}
      {open ? (
        <ul>
          {menu.map((Btn, index) => (
            <li key={index}>{Btn}</li>
          ))}
        </ul>
      ) : null}
    </Cotainer>
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
