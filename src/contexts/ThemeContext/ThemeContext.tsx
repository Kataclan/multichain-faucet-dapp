import React, { useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import darkTheme from '../../ui/theme/dark';
import lightTheme from '../../ui/theme/light';

const CACHE_KEY = 'IS_DARK';

const ThemeContext = React.createContext<{ isDark: boolean; toggleTheme: { (): void } | null }>({
  isDark: true,
  toggleTheme: () => null
});

const ThemeContextProvider: React.FC<{}> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY);
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false;
  });

  const toggleTheme = () => {
    setIsDark((prevState: boolean) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState));
      return !prevState;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
