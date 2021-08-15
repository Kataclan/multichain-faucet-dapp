import { useEffect } from 'react';
import useAuth from 'hooks/useAuth';
import { connectorLocalStorageKey, ConnectorNames } from 'ui';
import { networkLocalStorageKey, Networks } from 'ui/widgets/NetworkModal';

const _binanceChainListener = async () =>
  new Promise<void>((resolve) =>
    Object.defineProperty(window, 'BinanceChain', {
      get() {
        return this.bsc;
      },
      set(bsc) {
        this.bsc = bsc;

        resolve();
      }
    })
  );

const useEagerConnect = () => {
  const { login } = useAuth();
  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames;
    const networkName = window.localStorage.getItem(networkLocalStorageKey) as Networks;
    if (connectorId) {
      const isConnectorBinanceChain = connectorId === ConnectorNames.BSC;
      const isBinanceChainDefined = Reflect.has(window, 'BinanceChain');
      if (isConnectorBinanceChain && !isBinanceChainDefined) {
        _binanceChainListener().then(() => login(connectorId));
        return;
      }

      login(connectorId, networkName);
    } else {
      login(ConnectorNames.Injected);
    }
  }, [login]);
};

export default useEagerConnect;
