import { useTranslation } from 'hooks';
import { useActiveWeb3React } from 'hooks';
import React from 'react';
import { useMemo } from 'react';
import { LinkExternal } from 'ui';
import { getFaucetContractLink } from 'utils/externalLinks';

const FaucetContractLink = () => {
  const { chainId } = useActiveWeb3React();
  const { t } = useTranslation();
  const faucetLink = useMemo(() => getFaucetContractLink(chainId), [chainId]);

  return (
    <LinkExternal color="warning" href={faucetLink} target="_blank">
      {t('Faucet contract')}
    </LinkExternal>
  );
};

export default FaucetContractLink;
