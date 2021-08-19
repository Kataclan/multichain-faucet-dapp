import { NetworkId, FaucetAbi, TokenAbi } from 'config';
import { getRpcProvider } from 'utils';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

const getContract = (chainId: NetworkId, abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? new Web3(getRpcProvider(chainId));

  return new _web3.eth.Contract(abi as unknown as AbiItem, address);
};

export const getFaucetContract = (chainId: NetworkId, address: string, web3?: Web3) => {
  return getContract(chainId || NetworkId.BscTestnet, FaucetAbi, address, web3);
};

export const getTokenContract = (chainId: NetworkId, address: string, web3?: Web3) => {
  return getContract(chainId || NetworkId.BscTestnet, TokenAbi, address, web3);
};
