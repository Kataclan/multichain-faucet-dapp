import React from 'react';
import { ButtonProps, IconButton, Text } from 'ui';
import { useNetworkModal } from 'ui/widgets/NetworkModal';
import { NetworkConfig } from 'contexts/NetworkContext/types';
import { ChainId } from 'config';
import { getChainIconElement } from 'utils';

interface NetworkButtonProps extends ButtonProps {
  chainId: number;
  onSelectNetwork: (chainId: ChainId) => void;
  networkConfig?: NetworkConfig;
}

const NetworkButton: React.FC<NetworkButtonProps> = ({ chainId, networkConfig, onSelectNetwork, ...props }) => {
  const { onPresentNetworkModal } = useNetworkModal(onSelectNetwork);
  const Icon = getChainIconElement(chainId ?? null);

  return (
    <IconButton width="auto" variant="secondary" onClick={onPresentNetworkModal} disabled={!chainId} {...props}>
      {Icon ? (
        <>
          <Icon height="32px" width="32px" />
          <Text fontSize="12px" pt={'2px'} pr={'12px'}>
            {networkConfig.title}
          </Text>
        </>
      ) : (
        '-'
      )}
    </IconButton>
  );
};

export default NetworkButton;
