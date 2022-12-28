import React from "react";
import { useEffect } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useState } from "react";
import { useLocation } from "react-router";

export default function DownLoad() {
  const { state } = useLocation();
  const name = state;
  console.log(state);
  const [address, setaddress] = useState();
  useEffect(() => {
    if (!name) {
      return;
    }
    async function fetchGetName() {
      await fetch("https://csw-api.vercel.app/sql/getName", {
        method: "POST",
        body: JSON.stringify({ name: `${name}` }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((x) => {
          return x.json();
        })
        .then((x) => {
          console.log(x);
          setaddress(x[0].address);
        });
    }
    fetchGetName();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(address);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dzg47jvzj",
    },
  });

  let image = cld.image(address + "logo");
  let image2 = cld.image(address + "feature");

  return (
    <>
      {address ? (
        <div>
          <AdvancedImage cldImg={image}></AdvancedImage>
          <AdvancedImage cldImg={image2}></AdvancedImage>
        </div>
      ) : null}
    </>
  );
}
