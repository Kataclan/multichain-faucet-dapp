import { NetworkConfig, networkLocalStorageKey } from 'config';
import React from 'react';
import { getChainIconElement } from 'utils';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import { NetworkSetup } from './types';

interface Props {
  networkConfig: NetworkConfig;
  networkSetup: NetworkSetup;
  onDismiss: () => void;
  mb: string;
}

const NetworkCard: React.FC<Props> = ({ networkSetup, networkConfig, onDismiss, mb }) => {
  const { id, displayName } = networkConfig;
  const Icon = getChainIconElement(id);
  return (
    <Button
      width="100%"
      variant="tertiary"
      onClick={() => {
        networkSetup(networkConfig.id);
        window.localStorage.setItem(networkLocalStorageKey, networkConfig.name);
        onDismiss();
      }}
      style={{ justifyContent: 'space-between' }}
      mb={mb}
      id={`network-connect-${displayName.toLocaleLowerCase()}`}
    >
      <Text bold color="primary" mr="16px">
        {displayName}
      </Text>
      <Icon width="32px" />
    </Button>
  );
};

export default NetworkCard;
