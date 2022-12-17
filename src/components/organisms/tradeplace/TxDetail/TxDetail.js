import React from "react";
import styled from "styled-components";
import "@components/organisms/home/css/tradeplace.css";

const TxDetailContainer = styled.div``;

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

function TxDetail() {
  return (
    <TxDetailContainer>
      <TransactionBox>
        <Line></Line>
        <TransactionContentBox>
          <TransactionContentTextBox>Event</TransactionContentTextBox>
          <TransactionContentTextBox>Price</TransactionContentTextBox>
          <TransactionContentTextBox>From</TransactionContentTextBox>
          <TransactionContentTextBox>To</TransactionContentTextBox>
          <TransactionContentTextBox>Date</TransactionContentTextBox>
        </TransactionContentBox>
        <Line></Line>
        <TransactionDetailBox>
          <TransactionDetailIndivBox>
            <TransactionDetailIndivTextBox>
              Transfer
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>-</TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              00 days ago
            </TransactionDetailIndivTextBox>
          </TransactionDetailIndivBox>
          <TransactionDetailIndivBox>
            <TransactionDetailIndivTextBox>
              Transfer
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>-</TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              00 days ago
            </TransactionDetailIndivTextBox>
          </TransactionDetailIndivBox>
          <TransactionDetailIndivBox>
            <TransactionDetailIndivTextBox>
              Transfer
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>-</TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              00 days ago
            </TransactionDetailIndivTextBox>
          </TransactionDetailIndivBox>
          <TransactionDetailIndivBox>
            <TransactionDetailIndivTextBox>
              Transfer
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>-</TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              00 days ago
            </TransactionDetailIndivTextBox>
          </TransactionDetailIndivBox>
          <TransactionDetailIndivBox>
            <TransactionDetailIndivTextBox>
              Transfer
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>-</TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              지갑주소
            </TransactionDetailIndivTextBox>
            <TransactionDetailIndivTextBox>
              00 days ago
            </TransactionDetailIndivTextBox>
          </TransactionDetailIndivBox>
        </TransactionDetailBox>
      </TransactionBox>
    </TxDetailContainer>
  );
}

export default TxDetail;
