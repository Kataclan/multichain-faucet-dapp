import { useTranslation } from 'hooks';
import { useActiveWeb3React } from 'hooks';
import { useFaucet } from 'contexts';
import useRequestTokens, { RequestTokensProps } from 'hooks/useRequestTokens';
import { useMemo } from 'react';
import { Button, Text } from 'ui';

const RequestTokensAction: React.FC = () => {
  const { t } = useTranslation();
  const { account } = useActiveWeb3React();
  const { isPendingTx, startTx, stopTx } = useFaucet();

  const requestTokensProps: RequestTokensProps = useMemo(
    () => ({
      account,
      onSuccess: () => {
        stopTx();
      },
      onError: () => {
        stopTx();
      }
    }),
    [account, stopTx]
  );

  const { onRequestTokens } = useRequestTokens(requestTokensProps);

  const handleSendTokens = () => {
    startTx();
    onRequestTokens();
  };

  return account ? (
    <Button disabled={isPendingTx || !account} onClick={() => handleSendTokens()}>
      {t('Request')}
    </Button>
  ) : (
    <div style={{ height: 48 }} />
  );
};

export default RequestTokensAction;
