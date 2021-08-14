import { ChainId } from 'config';
import { Networks } from 'ui/widgets/NetworkModal';
import networks from 'ui/widgets/NetworkModal/config';
import { bscNodes, bscTestNodes, mumbaiNodes, polygonNodes } from 'utils';

export const findNetworkByNetworkName = (networkId: Networks) => networks.find((n) => n.networkId === networkId);

export const findNetworkByChainId = (chainId: number) => networks.find((n) => n.chainId === chainId);

export const setupEthereumNetwork = async () => {
  const _provider = window.ethereum;
  if (_provider) {
    try {
      await _provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${ChainId.Eth.toString(16)}`,
            chainName: 'Ethereum Mainnet',
            nativeCurrency: {
              name: 'ETH',
              symbol: 'ETH',
              decimals: 18
            },
            blockExplorerUrls: [`https://etherscan.io`]
          }
        ]
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the Ethereum network on metamask because window.ethereum is undefined");
    return false;
  }
};
export const setupBSCTestnetNetwork = async () => {
  const _provider = window.ethereum;
  if (_provider) {
    try {
      await _provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${ChainId.BscTestnet.toString(16)}`,
            chainName: 'Ganache5',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18
            },
            rpcUrls: bscTestNodes,
            blockExplorerUrls: [`https://testnet.bscscan.com/`]
          }
        ]
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the BSC Test network on metamask because window.ethereum is undefined");
    return false;
  }
};

export const setupBSCNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${ChainId.Bsc.toString(16)}`,
            chainName: 'Binance Smart Chain',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18
            },
            rpcUrls: bscNodes,
            blockExplorerUrls: [`https://bscscan.com`]
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

export const setupPolygonNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${ChainId.Polygon.toString(16)}`,
            chainName: 'Matic Mainnet',
            nativeCurrency: {
              name: 'MATIC',
              symbol: 'MATIC',
              decimals: 18
            },
            rpcUrls: mumbaiNodes,
            blockExplorerUrls: [`https://polygonscan.com/`]
          }
        ]
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the Matic Mainnet network on metamask because window.ethereum is undefined");
    return false;
  }
};

export const setupMumbaiNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${ChainId.Mumbai.toString(16)}`,
            chainName: 'Mumbai Testnet',
            nativeCurrency: {
              name: 'MATIC',
              symbol: 'MATIC',
              decimals: 18
            },
            rpcUrls: mumbaiNodes,
            blockExplorerUrls: [`https://mumbai.polygonscan.com/`]
          }
        ]
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the Mumbai Testnet network on metamask because window.ethereum is undefined");
    return false;
  }
};

export const setupNetworkById = async (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.Eth:
      return setupEthereumNetwork();
    case ChainId.Bsc:
      return setupBSCNetwork();
    default:
    case ChainId.BscTestnet:
      return setupBSCTestnetNetwork();
    case ChainId.Polygon:
      return setupPolygonNetwork();
    case ChainId.Mumbai:
      return setupMumbaiNetwork();
  }
};
