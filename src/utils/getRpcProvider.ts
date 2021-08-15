import { ChainId } from 'config';
import Web3 from 'web3';
import { HttpProviderOptions } from 'web3-core-helpers';
import { getBscRpcUrl, getBscTestRpcUrl, getEthereumRpcUrl, getMumbaiRpcUrl, getPolygonRpcUrl } from './getRpcUrl';

const getRpcProvider = (chainId: ChainId = ChainId.BscTestnet) => {
  switch (chainId) {
    case ChainId.Bsc:
      return new Web3.providers.HttpProvider(getBscRpcUrl(), { timeout: 10000 } as HttpProviderOptions);

    case ChainId.Polygon:
      return new Web3.providers.HttpProvider(getPolygonRpcUrl(), { timeout: 10000 } as HttpProviderOptions);

    case ChainId.Mumbai:
      return new Web3.providers.HttpProvider(getMumbaiRpcUrl(), { timeout: 10000 } as HttpProviderOptions);

    case ChainId.Eth:
      return new Web3.providers.HttpProvider(getEthereumRpcUrl(), { timeout: 10000 } as HttpProviderOptions);

    case ChainId.BscTestnet:
    default:
      return new Web3.providers.HttpProvider(getBscTestRpcUrl(), { timeout: 10000 } as HttpProviderOptions);
  }
};

export default getRpcProvider;
