import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography, ListItemAvatar, Avatar
} from "@material-ui/core";
import { formatCurrency } from '../../utils/formatting'
import { assetImage } from '../../utils/images'

const Token = (props) => {
  const { token } = props
  const { symbol, value } = token;

  return (
    <ListItem style={{ paddingLeft: 0 }}>
      <ListItemAvatar>
        <Avatar src={assetImage(symbol)} />
      </ListItemAvatar>
      <ListItemText primary={symbol} style={{ textTransform: 'uppercase' }} />
      <ListItemSecondaryAction style={{ right: 0 }}>
        <Typography component="div">{formatCurrency(value)}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Token;