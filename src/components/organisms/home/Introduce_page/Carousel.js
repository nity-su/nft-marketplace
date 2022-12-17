import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TestImg1 from "@components/organisms/tradeplace/newjeans.png";
import TestImg2 from "@components/organisms/tradeplace/BTS.png";
import TestImg3 from "@components/organisms/tradeplace/IDLE.png";
import TestImg4 from "@components/organisms/tradeplace/LoveImage.png";

const LinkBox = styled(Link)``;

const CommingSoonTestImg1 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-image: url(${TestImg1});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CommingSoonImg1 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: red;
  background-image: url(${TestImg2});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CommingSoonImg2 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: green;
  background-image: url(${TestImg3});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CommingSoonImg3 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: blue;
  background-image: url(${TestImg4});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Button = styled.button`
  background-color: white;
  cursor: pointer;
  margin: 6px;
  border: 0;
  outline: 0;
  padding: 0px 0px;
  transition: ease background-color 250ms;
  &:hover {
    background-color: whitesmoke;
  }
  &:disabled {
    cursor: default;
    color: gray;
  }
`;

function clickMe() {
  alert("페이지 링크 예정");
}

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <LinkBox to="/nftlist">
              <Button>
                <CommingSoonTestImg1></CommingSoonTestImg1>
              </Button>
            </LinkBox>
          </div>
          <div>
            <Button onClick={clickMe}>
              <CommingSoonImg1></CommingSoonImg1>
            </Button>
          </div>
          <div>
            <Button onClick={clickMe}>
              <CommingSoonImg2></CommingSoonImg2>
            </Button>
          </div>
          <div>
            <Button onClick={clickMe}>
              <CommingSoonImg3></CommingSoonImg3>
            </Button>
          </div>
          <div>
            <Button onClick={clickMe}>
              <CommingSoonImg1></CommingSoonImg1>
            </Button>
          </div>
          <div>
            <Button onClick={clickMe}>
              <CommingSoonImg2></CommingSoonImg2>
            </Button>
          </div>
        </Slider>
      </div>
    );
  }
}
