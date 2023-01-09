import styled from "styled-components";
import CollectionBox from "@components/organisms/MyCollection/CollectionBox";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 76px;
`;

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 240px);
  column-gap: 16px;
  row-gap: 48px;
  grid-template-rows: auto;
`;

export default function AllCollection({ array }) {
  // const array = new Array(30); 길이 출력값 30이지만 반복문이 돌아가지 않음.
  //어쩔 수 없이 값을 넣어주기로 함.
  return (
    <Container>
      <CollectionGrid>
        {array.map((v, i) => {
          return <CollectionBox key={i}></CollectionBox>;
        })}
      </CollectionGrid>
    </Container>
  );
}
