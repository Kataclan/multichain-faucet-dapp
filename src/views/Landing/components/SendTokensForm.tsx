import { AddressTabMenu } from 'components';
import { AddressInputTabs } from 'components/AddressTabMenu/types';
import { useSetState, useTranslation } from 'hooks';
import { useMemo } from 'react';
import styled from 'styled-components';
import { Flex, Heading, Text } from 'ui';
import RequestTokensAction from './actions/RequestTokensAction';
import SendTokensAction from './actions/SendTokensAction';
import CustomAddressView from './CustomAddressView';
import UserAddressView from './UserAddressView';

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

const TabsWrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
`;

const SendTokensCardContentWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

const SendTokensCardActionsWrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.outline};
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom-right-radius: ${({ theme }) => theme.radii.medium};
  border-bottom-left-radius: ${({ theme }) => theme.radii.medium};
`;

const SendTokensForm: React.FC<SendTokensFormProps> = ({ tokenSymbol, onClickSend }) => {
  const { t } = useTranslation();
  const [formState, setFormState] = useSetState<{
    selectedTab: AddressInputTabs;
    address: string;
    error: string;
    isSendClicked: boolean;
    isSucceddedAfterFail: boolean;
  }>({
    selectedTab: 0,
    address: null,
    error: null,
    isSendClicked: false,
    isSucceddedAfterFail: false
  });

  const handleChangeTab = (selectedTab: AddressInputTabs) => {
    setFormState({ selectedTab });
  };

  const view = useMemo(() => {
    switch (formState.selectedTab) {
      case AddressInputTabs.User:
        return <UserAddressView />;
      case AddressInputTabs.Custom:
      default:
        return <CustomAddressView />;
    }
  }, [formState.selectedTab]);

  const action = useMemo(() => {
    switch (formState.selectedTab) {
      case AddressInputTabs.User:
        return <RequestTokensAction />;
      case AddressInputTabs.Custom:
      default:
        return <SendTokensAction />;
    }
  }, [formState.selectedTab]);

  return (
    <SendTokensCard>
      <SendTokensCardTitleWrapper p={4}>
        <Heading scale="md"> {t(`Send ${tokenSymbol || '?'}`)}</Heading>
        <Text color="textSubtle" mt={2}></Text>
      </SendTokensCardTitleWrapper>
      <TabsWrapper>
        <AddressTabMenu selectedTab={formState.selectedTab} onTabChange={handleChangeTab} />
      </TabsWrapper>
      <SendTokensCardContentWrapper>{view}</SendTokensCardContentWrapper>
      <SendTokensCardActionsWrapper pt={2} pb={2}>
        {action}
      </SendTokensCardActionsWrapper>
    </SendTokensCard>
  );
};

export default SendTokensForm;
