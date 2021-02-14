import React from "react";

import { List, Divider } from "@material-ui/core";

import Account from "./Item";

const AccountsList = () => {
  return (
    <List >
      <Account />
      <Divider />
      <Account />
      <Divider />
      <Account />
      <Divider />
      <Account />
      <Divider />
      <Account />
      <Divider />
      <Account />
      <Divider />
      <Account />
    </List>
  );
};

export default AccountsList;
