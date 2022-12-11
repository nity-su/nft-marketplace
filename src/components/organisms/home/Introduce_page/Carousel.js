import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

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

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <CommingSoonImg1></CommingSoonImg1>
          </div>
          <div>
            <CommingSoonImg2></CommingSoonImg2>
          </div>
          <div>
            <CommingSoonImg3></CommingSoonImg3>
          </div>
          <div>
            <CommingSoonImg1></CommingSoonImg1>
          </div>
          <div>
            <CommingSoonImg2></CommingSoonImg2>
          </div>
          <div>
            <CommingSoonImg3></CommingSoonImg3>
          </div>
        </Slider>
      </div>
    );
  }
}
