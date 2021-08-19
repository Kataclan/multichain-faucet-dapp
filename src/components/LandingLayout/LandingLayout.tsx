import React from 'react';
import NetworkButton from 'components/NetworkButton';
import { NetworkId } from 'config';
import { findNetworkByChainId, setupNetworkById } from 'utils';
import { useTranslation, useActiveWeb3React } from 'hooks';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { Flex, LandingNavbar, Text, MENU_HEIGHT } from 'ui';

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

const ActionsWrapper = styled(Flex)`
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 16px;
`;

const AccountWrapper = styled(Flex)`
  height: 100%;
  flex-direction: column;
  margin-left: 16px;
`;
const LandingLayout: React.FC = ({ children }) => {
  const { t } = useTranslation();
  const { account, chainId } = useActiveWeb3React();
  const networkConfig = findNetworkByChainId(chainId);
  const accountContent = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : t('Not connected');

  const handleSelectNetwork = (selectedChain: NetworkId) => {
    setupNetworkById(selectedChain);
  };

  return (
    <LandingLayoutRoot>
      <LandingNavbar>
        <ActionsWrapper>
          <NetworkButton chainId={chainId} networkConfig={networkConfig} onSelectNetwork={handleSelectNetwork} />
          <AccountWrapper>
            <Text color="primary" fontSize="10px">
              {t('Account')}
            </Text>
            <Text color="textSubtle" fontSize="12px">
              {accountContent}
            </Text>
          </AccountWrapper>
        </ActionsWrapper>
      </LandingNavbar>
      <LandingLayoutBodyWrapper>
        <LandingLayoutBodyInner> {children || <Outlet />}</LandingLayoutBodyInner>
      </LandingLayoutBodyWrapper>
    </LandingLayoutRoot>
  );
};

export default LandingLayout;
