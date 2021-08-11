import React from 'react';
import { Page } from 'components';
import { useTranslation } from 'hooks';
import styled from 'styled-components';

const LandingPage = styled(Page)`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0 16px;

  ${({ theme }) => theme.mediaQueries.lg} {
    min-height: 910px;
    background: url('/img/landing/chinatown.png');
    background-repeat: no-repeat;
    background-position: center 24px, center;
    background-size: 852px 852px;
    max-width: 851px;
  }
`;

function Landing() {
  const { t } = useTranslation();
  return <LandingPage>{t('Hello world')}</LandingPage>;
}

export default Landing;
