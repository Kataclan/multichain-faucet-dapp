import React from 'react';
import styled from 'styled-components';

const PageLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLoader: React.FC = ({ children }) => {
  return <PageLoaderWrapper>LOADING</PageLoaderWrapper>;
};

export default PageLoader;
