import { CardContent, Card, Typography } from '@material-ui/core'
import React, { useEffect, useContext } from 'react'
import TokensList from './market/TokensList'
import Context from '../context/Context'

const Market = () => {
  const [{ tokens }, dispatch] = useContext(Context)

  useEffect(() => {
    fetch('/api/rates')
      .then(res => res.json())
      .then(data => dispatch({ type: 'LOAD_TOKENS', payload: data }))
  }, [])

  return (
    <Card>
      <CardContent>
        <Typography>Market</Typography>
        <TokensList tokens={tokens} />
      </CardContent>
    </Card>)
}

export default Market