import { FC } from 'react';

export enum Networks {
  ETH = 'eth',
  Bsc = 'bsc',
  BSCTest = 'bscTestnet',
  Polygon = 'polygon',
  Mumbai = 'mumbai'
}

export interface NetworkConfig {
  chainId: number;
  title: string;
  icon: FC;
  networkId: Networks;
}

export interface NetworkState {
  isLoaded: boolean;
  network: NetworkConfig;
}

export interface NetworkContextApi extends NetworkState {}
