import { useState } from "react";
import TxDetail from "./TxDetail";
import PriceSuggest from "./PriceSuggest";
import Util from "./Utility";
import styled from "styled-components";

const TransactionBox = styled.div`
  margin-top: 10px;
  border-radius: 15px;
`;

const TabContainer = styled.div`
  width: 100%;
`;

const TabTextContainer = styled.div`
  margin-bottom: -30px;
  margin-left: 10px;
`;

function TxBoxTab() {
  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index);
  };

  return (
    <Section>
      <TransactionBox>
        <div className="App">
          <div className="txbox">
            <TabTextContainer>
              <div className="txtabs">
                <div
                  onClick={() => action(1)}
                  className={`${state === 1 ? "txtab txactive-tab" : "txtab"}`}
                >
                  거래 내역
                </div>
                <div
                  onClick={() => action(2)}
                  className={`${state === 2 ? "txtab txactive-tab" : "txtab"}`}
                >
                  가격 제안
                </div>
                <div
                  onClick={() => action(3)}
                  className={`${state === 3 ? "txtab txactive-tab" : "txtab"}`}
                >
                  유틸리티
                </div>
              </div>
            </TabTextContainer>

            {/* contents */}
            <div className="txcontents">
              <div
                className={`${
                  state === 1 ? "txcontent txactive-content" : "txcontent "
                }`}
              >
                <TabContainer>
                  <TxDetail></TxDetail>
                </TabContainer>
              </div>

              <div
                className={`${
                  state === 2 ? "txcontent txactive-content" : "txcontent "
                }`}
              >
                <TabContainer>
                  <PriceSuggest></PriceSuggest>
                </TabContainer>
              </div>

              <div
                className={`${
                  state === 3 ? "txcontent txactive-content" : "txcontent "
                }`}
              >
                <TabContainer>
                  <Util></Util>
                </TabContainer>
              </div>
            </div>
          </div>
        </div>
      </TransactionBox>
    </Section>
  );
}

export default TxBoxTab;

const Section = styled.section`
  .txbox {
    width: 600px;
    justify-content: flex-start;
    margin-top: 50px;
  }

  .txtabs {
    display: flex;
    justify-content: space-around;
  }

  .txtab {
    width: 110px;
    margin-bottom: 30px;
    padding: 10px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
  }

  .txactive-tab {
    border: none;
    background: white;
  }

  .txactive-tab::after {
    border-top: 2px solid #6246ea;
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

  .txcontents {
    position: relative;
  }

  .txcontent {
    display: none;
    position: relative;
  }

  .txactive-content {
    display: block;
    margin-top: 10px;
    margin-right: 10px;
    transition: all 1s ease-in-out;
  }
`;
