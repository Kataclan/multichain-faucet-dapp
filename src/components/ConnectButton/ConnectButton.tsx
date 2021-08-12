import React from 'react';
import useAuth from 'hooks/useAuth';
import { Button, useWalletModal } from 'ui';
import { useTranslation } from 'hooks';

const ConnectWalletButton = (props) => {
  const { t } = useTranslation();
  const { login, logoutPolygon } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logoutPolygon);

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {t('Connect Wallet')}
    </Button>
  );
};

export default ConnectWalletButton;
