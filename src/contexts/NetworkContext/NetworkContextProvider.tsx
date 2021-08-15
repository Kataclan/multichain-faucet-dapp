import { ChainId } from 'config';
import { useActiveWeb3React } from 'hooks';
import React, { useState } from 'react';
import { useEffect } from 'react';
import networks, { networkLocalStorageKey } from 'ui/widgets/NetworkModal/config';
import { NetworkContextApi, NetworkState } from './types';

const initialState: NetworkState = {
  network: null,
  isLoaded: false
};

const NetworkContext = React.createContext<NetworkContextApi>({
  ...initialState
});

const NetworkContextProvider: React.FC<{}> = ({ children }) => {
  const { account, chainId } = useActiveWeb3React();
  const [network, setNetworkConfig] = useState<NetworkState>(initialState);

  useEffect(() => {
    const networkConfig = networks.find((n) => n.chainId === chainId);
    if (networkConfig) {
      setNetworkConfig({ network: networkConfig, isLoaded: true });
      window.localStorage.setItem(networkLocalStorageKey, chainId?.toString());
    }
  }, [account, chainId]);

  return <NetworkContext.Provider value={{ ...network }}>{children}</NetworkContext.Provider>;
};

export { NetworkContext, NetworkContextProvider };
