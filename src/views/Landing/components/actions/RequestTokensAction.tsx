import { useTranslation } from 'hooks';
import useRequestTokens from 'hooks/useRequestTokens';
import { Button } from 'ui';

const RequestTokensAction: React.FC<{
  account: string;
  onStart: () => void;
  onSuccess: () => void;
  onError: () => void;
  allowed?: boolean;
  disabled?: boolean;
}> = ({ account, onStart, onSuccess, onError, allowed = true, disabled = false }) => {
  const { t } = useTranslation();
  const { onRequestTokens } = useRequestTokens({
    account,
    onSuccess,
    onError
  });

  const handleSendTokens = () => {
    onStart();
    onRequestTokens();
  };

  return account ? (
    <Button variant="secondary" disabled={!account || !allowed || disabled} onClick={() => handleSendTokens()}>
      {allowed ? `${t('WITHDRAW')} ${process.env.REACT_APP_FAUCET_TOKEN_SYMBOL}` : t('Not allowed')}
    </Button>
  ) : (
    <div style={{ height: 48 }} />
  );
};

export default RequestTokensAction;
