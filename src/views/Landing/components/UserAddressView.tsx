import { ConnectButton } from 'components';
import { useAuth, useTranslation } from 'hooks';
import { useActiveWeb3React } from 'hooks';
import { useFaucet } from 'contexts';
import styled, { useTheme } from 'styled-components';
import { Button, Flex, Text } from 'ui';
import { PuffLoader } from 'react-spinners';

const UserAddressViewWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

const AddressInputLabel = styled(Flex)`
  width: 100%;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const AddressLabel = styled(Text)`
  word-break: break-word;
`;

const TxLoaderWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const UserAddressView = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { account } = useActiveWeb3React();
  const { isPendingTx } = useFaucet();
  const { logout } = useAuth();

  return (
    <UserAddressViewWrapper p={4}>
      {isPendingTx ? (
        <TxLoaderWrapper>
          <Text mb={2}>Sending tokens to your account</Text>
          <PuffLoader color={theme.colors.primary} loading size={50} />
        </TxLoaderWrapper>
      ) : (
        <AddressInputLabel mb={2}>
          {account ? (
            <Text mb={2}>{t(`Your account`)}</Text>
          ) : (
            <Text mb={2}>{t(`Connect your account to directly send tokens to your wallet`)}</Text>
          )}
          {account ? <AddressLabel color="warning">{account}</AddressLabel> : <ConnectButton />}

          {account && (
            <Button style={{ maxWidth: 100, alignSelf: 'center' }} variant="text" scale="sm" onClick={logout}>
              Logout
            </Button>
          )}
        </AddressInputLabel>
      )}
    </UserAddressViewWrapper>
  );
};

export default UserAddressView;
