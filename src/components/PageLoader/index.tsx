import React from 'react';
import styled, { useTheme } from 'styled-components';
import { PuffLoader } from 'react-spinners';
import { useTranslation } from 'hooks';
import { Text } from 'ui';

const PageLoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`;

const PageLoader: React.FC = ({ children }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <PageLoaderWrapper>
      <PuffLoader color={theme.colors.primary} loading size={50} />
      <Text mt={4}>{t('Connecting to your wallet')}</Text>
    </PageLoaderWrapper>
  );
};

export default PageLoader;
