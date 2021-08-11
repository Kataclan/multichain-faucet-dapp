import { DefaultTheme } from 'styled-components';
import base from './base';
import { lightColors } from './colors';
import { dark as darkNav } from 'ui/components/NavBar/theme';

const lightTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: lightColors,
  nav: darkNav
};

export default lightTheme;
