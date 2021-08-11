import React from 'react';
import styled from 'styled-components';
import { Flex } from 'ui/components/Box';
import { Page } from 'components';
import { Text } from 'ui/components/Text';

const NotFoundWrapper = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
`;

function NotFound() {
  return (
    <Page>
      <NotFoundWrapper>
        <Text>404 - Not Found</Text>
      </NotFoundWrapper>
    </Page>
  );
}

export default NotFound;
