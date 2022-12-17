import React, { useState } from "react";
import styled from "styled-components";
import "../home/css/tradeplace.css";
import TestTab from "./TestTab";

const TransactionBox = styled.div`
  margin-top: 10px;
  border-radius: 15px;
`;

function Tradeplace_() {
  return (
    <TransactionBox>
      <TestTab />
    </TransactionBox>
  );
}

export default Tradeplace_;
