import BinanceIcon from '../../components/Svg/Icons/Binance';
import EthereumIcon from '../../components/Svg/Icons/Ethereum';
import PolygonIcon from '../../components/Svg/Icons/Polygon';
import { NetworkConfig, Networks } from './types';

const networks: NetworkConfig[] = [
  {
    chainId: 1,
    title: 'Ethereum',
    icon: EthereumIcon,
    networkId: Networks.ETH
  },
  {
    chainId: 56,
    title: 'Binance Smart Chain',
    icon: BinanceIcon,
    networkId: Networks.Bsc
  },
  {
    chainId: 97,
    title: 'Binance Smart Chain - Testnet',
    icon: BinanceIcon,
    networkId: Networks.BSCTest
  },
  {
    chainId: 137,
    title: 'Polygon',
    icon: PolygonIcon,
    networkId: Networks.Polygon
  },
  {
    chainId: 80001,
    title: 'Mumbai',
    icon: PolygonIcon,
    networkId: Networks.Mumbai
  }
];

export default networks;
export const networkLocalStorageKey = 'openfaucet_networkId';
