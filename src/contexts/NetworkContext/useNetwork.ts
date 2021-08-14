import React from 'react';
import { NetworkContext } from './NetworkContextProvider';

const useNetwork = () => {
  const context = React.useContext(NetworkContext);
  return context;
};

export default useNetwork;
