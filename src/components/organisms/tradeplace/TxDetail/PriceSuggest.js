import React from "react";
import styled from "styled-components";

const PriceSuggestContainer = styled.div``;

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

const TransactionContentTextBox = styled.div`
  width: 97px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
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

const TransactionDetailIndivBox = styled.div`
  width: 523px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TransactionDetailIndivTextBox = styled.div`
  width: 97px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

function PriceSuggest() {
  return (
    <PriceSuggestContainer>
      <TransactionBox>
        <Line></Line>
        <TransactionContentBox>
          <TransactionContentTextBox>Price</TransactionContentTextBox>
          <TransactionContentTextBox>Expiration</TransactionContentTextBox>
          <TransactionContentTextBox>From</TransactionContentTextBox>
          <TransactionContentTextBox></TransactionContentTextBox>
        </TransactionContentBox>
        <Line></Line>
        <TransactionDetailBox>
          <TransactionDetailIndivBox>
            <TransactionDetailIndivTextBox>
              1,002 Klay
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              00 Days
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>Buy</TransactionDetailIndivTextBox>
          </TransactionDetailIndivBox>
          <TransactionDetailIndivBox>
            <TransactionDetailIndivTextBox>
              1,002 Klay
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              00 Days
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>Buy</TransactionDetailIndivTextBox>
          </TransactionDetailIndivBox>{" "}
          <TransactionDetailIndivBox>
            <TransactionDetailIndivTextBox>
              1,002 Klay
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              00 Days
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>Buy</TransactionDetailIndivTextBox>
          </TransactionDetailIndivBox>{" "}
          <TransactionDetailIndivBox>
            <TransactionDetailIndivTextBox>
              1,002 Klay
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              00 Days
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>Buy</TransactionDetailIndivTextBox>
          </TransactionDetailIndivBox>
          <TransactionDetailIndivBox>
            <TransactionDetailIndivTextBox>
              1,002 Klay
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              00 Days
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>Buy</TransactionDetailIndivTextBox>
          </TransactionDetailIndivBox>
        </TransactionDetailBox>
      </TransactionBox>
    </PriceSuggestContainer>
  );
}

export default PriceSuggest;
