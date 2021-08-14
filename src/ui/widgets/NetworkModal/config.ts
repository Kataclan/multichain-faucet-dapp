import BinanceIcon from '../../components/Svg/Icons/Binance';
import { NetworkConfig, Networks } from './types';

const networks: NetworkConfig[] = [
  {
    chainId: 56,
    title: 'Smart Chain',
    icon: BinanceIcon,
    networkId: Networks.BSC
  },
  {
    chainId: 53,
    title: 'Zeni Test',
    icon: BinanceIcon,
    networkId: Networks.BSCTest
  }
];

export default networks;
export const networkLocalStorageKey = 'openfaucet_networkId';
