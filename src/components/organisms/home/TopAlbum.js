import styled from "styled-components";
import ItemCard from "@components/molecules/ItemCard";

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
          <ItemCard />
        </ItemCardsBox>
      </Container>
    </>
  );
}
