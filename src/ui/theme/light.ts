import { DefaultTheme } from 'styled-components';
import base from './base';
import { lightColors } from './colors';
import { dark as darkNav } from '../components/NavBar/theme';
import { dark as darkModal } from '../widgets/Modal/theme';

const lightTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: lightColors,
  nav: darkNav,
  modal: darkModal
};

export default lightTheme;
