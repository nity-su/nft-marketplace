import CommingSoon from "@components/organisms/home/CommingSoon";
import Footer from "@components/organisms/home/Footer";
import Introduce from "@components/organisms/home/Introduce";
import TopAlbum from "@components/organisms/home/TopAlbum";
import React from "react";
import styled from "styled-components";
import Question from "@components/organisms/home/Question";

const Container = styled.div``;

export default function Home() {
  return (
    <Container>
      {/* <NaviBox></NaviBox> */}
      <Introduce />
      <CommingSoon />
      <TopAlbum />
      <Question />
      <Footer />
    </Container>
  );
}
