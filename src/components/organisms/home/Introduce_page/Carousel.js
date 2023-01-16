import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TestImg1 from "@assets/images/IDLE.png";
import TestImg2 from "@assets/images/BTS.png";
import TestImg3 from "@assets/images/newjeans.png";
import TestImg4 from "@assets/images/Idol/i5.png";
import TestImg5 from "@assets/images/LoveImage.png";
import TestImg6 from "@assets/images/Idol/i1.png";

const LinkBox = styled(Link)``;

const CommingSoonImg1 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-image: url(${TestImg1});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CommingSoonImg2 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: red;
  background-image: url(${TestImg2});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CommingSoonImg3 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: green;
  background-image: url(${TestImg3});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CommingSoonImg4 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: blue;
  background-image: url(${TestImg4});
  background-repeat: no-repeat;
  background-size: cover;
`;
const CommingSoonImg5 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: blue;
  background-image: url(${TestImg5});
  background-repeat: no-repeat;
  background-size: cover;
`;
const CommingSoonImg6 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: blue;
  background-image: url(${TestImg6});
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
            <LinkBox to="/nftlist">
              <Button>
                <CommingSoonImg3></CommingSoonImg3>
              </Button>
            </LinkBox>
          </div>
          <div>
            <Button onClick={clickMe}>
              <CommingSoonImg4></CommingSoonImg4>
            </Button>
          </div>
          <div>
            <Button onClick={clickMe}>
              <CommingSoonImg5></CommingSoonImg5>
            </Button>
          </div>
          <div>
            <Button onClick={clickMe}>
              <CommingSoonImg6></CommingSoonImg6>
            </Button>
          </div>
        </Slider>
      </div>
    );
  }
}
