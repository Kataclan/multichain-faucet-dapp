import React from 'react';
import { NetworkConfig } from 'config';
import { Modal } from '../Modal';
import { NetworkSetup } from './types';
import NetworkCard from './NetworkCard';
import Flex from '../../components/Box/Flex';
import { Text } from '../../components/Text';

interface Props {
  networkSetup: NetworkSetup;
  onDismiss?: () => void;
  config: NetworkConfig[];
}

const NetworkModal: React.FC<Props> = ({ networkSetup, config = [], onDismiss = () => null }) => {
  return (
    <Modal title="Change network" onDismiss={onDismiss}>
      {config.length > 0 ? (
        Object(config).map((entry, index) => (
          <NetworkCard
            key={`network-card-${entry.name}`}
            networkSetup={networkSetup}
            networkConfig={entry}
            onDismiss={onDismiss}
            mb={index < config.length - 1 ? '8px' : '0'}
          />
        ))
      ) : (
        <Flex flex={1} alignItems="center" justifyContent="center">
          <Text></Text>
        </Flex>
      )}
    </Modal>
  );
};

export default NetworkModal;
