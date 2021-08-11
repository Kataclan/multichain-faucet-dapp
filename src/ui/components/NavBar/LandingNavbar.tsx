import React from 'react';
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
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
`;

const LandingNavbar = () => {
  return (
    <Wrapper>
      <StyledLandingNavBar>
        <Logo />
      </StyledLandingNavBar>
    </Wrapper>
  );
};

export default LandingNavbar;
