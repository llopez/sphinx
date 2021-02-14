import React from 'react'
import {
  Typography,
  Card,
  CardContent,
} from '@material-ui/core'

import AccountsList from './dashboard/accounts/List'
import Layout from './Layout'

const App = () => (
  <Layout>
    <Card>
      <CardContent>
        <Typography>Portfolio</Typography>
        <Typography variant="h5">$ 40,000.21</Typography>
      </CardContent>
    </Card>
    <AccountsList />
  </Layout>
)

export default App