import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography, ListItemAvatar, Avatar
} from "@material-ui/core";

const Token = (props) => {
  const { token } = props
  const { symbol, value } = token;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={`/assets/${symbol}.png`} />
      </ListItemAvatar>
      <ListItemText primary={symbol} style={{ textTransform: 'uppercase' }} />
      <ListItemSecondaryAction>
        <Typography component="div">$ {value}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Token;