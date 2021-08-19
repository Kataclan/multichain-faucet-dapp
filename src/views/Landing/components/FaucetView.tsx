import { ConnectButton } from 'components';
import { useTokenAmount, useTranslation } from 'hooks';
import { useActiveWeb3React } from 'hooks';
import { useFaucet } from 'contexts';
import styled, { useTheme } from 'styled-components';
import { Flex, Text } from 'ui';
import { PuffLoader } from 'react-spinners';
import RequestTokensAction from './actions/RequestTokensAction';
import { useMemo } from 'react';
import { getHiddenAccountStr } from 'utils';
import useAllowedToWithdraw from 'hooks/useAlreadyWithdrawn';

const FaucetViewWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

const ContentWrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  min-height: 200px;
`;

const AddressInputLabel = styled(Flex)`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const TokenInfoWrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;

const TokenInfoText = styled(Text)`
  margin-bottom: 24px;
`;

const TokenInfo = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`;

const TokenAction = styled(Flex)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TokenInfoLabel = styled(Text)``;

const TokenInfoValue = styled(Text)`
  flex-direction: row;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
`;

const TxLoaderWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const FaucetView = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { account } = useActiveWeb3React();
  const { isPendingTx, startTx, stopTx } = useFaucet();
  const { tokenAmount, loading: loadingTokenAmount } = useTokenAmount();
  const { allowedToWithdraw, loading: loadingAllowedToWithDraw } = useAllowedToWithdraw();

  const accountHidden = useMemo(() => getHiddenAccountStr(account), [account]);

  return (
    <FaucetViewWrapper p={4}>
      {isPendingTx ? (
        <TxLoaderWrapper>
          <Text mb={2}>Sending tokens to your account</Text>
          <PuffLoader color={theme.colors.primary} loading size={50} />
        </TxLoaderWrapper>
      ) : (
        <ContentWrapper>
          {!account ? (
            <AddressInputLabel mb={2}>
              <Text mb={4}>{t(`Connect your account to directly send tokens to your wallet`)}</Text>
              <TokenAction>
                <ConnectButton />
              </TokenAction>
            </AddressInputLabel>
          ) : (
            <TokenInfoWrapper>
              <TokenInfoText textAlign="center">
                {t('If you are allowed, you can press the button to withdraw your tokens. Thanks!')}
              </TokenInfoText>
              <TokenInfo mb={2}>
                <TokenInfoLabel>{t('Your account')}</TokenInfoLabel>
                <TokenInfoValue>{accountHidden}</TokenInfoValue>
              </TokenInfo>
              <TokenInfo mb={4}>
                <TokenInfoLabel>{t('You receive')}</TokenInfoLabel>
                <TokenInfoValue>
                  {loadingTokenAmount ? (
                    <PuffLoader size={12} color={theme.colors.primary} />
                  ) : (
                    `${tokenAmount} ${process.env.REACT_APP_FAUCET_TOKEN_SYMBOL}`
                  )}{' '}
                </TokenInfoValue>
              </TokenInfo>
              <TokenAction>
                {loadingAllowedToWithDraw ? (
                  <PuffLoader size={24} color={theme.colors.primary} />
                ) : (
                  <RequestTokensAction
                    account={account}
                    allowed={allowedToWithdraw}
                    disabled={isPendingTx || loadingAllowedToWithDraw}
                    onStart={startTx}
                    onSuccess={stopTx}
                    onError={stopTx}
                  />
                )}
              </TokenAction>
            </TokenInfoWrapper>
          )}
        </ContentWrapper>
      )}
    </FaucetViewWrapper>
  );
};

export default FaucetView;
