import { ChainId } from 'config';

const isFaucetSupportedInChain = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.Eth:
      return process.env.REACT_APP_ETH_FAUCET_ADDRESS !== '' && process.env.REACT_APP_ETH_TOKEN_ADDRESS !== '';
    case ChainId.Bsc:
      return process.env.REACT_APP_BSC_FAUCET_ADDRESS !== '' && process.env.REACT_APP_BSC_TOKEN_ADDRESS !== '';
    case ChainId.BscTestnet:
      return (
        process.env.REACT_APP_BSC_TEST_FAUCET_ADDRESS !== '' && process.env.REACT_APP_BSC_TEST_TOKEN_ADDRESS !== ''
      );
    case ChainId.Polygon:
      return process.env.REACT_APP_POLYGON_FAUCET_ADDRESS !== '' && process.env.REACT_APP_POLYGON_TOKEN_ADDRESS !== '';
    case ChainId.Mumbai:
      return process.env.REACT_APP_MUMBAI_FAUCET_ADDRESS !== '' && process.env.REACT_APP_MUMBAI_TOKEN_ADDRESS !== '';
    default:
      return false;
  }
};
export default isFaucetSupportedInChain;
