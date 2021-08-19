import { NetworkId } from 'config';
import { getFaucetAddress, getTokenAddress } from './addressHelpers';

export const getFaucetContractLink = (chainId: NetworkId) => {
  const address = getFaucetAddress(chainId);
  switch (chainId) {
    case NetworkId.Eth:
      return `${process.env.REACT_APP_ETH_SCANNER}/address/${address}`;
    case NetworkId.Polygon:
      return `${process.env.REACT_APP_POLYGON_SCANNER}/address/${address}`;
    case NetworkId.Mumbai:
      return `${process.env.REACT_APP_MUMBAI_SCANNER}/address/${address}`;
    case NetworkId.Bsc:
      return `${process.env.REACT_APP_BSC_SCANNER}/address/${address}`;
    default:
    case NetworkId.BscTestnet:
      return `${process.env.REACT_APP_BSC_TEST_SCANNER}/address/${address}`;
  }
};

export const getTokenContractLink = (chainId: NetworkId) => {
  const address = getTokenAddress(chainId);
  switch (chainId) {
    case NetworkId.Eth:
      return `${process.env.REACT_APP_ETH_SCANNER}/address/${address}`;
    case NetworkId.Polygon:
      return `${process.env.REACT_APP_POLYGON_SCANNER}/address/${address}`;
    case NetworkId.Mumbai:
      return `${process.env.REACT_APP_MUMBAI_SCANNER}/address/${address}`;
    case NetworkId.Bsc:
      return `${process.env.REACT_APP_BSC_SCANNER}/address/${address}`;
    default:
    case NetworkId.BscTestnet:
      return `${process.env.REACT_APP_BSC_TEST_SCANNER}/address/${address}`;
  }
};
