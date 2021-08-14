import { useCallback } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { NoBscProviderError } from '@binance-chain/bsc-connector';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector
} from '@web3-react/walletconnect-connector';
import useTranslation from './useTranslation';
import { connectorLocalStorageKey, ConnectorNames } from 'ui';
import { connectorsByName } from 'utils';
import { networkLocalStorageKey } from 'ui/widgets/NetworkModal';
import { setupNetworkById } from 'contexts/NetworkContext/setupNetworkHelpers';
import { ChainId } from 'config';

const useAuth = () => {
  const { t } = useTranslation();
  const { activate, deactivate } = useWeb3React();

  const login = useCallback(
    (connectorID: ConnectorNames, chainId = ChainId.BscTestnet) => {
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

    window.localStorage.removeItem(networkLocalStorageKey);
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
