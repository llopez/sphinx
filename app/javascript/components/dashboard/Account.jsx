import React from "react";
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
  const { label, total, erc20s, address } = account;

  const history = useHistory()

  const erc20sList = (
    <AvatarGroup>
      {
        erc20s.map(({ symbol }) => <Avatar key={symbol} src={tokenImage[symbol]} style={{ width: 30, height: 30 }} />)
      }
    </AvatarGroup>
  )

  return (
    <ListItem button onClick={() => { history.push(`accounts/${address}`) }}>
      <ListItemText primary={label} secondary={erc20sList} />
      <ListItemSecondaryAction>
        <div style={{ textAlign: 'right' }}><ArrowIcon viewBox="0 0 10 24" /></div>
        <Typography component="div">$ {total}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Account;