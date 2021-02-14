import React from 'react'
import {
  Typography,
  Card,
  CardContent,
} from '@material-ui/core'

import AccountsList from './dashboard/accounts/List'

const Dashboard = () => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography>Portfolio</Typography>
          <Typography variant="h5">$ 40,000.21</Typography>
        </CardContent>
      </Card>
      <AccountsList />
    </React.Fragment>
  )
}

export default Dashboard