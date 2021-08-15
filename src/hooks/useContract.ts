import { useMemo } from 'react';
import { getCrowdsaleContract, getFaucetContract } from 'utils';
import { getCrowdsaleAddress, getFaucetAddress, getTokenAddress } from 'utils/addressHelpers';
import useActiveWeb3React from './useActiveWeb3React';

export const useFaucetContract = () => {
  const activeWeb3 = useActiveWeb3React();
  return useMemo(
    () => getFaucetContract(activeWeb3.chainId, getFaucetAddress(activeWeb3.chainId), activeWeb3.library),
    [activeWeb3.chainId, activeWeb3.library]
  );
};

export const useTokenContract = () => {
  const activeWeb3 = useActiveWeb3React();
  return useMemo(
    () => getFaucetContract(activeWeb3.chainId, getTokenAddress(activeWeb3.chainId), activeWeb3.library),
    [activeWeb3.chainId, activeWeb3.library]
  );
};

export const useCrowdsaleContract = () => {
  const activeWeb3 = useActiveWeb3React();
  return useMemo(
    () => getCrowdsaleContract(activeWeb3.chainId, getCrowdsaleAddress(activeWeb3.chainId), activeWeb3.library),
    [activeWeb3.chainId, activeWeb3.library]
  );
};
