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
  const [{ accounts }] = useContext(Context)
  const { address } = useParams()

  const account = accounts.find(acc => acc.address === address)
  const total = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(account.total)

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography>{account.label}</Typography>
          <Typography variant="h5">{total}</Typography>
        </CardContent>
      </Card>

      <Card style={{ marginTop: '1em' }}>
        <CardContent>
          <Typography>Assets</Typography>
          <List>
            {
              account.erc20s.map(asset => (
                <ListItem dense divider style={{ paddingLeft: 0, paddingRight: 0 }} key={asset.symbol}>
                  <ListItemAvatar>
                    <Avatar src={tokenImage[asset.symbol]} />
                  </ListItemAvatar>
                  <ListItemText primary={asset.symbol} secondary={asset.balance} />
                  <ListItemSecondaryAction>
                    <Typography component="div">$1,000.00</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            }
          </List>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default AccountView