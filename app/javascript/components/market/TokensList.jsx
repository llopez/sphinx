import React, { useContext } from "react";
import { List, Divider } from "@material-ui/core";
import Token from "./Token";
import Context from '../../context/Context'

const TokensList = () => {
  const [{ tokens }] = useContext(Context)

  return (
    <List>
      {
        tokens.map((token, idx) => (
          <React.Fragment key={token.symbol}>
            <Token token={token} />
            {
              idx + 1 !== tokens.length && <Divider />
            }
          </React.Fragment>
        ))
      }
    </List>
  );
};

export default TokensList;