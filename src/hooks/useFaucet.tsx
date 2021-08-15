import { ChainId } from 'config';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { isFaucetSupportedInChain } from 'utils';
import useActiveWeb3React from './useActiveWeb3React';
import useSetState from './useSetState';

export default function useFaucet() {
  const { chainId } = useActiveWeb3React();
  const [state, setState] = useSetState({
    isLoading: true,
    initialized: false,
    isSupported: false
  });
  const tokenSymbol = process.env.REACT_APP_FAUCET_TOKEN_SYMBOL;

  const init = useCallback(
    (_chainId: ChainId) => {
      setState({ isSupported: isFaucetSupportedInChain(_chainId), isLoading: false, initialized: true });
    },
    [setState]
  );

  // const fetchFaucet = useCallback(async () => {
  //   console.log('Fetch');
  // }, []);

  useEffect(() => {
    init(chainId);
  }, [chainId, init]);

  return { ...state, tokenSymbol };
}
