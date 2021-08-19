import { NetworkId } from 'config';
import { getFaucetAddress, getTokenAddress } from './addressHelpers';

export const getFaucetContractLink = (chainId: NetworkId) => {
  const address = getFaucetAddress(chainId);
  switch (chainId) {
    case NetworkId.Bsc:
      return `https://bscscan.com/${address}`;
    default:
    case NetworkId.BscTestnet:
      return `https://testnet.bscscan.com/${address}`;
  }
};

export const getTokenContractLink = (chainId: NetworkId) => {
  const address = getTokenAddress(chainId);
  switch (chainId) {
    case NetworkId.Bsc:
      return `https://bscscan.com/${address}`;
    default:
    case NetworkId.BscTestnet:
      return `https://testnet.bscscan.com/${address}`;
  }
};
