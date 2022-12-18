import React from "react";
import styled from "styled-components";
import "../home/css/tradeplace.css";
import TestTab from "./TestTab";

const TransactionBox = styled.div`
  margin-top: 10px;
  border-radius: 15px;
`;
// => 함수 이름에서 _ 빼주시고 주석 삭제해주세요 다른 곳에서 이 함수를 사용하면 이름 때문에 에러납니다 ㅠ
function Tradeplace_() {
  return (
    <TransactionBox>
      <TestTab />
    </TransactionBox>
  );
}

export default Tradeplace_;
