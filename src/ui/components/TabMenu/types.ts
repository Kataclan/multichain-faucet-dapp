import { ButtonProps } from '../Button';

export interface TabMenuProps {
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  children: React.ReactElement[];
}
export interface TabProps extends ButtonProps {
  isActive?: boolean;
  onClick?: () => void;
  scale?: 'md' | 'lg';
}
