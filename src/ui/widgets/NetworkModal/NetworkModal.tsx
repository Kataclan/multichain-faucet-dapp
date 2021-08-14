import React from 'react';
import { Modal } from '../Modal';
import config from './config';
import { NetworkSetup } from './types';
import NetworkCard from './NetworkCard';

interface Props {
  networkSetup: NetworkSetup;
  onDismiss?: () => void;
}

const NetworkModal: React.FC<Props> = ({ networkSetup, onDismiss = () => null }) => {
  
  return (
    <Modal title="Change network" onDismiss={onDismiss}>
      {Object(config).map((entry, index) => (
        <NetworkCard
          key={entry.title}
          networkSetup={networkSetup}
          networkConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 1 ? '8px' : '0'}
        />
      ))}
    </Modal>
  );
};

export default NetworkModal;
