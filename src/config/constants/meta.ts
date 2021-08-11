import { ContextApi } from 'contexts/LocalizationContext/types';
import { PageMeta } from './types';

export const DEFAULT_META: PageMeta = {
  title: 'Multivalent Faucet',
  description: 'Multivalent Token Faucet',
  image: '/img/logo-192x192.png'
};

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Multivalent Faucet')}`
      };
    default:
      return null;
  }
};
