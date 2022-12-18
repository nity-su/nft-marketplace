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
      <div className="box">
        <TabTextContainer>
          <div className="tabs">
            <div
              onClick={() => action(1)}
              className={`${state === 1 ? "tab active-tab" : "tab"}`}
            >
              거래 내역
            </div>
            <div
              onClick={() => action(2)}
              className={`${state === 2 ? "tab active-tab" : "tab"}`}
            >
              가격 제안
            </div>
            <div
              onClick={() => action(3)}
              className={`${state === 3 ? "tab active-tab" : "tab"}`}
            >
              유틸리티
            </div>
          </div>
        </TabTextContainer>

        {/* contents */}
        <div className="contents">
          <div
            className={`${state === 1 ? "content active-content" : "content "}`}
          >
            <TabContainer>
              <TxDetail></TxDetail>
            </TabContainer>
          </div>

          <div
            className={`${state === 2 ? "content active-content" : "content "}`}
          >
            <TabContainer>
              <PriceSuggest></PriceSuggest>
            </TabContainer>
          </div>

          <div
            className={`${state === 3 ? "content active-content" : "content "}`}
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
