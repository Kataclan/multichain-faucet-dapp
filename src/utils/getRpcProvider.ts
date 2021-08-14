import { ChainId } from 'config';
import Web3 from 'web3';
import { HttpProviderOptions } from 'web3-core-helpers';
import { getBscNodeUrl, getBscTestNodeUrl } from './getRpcUrl';

const BSC_RPC_URL = getBscNodeUrl();
const BSC_TEST_RPC_URL = getBscTestNodeUrl();

const getRpcProvider = (chainId: ChainId = ChainId.ZeniTestnet) => {
  switch (chainId) {
    case ChainId.Bsc:
      return new Web3.providers.HttpProvider(BSC_RPC_URL, { timeout: 10000 } as HttpProviderOptions);
    default:
    case ChainId.ZeniTestnet:
      return new Web3.providers.HttpProvider(BSC_TEST_RPC_URL, { timeout: 10000 } as HttpProviderOptions);
  }
};

export default getRpcProvider;
