import React from "react";
import styled from "styled-components";
import "../home/css/tradeplace.css";
import TestTab from "./TxDetail/TxBoxTab";

const TransactionBox = styled.div`
  margin-top: 10px;
  border-radius: 15px;
`;

function TxBox() {
  return (
    <TransactionBox>
      <TestTab />
    </TransactionBox>
  );
}

export default TxBox;
