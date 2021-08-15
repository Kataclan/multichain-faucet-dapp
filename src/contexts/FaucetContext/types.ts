export interface FaucetState {
  isLoading: boolean;
  initialized: boolean;
  isSupported: boolean;
  isPendingTx: boolean;
}

export interface FaucetContextApi extends FaucetState {
  tokenSymbol: string;
  startTx: () => void;
  stopTx: () => void;
}
