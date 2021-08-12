import { ethers } from 'ethers';
import { getPolygonNodeUrl } from './getRpcUrl';

const POLYGON_RPC_URL = getPolygonNodeUrl();

const simpleRpcProvider = new ethers.providers.JsonRpcProvider(POLYGON_RPC_URL);

export default simpleRpcProvider;
