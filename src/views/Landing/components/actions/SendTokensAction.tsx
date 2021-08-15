import { AddressTabMenu } from 'components';
import { AddressInputTabs } from 'components/AddressTabMenu/types';
import { useSetState, useTranslation } from 'hooks';
import styled from 'styled-components';
import { Button, Flex, Heading, Text } from 'ui';
import { Input } from 'ui/components/Input';
import { isAddress } from 'web3-utils';

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
