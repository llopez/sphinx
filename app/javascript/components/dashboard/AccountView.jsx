import React, { useContext } from 'react'
import Context from '../../context/Context'
import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
} from '@material-ui/core'
import { useParams } from "react-router-dom"

import usdcImage from 'images/usdc.png'
import batImage from 'images/bat.png'
import ethImage from 'images/eth.png'
import uniImage from 'images/uni.png'
import daiImage from 'images/dai.png'
import ethrsiapyImage from 'images/ethrsiapy.png'
import wbtcImage from 'images/wbtc.png'

import { formatCurrency } from '../../utils/formatting'

const tokenImage = {
  usdc: usdcImage,
  bat: batImage,
  eth: ethImage,
  uni: uniImage,
  dai: daiImage,
  ethrsiapy: ethrsiapyImage,
  wbtc: wbtcImage,
}

const AccountView = () => {
  const [{ accounts, tokens }] = useContext(Context)
  const { address } = useParams()

  const account = accounts.find(acc => acc.address === address)

  const getTokenPrice = (symbol) => tokens.find(token => token.symbol === symbol).value

  const accountTotal = [
    { symbol: 'eth', balance: account.ether },
    ...account.erc20s
  ]
    .map(asset => asset.balance * getTokenPrice(asset.symbol))
    .reduce((m, v) => m + v, 0)

  const Asset = (props) => {
    const { asset } = props
    const { symbol, balance } = asset
    const price = getTokenPrice(symbol)
    const total = formatCurrency(balance * price)

    return (
      <ListItem dense divider style={{ paddingLeft: 0, paddingRight: 0 }}>
        <ListItemAvatar>
          <Avatar src={tokenImage[symbol]} />
        </ListItemAvatar>
        <ListItemText primary={symbol} secondary={balance} primaryTypographyProps={{ style: { textTransform: 'uppercase' } }} />
        <ListItemSecondaryAction>
          <Typography component="div">{total}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography>{account.label}</Typography>
          <Typography variant="h5">{formatCurrency(accountTotal)}</Typography>
        </CardContent>
      </Card>

      <Card style={{ marginTop: '1em' }}>
        <CardContent>
          <Typography>Assets</Typography>
          <List>
            {
              [{ symbol: 'eth', balance: account.ether }, ...account.erc20s].map(asset => <Asset asset={asset} key={asset.symbol} />)
            }
          </List>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default AccountView