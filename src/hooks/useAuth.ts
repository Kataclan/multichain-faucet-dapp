import { useCallback } from 'react';
import { UnsupportedChainIdError } from '@web3-react/core';
import { NoBscProviderError } from '@binance-chain/bsc-connector';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector
} from '@web3-react/walletconnect-connector';
import { networkLocalStorageKey } from 'config';
import { connectorLocalStorageKey, ConnectorNames } from 'ui';
import useTranslation from './useTranslation';
import { connectorsByName, setupNetworkById } from 'utils';
import useActiveWeb3React from './useActiveWeb3React';

const useAuth = () => {
  const { t } = useTranslation();
  const { activate, deactivate } = useActiveWeb3React();

  const login = useCallback(
    // It uses the connector ID name to retrieve the connector from web3React config, and uses
    // default chain id env variable as default chain to connect
    (connectorID: ConnectorNames, chainId = parseInt(process.env.REACT_APP_DEFAULT_CHAIN_ID, 10)) => {
      const connector = connectorsByName[connectorID];
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetworkById(chainId);
            if (hasSetup) {
              activate(connector);
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey);
            window.localStorage.removeItem(networkLocalStorageKey);
            if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
              console.error(t('Provider Error'), t('No provider was found'));
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector;
                walletConnector.walletConnectProvider = null;
              }
              console.error(t('Authorization Error'), t('Please authorize to access your account'));
            } else {
              console.error(error.name, error.message);
            }
          }
        });
      } else {
        console.error(t('Unable to find connector'), t('The connector config is wrong'));
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
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
