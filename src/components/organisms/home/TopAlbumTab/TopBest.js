import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

import styled from "styled-components";

import marketplace1 from "@components/assets/images/marketplace1.png";
import marketplace2 from "@components/assets/images/marketplace2.png";
import marketplace4 from "@components/assets/images/marketplace3.png";
import marketplace3 from "@components/assets/images/marketplace4.png";
import marketplace5 from "@components/assets/images/marketplace5.png";
import marketplace6 from "@components/assets/images/marketplace6.png";
import marketplace7 from "@components/assets/images/marketplace7.png";
import marketplace8 from "@components/assets/images/marketplace8.png";

export default function TopBest() {
  const marketPlaceData = [
    {
      image: marketplace1,
      name: "윤하 - YOUNHA 6th Album",
    },
    {
      image: marketplace2,
      name: "NewJeans - Ditto",
    },
    {
      image: marketplace3,
      name: "경서 - 나의 X에게",
    },
    {
      image: marketplace4,
      name: "쇼미더머니 11 Episode 3",
    },
    {
      image: marketplace5,
      name: "진 - The Astronaut",
    },
    {
      image: marketplace6,
      name: "방탄소년단 - Butter",
    },
    {
      image: marketplace7,
      name: "PSY 싸이 - 싸다9",
    },
    {
      image: marketplace8,
      name: "WSG워너비 - WSG워너비 1집",
    },
  ];

  return (
    <Section>
      <div className="marketPlaces">
        {marketPlaceData.map(({ image, name }) => {
          return (
            <div className="marketplace">
              <div className="image">
                <img src={image} alt="marketplace" />
              </div>
              <div className="name">
                <h4>{name}</h4>
                <BsThreeDots />
              </div>
              <h6 className="username">@MetaMusic</h6>
              <div className="price-container">
                <h5 className="price">0.1 ETH</h5>
                <FaEthereum />
              </div>
            </div>
          );
        })}
      </div>
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
      }
      .price-container {
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        color: #02204e;
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
`;
