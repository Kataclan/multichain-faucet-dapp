import React from 'react';
import styled from 'styled-components';
import { MENU_HEIGHT } from 'ui/config';
import { Logo } from '../Logo';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNavBar = styled.nav`
  position: fixed;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-bottom: solid 1px ${({ theme }) => theme.colors.outline};
  z-index: 20;

  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: center;
  }
`;

const Navbar: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <StyledNavBar>
        <Logo />
        {children}
      </StyledNavBar>
    </Wrapper>
  );
};

export default Navbar;
