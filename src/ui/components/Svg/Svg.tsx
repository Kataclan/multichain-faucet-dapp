import styled, { css, keyframes } from 'styled-components';
import { space } from 'styled-system';
import getThemeValue from '../../utils/getThemeValue';
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

const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  fill: ${({ theme, disabled, color }) =>
    getThemeValue(disabled ? `colors.iconDisabled` : `colors.${color}`, color)(theme)} !important;
  flex-shrink: 0;
  ${({ spin }) => spin && spinStyle}
  ${space}
`;

Svg.defaultProps = {
  color: 'text',
  width: '32px',
  height: '32px',
  xmlns: 'http://www.w3.org/2000/svg',
  spin: false,
  disabled: false
};

export default Svg;
