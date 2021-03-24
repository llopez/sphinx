import React, { useContext } from "react";
import { List, Divider, Card, CardContent, Typography } from "@material-ui/core";
import Asset from "./Asset";
import Context from '../../context/Context'

const Details = () => {
  const [{ accounts }] = useContext(Context)

  const erc20sTotals = accounts
    .map(({ erc20s }) => erc20s)
    .reduce((summary, aErc20s) => {
      const tot = aErc20s.reduce((x, v) => {
        const sum = v.balance + (summary[v.symbol] ? summary[v.symbol] : 0)
        return {
          ...x,
          [v.symbol]: parseFloat(sum).toFixed(2)
        };
      }, {});

      return { ...summary, ...tot };
    }, {});

  const assets = Object.keys(erc20sTotals)

  return (
    <Card style={{ marginTop: '0.5em' }}>
      <CardContent>
        <Typography>Summary</Typography>

        <List>
          {
            assets.map((symbol, idx) => (
              <React.Fragment key={symbol}>
                <Asset symbol={symbol} balance={erc20sTotals[symbol]} />
                {
                  idx + 1 !== assets.length && <Divider />
                }
              </React.Fragment>
            ))
          }
        </List>
      </CardContent>
    </Card>

  );
};

export default Details;