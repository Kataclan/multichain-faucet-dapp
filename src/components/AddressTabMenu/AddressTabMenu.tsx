import React from 'react';
import { useTranslation } from 'hooks';
import styled from 'styled-components';
import { Flex, Tab, TabMenu } from 'ui';
import { AddressInputTabs } from './types';

interface TabMenuProps {
  selectedTab: AddressInputTabs;
  onTabChange: (tab: AddressInputTabs) => void;
}

const StyledTabMenu = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const getIndexFromTab = (selectedTab: AddressInputTabs) => {
  switch (selectedTab) {
    case AddressInputTabs.User:
      return 1;
    case AddressInputTabs.Custom:
    default:
      return 0;
  }
};

const getTabFromIndex = (index: number) => {
  switch (index) {
    case 1:
      return AddressInputTabs.User;
    default:
      return AddressInputTabs.Custom;
  }
};

const AddressTabMenu: React.FC<TabMenuProps> = ({ selectedTab, onTabChange }) => {
  const { t } = useTranslation();

  const handleItemClick = (index: number) => {
    onTabChange(getTabFromIndex(index));
  };

  return (
    <StyledTabMenu>
      <TabMenu activeIndex={getIndexFromTab(selectedTab)} onItemClick={handleItemClick}>
        <Tab>
          <Flex alignItems="center">{t('Custom')}</Flex>
        </Tab>
        <Tab>
          <Flex alignItems="center">{t('User')}</Flex>
        </Tab>
      </TabMenu>
    </StyledTabMenu>
  );
};

export default AddressTabMenu;
