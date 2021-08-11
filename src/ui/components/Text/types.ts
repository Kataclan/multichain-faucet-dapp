import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

export const variants = {
  heading1: 'heading1',
  heading2: 'heading2',
  body1: 'body1',
  body2: 'body2'
} as const;

export type TypographicVariants = typeof variants[keyof typeof variants];

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  color?: string;
  fontSize?: string;
  bold?: boolean;
  small?: boolean;
  ellipsis?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  gradient?: boolean;
  variant?: TypographicVariants;
}
