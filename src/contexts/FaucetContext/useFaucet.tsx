import React from 'react';
import { FaucetContext } from './FaucetContextProvider';

const useFaucet = () => {
  const context = React.useContext(FaucetContext);
  return context;
};

export default useFaucet;
