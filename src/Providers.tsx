import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { LanguageProvider } from 'contexts/LocalizationContext';

const Providers: React.FC = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeContextProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </ThemeContextProvider>
    </HelmetProvider>
  );
};

export default Providers;
