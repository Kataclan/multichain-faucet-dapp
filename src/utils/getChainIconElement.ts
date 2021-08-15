import { ChainId } from 'config';
import { BinanceIcon, PolygonIcon, EthereumIcon } from 'ui';

const getChainIconElement = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.Bsc:
    case ChainId.BscTestnet:
      return BinanceIcon;

    case ChainId.Polygon:
    case ChainId.Mumbai:
      return PolygonIcon;

    case ChainId.Eth:
      return EthereumIcon;
    default:
      return null;
  }
};

export default getChainIconElement;
