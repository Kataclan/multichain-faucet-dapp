import { ChainId } from 'config';
import { BinanceIcon, PolygonIcon } from 'ui';

const getChainIconElement = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.Bsc:
    case ChainId.BscTestnet:
      return BinanceIcon;

    case ChainId.Polygon:
    case ChainId.Mumbai:
      return PolygonIcon;
    default:
      return null;
  }
};

export default getChainIconElement;
