import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Web3ReactProvider } from '@web3-react/core';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { LanguageProvider } from 'contexts/LocalizationContext';
import { ModalProvider } from 'ui';
import { getLibrary } from 'utils';
import { FaucetContextProvider } from 'contexts/FaucetContext';
import { AuthContextProvider } from 'contexts/AuthContext';

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <HelmetProvider>
        <ThemeContextProvider>
          <LanguageProvider>
            <ModalProvider>
              <AuthContextProvider>
                <FaucetContextProvider>{children}</FaucetContextProvider>
              </AuthContextProvider>
            </ModalProvider>
          </LanguageProvider>
        </ThemeContextProvider>
      </HelmetProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
