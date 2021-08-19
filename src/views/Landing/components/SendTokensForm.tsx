import { FaucetContractLink, TokenContractLink } from 'components';
import { useTranslation } from 'hooks';
import styled from 'styled-components';
import { Flex, Heading, Text } from 'ui';
import FaucetView from './FaucetView';

interface SendTokensFormProps {
  tokenSymbol: string;
  error?: string;
  onClickSend: (address: string) => void;
}

const SendTokensCard = styled(Flex)`
  flex-direction: column;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid ${({ theme }) => theme.colors.outline};
  border-radius: ${({ theme }) => theme.radii.medium};
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 430px;
  }
`;

const SendTokensCardTitleWrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${({ theme }) => theme.radii.medium};
  border-top-left-radius: ${({ theme }) => theme.radii.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.outline};
  background-color: ${({ theme }) => theme.colors.background};
`;

// const TabsWrapper = styled(Flex)`
//   width: 100%;
//   justify-content: center;
// `;

const SendTokensCardContentWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

const SendTokensCardActionsWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.outline};
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom-right-radius: ${({ theme }) => theme.radii.medium};
  border-bottom-left-radius: ${({ theme }) => theme.radii.medium};
`;

const SendTokensForm: React.FC<SendTokensFormProps> = ({ tokenSymbol, onClickSend }) => {
  const { t } = useTranslation();

  return (
    <SendTokensCard>
      <SendTokensCardTitleWrapper p={4}>
        <Heading scale="md"> {t(`${tokenSymbol || '?'} Faucet`)}</Heading>
        <Text color="textSubtle" mt={2}></Text>
      </SendTokensCardTitleWrapper>
      <SendTokensCardContentWrapper>
        <FaucetView />
      </SendTokensCardContentWrapper>
      <SendTokensCardActionsWrapper pt={2} pb={2}>
        <FaucetContractLink /> <TokenContractLink />
      </SendTokensCardActionsWrapper>
    </SendTokensCard>
  );
};

export default SendTokensForm;
