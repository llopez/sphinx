import { ethers } from "ethers"
import { CONTRACT_ABI } from "./erc20"

const CONTRACT_ADDRESS = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/f192f87de4b2479bba97c3883cc6cac4"
)

const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)

const getBalance = async (account) => {
  const res = await contract.balanceOf(account)
  return ethers.utils.formatUnits(res, 6)
}

export {
  getBalance
}