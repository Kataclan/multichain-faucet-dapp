import { useMemo } from 'react';
import { getCrowdsaleContract, getFaucetContract } from 'utils';
import { getCrowdsaleAddress, getFaucetAddress, getTokenAddress } from 'utils/addressHelpers';
import useActiveWeb3React from './useActiveWeb3React';

export const useFaucetContract = () => {
  const { chainId, web3 } = useActiveWeb3React();
  return useMemo(() => getFaucetContract(chainId, getFaucetAddress(chainId), web3), [chainId, web3]);
};

export const useTokenContract = () => {
  const { chainId, web3 } = useActiveWeb3React();
  return useMemo(() => getFaucetContract(chainId, getTokenAddress(chainId), web3), [chainId, web3]);
};

export const useCrowdsaleContract = () => {
  const { chainId, web3 } = useActiveWeb3React();
  return useMemo(() => getCrowdsaleContract(chainId, getCrowdsaleAddress(chainId), web3), [chainId, web3]);
};
