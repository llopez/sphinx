import React from "react";
import { List, Divider } from "@material-ui/core";
import Account from "./Account";

const AccountsList = (props) => {
  const { accounts } = props;

  return (
    <List>
      {
        accounts.map(account => (
          <React.Fragment key={account.address}>
            <Account account={account} />
            <Divider />
          </React.Fragment>
        ))
      }
    </List>
  );
};

export default AccountsList;
