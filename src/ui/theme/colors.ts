import { Colors } from './types';

export const baseColors = {
  primary: '#f10098',
  primaryBright: '#ff99ff',
  primaryDark: '#e6009a',
  secondary: '#8600e2',
  secondaryBright: '',
  secondaryDark: '',
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
  background: '#131019',
  backroundNav: '#131019',
  buttonDisabled: '#8D8D8D',
  contrast: '#FFFFFF',
  disabled: '#908b8b',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  iconDisabled: '#8D8D8D',
  input: '#372F47',
  invertedContrast: '#191326',
  text: '#e5d3f7',
  textDisabled: '#f6f1f1',
  textSubtle: '#ffedff',
  gradients: {
    zeni: `linear-gradient(to right, ${baseColors.primary}, ${baseColors.secondary})`
  }
};

export const lightColors = darkColors;
