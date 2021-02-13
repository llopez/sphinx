import React from "react";

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Avatar
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const Token = () => {
  return (
    <AvatarGroup>
      <Avatar src="dai.png" style={{ width: 30, height: 30 }} />
      <Avatar src="usdc.png" style={{ width: 30, height: 30 }} />
    </AvatarGroup>
  );
};

const Account = () => {
  return (
    <ListItem button>
      <ListItemText primary="Ledger 1" secondary={<Token />} />
      <ListItemSecondaryAction>
        <Typography>$ 2550</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Account;