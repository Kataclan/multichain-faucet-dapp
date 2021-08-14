import { FC } from 'react';
import { SvgProps } from '../../components/Svg/types';

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  BSC = 'bsc'
}

export type Login = (connectorID: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorID: ConnectorNames;
}
