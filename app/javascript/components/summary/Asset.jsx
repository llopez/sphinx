import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { assetImage } from '../../utils/images'

const Asset = (props) => {
  const { symbol, balance } = props

  return (
    <ListItem style={{ paddingLeft: 0 }}>
      <ListItemAvatar>
        <Avatar src={assetImage(symbol)} />
      </ListItemAvatar>
      <ListItemText primary={symbol} />
      <ListItemSecondaryAction style={{ right: 0 }}>
        <Typography component="div">{balance}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Asset;