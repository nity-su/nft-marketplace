import React from "react";
import styled from "styled-components";
import NewjeansImg from "../tradeplace/newjeans.png";

const Container = styled.div`
  left: 37px;
  top: 53px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewjeansContainer = styled.div`
  width: 399px;
  height: 381px;
  background-image: url(${NewjeansImg});
`;

function TradePlaceImgNewJeans() {
  return (
    <Container>
      <NewjeansContainer></NewjeansContainer>
    </Container>
  );
}

export default TradePlaceImgNewJeans;
