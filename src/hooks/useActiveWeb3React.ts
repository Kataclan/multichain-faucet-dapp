import { useEffect, useState, useRef } from 'react';
import { getRpcProvider } from 'utils';
// eslint-disable-next-line import/no-unresolved
import { Web3ReactContextInterface } from '@web3-react/core/dist/types';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { ChainId } from 'config';

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = (): Web3ReactContextInterface<Web3> => {
  const { library, chainId, ...web3React } = useWeb3React();
  const refEth = useRef(library);

  const [provider, setprovider] = useState(library || getRpcProvider(chainId));

  useEffect(() => {
    if (library !== refEth.current) {
      setprovider(library || getRpcProvider(chainId));
      refEth.current = library;
    }
  }, [library, chainId]);

  return {
    library: provider,
    chainId: chainId ?? ChainId.Bsc,
    ...web3React
  };
};

export default useActiveWeb3React;
