import { ModalTheme } from 'ui/widgets/Modal/types';
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices, NavTheme } from './types';

export interface OpenFaucetTheme {
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
  modal: ModalTheme;
}
