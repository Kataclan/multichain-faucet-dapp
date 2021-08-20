import React, { useCallback, useEffect } from 'react';
import { NetworkId } from 'config';
import { useSetState, useActiveWeb3React } from 'hooks';
import { isFaucetSupportedInChain } from 'utils';
import { FaucetContextApi, FaucetState } from './types';

const initialState: FaucetState = {
  isLoading: true,
  initialized: false,
  isSupported: false,
  isPendingTx: false
};

const FaucetContext = React.createContext<FaucetContextApi>({
  ...initialState,
  tokenSymbol: window.openfaucet.REACT_APP_FAUCET_TOKEN_SYMBOL,
  startTx: () => null,
  stopTx: () => null
});

const FaucetContextProvider: React.FC<{}> = ({ children }) => {
  const { chainId } = useActiveWeb3React();

  const [state, setState] = useSetState(initialState);

  const init = useCallback(
    (_chainId: NetworkId) => {
      const isSupported = isFaucetSupportedInChain(_chainId);
      setState({ isSupported, isLoading: false, initialized: true });
    },
    [setState]
  );

  const stopTx = useCallback(() => {
    setState({ isPendingTx: false });
  }, [setState]);

  const startTx = useCallback(() => {
    setState({ isPendingTx: true });
  }, [setState]);

  useEffect(() => {
    init(chainId);
  }, [chainId, init]);

  return (
    <FaucetContext.Provider
      value={{ ...state, tokenSymbol: window.openfaucet.REACT_APP_FAUCET_TOKEN_SYMBOL ?? '?', stopTx, startTx }}
    >
      {children}
    </FaucetContext.Provider>
  );
};

export { FaucetContext, FaucetContextProvider };
