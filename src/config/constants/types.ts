export type PageMeta = {
  title: string;
  description?: string;
  image?: string;
};

export enum ChainId {
  Eth = 1,
  Bsc = 56,
  BscTestnet = 97,
  Polygon = 137,
  Mumbai = 80001
}

export const ChainsById: { [chainId in ChainId]: string } = {
  [ChainId.Eth]: 'eth',
  [ChainId.Bsc]: 'bsc',
  [ChainId.BscTestnet]: 'bscTestnet',
  [ChainId.Polygon]: 'polygon',
  [ChainId.Mumbai]: 'mumbai'
};

export interface Address {
  56: string;
  97?: string;
  1337?: string;
}
