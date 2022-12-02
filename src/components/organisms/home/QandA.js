import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  background-color: whitesmoke;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QaBox = styled.div`
  width: 300px;
  height: 300px;
  margin: 200px;
  background-color: black;
`;

export default function Qanda() {
  return (
    <>
      <Container>
        <MainBox>
          <QaBox></QaBox>
          <QaBox></QaBox>
          <QaBox></QaBox>
        </MainBox>
      </Container>
    </>
  );
}
