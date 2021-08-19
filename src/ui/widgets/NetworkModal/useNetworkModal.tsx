import React from 'react';
import { NetworkConfig, NetworkId } from 'config';
import { useModal } from '../Modal';
import { NetworkSetup } from './types';
import { NetworkModal } from '.';

interface ReturnType {
  onPresentNetworkModal: () => void;
}

const useNetworkModal = (
  networkSetup: NetworkSetup,
  networkConfigs: NetworkConfig[],
  selectedNetwork?: NetworkId
): ReturnType => {
  const [onPresentNetworkModal] = useModal(<NetworkModal config={networkConfigs} networkSetup={networkSetup} />);
  return { onPresentNetworkModal };
};

export default useNetworkModal;
