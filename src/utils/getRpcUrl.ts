import sample from 'lodash/sample';
// Array of available nodes to connect to
export const bscNodes = [
  process.env.REACT_APP_BSC_NODE_1,
  process.env.REACT_APP_BSC_NODE_2,
  process.env.REACT_APP_BSC_NODE_3
];

export const getBscNodeUrl = () => {
  return sample(bscNodes);
};
// Array of available nodes to connect to
export const polygonNodes = [process.env.REACT_APP_POLYGON_NODE_1];

export const getPolygonNodeUrl = () => {
  return sample(polygonNodes);
};
