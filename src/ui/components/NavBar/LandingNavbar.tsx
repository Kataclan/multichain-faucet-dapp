import React from 'react';
import { ConnectButton } from 'components';
import styled from 'styled-components';
import { MENU_HEIGHT } from 'ui/config';
import { Logo } from '../Logo';

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

const StyledConnectButton = styled(ConnectButton)`
  position: absolute;
  right: 16px;
`;

const LandingNavbar = () => {
  return (
    <Wrapper>
      <StyledLandingNavBar>
        <Logo />
        <StyledConnectButton>CONNECT</StyledConnectButton>
      </StyledLandingNavBar>
    </Wrapper>
  );
};

export default LandingNavbar;
