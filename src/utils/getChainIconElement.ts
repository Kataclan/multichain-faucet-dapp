import { NetworkId } from 'config';
import { BinanceIcon, PolygonIcon, EthereumIcon } from 'ui';

const getChainIconElement = (chainId: NetworkId) => {
  switch (chainId) {
    case NetworkId.Bsc:
    case NetworkId.BscTestnet:
      return BinanceIcon;

    case NetworkId.Polygon:
    case NetworkId.Mumbai:
      return PolygonIcon;

    case NetworkId.Eth:
      return EthereumIcon;
    default:
      return null;
  }
};

export default getChainIconElement;
