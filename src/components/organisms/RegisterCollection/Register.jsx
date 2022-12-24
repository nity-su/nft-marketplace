import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;

const Form = styled.form``;

const Img = styled.img``;

const Input = styled.input`
  border: 1px black solid;
  border-radius: 24px;
`;

function onHandleChange(files, address) {
  const fromData = new FormData();
  fromData.append("account", address);
  fromData.append("logo", files.logo);
  fromData.append("feature", files.feature);

  fetch("http://localhost:8080/uploadImage", {
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
  const [state, setState] = useState();
  function fileOnChanged(e) {
    if (e.target.getAttribute("name") === "logo") {
      setFile((obj) => {
        return { ...obj, ...{ logo: e.target.files[0] } };
      });
    }

    if (e.target.getAttribute("name") === "feature") {
      setFile((obj) => {
        return { ...obj, ...{ feature: e.target.files[0] } };
      });
    }
  }

  return (
    <Container>
      <Form>
        <Input type="file" name="logo" required onClick={fileOnChanged} />
        <Input type="file" name="feature" required onClick={fileOnChanged} />
        <Input
          type="submit"
          onClick={() => {
            onHandleChange(files);
          }}
        />
      </Form>
    </Container>
  );
}
