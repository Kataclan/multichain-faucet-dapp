import { ChainId } from 'config';
import { Networks } from 'ui/widgets/NetworkModal';
import networks from 'ui/widgets/NetworkModal/config';
import { bscNodes } from 'utils';

export const findNetworkByNetworkName = (networkId: Networks) => networks.find((n) => n.networkId === networkId);

export const findNetworkByChainId = (chainId: number) => networks.find((n) => n.chainId === chainId);

export const setupBSCTestnetNetwork = async (provider: any) => {
  const _provider = provider ?? window.ethereum;
  if (_provider) {
    const chainId = parseInt(process.env.REACT_APP_BSC_TEST_CHAIN_ID, 10);
    try {
      await _provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Ganache5',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18
            },
            rpcUrls: ['http://185.212.131.158:8545'],
            blockExplorerUrls: [`${process.env.REACT_APP_BSC_TEST_SCANNER_URI}/`]
          }
        ]
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined");
    return false;
  }
};

export const setupBSCNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    const chainId = parseInt(process.env.REACT_APP_BSC_CHAIN_ID, 10);
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Binance Smart Chain',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18
            },
            rpcUrls: bscNodes,
            blockExplorerUrls: [`${process.env.REACT_APP_BSC_SCANNER_URI}/`]
          }
        ]
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined");
    return false;
  }
};

export const setupNetworkById = async (chainId: ChainId, provider?: any) => {
  switch (chainId) {
    case ChainId.Bsc:
      return setupBSCNetwork();
    default:
    case ChainId.ZeniTestnet:
    case ChainId.BscTestnet:
      return setupBSCTestnetNetwork(provider);
  }
};
