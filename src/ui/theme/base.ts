import { MediaQueries, Breakpoints, Spacing, Shadows } from './types';

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 430,
  md: 852,
  lg: 968,
  xl: 1080
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`
};

export const shadows: Shadows = {
  button: '0px 5px 36.6px 6.5px rgba(255, 0, 185, 0.67);'
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: '4px',
  default: '16px',
  circle: '50%'
};

const zIndices = {
  dropdown: 10,
  modal: 100
};

const baseStyle = {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices
};

export default baseStyle;
