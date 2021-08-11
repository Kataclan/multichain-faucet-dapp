import styled, { css, keyframes } from 'styled-components';
import { space } from 'styled-system';
import { SvgProps } from './types';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinStyle = css`
  animation: ${rotate} 2s linear infinite;
`;

const GradientSvg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  flex-shrink: 0;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${({ spin }) => spin && spinStyle}
  ${space}
`;

GradientSvg.defaultProps = {
  color: 'text',
  width: '32px',
  height: '32px',
  xmlns: 'http://www.w3.org/2000/svg',
  spin: false,
  disabled: false
};

export default GradientSvg;
