import styled, { DefaultTheme } from 'styled-components';
import { space, layout, variant } from 'styled-system';
import { scaleVariants, styleVariants } from './theme';
import { BaseButtonProps } from './types';

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ $isLoading, theme }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
      &:disabled,
      &.zeni-button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.zeni-button--disabled {
      background-color: ${theme.colors.buttonDisabled};
      border-color: ${theme.colors.buttonDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

const getTextStyles = ({ theme }: TransientButtonProps) => {
  return `
    &:zeni-button--texttext,
    &.zeni-button--text {
      background-color: transparent !important;
      border: none;
      box-shadow: none;
      color: ${theme.colors.text};
      cursor: pointer;
    }
  `;
};

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? '.5' : '1';
};

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover:not(:disabled):not(.zeni-button--disabled):not(.zeni-button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.zeni-button--disabled):not(.zeni-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }

  ${getDisabledStyles}
  ${getTextStyles}
  ${variant({
    prop: 'scale',
    variants: scaleVariants
  })}
  ${variant({
    variants: styleVariants
  })}
  ${layout}
  ${space}
`;

export default StyledButton;
