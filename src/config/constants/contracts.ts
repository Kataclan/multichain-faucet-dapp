const contracts = {
  faucet: {
    1: window.openfaucet.REACT_APP_ETH_FAUCET_ADDRESS,
    56: window.openfaucet.REACT_APP_BSC_FAUCET_ADDRESS,
    97: window.openfaucet.REACT_APP_BSC_TEST_FAUCET_ADDRESS,
    137: window.openfaucet.REACT_APP_POLYGON_FAUCET_ADDRESS,
    80001: window.openfaucet.REACT_APP_MUMBAI_FAUCET_ADDRESS
  },
  token: {
    1: window.openfaucet.REACT_APP_ETH_TOKEN_ADDRESS,
    56: window.openfaucet.REACT_APP_BSC_TOKEN_ADDRESS,
    97: window.openfaucet.REACT_APP_BSC_TEST_TOKEN_ADDRESS,
    137: window.openfaucet.REACT_APP_POLYGON_TOKEN_ADDRESS,
    80001: window.openfaucet.REACT_APP_MUMBAI_TOKEN_ADDRESS
  }
};
export default contracts;
