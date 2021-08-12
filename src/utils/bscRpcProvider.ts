import { ethers } from 'ethers';
import { getBscNodeUrl } from './getRpcUrl';

const BSC_RPC_URL = getBscNodeUrl();

const simpleRpcProvider = new ethers.providers.JsonRpcProvider(BSC_RPC_URL);

export default simpleRpcProvider;
