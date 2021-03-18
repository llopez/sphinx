import React from 'react'
import { TextField, Typography, Button, Grid } from '@material-ui/core'

const AddAccount = () => {
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
            id="address"
            variant="outlined"
            color="secondary"
            fullWidth
          />
        </form>
      </Grid>
      <Grid item style={{ textAlign: 'center', marginTop: '0.4em' }}>
        <Button variant="contained" disableElevation color="primary" size="large">Submit</Button>
      </Grid>
    </Grid>
  )
}

export default AddAccount