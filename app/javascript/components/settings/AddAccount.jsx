import React, { useContext, useState } from 'react'
import { TextField, Typography, Button, Grid } from '@material-ui/core'
import Context from '../../context/Context'
import { addAccount } from '../../actions/accounts'
import { getEthBalance, getUsdcBalance, compressAddress, getDaiBalance } from '../../utils/blockchain'

const AddAccount = () => {
  const [, dispatch] = useContext(Context)
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    const ether = await getEthBalance(address)
    const usdc = await getUsdcBalance(address)
    const dai = await getDaiBalance(address)

    const erc20s = [
      { symbol: 'usdc', balance: parseFloat(usdc).toFixed(4) },
      { symbol: 'dai', balance: parseFloat(dai).toFixed(4) },
    ].filter(({ balance }) => balance > 0)

    dispatch(
      addAccount({
        address,
        ether: parseFloat(ether).toFixed(4),
        label: compressAddress(address),
        erc20s,
      })
    )
    setAddress('')
    setLoading(false)
  }

  return (
    <Grid container direction="column">
      <Grid item style={{ textAlign: 'center' }}>
        <Typography variant="h6" align="center">Add Account</Typography>
      </Grid>
      <Grid item style={{ textAlign: 'center' }}>
        <Typography variant="body2" align="center">Paste the ethereum address you want to add to your portfolio</Typography>
      </Grid>
      <Grid item style={{ marginTop: '0.4em' }}>
        <form autoComplete="off" noValidate>
          <TextField
            value={address}
            id="address"
            variant="outlined"
            color="secondary"
            fullWidth
            onChange={
              (e) => { setAddress(e.target.value) }
            }
          />
        </form>
      </Grid>
      <Grid item style={{ textAlign: 'center', marginTop: '0.4em' }}>
        <Button
          disabled={loading}
          variant="contained"
          disableElevation
          color="primary"
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}

export default AddAccount