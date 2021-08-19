import { useMemo } from 'react';
import { getFaucetContract } from 'utils';
import { getFaucetAddress, getTokenAddress } from 'utils/addressHelpers';
import useActiveWeb3React from './useActiveWeb3React';

export const useFaucetContract = () => {
  const { chainId, web3 } = useActiveWeb3React();
  return useMemo(() => getFaucetContract(chainId, getFaucetAddress(chainId), web3), [chainId, web3]);
};

export const useTokenContract = () => {
  const { chainId, web3 } = useActiveWeb3React();
  return useMemo(() => getFaucetContract(chainId, getTokenAddress(chainId), web3), [chainId, web3]);
};
