import "@components/organisms/home/css/tradeplace.css";
import { useState } from "react";
import TxDetail from "./TxDetail";
import PriceSuggest from "./PriceSuggest";
import Util from "./Utility";
import styled from "styled-components";

const TabContainer = styled.div`
  width: 100%;
`;

const TabTextContainer = styled.div`
  margin-bottom: -30px;
  margin-left: 10px;
`;

function TestTab() {
  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index);
  };

  return (
    <div className="App">
      <div className="txbox">
        <TabTextContainer>
          <div className="txtabs">
            <div
              onClick={() => action(1)}
              className={`${state === 1 ? "txtab active-tab" : "txtab"}`}
            >
              거래 내역
            </div>
            <div
              onClick={() => action(2)}
              className={`${state === 2 ? "txtab active-tab" : "txtab"}`}
            >
              가격 제안
            </div>
            <div
              onClick={() => action(3)}
              className={`${state === 3 ? "txtab active-tab" : "txtab"}`}
            >
              유틸리티
            </div>
          </div>
        </TabTextContainer>

        {/* contents */}
        <div className="contents">
          <div
            className={`${state === 1 ? "txcontent active-content" : "txcontent "}`}
          >
            <TabContainer>
              <TxDetail></TxDetail>
            </TabContainer>
          </div>

          <div
            className={`${state === 2 ? "txcontent active-content" : "txcontent "}`}
          >
            <TabContainer>
              <PriceSuggest></PriceSuggest>
            </TabContainer>
          </div>

          <div
            className={`${state === 3 ? "txcontent active-content" : "txcontent "}`}
          >
            <TabContainer>
              <Util></Util>
            </TabContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestTab;
