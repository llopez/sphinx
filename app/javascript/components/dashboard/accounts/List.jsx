import React from "react";

import { List } from "@material-ui/core";

import Account from "./Item";

const AccountsList = () => {
  return (
    <List >
      <Account />
      <Account />
      <Account />
      <Account />
      <Account />
      <Account />
      <Account />
    </List>
  );
};

export default AccountsList;
