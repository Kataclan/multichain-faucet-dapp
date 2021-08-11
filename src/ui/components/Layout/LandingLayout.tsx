import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { MENU_HEIGHT } from 'ui/config';
import LandingNavbar from '../NavBar/LandingNavbar';

const LandingLayoutRoot = styled.div`
  padding: 0;
  margin: 0;
  height: 100%;
`;

const LandingLayoutBodyWrapper = styled.div`
  position: relative;
  height: calc(100% - ${MENU_HEIGHT}px);
  padding-top: ${MENU_HEIGHT}px;
  min-height: 100%;
`;

const LandingLayoutBodyInner = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  margin-top: 0;
  max-width: 100%;
  overflow: hidden;
`;

const LandingLayout: React.FC = ({ children }) => {
  return (
    <LandingLayoutRoot>
      <LandingNavbar></LandingNavbar>
      <LandingLayoutBodyWrapper>
        <LandingLayoutBodyInner> {children || <Outlet />}</LandingLayoutBodyInner>
      </LandingLayoutBodyWrapper>
    </LandingLayoutRoot>
  );
};

export default LandingLayout;
