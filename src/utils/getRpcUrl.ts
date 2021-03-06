import sample from 'lodash/sample';
// Array of available nodes to connect to
export const ethNodes = [process.env.REACT_APP_ETH_NODE];

export const bscNodes = [process.env.REACT_APP_BSC_NODE];

export const bscTestNodes = [process.env.REACT_APP_BSC_TEST_NODE];

export const polygonNodes = [process.env.REACT_APP_BSC_NODE];

export const mumbaiNodes = [process.env.REACT_APP_BSC_NODE];

export const getBscTestRpcUrl = () => {
  return sample(bscTestNodes);
};

export const getEthereumRpcUrl = () => {
  return sample(ethNodes);
};

export const getBscRpcUrl = () => {
  return sample(bscNodes);
};

export const getPolygonRpcUrl = () => {
  return sample(polygonNodes);
};

export const getMumbaiRpcUrl = () => {
  return sample(mumbaiNodes);
};
