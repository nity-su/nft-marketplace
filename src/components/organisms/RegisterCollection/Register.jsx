import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SelectContract from "./SelectContract";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 540px;
`;

const Form = styled.form``;

const LableLogo = styled.label`
  width: 100px;
  height: 100px;
  display: block;
  border: 2px black dotted;
  border-radius: 50%;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
`;

const Input = styled.input`
  display: none;
`;

const FeatureBox = styled.div`
  margin-top: 48px;
`;

const LableFeature = styled.label`
  width: 240px;
  height: 180px;
  display: block;
  border: 2px dotted solid;
  border-radius: 8%;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
`;

function onHandleChange(files, address) {
  const fromData = new FormData();
  fromData.append("account", address);
  fromData.append("logo", files.logo);
  fromData.append("feature", files.feature);

  console.log(fromData.get("logo"));

  fetch("https://csw-api.vercel.app/uploadImage", {
    method: "post",
    body: fromData,
  })
    .then((x) => {
      console.log("send");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function Register() {
  const [files, setFile] = useState({ logo: "", feature: "" });
  const [logoFile, setLogoFile] = useState("");
  const [featureFile, setfeatureFile] = useState("");

  const location = useLocation();
  const address = location.state.address;

  console.log("address", address);

  function fileOnChanged(e) {
    if (e.target.getAttribute("name") === "logo") {
      uploadImage(e.target.files[0], setLogoFile);
      setFile((obj) => {
        return { ...obj, ...{ logo: e.target.files[0] } };
      });
    }

    if (e.target.getAttribute("name") === "feature") {
      uploadImage(e.target.files[0], setfeatureFile);
      setFile((obj) => {
        return { ...obj, ...{ feature: e.target.files[0] } };
      });
    }
    console.log(e.target);
    console.log(e.target.files[0]);
  }

  const uploadImage = (file, setState) => {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setState(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <Container>
      <RegisterImageWrapper>
        {address ? (
          <Form>
            <LableLogo htmlFor="logo" imgUrl={logoFile} />
            <Input
              id="logo"
              type="file"
              name="logo"
              required
              onChange={(e) => {
                fileOnChanged(e);
              }}
            />
            <FeatureBox>
              <LableFeature htmlFor="feature" imgUrl={featureFile} />
              <Input
                id="feature"
                type="file"
                name="feature"
                required
                onChange={fileOnChanged}
              />
              <Input
                type="button"
                onClick={() => {
                  onHandleChange(files, address);
                }}
                value="누르세요"
              />
            </FeatureBox>
          </Form>
        ) : null}
      </RegisterImageWrapper>
      {address ? <SelectContract address={address} /> : null}
    </Container>
  );
}