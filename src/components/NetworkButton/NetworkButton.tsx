import React from 'react';
import { Button } from 'ui';
import { useNetworkModal } from 'ui/widgets/NetworkModal';
import { findNetworkByChainId, setupNetworkById } from 'contexts/NetworkContext/setupNetworkHelpers';

const NetworkButton = (props) => {
  const { onPresentNetworkModal } = useNetworkModal(setupNetworkById);
  const networkconfig = findNetworkByChainId(props.chainId);

  return props.account ? (
    <Button variant="secondary" scale="sm" onClick={onPresentNetworkModal} {...props}>
      {networkconfig ? networkconfig.title : props.chainId}
    </Button>
  ) : null;
};

export default NetworkButton;
