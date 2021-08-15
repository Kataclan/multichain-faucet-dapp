import React from 'react';
import { Page } from 'components';
import styled from 'styled-components';
import SendToAddressForm from './components';

const LandingPage = styled(Page)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 100%;
`;

function Landing() {
  const tokenSymbol = process.env.REACT_APP_FAUCET_TOKEN_SYMBOL;

  const handleSubmitAddressForm = (address: string) => {
    console.log(address);
  };

  return (
    <LandingPage>
      <SendToAddressForm tokenSymbol={tokenSymbol} onClickSend={handleSubmitAddressForm} />
    </LandingPage>
  );
}

export default Landing;
