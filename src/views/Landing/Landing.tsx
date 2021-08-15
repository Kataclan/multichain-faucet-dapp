import React from 'react';
import { Container, Page } from 'components';
import { useTranslation } from 'hooks';
import styled from 'styled-components';
import { Text } from 'ui';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import SendToAddressForm from './components';

const LandingPage = styled(Page)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 100%;
`;

const LandingPageContainer = styled(Container)`
  display: flex;
  min-height: 100%;
  overflow: auto;
  align-items: center;
  justify-content: center;
`;

function Landing() {
  const { t } = useTranslation();
  const { account } = useActiveWeb3React();
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
