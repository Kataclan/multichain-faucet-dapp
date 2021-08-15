import styled from 'styled-components';
import Button from './Button';
import { BaseButtonProps, PolymorphicComponent } from './types';

const IconButton: PolymorphicComponent<BaseButtonProps, 'button'> = styled(Button)<BaseButtonProps>`
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  width: ${({ scale, width }) => (width ? width : scale === 'sm' ? '32px' : '48px')};
`;

export default IconButton;
