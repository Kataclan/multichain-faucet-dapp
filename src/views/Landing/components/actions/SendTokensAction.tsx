import { useTranslation } from 'hooks';

import { Button } from 'ui';

interface SendTokensActionProps {
  disabled?: string;
  onAccept?: () => void;
  onConfirm?: () => void;
  onError?: () => void;
}

const SendTokensAction: React.FC<SendTokensActionProps> = ({ disabled, onConfirm, onAccept }) => {
  const { t } = useTranslation();

  const handleSendTokens = () => {
    // HERE GOES TX CALL
  };

  return <Button onClick={() => handleSendTokens()}>{t('Send')}</Button>;
};

export default SendTokensAction;
