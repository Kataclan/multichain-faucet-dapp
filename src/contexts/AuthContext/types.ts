import { NetworkNames } from 'config';
import { ConnectorNames } from 'ui';

export interface AuthState {
  initialized: boolean;
  error?: string;
}

export interface AuthContextApi extends AuthState {
  login: (connectorId: ConnectorNames, networkId?: NetworkNames) => void;
  logout: () => void;
}
