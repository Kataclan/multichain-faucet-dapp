import React from 'react';
import { Page, PageLoader } from 'components';
import styled from 'styled-components';
import SendToAddressForm from './components';
import { useFaucet } from 'contexts';
import NotSupported from './components/NotSupported';

const LandingPage = styled(Page)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 100%;
`;

function Landing() {
  const { isLoading, isSupported, tokenSymbol } = useFaucet();

  const handleSubmitAddressForm = (address: string) => {
    console.log(address);
  };

  const renderFormOrError = () => {
    return isSupported ? (
      <SendToAddressForm tokenSymbol={tokenSymbol} onClickSend={handleSubmitAddressForm} />
    ) : (
      <NotSupported />
    );
  };

  return <LandingPage>{isLoading ? <PageLoader /> : renderFormOrError()}</LandingPage>;
}

export default Landing;
