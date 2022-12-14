import React from "react";
import styled from "styled-components";
import Wallet from "../../../assets/images/wallet.png";

const Button = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const ConnectWalletContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const ConnectWalletImg = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${Wallet});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ConnectWalletText = styled.div`
  width: 170px;
  height: 24px;
  display: flex;
  justify-content: center;
`;

export default function ConnectWallet({ setAddr }) {
  return (
    <>
      <ConnectWalletContainer>
        <Button
          onClick={() => {
            if (typeof window.ethereum !== "undefined") {
              const ethereum = window.ethereum;
              ethereum
                .request({ method: "eth_requestAccounts" })
                .then((addr) => setAddr(addr[0]));
            }
          }}
        >
          <ConnectWalletImg></ConnectWalletImg>
        </Button>

        <Button
          onClick={() => {
            if (typeof window.ethereum !== "undefined") {
              const ethereum = window.ethereum;
              ethereum
                .request({ method: "eth_requestAccounts" })
                .then((addr) => setAddr(addr[0]));
            }
          }}
        >
          <ConnectWalletText className="NaviBoxFonts">
            Connect Wallet
          </ConnectWalletText>
        </Button>
      </ConnectWalletContainer>
    </>
  );
}
