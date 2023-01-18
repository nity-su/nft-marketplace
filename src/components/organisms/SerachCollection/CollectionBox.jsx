import React from "react";
import styled from "styled-components";
import { AdvancedImage } from "@cloudinary/react";
import { Link, Outlet } from "react-router-dom";

export default function CollectionBox({ address, cloudinary }) {
  const Container = styled.div`
    width: 240px;
    height: 340px;
  `;
  const CloudImg = styled(AdvancedImage)`
    width: 220px;
    height: 230px;
    background-color: gray;
    border-radius: 8px;
  `;
  return (
    <>
      <Container>
        <Link to={"DisplayCollection"} state={{ address }}>
          <CloudImg cldImg={cloudinary.image(address + "feature")} />
        </Link>
      </Container>
    </>
  );
}
