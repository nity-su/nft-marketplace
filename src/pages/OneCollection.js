import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
`;

const CardR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Notice = styled.div`
  position: absolute;
  width: 1500px;
  height: 60px;
  left: 76px;
  top: 117px;

  background: yellow;
`;

const Card = styled.div`
  width: 243.69px;
  height: 341.76px;
  left: 76px;
  top: 186px;

  border: 2px solid #e6e6e6;
  filter: drop-shadow(2px 4px 4px #eeeeee);
  border-radius: 7px;
`;

export default function OneCollection() {
  return (
    <Container>
      <Notice></Notice>
      <CardR>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardR>
    </Container>
  );
}
