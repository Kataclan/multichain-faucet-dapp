import { FC } from 'react';

export enum Networks {
  BSC = 'bsc',
  BSCTest = 'bscTestnet'
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
