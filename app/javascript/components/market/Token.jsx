import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography, ListItemAvatar, Avatar
} from "@material-ui/core";

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

const Token = (props) => {
  const { token } = props
  const { symbol, value } = token;

  return (
    <ListItem style={{ paddingLeft: 0 }}>
      <ListItemAvatar>
        <Avatar src={tokenImage[symbol]} />
      </ListItemAvatar>
      <ListItemText primary={symbol} style={{ textTransform: 'uppercase' }} />
      <ListItemSecondaryAction style={{ right: 0 }}>
        <Typography component="div">$ {value}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Token;