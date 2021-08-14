import { useMemo } from 'react';
import { getFaucetContract } from 'utils';
import { getFaucetAddress, getTokenAddress } from 'utils/addressHelpers';
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
