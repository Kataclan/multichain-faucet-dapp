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
`;

const Logo: React.FC<Props> = ({ href = '/' }) => {
  const innerLogo = (
    <>
      <Flex flexDirection="row" alignItems="center">
        <Heading>OPEN</Heading>
        <FaucetIcon width="48px" height="48px" />
        <Heading>FAUCET</Heading>
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
