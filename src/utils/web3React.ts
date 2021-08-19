import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { BscConnector } from './bsc/bscConnector';
import { ethers } from 'ethers';
import { getBscRpcUrl, getPolygonRpcUrl } from './getRpcUrl';
import { ConnectorNames } from 'ui';
import Web3 from 'web3';
import { NetworkId } from 'config';

const POLLING_INTERVAL = 12000;
const bscRpcUrl = getBscRpcUrl();
const polygonRpcUrl = getPolygonRpcUrl();

const injected = new InjectedConnector({
  supportedChainIds: [NetworkId.Eth, NetworkId.Bsc, NetworkId.BscTestnet, NetworkId.Polygon, NetworkId.Mumbai]
});

const walletconnect = new WalletConnectConnector({
  rpc: { [NetworkId.Bsc]: bscRpcUrl, [NetworkId.Polygon]: polygonRpcUrl },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});

const bscConnector = new BscConnector({ supportedChainIds: [NetworkId.Bsc] });

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  injected: injected,
  walletconnect: walletconnect,
  bsc: bscConnector
};

export const getLibrary = (provider): Web3 => {
  return provider;
};

/**
 * BSC Wallet requires a different sign method
 * @see https://docs.binance.org/smart-chain/wallet/wallet_api.html#binancechainbnbsignaddress-string-message-string-promisepublickey-string-signature-string
 */
export const signMessage = async (provider: any, account: string, message: string): Promise<string> => {
  if (window.BinanceChain) {
    const { signature } = await window.BinanceChain.bnbSign(account, message);
    return signature;
  }

  /**
   * Wallet Connect does not sign the message correctly unless you use their method
   * @see https://github.com/WalletConnect/walletconnect-monorepo/issues/462
   */
  if (provider.provider?.wc) {
    const wcMessage = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message));
    const signature = await provider.provider?.wc.signPersonalMessage([wcMessage, account]);
    return signature;
  }

  return provider.getSigner(account).signMessage(message);
};
