import Metamask from './icons/Metamask';
// import MathWallet from './icons/MathWallet';
// import TokenPocket from './icons/TokenPocket';
import TrustWallet from './icons/TrustWallet';
import WalletConnect from './icons/WalletConnect';
import BinanceChain from './icons/BinanceChain';
// import SafePalWallet from './icons/SafePalWallet';
import { Config, ConnectorNames } from './types';

const connectors: Config[] = [
  {
    title: 'Metamask',
    icon: Metamask,
    connectorID: ConnectorNames.Injected
  },
  {
    title: 'TrustWallet',
    icon: TrustWallet,
    connectorID: ConnectorNames.Injected
  },
  // {
  //   title: "MathWallet",
  //   icon: MathWallet,
  //   connectorID: ConnectorNames.Injected,
  // },
  // {
  //   title: "TokenPocket",
  //   icon: TokenPocket,
  //   connectorID: ConnectorNames.Injected,
  // },
  {
    title: 'WalletConnect',
    icon: WalletConnect,
    connectorID: ConnectorNames.WalletConnect
  },
  {
    title: 'Binance Chain Wallet',
    icon: BinanceChain,
    connectorID: ConnectorNames.BSC
  }
  // {
  //   title: "SafePal Wallet",
  //   icon: SafePalWallet,
  //   connectorID: ConnectorNames.Injected,
  // },
];

export default connectors;
export const connectorLocalStorageKey = 'openfaucet_connectorId';
