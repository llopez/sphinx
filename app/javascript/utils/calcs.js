export const getTokenPrice = (symbol, rates) => rates.find(rate => rate.symbol === symbol).value

export const calculateAccountTotal = ({ erc20s, ether }, rates) => {
  return [
    { symbol: 'ETH', balance: ether },
    ...erc20s
  ]
    .map(({ balance, symbol }) => balance * getTokenPrice(symbol, rates))
    .reduce((m, v) => m + v, 0)
}

export const calculatePortfolioTotal = (accounts, rates) => {
  return accounts
    .map(account => calculateAccountTotal(account, rates))
    .reduce((m, v) => m + v, 0)
}