import React from 'react';
import { Page } from 'components';
import { useTranslation } from 'hooks';
import styled from 'styled-components';
import { Text } from 'ui';

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
  return (
    <LandingPage>
      <Text>{t('HELLO')}</Text>
    </LandingPage>
  );
}

export default Landing;
