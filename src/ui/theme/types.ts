export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  circle: string;
};

export type Shadows = {
  button: string;
};

export type Gradients = {};

export type Colors = {
  // Base
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  secondaryBright: string;
  secondaryDark: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  danger: string;
  info: string;

  // THEMED
  background: string;
  foreground: string;
  outline: string;
  buttonDisabled: string;
  contrast: string;
  disabled: string;
  dropdown: string;
  dropdownDeep: string;
  iconDisabled: string;
  input: string;
  invertedContrast: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  gradients: Gradients;

  // COMPONENTS
  card: string;
  overlay: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};

// COMPONENTS
export interface NavTheme {
  background: string;
}
