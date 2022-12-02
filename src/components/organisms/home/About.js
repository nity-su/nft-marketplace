import styled from "styled-components";
import businessOne from "src/assets/images/A.png";
import businessTwo from "src/assets/images/B.png";
import businessThree from "src/assets/images/C.png";

const Container = styled.div`
  width: 100%;
  height: 85vh;
  background-color: goldenrod;
`;

const MembersBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Member = styled.div`
  width: 300px;
  height: 300px;
  margin: 200px;
  background-color: whitesmoke;
`;

const MemberWrapper = styled.div``;

const MemberA = styled.div`
  width: 570px;
  height: 350px;

  background-image: url(${businessOne});
`;

const MemberB = styled.div`
  width: 570px;
  height: 350px;
  background-image: url(${businessTwo});
`;

const MemberC = styled.div`
  width: 570px;
  height: 350px;

  background-image: url(${businessThree});
`;

const Temp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function About() {
  return (
    <>
      <Container>
        <MembersBox>
          <Temp>
            <Member></Member>
            <MemberA />
          </Temp>
          <Temp>
            <Member></Member>
            <MemberB />
          </Temp>
          <Temp>
            <Member></Member>
            <MemberC />
          </Temp>
        </MembersBox>
      </Container>
    </>
  );
}
