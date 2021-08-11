import styled from 'styled-components';
import Text from '../Text/Text';
import { tags, scales, HeadingProps } from './types';

const style = {
  [scales.XS]: {
    fontSize: '18px',
    fontSizeLg: '18px',
    letterSpacing: '1px'
  },
  [scales.MD]: {
    fontSize: '22px',
    fontSizeLg: '22px',
    letterSpacing: '1.1px'
  },
  [scales.LG]: {
    fontSize: '26px',
    fontSizeLg: '26px',
    letterSpacing: '1.15px'
  },
  [scales.XL]: {
    fontSize: '40px',
    fontSizeLg: '52px',
    letterSpacing: '1.26px'
  },
  [scales.XXL]: {
    fontSize: '60px',
    fontSizeLg: '64px',
    letterSpacing: '1.32px'
  }
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-family: 'Japanese';
  font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: ${({ scale }) => style[scale || scales.MD].letterSpacing};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || scales.MD].fontSizeLg};
  }
`;

Heading.defaultProps = {
  as: tags.H2
};

export default Heading;
