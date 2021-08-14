import React from 'react';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import { networkLocalStorageKey } from './config';
import { NetworkSetup, NetworkConfig } from './types';

interface Props {
  networkConfig: NetworkConfig;
  networkSetup: NetworkSetup;
  onDismiss: () => void;
  mb: string;
}

const NetworkCard: React.FC<Props> = ({ networkSetup, networkConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = networkConfig;
  return (
    <Button
      width="100%"
      variant="tertiary"
      onClick={() => {
        networkSetup(networkConfig.chainId);
        window.localStorage.setItem(networkLocalStorageKey, networkConfig.networkId);
        onDismiss();
      }}
      style={{ justifyContent: 'space-between' }}
      mb={mb}
      id={`network-connect-${title.toLocaleLowerCase()}`}
    >
      <Text bold color="primary" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </Button>
  );
};

export default NetworkCard;
