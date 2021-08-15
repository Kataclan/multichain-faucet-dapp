import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from '../Box';
import { Heading } from '../Heading';
import { FaucetIcon } from '../Svg';

interface Props {
  href?: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon,
  .desktop-icon {
    width: 32px;
  }
  .mobile-icon {
    ${({ theme }) => theme.mediaQueries.md} {
      display: none;
    }
  }
  .desktop-icon-wrapper {
    display: none;
    ${({ theme }) => theme.mediaQueries.md} {
      display: flex;
    }
  }
`;

const Logo: React.FC<Props> = ({ href = '/' }) => {
  const innerLogo = (
    <>
      <FaucetIcon width="48px" height="48px" className="mobile-icon" />
      <Flex alignItems="center" className="desktop-icon-wrapper">
        <Heading scale="md" fontSize="28px" mr={2}>{`OPEN`}</Heading>
        <FaucetIcon width="48px" height="48px" className="desktop-icon" />
        <Heading scale="md" fontSize="28px" ml={2}>{`FAUCET`}</Heading>
      </Flex>
    </>
  );

  return (
    <Flex>
      <StyledLink to={href}>{innerLogo}</StyledLink>
    </Flex>
  );
};

export default Logo;
