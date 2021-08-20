import { UnsupportedChainIdError } from '@web3-react/core';
import { NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/injected-connector';
import {
  WalletConnectConnector,
  UserRejectedRequestError as WalletConnectUserRejectedError
} from '@web3-react/walletconnect-connector';
import { networkLocalStorageKey } from 'config';
import { useActiveWeb3React, useTranslation } from 'hooks';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { connectorLocalStorageKey, ConnectorNames } from 'ui';
import { previousConnectionLocalstorageKey } from 'ui/widgets/WalletModal/config';
import { connectorsByName, NoBscProviderError, setupNetworkById } from 'utils';
import { AuthContextApi, AuthState } from './types';

const initialState: AuthState = {
  initialized: false
};

const AuthContext = React.createContext<AuthContextApi>({
  ...initialState,
  login: () => null,
  logout: () => null
});

const AuthContextProvider: React.FC<{}> = ({ children }) => {
  const { t } = useTranslation();
  const { account, activate, deactivate } = useActiveWeb3React();

  const [state, setState] = useState<AuthState>({ initialized: false });

  const login = useCallback(
    // It uses the connector ID name to retrieve the connector from web3React config, and uses
    // default chain id env variable as default chain to connect
    (connectorID: ConnectorNames, networkId = parseInt(process.env.REACT_APP_DEFAULT_CHAIN_ID, 10)) => {
      const connector = connectorsByName[connectorID];
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetworkById(networkId);
            if (hasSetup) {
              activate(connector);
              setState({
                initialized: true,
                error: ''
              });
            }
            setState({
              initialized: true,
              error: `${t('Network Error')}:  ${t('Chain not supported')}`
            });
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey);
            window.localStorage.removeItem(networkLocalStorageKey);
            if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
              setState({
                initialized: true,
                error: `${t('Provider Error')}:  ${t('No provider was found')}`
              });
            } else if (error instanceof UserRejectedRequestError || error instanceof WalletConnectUserRejectedError) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector;
                walletConnector.walletConnectProvider = null;
              }
              setState({
                initialized: true,
                error: `${t('Authorize error')}:  ${t('Please authorize to be able to show your account')}`
              });
            } else {
              setState({
                initialized: true,
                error: `${error.name}:  ${error.message}`
              });
            }
          }
        });
      } else {
        window.localStorage.removeItem(previousConnectionLocalstorageKey);
        setState({
          initialized: true,
          error: `${t('Unable to find connector')}:  ${t('The connector config is wrong')}`
        });
      }
    },
    [t, activate]
  );

  const logout = useCallback(() => {
    deactivate();
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close();
      connectorsByName.walletconnect.walletConnectProvider = null;
    }
    window.localStorage.removeItem(connectorLocalStorageKey);
    window.localStorage.removeItem(previousConnectionLocalstorageKey);
  }, [deactivate]);

  useEffect(() => {
    // This avoids the initial flickering when account is not present yet
    if (window.localStorage.getItem(previousConnectionLocalstorageKey) === 'connected' && account) {
      setState({ initialized: true, error: '' });
    } else if (window.localStorage.getItem(previousConnectionLocalstorageKey) === null) {
      setState({ initialized: true, error: '' });
    }
  }, [account]);

  return <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
