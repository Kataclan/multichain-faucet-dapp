import { useWeb3React } from '@web3-react/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import networks from 'ui/widgets/NetworkModal/config';
import { NetworkContextApi, NetworkState } from './types';

const initialState: NetworkState = {
  network: null,
  isLoaded: false
};

const NetworkContext = React.createContext<NetworkContextApi>({
  ...initialState
});

const NetworkContextProvider: React.FC<{}> = ({ children }) => {
  const [network, setNetworkConfig] = useState<NetworkState>(initialState);
  const { account, chainId } = useWeb3React();

  useEffect(() => {
    if (account) {
      const networkConfig = networks.find((n) => n.chainId === chainId);
      if (networkConfig) {
        setNetworkConfig({ network: networkConfig, isLoaded: true });
      }
    }
  }, [account, chainId]);

  return <NetworkContext.Provider value={{ ...network }}>{children}</NetworkContext.Provider>;
};

export { NetworkContext, NetworkContextProvider };
