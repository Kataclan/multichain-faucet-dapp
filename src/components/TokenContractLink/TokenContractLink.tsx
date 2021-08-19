import { useTranslation } from 'hooks';
import { useActiveWeb3React } from 'hooks';
import React from 'react';
import { useMemo } from 'react';
import { LinkExternal } from 'ui';
import { getTokenContractLink } from 'utils/externalLinks';

const TokenContractLink = () => {
  const { chainId } = useActiveWeb3React();
  const { t } = useTranslation();
  const faucetLink = useMemo(() => getTokenContractLink(chainId), [chainId]);

  return (
    <LinkExternal color="warning" href={faucetLink} target="_blank">
      {t('Token contract')}
    </LinkExternal>
  );
};

export default TokenContractLink;
