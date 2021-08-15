import React from 'react';
import { ButtonProps, IconButton } from 'ui';
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
    <IconButton variant="secondary" scale="md" onClick={onPresentNetworkModal} disabled={!chainId} {...props}>
      {Icon ? <Icon height="32px" width="32px" /> : '-'}
    </IconButton>
  );
};

export default NetworkButton;
