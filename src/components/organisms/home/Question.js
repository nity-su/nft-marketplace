import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  width: 100%;
`;

const Meta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18vh;
  background-color: white;
`;

const qnaList = [
  {
    question: "Meta Music은 어떤 회사인가요?",
    answer:
      "아티스트들에게 더 많은 수익을 배분하는 것에 중점을 두고 질 좋은 작품 활동을 지속적으로 할 수 있게 지원하는 플랫폼 회사입니다.",
  },
  {
    question: "앨범 NFT란 무엇인가요?",
    answer:
      "대체 불가능한 토큰을 기반으로 출시한 앨범이며 상품에 따라서 구매자에게 일정 혜택이 주어집니다.",
  },
  {
    question: "NFT 앨범 결재는 어떻게 하나요?",
    answer:
      "NFT 앨범 결제는 지갑 연동 이후 클레이 또는 scw 코인으로 구매가 가능합니다.",
  },
  {
    question: "메타버스 룸에서 무엇을 할 수 있나요?",
    answer:
      "앨범 NFT 등급에 따라 차등 혜택이 주어지며 일반등급도 사람들과 함께 룸에 모여서 대화하고 뮤직비디오 시청 및 룸 꾸미기가 가능합니다.",
  },
  {
    question: "최종 목표는 무엇입니까?",
    answer:
      "아티스트들이 금전적인 이유로 작품 활동을 못하는 상황을 없애고 세계적으로 뻗어나갈 수 있는 다리 역할을 지속적으로 하는 것입니다.",
  },
];

const FAQ = () => {
  const [cardOnOff, setCardOnOff] = useState(qnaList);

  const getQnACard = (item, index) => {
    return (
      <div className="faq-card" key={index}>
        <div
          className="faq-card-title"
          onClick={() => {
            cardOnOff[index].click = !cardOnOff[index].click;
            setCardOnOff([...cardOnOff]);
          }}
        >
          <span className="question-mark">Q.</span>
          <span>{item.question}</span>
        </div>
        <div
          className={
            cardOnOff[index].click
              ? "faq-card-answer"
              : "faq-card-answer faq-card-none"
          }
        >
          <span className="answer-mark">A.</span>
          <span className="FAQ-card-answer">{item.answer}</span>
        </div>
      </div>
    );
  };

  return (
    <Section>
      <Container>
        <Meta className="Question-heading">MetaMusic FAQ</Meta>
        <div className="fqa-parent">
          <div className="faq-list">
            {cardOnOff.map((item, index) => getQnACard(item, index))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;

const Section = styled.section`
  .fqa-parent {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .faq-list {
    width: 73%;
    font-weight: 550;
  }

  .faq-card {
    display: flex;
    margin-top: 10px;
    width: 100%;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border: 2px solid black;
    border-radius: 20px;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .faq-card-title {
    display: flex;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    align-items: center;
    cursor: pointer;
  }

  .faq-card-answer {
    position: relative;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    padding-right: 2rem;
    border: 0px solid rgba(225, 228, 230, 0.5);
    border-top-width: 1px;
  }

  .faq-card-none {
    display: none;
  }

  .question-mark {
    color: #6246ea;
    font-size: 20px;
    margin-right: 10px;
  }

  .answer-mark {
    color: skyblue;
    font-size: 20px;
    margin-right: 10px;
  }

  .Question-heading {
    color: #6246ea;
    margin-bottom: 20px;
    font-size: 50px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
`;
