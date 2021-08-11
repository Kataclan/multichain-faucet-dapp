import styled, { DefaultTheme } from 'styled-components';
import { space, typography, layout } from 'styled-system';
import getThemeValue from '../../utils/getThemeValue';
import { TextProps, variants } from './types';

const style = {
  [variants.heading1]: {
    fontSize: '22px',
    fontSizeLg: '24px',
    letterSpacing: '1.12px'
  },
  [variants.heading2]: {
    fontSize: '16px',
    fontSizeLg: '22px',
    letterSpacing: '1.08px'
  },
  [variants.body1]: {
    fontSize: '12px',
    fontSizeLg: '14px',
    letterSpacing: '1.04px'
  },
  [variants.body2]: {
    fontSize: '12px',
    fontSizeLg: '14px',
    letterSpacing: '1.02px'
  }
};

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const Text = styled.div<TextProps>`
  font-family: 'Biko';
  color: ${getColor};
  font-size: ${({ variant }) => style[variant || variants.body1].fontSize};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  letter-spacing: ${({ variant }) => style[variant || variants.body1].letterSpacing};

  ${space}
  ${typography}
  ${layout}

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ variant }) => style[variant || variants.body1].fontSizeLg};
  }
`;

Text.defaultProps = {
  color: 'text',
  small: false,
  ellipsis: false
};

export default Text;
