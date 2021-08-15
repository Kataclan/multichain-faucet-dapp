import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Web3ReactProvider } from '@web3-react/core';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { LanguageProvider } from 'contexts/LocalizationContext';
import { ModalProvider } from 'ui';
import { getLibrary } from 'utils';
import { NetworkContextProvider } from 'contexts/NetworkContext/NetworkContextProvider';
import { FaucetContextProvider } from 'contexts/FaucetContext';

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <NetworkContextProvider>
        <HelmetProvider>
          <ThemeContextProvider>
            <LanguageProvider>
              <ModalProvider>
                <FaucetContextProvider>{children}</FaucetContextProvider>
              </ModalProvider>
            </LanguageProvider>
          </ThemeContextProvider>
        </HelmetProvider>
      </NetworkContextProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
