import { CardContent, Card, Typography } from '@material-ui/core'
import React, { useEffect, useContext } from 'react'
import TokensList from './market/TokensList'
import Context from '../context/Context'
import PullToRefresh from 'react-simple-pull-to-refresh'

const Market = () => {
  const [{ tokens }, dispatch] = useContext(Context)

  const fetchRates = () => {
    return fetch('/api/rates')
      .then(res => res.json())
      .then(data => dispatch({ type: 'LOAD_TOKENS', payload: data }))
  }

  const handlePull = () => {
    return fetchRates()
  }

  useEffect(() => {
    fetchRates()
  }, [])

  return (
    <PullToRefresh onRefresh={handlePull}>
      <Card>
        <CardContent>
          <Typography>Market</Typography>
          <TokensList tokens={tokens} />
        </CardContent>
      </Card>
    </PullToRefresh>
  )
}

export default Market