export type PageMeta = {
  title: string;
  description?: string;
  image?: string;
};

export enum ChainId {
  Bsc = 56,
  BscTestnet = 79,
  ZeniTestnet = 1337
}

export const ChainsById: { [chainId in ChainId]: string } = {
  [ChainId.Bsc]: 'bsc',
  [ChainId.BscTestnet]: 'bscTestnet',
  [ChainId.ZeniTestnet]: 'zeniTestnet'
};

export interface Address {
  56: string;
  97?: string;
  1337?: string;
}
