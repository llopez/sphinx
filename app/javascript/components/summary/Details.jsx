import React, { useContext } from "react";
import { List, Divider, Card, CardContent, Typography } from "@material-ui/core";
import Asset from "./Asset";
import Context from '../../context/Context'

const Details = () => {
  const [{ accounts }] = useContext(Context)

  const etherTotal = accounts.reduce((m, v) => {
    return m + parseFloat(v.ether)
  }, 0)

  const erc20Totals = accounts
    .map(({ erc20s }) => erc20s)
    .reduce((summary, aErc20s) => {
      const tot = aErc20s.reduce((x, v) => {
        const sum = parseFloat(v.balance) + (summary[v.symbol] ? summary[v.symbol] : 0)
        return {
          ...x,
          [v.symbol]: sum
        };
      }, {});

      return { ...summary, ...tot };
    }, {});

  const assetTotals = { ETH: etherTotal, ...erc20Totals }

  const assets = Object.keys(assetTotals)

  return (
    <Card style={{ marginTop: '0.5em' }}>
      <CardContent>
        <Typography>Summary</Typography>

        <List>
          {
            assets.map((symbol, idx) => (
              <React.Fragment key={symbol}>
                <Asset symbol={symbol} balance={assetTotals[symbol]} />
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