import React, { cloneElement, Children, ReactElement } from 'react';
import styled from 'styled-components';
import Flex from '../Box/Flex';
import { TabMenuProps } from './types';

const Wrapper = styled(Flex)`
  overflow-x: scroll;
  width: 100%;
  padding: 0;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const ButtonMenu: React.FC<TabMenuProps> = ({ activeIndex = 0, onItemClick, children }) => {
  return (
    <Wrapper p={['0 4px', '0 16px']}>
      {Children.map(children, (child: ReactElement, index) => {
        const isActive = activeIndex === index;
        return cloneElement(child, {
          isActive,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          color: isActive ? 'primary' : 'textSubtle',
          backgroundColor: 'transparent'
        });
      })}
    </Wrapper>
  );
};

export default ButtonMenu;
