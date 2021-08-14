import React from 'react';
import { ConnectButton } from 'components';
import styled from 'styled-components';
import { MENU_HEIGHT } from 'ui/config';
import { Logo } from '../Logo';
import { Flex } from '../Box';
import NetworkButton from 'components/NetworkButton';
import { useWeb3React } from '@web3-react/core';
import { useAuth } from 'hooks';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledLandingNavBar = styled.nav`
  position: fixed;
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-bottom: solid 1px ${({ theme }) => theme.colors.outline};
  z-index: 20;
`;

const WrapperActions = styled(Flex)`
  align-items: center;
  position: absolute;
  right: 16px;
`;

const LandingNavbar = () => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  return (
    <Wrapper>
      <StyledLandingNavBar>
        <Logo />
        <WrapperActions>
          <NetworkButton />
          <ConnectButton account={account} login={login} logout={logout} />
        </WrapperActions>
      </StyledLandingNavBar>
    </Wrapper>
  );
};

export default LandingNavbar;
