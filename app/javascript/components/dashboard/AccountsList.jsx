import React, { useContext } from "react";
import { List, Divider } from "@material-ui/core";
import Account from "./Account";
import Context from '../../context/Context'

const AccountsList = () => {
  const [{ accounts }] = useContext(Context)

  return (
    <List>
      {
        accounts.map(account => (
          <React.Fragment>
            <Account account={account} key={account.address} />
            <Divider />
          </React.Fragment>
        ))
      }
    </List>
  );
};

export default AccountsList;
