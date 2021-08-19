import React from 'react';
import { AuthContext } from './AuthContextProvider';

const useAuth = () => {
  const context = React.useContext(AuthContext);
  return context;
};

export default useAuth;
