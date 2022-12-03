import React from "react";
import Carousel from "better-react-carousel";
import styled from "styled-components";

const CommingSoonContainer = styled.div`
  width: 280px;
  height: 215px;
  position: absolute;
  top: 405px;
  left: 1165px;
`;

const CommingSoonCarousel = () => {
  return (
    <CommingSoonContainer>
      <Carousel cols={1} rows={1} gap={10} loop>
        <Carousel.Item>
          <img
            src="https://iili.io/HK6lh67.png"
            style={{ width: "280px", height: "215px" }}
            alt="pic"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/280/215?random=2" alt="pic" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/280/215?random=3" alt="pic" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/280/215?random=1" alt="pic" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/280/215?random=2" alt="pic" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/280/215?random=3" alt="pic" />
        </Carousel.Item>
      </Carousel>
    </CommingSoonContainer>
  );
};

export default CommingSoonCarousel;
