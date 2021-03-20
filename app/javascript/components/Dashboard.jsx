import React, { useContext } from 'react'
import {
  Typography,
  Card,
  CardContent,
  Fab,
  Grid,
} from '@material-ui/core'
import Context from '../context/Context'
import { calculatePortfolioTotal } from '../utils/calcs'
import { formatCurrency } from '../utils/formatting'
import AddIcon from '@material-ui/icons/Add';
import AccountsList from './dashboard/AccountsList'
import { useHistory } from "react-router-dom"

const Dashboard = () => {
  const [{ accounts, tokens }] = useContext(Context)

  const portfolioTotal = calculatePortfolioTotal(accounts, tokens)
  const history = useHistory()

  if (accounts.length === 0) {
    return (
      <Grid item style={{ textAlign: 'center' }}>
        <Typography variant="h5" style={{ color: 'grey', marginTop: '50%' }}>
          EMPTY
        </Typography>
        <Fab style={{ marginTop: '1em' }} onClick={() => { history.push(`accounts/new`) }}>
          <AddIcon />
        </Fab>
      </Grid>
    )
  }

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography>Portfolio</Typography>
          <Typography variant="h5">{formatCurrency(portfolioTotal)}</Typography>
        </CardContent>
      </Card>
      <Card style={{ marginTop: '0.5em' }}>
        <CardContent>
          <Typography>Accounts</Typography>
          <AccountsList accounts={accounts} />
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default Dashboard