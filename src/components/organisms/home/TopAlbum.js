import styled from "styled-components";
import ItemCards from "@components/molecules/ItemCards";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: blueviolet;
`;

const ItemCardsBox = styled.div``;

export default function TopAlbum() {
  return (
    <>
      <Container>
        <ItemCardsBox>
          <ItemCards />
        </ItemCardsBox>
      </Container>
    </>
  );
}
