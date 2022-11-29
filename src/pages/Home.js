import CommingSoon from "@components/organisms/home/CommingSoon";
import Footer from "@components/organisms/home/Footer";
import Introduce from "@components/organisms/home/Introduce";
import QuestionAnswer from "@components/organisms/home/QuestionAnswer";
import TopAlbum from "@components/organisms/home/TopAlbum";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;

export default function Home() {
  return (
    <Container>
      <Introduce />
      <CommingSoon />
      <TopAlbum />
      <QuestionAnswer />
      <Footer />
    </Container>
  );
}
