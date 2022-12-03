import CommingSoon from "@components/organisms/home/CommingSoon";
import Footer from "@components/organisms/home/Footer";
import Introduce from "@components/organisms/home/Introduce";
import TopAlbum from "@components/organisms/home/TopAlbum";
import React from "react";
import styled from "styled-components";
import About from "@components/organisms/home/About";
import Question from "@components/organisms/home/Question";

const Container = styled.div``;

export default function Home() {
  return (
    <Container>
      <Introduce />
      <CommingSoon />
      <TopAlbum />
      <Question />
      <About />
      <Footer />
    </Container>
  );
}
