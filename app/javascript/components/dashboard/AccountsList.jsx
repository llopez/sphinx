import React from "react";
import { List, Divider } from "@material-ui/core";
import Account from "./Account";

const AccountsList = (props) => {
  const { accounts } = props;

  return (
    <List>
      {
        accounts.map((account, idx) => (
          <React.Fragment key={account.address}>
            <Account account={account} />
            {
              idx + 1 !== accounts.length && <Divider />
            }
          </React.Fragment>
        ))
      }
    </List>
  );
};

export default AccountsList;
