import React from "react";
import styled from "styled-components";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "react-router-dom";

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dzg47jvzj",
    },
  });

export default function CollectionBox({ contracts }) {
  console.log("CollectionBox", contracts);
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    cursor: auto;
  `;
  const Title = styled.span`
    font-size: 15px;
    text-decoration: none solid rgb(53, 56, 64);
  `;

  const CloudImg = styled(AdvancedImage)`
    min-height: 140px;
    width: 100%;
    height: 25vw;
    object-fit: cover;
  `;

  const LinkComponent = styled(Link)``;

  // let logo = cld.image(address + "logo");
  // let feature = cld.image(address + "feature");

  return (
    <>
      {contracts
        ? contracts.map((address, i) => (
            <Container key={i}>
              <LinkComponent
                to={"/DisplayAllCollection"}
                state={{ address: address }}
              >
                <CloudImg cldImg={cld.image(address + "feature")} />
              </LinkComponent>
              <Title>나중에 불러올 것임</Title>
            </Container>
          ))
        : null}
    </>
  );
}
