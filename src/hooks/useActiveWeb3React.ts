import { useEffect, useRef, useMemo } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Web3ReactContextInterface } from '@web3-react/core/dist/types';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { getRpcProvider } from 'utils';
import { ChainId } from 'config';
import useSetState from './useSetState';

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */

interface ActiveWeb3ReactContext extends Web3ReactContextInterface<Web3> {
  web3: Web3;
}
const useActiveWeb3React = (): ActiveWeb3ReactContext => {
  const { library, chainId, ...web3React } = useWeb3React();
  const refEth = useRef(library);
  const defaultChainRpcProvider = useMemo(() => getRpcProvider(chainId), [chainId]);
  const defaultChainId = parseInt(process.env.REACT_APP_DEFAULT_CHAIN_ID, 10);

  const [state, setState] = useSetState({
    web3: new Web3(library || defaultChainRpcProvider),
    library: library || defaultChainRpcProvider
  });

  useEffect(() => {
    if (library !== refEth.current) {
      setState({ web3: new Web3(library || defaultChainRpcProvider), library: library || defaultChainRpcProvider });
      refEth.current = library;
    }
  }, [chainId, library, defaultChainRpcProvider, setState]);

  return {
    chainId: chainId ?? defaultChainId,
    ...state,
    ...web3React
  };
};

export default useActiveWeb3React;
