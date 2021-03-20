import React, { useContext } from 'react'
import {
  Typography,
  Card,
  CardContent,
} from '@material-ui/core'
import Context from '../context/Context'
import { calculatePortfolioTotal } from '../utils/calcs'
import { formatCurrency } from '../utils/formatting'

import AccountsList from './dashboard/AccountsList'

const Dashboard = () => {
  const [{ accounts, tokens }] = useContext(Context)

  const portfolioTotal = calculatePortfolioTotal(accounts, tokens)

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography>Portfolio</Typography>
          <Typography variant="h5">{formatCurrency(portfolioTotal)}</Typography>
        </CardContent>
      </Card>
      <AccountsList accounts={accounts} />
    </React.Fragment>
  )
}

export default Dashboard