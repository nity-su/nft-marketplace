import React from "react";
import styled from "styled-components";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CollectionBox({ address }) {
  console.log("CollectionBox", address);
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const Title = styled.span``;

  const CloudImg = styled(AdvancedImage)`
    width: 220px;
    height: 230px;
  `;

  const LinkComponent = styled(Link)``;

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dzg47jvzj",
    },
  });

  let logo = cld.image(address + "logo");
  let feature = cld.image(address + "feature");

  const location = useLocation();

  return (
    <>
      {address ? (
        <Container>
          <LinkComponent to={"/DisplayAllCollection"}>
            <CloudImg cldImg={feature}></CloudImg>
          </LinkComponent>
          <Title>나중에 불러올 것임</Title>
        </Container>
      ) : null}
    </>
  );
}
