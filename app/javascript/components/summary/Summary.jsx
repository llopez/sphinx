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
import { useHistory } from "react-router-dom"

const Summary = (props) => {
  const { accounts, tokens } = props

  const history = useHistory()

  const assets = accounts
    .map(({ erc20s }) => erc20s)
    .reduce((result, aErc20s) => {
      const symbols = aErc20s.map(({ symbol }) => symbol);

      return [...result, ...symbols];
    }, [])
    .reduce((m, v) => {
      if (m.includes(v)) {
        return m;
      } else {
        return [...m, v];
      }
    }, []);

  const erc20sList = (
    <AvatarGroup>
      {
        ['ETH', ...assets].map(symbol => <Avatar key={symbol} src={assetImage(symbol)} style={{ width: 30, height: 30 }} />)
      }
    </AvatarGroup>
  )

  const portfolioTotal = calculatePortfolioTotal(accounts, tokens)

  return (
    <List>
      <ListItem button style={{ paddingLeft: 0 }} onClick={() => { history.push('/summary') }}>
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