import { NetworkConfig } from 'config';

export interface NetworkState {
  isLoaded: boolean;
  network: NetworkConfig;
}

export interface NetworkContextApi extends NetworkState {}
