import { useState } from "react";
import styled from "styled-components";

import TopBest from "./TopAlbumTab/TopBest";
import TopIdol from "./TopAlbumTab/TopIdol";
import TopBallde from "./TopAlbumTab/TopBallade";
import TopClassic from "./TopAlbumTab/TopClassic";
import TopRock from "./TopAlbumTab/TopRock";
import TopLabper from "./TopAlbumTab/TopLabper";

const TabAllContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const TabTextContainer = styled.div`
  margin-top: 70px;
`;

const TabContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  display: flex;
`;

export default function TopAlbumTab() {
  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index);
  };

  return (
    <Section>
      <TabAllContainer>
        <div className="App">
          <div className="box">
            <div className="TitleText">
              <h2>음악앨범 NFT 시장</h2>
              <p>
                소비자가 다양한 음악을 즐길 수 있게 우리는 모든 것을 준비합니다.
              </p>
            </div>
            <TabTextContainer>
              <div className="tabs">
                <div
                  onClick={() => action(1)}
                  className={`${state === 1 ? "tab active-tab" : "tab"}`}
                >
                  인기
                </div>
                <div
                  onClick={() => action(2)}
                  className={`${state === 2 ? "tab active-tab" : "tab"}`}
                >
                  아이돌
                </div>
                <div
                  onClick={() => action(3)}
                  className={`${state === 3 ? "tab active-tab" : "tab"}`}
                >
                  발라드
                </div>
                <div
                  onClick={() => action(4)}
                  className={`${state === 4 ? "tab active-tab" : "tab"}`}
                >
                  클래식
                </div>
                <div
                  onClick={() => action(5)}
                  className={`${state === 5 ? "tab active-tab" : "tab"}`}
                >
                  락
                </div>

                <div
                  onClick={() => action(6)}
                  className={`${state === 6 ? "tab active-tab" : "tab"}`}
                >
                  랩
                </div>
              </div>
            </TabTextContainer>

            {/* contents */}

            <div className="contents">
              <div
                className={`${
                  state === 1 ? "content active-content" : "content "
                }`}
              >
                <TabContainer>
                  <TopBest />
                </TabContainer>
              </div>

              <div
                className={`${
                  state === 2 ? "content active-content" : "content "
                }`}
              >
                <TabContainer>
                  <TopIdol />
                </TabContainer>
              </div>

              <div
                className={`${
                  state === 3 ? "content active-content" : "content "
                }`}
              >
                <TabContainer>
                  <TopBallde />
                </TabContainer>
              </div>
              <div
                className={`${
                  state === 4 ? "content active-content" : "content "
                }`}
              >
                <TabContainer>
                  <TopClassic />
                </TabContainer>
              </div>

              <div
                className={`${
                  state === 5 ? "content active-content" : "content "
                }`}
              >
                <TabContainer>
                  <TopRock />
                </TabContainer>
              </div>

              <div
                className={`${
                  state === 6 ? "content active-content" : "content "
                }`}
              >
                <TabContainer>
                  <TopLabper />
                </TabContainer>
              </div>
            </div>
          </div>
        </div>
      </TabAllContainer>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0 6rem;
  margin-bottom: 5rem;

  .marketPlaceTypes {
    display: flex;
    justify-content: center;
    gap: 2rem;
    button:not(.blue) {
      color: black;
      border-color: #7b7e86;
    }
  }
  .marketPlaces {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    font-family: "Noto Sans KR", sans-serif;
    .marketplace {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 0.5rem;
      border-radius: 1rem;
      width: max-content;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }
      .image {
        margin-bottom: 1rem;
      }
      .name {
        display: flex;
        color: #222222;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        h4 {
        }
      }
      .username {
        color: #555555;
        font-size: 0.8rem;
        padding: 0 1rem;
        margin-bottom: 0.5rem;
        margin-top: 10px;
      }
      .price-container {
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        color: #02204e;
        margin-top: 20px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .marketPlaceTypes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    .marketPlaces {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .box {
    width: 890px;
    margin-top: 50px;
  }

  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .tab {
    width: 84px;
    height: 40px;
    border-radius: 50px;
    border: 1px solid gray;
    background-color: white;
    font-family: "Pretendard-Regular";
    font-size: 19px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  .active-tab {
    border: none;
    background: white;
  }

  .active-tab::after {
    border: 2px solid #6246ea;
    border-radius: 50px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: initial;
    animation: new 0.5s;
  }

  .contents {
    position: relative;
  }

  .content {
    display: none;
    position: relative;
  }

  .active-content {
    display: block;
    margin-top: 10px;
    margin-right: 10px;
    transition: all 1s ease-in-out;
  }
  .TitleText {
    font-family: "Pretendard-Regular";
    line-height: 2;
    text-align: center;
    h2 {
      color: #6246ea;
      font-size: 48px;
      font-weight: 700;
    }
    p {
      color: #7b7e86;
    }
  }
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 100, 200, 300, 400, 500, 600, 700, 800, 900;
    font-style: normal;
  }
`;
