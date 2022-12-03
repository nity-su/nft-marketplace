import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  background-color: yellowgreen;
`;

const MainBox = styled.div`
  display: grid;
  display: column;
  justify-content: center;
  align-items: center;
`;

const QaBox = styled.div`
  width: 1000px;
  height: 100px;
  margin: 20px;
  background-color: whitesmoke;
  border-radius: 30px;
`;

export default function Question() {
  return (
    <>
      <Container>
        <MainBox>
          <QaBox></QaBox>
          <QaBox></QaBox>
          <QaBox></QaBox>
          <QaBox></QaBox>
        </MainBox>
      </Container>
    </>
  );
}
