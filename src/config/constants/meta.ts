import { ContextApi } from 'contexts/LocalizationContext/types';
import { PageMeta } from './types';

export const DEFAULT_META: PageMeta = {
  title: 'OpenFaucet',
  description: 'Opensource multichain faucet with customizable contract & token',
  image: '/img/logo-192x192.png'
};

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('OpenFaucet')}`
      };
    default:
      return null;
  }
};
