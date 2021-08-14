import { Address, ChainId, contracts } from 'config';

export const getNetworkAddress = (chainId: ChainId, address: Address): string => {
  return address[chainId] ? address[chainId] : address[ChainId.Bsc];
};

export const getFaucetAddress = (chainId: ChainId = ChainId.ZeniTestnet): string => {
  return getNetworkAddress(chainId, contracts.faucet);
};

export const getTokenAddress = (chainId: ChainId = ChainId.ZeniTestnet): string => {
  return getNetworkAddress(chainId, contracts.token);
};
