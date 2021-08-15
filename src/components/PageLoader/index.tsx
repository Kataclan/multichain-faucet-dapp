import React from 'react';
import styled, { useTheme } from 'styled-components';
import { PuffLoader } from 'react-spinners';

const PageLoaderWrapper = styled.div`
  display: flex;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`;

const PageLoader: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <PageLoaderWrapper>
      <PuffLoader color={theme.colors.primary} loading size={50} />
    </PageLoaderWrapper>
  );
};

export default PageLoader;
