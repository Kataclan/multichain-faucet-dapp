import React from 'react';
import { useModal } from '../Modal';
import { NetworkSetup } from './types';
import { NetworkModal } from '.';

interface ReturnType {
  onPresentNetworkModal: () => void;
}

const useNetworkModal = (networkSetup: NetworkSetup): ReturnType => {
  const [onPresentNetworkModal] = useModal(<NetworkModal networkSetup={networkSetup} />);
  return { onPresentNetworkModal };
};

export default useNetworkModal;
