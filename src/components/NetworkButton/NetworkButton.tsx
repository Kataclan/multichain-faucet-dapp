import React from 'react';
import { ButtonProps, IconButton, Text, useNetworkModal } from 'ui';
import { NetworkId, NetworkConfig, networks } from 'config';
import { getChainIconElement } from 'utils';
import { useTheme } from 'styled-components';

interface NetworkButtonProps extends ButtonProps {
  chainId: number;
  onSelectNetwork: (chainId: NetworkId) => void;
  networkConfig?: NetworkConfig;
}

const NetworkButton: React.FC<NetworkButtonProps> = ({ chainId, networkConfig, onSelectNetwork, ...props }) => {
  const theme = useTheme();
  const { onPresentNetworkModal } = useNetworkModal(onSelectNetwork, networks);
  const Icon = getChainIconElement(chainId ?? null);

  return (
    <IconButton
      width="auto"
      variant="secondary"
      onClick={onPresentNetworkModal}
      disabled={!chainId}
      style={{ color: !networkConfig && theme.colors.textDisabled }}
      {...props}
    >
      {networkConfig ? (
        <>
          <Icon height="32px" width="32px" />
          <Text fontSize="12px" pt={'2px'} pr={'12px'}>
            {networkConfig.displayName}
          </Text>
        </>
      ) : (
        'Not supported'
      )}
    </IconButton>
  );
};

export default NetworkButton;
