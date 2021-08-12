import { Colors } from './types';

export const baseColors = {
  primary: '#00c988',
  primaryBright: '#41e6a2',
  primaryDark: '#00ad6e',
  secondary: '#424242',
  secondaryBright: '#595959',
  secondaryDark: '#000000',
  tertiary: '#353547',
  success: '#00C851',
  warning: '#ffbb33',
  info: '#33b5e5',
  golden: '#ffd700',
  danger: '#ff4444',
  failure: '#ed4b70'
};

export const darkColors: Colors = {
  ...baseColors,
  background: '#191c1f',
  foreground: '#1f2327',
  outline: '#353535',
  buttonDisabled: '#8D8D8D',
  contrast: '#FFFFFF',
  disabled: '#908b8b',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  iconDisabled: '#8D8D8D',
  input: '#292929',
  invertedContrast: '#191326',
  text: '#fafafa',
  textDisabled: '#b9babb',
  textSubtle: '#ffedff',
  gradients: {},
  // COMPONENTS
  card: '#1f2327',
  overlay: '#212121'
};

export const lightColors = darkColors;
