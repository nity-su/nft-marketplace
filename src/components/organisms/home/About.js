import styled from "styled-components";
import businessOne from "src/assets/images/A.png";
import businessTwo from "src/assets/images/B.png";
import businessThree from "src/assets/images/C.png";

const Container = styled.div`
  width: 100%;
  height: 85vh;

  background-color: whitesmoke;
`;

const MembersBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Member = styled.div`
  width: 200px;
  height: 200px;
  margin: 100px;
  background-color: pink;
  border-radius: 50%;
`;

const MemberA = styled.div`
  width: 380px;
  height: 380px;

  background-size: contain; // 채우기
  background-repeat: no-repeat; // 반복되는 사진 중지
  background-image: url(${businessOne});
`;

const MemberB = styled.div`
  width: 380px;
  height: 380px;

  background-size: contain; // 채우기
  background-repeat: no-repeat; // 반복되는 사진 중지
  background-image: url(${businessTwo});
`;

const MemberC = styled.div`
  width: 380px;
  height: 380px;

  background-size: contain; // 채우기
  background-repeat: no-repeat; // 반복되는 사진 중지
  background-image: url(${businessThree});
`;

const Temp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    font-size: 30px;
    font-weight: 800;
    @media screen and (min-width: 720px) {
      font-size: 30px;
    }
  }
`;

export default function About() {
  return (
    <>
      <Container>
        <MembersBox>
          <Temp>
            <Member></Member>
            <div>Gold CEO</div><br/><br/><br/>
            <div>멋쟁이 사자처럼</div><br/>
            <div>블체스 1기</div><br/><br/><br/>
            <div>기획</div>
          </Temp>
          <Temp>
            <Member></Member>
            <div>Ray CTO</div><br/><br/><br/>
            <div>멋쟁이 사자처럼</div><br/>
            <div>블체스 1기</div><br/><br/><br/>
            <div>수석 개발자</div>
          </Temp>
          <Temp>
            <Member></Member>
            <div>Key CIO</div><br/><br/><br/>
            <div>멋쟁이 사자처럼</div><br/>
            <div>블체스 1기</div><br/><br/><br/>
            <div>마케팅,홍보</div>
          </Temp>
        </MembersBox>
      </Container>
    </>
  );
}
