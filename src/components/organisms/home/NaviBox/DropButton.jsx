import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  width: 50px;
  height: 50px;
`;

const DropDownMenu = styled(Link)`
  width: 150px;
  margin: 32px 4px;
  border: solid black 2px;
  background-color: #b39e9e;
`;

export default function DropButton() {
  const [state, setState] = useState();

  function onHandler() {
    setState(!state);
  }

  function openHandlerForProfile() {
    setState(false);
  }

  return (
    <div>
      <Dropdown
        open={state}
        triger={<Button onClick={onHandler}>Profile</Button>}
        menu={[
          <DropDownMenu>프로필</DropDownMenu>,
          <DropDownMenu
            to="/register-collection"
            onClick={openHandlerForProfile}
          >
            Create Collection
          </DropDownMenu>,
        ]}
      />
    </div>
  );
}

const Dropdown = function ({ menu, triger, open }) {
  return (
    <>
      {triger}
      {open ? (
        <ul>
          {menu.map((Btn, index) => (
            <li key={index}>{Btn}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
