import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import TestImg2 from "@components/organisms/tradeplace/newjeans.png";

const LinkBox = styled(Link)``;

const CommingSoonTestImg1 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-image: url(${TestImg2});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CommingSoonImg1 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: red;
`;

const CommingSoonImg2 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: green;
`;

const CommingSoonImg3 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: blue;
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
            <LinkBox to="/tradeplace">
              <CommingSoonTestImg1></CommingSoonTestImg1>
            </LinkBox>
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
          <div>
            <Button onClick={clickMe}>
              <CommingSoonImg3></CommingSoonImg3>
            </Button>
          </div>
        </Slider>
      </div>
    );
  }
}
