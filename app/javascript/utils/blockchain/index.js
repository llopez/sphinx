import { getBalance as getUsdcBalance } from './usdc'
import { getBalance as getDaiBalance } from './dai'
import { getBalance as getEthBalance } from './eth'

const compressAddress = (address) => {
  return (
    address.substring(2, 6) +
    ".." +
    address.substring(address.length - 4, address.length)
  );
};

export {
  getUsdcBalance,
  getDaiBalance,
  getEthBalance,
  compressAddress,
}