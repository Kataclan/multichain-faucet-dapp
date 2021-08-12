import { ethers } from 'ethers';
import { FaucetAbi, TokenAbi } from 'config';
import simpleRpcProvider from './bscRpcProvider';

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getFaucetContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(FaucetAbi, address, signer);
};

export const getTokenContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(TokenAbi, address, signer);
};
