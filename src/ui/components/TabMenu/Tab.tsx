import styled from 'styled-components';
import { color } from 'styled-system';
import { Button } from '../Button';
import { TabProps } from './types';

const getBorderRadius = ({ scale }: TabProps) => (scale === 'md' ? '16px 16px 0 0' : '24px 24px 0 0');

const getPadding = ({ scale }: TabProps) => (scale === 'md' ? '8px' : '16px');

const Tab = styled(Button)`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  outline: 0;
  flex-grow: 1;
  flex: 1 1 auto;
  padding: ${getPadding};
  border-radius: ${getBorderRadius};
  font-size: 16px;
  font-weight: 600;

  ${color}
`;

Tab.defaultProps = {
  scale: 'md'
};

export default Tab;
