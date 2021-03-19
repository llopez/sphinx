import React, { useContext } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Avatar
} from "@material-ui/core";
import ArrowIcon from '@material-ui/icons/NavigateNext'
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import usdcImage from 'images/usdc.png'
import batImage from 'images/bat.png'
import ethImage from 'images/eth.png'
import uniImage from 'images/uni.png'
import daiImage from 'images/dai.png'
import ethrsiapyImage from 'images/ethrsiapy.png'
import wbtcImage from 'images/wbtc.png'
import { useHistory } from "react-router-dom"
import Context from '../../context/Context'
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

const Account = (props) => {
  const { account } = props
  const { label, erc20s, address, ether } = account;

  const [{ tokens }] = useContext(Context)
  const history = useHistory()

  const erc20sList = (
    <AvatarGroup>
      {
        [{ symbol: 'eth' }, ...erc20s].map(({ symbol }) => <Avatar key={symbol} src={tokenImage[symbol]} style={{ width: 30, height: 30 }} />)
      }
    </AvatarGroup>
  )
  const getTokenPrice = (symbol) => tokens.find(token => token.symbol === symbol).value

  const total = [
    { symbol: 'eth', balance: ether },
    ...erc20s
  ]
    .map(asset => asset.balance * getTokenPrice(asset.symbol))
    .reduce((m, v) => m + v, 0)

  return (
    <ListItem button onClick={() => { history.push(`accounts/${address}`) }}>
      <ListItemText primary={label} secondary={erc20sList} />
      <ListItemSecondaryAction>
        <div style={{ textAlign: 'right' }}><ArrowIcon viewBox="0 0 10 24" /></div>
        <Typography component="div">{formatCurrency(total)}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Account;