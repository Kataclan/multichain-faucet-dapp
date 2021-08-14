import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { BscConnector } from './bsc/bscConnector';
import { ethers } from 'ethers';
import { getBscNodeUrl } from './getRpcUrl';
import { ConnectorNames } from 'ui';
import Web3 from 'web3';

const POLLING_INTERVAL = 12000;
const rpcUrl = getBscNodeUrl();
const chainId = parseInt(process.env.REACT_APP_BSC_CHAIN_ID, 10);
const testChainId = parseInt(process.env.REACT_APP_BSC_TEST__CHAIN_ID, 10);

const injected = new InjectedConnector({ supportedChainIds: [56, 53] });

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});

const bscConnector = new BscConnector({ supportedChainIds: [chainId] });

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
