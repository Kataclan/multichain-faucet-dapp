import React from 'react';
import { Button } from 'ui';
import { useNetworkModal } from 'ui/widgets/NetworkModal';
import { findNetworkByChainId, setupNetworkById } from 'contexts/NetworkContext/setupNetworkHelpers';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import { useWeb3React } from '@web3-react/core';

const NetworkButton = (props) => {
  const { account, chainId } = useWeb3React();
  const { onPresentNetworkModal } = useNetworkModal(setupNetworkById);
  const networkconfig = findNetworkByChainId(chainId);

  return account ? (
    <Button variant="secondary" scale="sm" onClick={onPresentNetworkModal} {...props}>
      {networkconfig ? networkconfig.title : chainId}
    </Button>
  ) : null;
};

export default NetworkButton;
