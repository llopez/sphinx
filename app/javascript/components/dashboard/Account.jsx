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

const Account = (props) => {
  const { account } = props
  const { label, total, erc20s } = account;

  const erc20sList = (
    <AvatarGroup>
      {
        erc20s.map(({ symbol }) => <Avatar key={symbol} src={`/assets/${symbol}.png`} style={{ width: 30, height: 30 }} />)
      }
    </AvatarGroup>
  )

  return (
    <ListItem button>
      <ListItemText primary={label} secondary={erc20sList} />
      <ListItemSecondaryAction>
        <div style={{ textAlign: 'right' }}><ArrowIcon viewBox="0 0 10 24" /></div>
        <Typography component="div">$ {total}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Account;