import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display:flex;
  align-items:center;
  background-color: #a786df;
`;

const Atext = styled.div`
  
  div {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 44px;

    text-align: start;
    letter-spacing: 0.01em;

    color: #f5f5f5;
  }
`;

export default function Footer() {
  return (
    <>
      <Container>
        <Atext>
          <div>MeterMusic</div>
        </Atext>
      </Container>
    </>
  );
}
