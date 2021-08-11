import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices, NavTheme } from './types';

export interface ZeniTheme {
  siteWidth: number;
  isDark: boolean;
  colors: Colors;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;

  // Components
  nav: NavTheme;
}
