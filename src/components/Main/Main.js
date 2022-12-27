import styled from "styled-components";
import Middle from "./Sections/Middle";
import Side from "./Sections/Side";

const MainDiv = styled.div`
  margin: 3rem 5rem;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
`;

const Main = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <Middle />
        <Side />
      </ContentDiv>
    </MainDiv>
  );
};

export default Main;
