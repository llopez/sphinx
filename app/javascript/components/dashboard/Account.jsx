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

const Token = () => {
  return (
    <AvatarGroup>
      <Avatar src="/assets/dai.png" style={{ width: 30, height: 30 }} />
      <Avatar src="/assets/usdc.png" style={{ width: 30, height: 30 }} />
    </AvatarGroup>
  );
};

const Account = () => {
  return (
    <ListItem button>
      <ListItemText primary="Ledger 1" secondary={<Token />} />
      <ListItemSecondaryAction>
        <div style={{ textAlign: 'right' }}><ArrowIcon viewBox="0 0 10 24" /></div>
        <Typography component="div">$ 2,550.00</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Account;