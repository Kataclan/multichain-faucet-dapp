import useNetwork from 'contexts/NetworkContext/useNetwork';
import styled from 'styled-components';
import { useTranslation } from 'hooks';
import { Flex, Heading, Text } from 'ui';

const NotSupportedWrapper = styled(Flex)`
  flex-direction: column;
  text-align: center;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid ${({ theme }) => theme.colors.outline};
  border-radius: ${({ theme }) => theme.radii.medium};
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 430px;
  }
`;

const NotSupported = () => {
  const { t } = useTranslation();
  const { network } = useNetwork();

  return (
    <NotSupportedWrapper p={4}>
      <Heading color="warning" scale="md" mb={4}>
        {t(`This faucet is not supported in ${network?.title}`)}
      </Heading>
      <Text>{t('Connect to another chain through the menu button or directly in your wallet')}</Text>
    </NotSupportedWrapper>
  );
};

export default NotSupported;
