import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

import styled from "styled-components";

import marketplace1 from "@assets/images/Ballade/b1.png";
import marketplace2 from "@assets/images/Ballade/b2.png";
import marketplace3 from "@assets/images/Ballade/b3.png";
import marketplace4 from "@assets/images/Ballade/b4.png";
import marketplace5 from "@assets/images/Ballade/b5.png";
import marketplace6 from "@assets/images/Ballade/b6.png";
import marketplace7 from "@assets/images/Ballade/b7.png";
import marketplace8 from "@assets/images/Ballade/b8.png";

export default function MarketPlace() {
  const marketPlaceData = [
    {
      image: marketplace1,
      name: "Dianus King - 크리스마스가 다가와",
    },
    {
      image: marketplace2,
      name: "그네 - 좋아했어요",
    },
    {
      image: marketplace3,
      name: "소시민 - 소나기",
    },
    {
      image: marketplace4,
      name: "수조 - 별자리",
    },
    {
      image: marketplace5,
      name: "영오 - 바이트미 OST Part.20",
    },
    {
      image: marketplace6,
      name: "정성민, 현진영 - '탑승연애'",
    },
    {
      image: marketplace7,
      name: "차소진 - 우리였는데",
    },
    {
      image: marketplace8,
      name: "허니비채 - 영하 (零下)",
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
