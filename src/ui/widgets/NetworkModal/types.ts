import { FC } from 'react';
import { SvgProps } from '../../components/Svg/types';

export enum Networks {
  ETH = 'eth',
  Bsc = 'bsc',
  BSCTest = 'bscTestnet',
  Polygon = 'polygon',
  Mumbai = 'mumbai'
}

export type NetworkSetup = (chainId: number) => void;

export interface NetworkConfig {
  chainId: number;
  title: string;
  icon: FC<SvgProps>;
  networkId: Networks;
}
