import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RiPlayCircleLine } from "react-icons/ri";

const Video = styled.video``;

const PlayDisplay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  margin: auto;
  background-size: contain;
  background-position: center;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => props.displayCondtion};

  .icon {
    color: white;
    font-size: 50px;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

export default function Mp4FileFormat({ url, index }) {
  const videoRef = useRef();
  const [state, setState] = useState();
  // const [indexState,setIndex] =useState(index);
  const [path, setPath] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let share = index / 12;

    if (refresh) {
      share = 0;
    }

    setTimeout(
      () => {
        setPath(url);
      },
      share === 0 ? 0 : share * 1200
    );
  }, [refresh]);

  return (
    path && (
      <Wrapper
        onClick={(e) => {
          if (state) {
            videoRef.current.pause();
            setState(!state);
          }
          videoRef.current.play();
          setState(!state);
        }}
      >
        <Video
          id="video"
          width="100%"
          height="100%"
          onError={(e) => {
            console.log(index, ": " + e);
            if (refresh) setRefresh(true);
          }}
          ref={videoRef}
          controls
        >
          <source src={url} type="video/mp4"></source>
        </Video>
        <PlayDisplay
          displayCondtion={state ? "none" : "flex"}
          backgroundColor={state ? "none" : "black"}
        >
          <RiPlayCircleLine className="icon" />
        </PlayDisplay>
      </Wrapper>
    )
  );
}

//Mp4FileFormatComponent
