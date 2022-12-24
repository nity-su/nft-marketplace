import React from "react";
import styled from "styled-components";

const UtilityContainer = styled.div``;

const TransactionBox = styled.div`
  width: 525px;
  height: 380px;
  margin-top: 10px;
  margin-left: 35px;
  border-radius: 15px;
`;

const Line = styled.div`
  width: 523px;
  height: 1px;
  background-color: black;
`;

const TransactionContentBox = styled.div`
  width: 523px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TransactionDetailBox = styled.div`
  width: 523px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
`;

function Util() {
  return (
    <UtilityContainer>
      <TransactionBox>
        <Line></Line>
        <TransactionContentBox></TransactionContentBox>
        <Line></Line>
        <TransactionDetailBox></TransactionDetailBox>
      </TransactionBox>
    </UtilityContainer>
  );
}

export default Util;
