import React from "react";
import styled from "styled-components";
import TradePlaceImgNewJeans from "@components/organisms/tradeplace/TradePlaceImgNewJean";

const TradeplaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const LeftBox = styled.div`
  width: 450px;
  height: 867px;
  background-color: orange;
`;

const RightBox = styled.div`
  width: 574px;
  height: 867px;
  background-color: skyblue;
`;

function Tradeplace() {
  return (
    <TradeplaceContainer>
      <LeftBox>
        <TradePlaceImgNewJeans></TradePlaceImgNewJeans>
      </LeftBox>
      <RightBox></RightBox>
    </TradeplaceContainer>
  );
}

export default Tradeplace;
