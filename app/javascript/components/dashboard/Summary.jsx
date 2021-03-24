import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Avatar
} from '@material-ui/core'
import ArrowIcon from '@material-ui/icons/NavigateNext'
import { assetImage } from '../../utils/images'
import AvatarGroup from "@material-ui/lab/AvatarGroup"
import { calculatePortfolioTotal } from '../../utils/calcs'
import { formatCurrency } from '../../utils/formatting'

const Summary = (props) => {
  const { accounts, tokens } = props

  const erc20sTotal = accounts
    .map(({ erc20s }) => erc20s)
    .reduce((summary, aErc20s) => {
      const tot = aErc20s.reduce((x, v) => {
        return {
          ...x,
          [v.symbol]: v.balance + (summary[v.symbol] ? summary[v.symbol] : 0)
        };
      }, {});

      return { ...summary, ...tot };
    }, {});

  const erc20sList = (
    <AvatarGroup>
      {
        Object.keys(erc20sTotal).map(symbol => <Avatar key={symbol} src={assetImage(symbol)} style={{ width: 30, height: 30 }} />)
      }
    </AvatarGroup>
  )

  const portfolioTotal = calculatePortfolioTotal(accounts, tokens)

  return (
    <List>
      <ListItem button style={{ paddingLeft: 0 }}>
        <ListItemText primary="Summary" secondary={erc20sList} />
        <ListItemSecondaryAction style={{ right: 0 }}>
          <div style={{ textAlign: 'right' }}><ArrowIcon viewBox="0 0 10 24" /></div>

          <Typography variant="h5">{formatCurrency(portfolioTotal)}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}

export default Summary