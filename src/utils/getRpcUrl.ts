import sample from 'lodash/sample';
// Array of available nodes to connect to
export const bscNodes = [
  process.env.REACT_APP_BSC_NODE_1,
  process.env.REACT_APP_BSC_NODE_2,
  process.env.REACT_APP_BSC_NODE_3
];

export const bscTestNodes = [process.env.REACT_APP_BSC_TEST_NODE_1];

export const getBscTestNodeUrl = () => {
  return sample(bscTestNodes);
};

export const getBscNodeUrl = () => {
  return sample(bscNodes);
};
