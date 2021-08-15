import { useSetState, useTranslation } from 'hooks';
import styled from 'styled-components';
import { Flex, Text } from 'ui';
import { Input } from 'ui/components/Input';
import { isAddress } from 'web3-utils';

const CustomAddressViewWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

const AddressInputWrapper = styled(Flex)`
  width: 100%;
`;
const AddressInputLabel = styled(Flex)`
  width: 100%;
  justify-content: center;
`;

const ErrorWrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
`;

const CustomAddressView = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useSetState<{
    address: string;
    error: string;
    isSendClicked: boolean;
    isSucceddedAfterFail: boolean;
  }>({
    address: null,
    error: null,
    isSendClicked: false,
    isSucceddedAfterFail: false
  });

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    let error = formState.error;
    let isSucceddedAfterFail = formState.isSucceddedAfterFail;
    if (formState.isSendClicked && isAddress(address)) {
      error = null;
      isSucceddedAfterFail = true;
    }
    setFormState({ address, error, isSucceddedAfterFail });
  };

  return (
    <CustomAddressViewWrapper p={4}>
      <AddressInputLabel mb={2}>
        <Text>{t(`Introduce a valid address to send tokens`)}</Text>
      </AddressInputLabel>
      <AddressInputWrapper>
        <Input
          isWarning={formState.error !== null}
          isSuccess={formState.isSucceddedAfterFail}
          onChange={onChangeAddress}
        />
      </AddressInputWrapper>
      {formState.error !== null && (
        <ErrorWrapper mt={2}>
          <Text color="danger">{formState.error}</Text>
        </ErrorWrapper>
      )}
    </CustomAddressViewWrapper>
  );
};

export default CustomAddressView;
