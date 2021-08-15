import { useAuth } from 'hooks';
import { useActiveWeb3React } from 'hooks';
import React from 'react';
import { Button, useWalletModal } from 'ui';

const ConnectButton = () => {
  const { account } = useActiveWeb3React();
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout, account);

  return (
    <Button
      scale="sm"
      variant="primary"
      onClick={() => {
        onPresentConnectModal();
      }}
    >
      Connect
    </Button>
  );
};

export default ConnectButton;
