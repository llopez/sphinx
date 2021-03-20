import { CardContent, Card, Typography } from '@material-ui/core'
import React from 'react'
import TokensList from './market/TokensList'

const Market = () => {
  return (
    <Card>
      <CardContent>
        <Typography>Market</Typography>
        <TokensList />
      </CardContent>
    </Card>)
}

export default Market