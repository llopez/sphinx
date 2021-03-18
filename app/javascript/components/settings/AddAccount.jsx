import React, { useContext, useState } from 'react'
import { TextField, Typography, Button, Grid } from '@material-ui/core'
import Context from '../../context/Context'
import { addAccount } from '../../actions/accounts'

const AddAccount = () => {
  const [, dispatch] = useContext(Context)
  const [address, setAddress] = useState('')

  const handleSubmit = () => {
    dispatch(addAccount(address))
    setAddress('')
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