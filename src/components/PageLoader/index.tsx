import React from 'react';
import styled, { useTheme } from 'styled-components';
import { css } from '@emotion/react';
import { PuffLoader } from 'react-spinners';

const PageLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const PageLoader: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <PageLoaderWrapper>
      <PuffLoader color={theme.colors.primary} loading css={override} size={150} />
    </PageLoaderWrapper>
  );
};

export default PageLoader;
