import { useAuth } from 'contexts';
import { useActiveWeb3React } from 'hooks';
import { Button, useWalletModal } from 'ui';

const ConnectButton = () => {
  const { account } = useActiveWeb3React();
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout, account);

  return (
    <Button
      scale="sm"
      variant="secondary"
      onClick={() => {
        onPresentConnectModal();
      }}
    >
      Connect
    </Button>
  );
};

export default ConnectButton;
