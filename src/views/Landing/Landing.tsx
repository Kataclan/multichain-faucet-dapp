import React from 'react';
import { Page } from 'components';
import { useTranslation } from 'hooks';
import styled from 'styled-components';
import { Text } from 'ui';
import useActiveWeb3React from 'hooks/useActiveWeb3React';

const LandingPage = styled(Page)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 100%;
`;

function Landing() {
  const { t } = useTranslation();
  const { account } = useActiveWeb3React();
  return (
    <LandingPage>
      <Text>{account || t('Not connected')}</Text>
    </LandingPage>
  );
}

export default Landing;
