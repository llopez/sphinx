import React, { useContext } from "react";
import { List, Divider } from "@material-ui/core";
import Token from "./Token";
import Context from '../../context/Context'

const TokensList = () => {
  const [{ tokens }] = useContext(Context)

  return (
    <List>
      {
        tokens.map(token => (
          <React.Fragment key={token.symbol}>
            <Token token={token} />
            <Divider />
          </React.Fragment>
        ))
      }
    </List>
  );
};

export default TokensList;