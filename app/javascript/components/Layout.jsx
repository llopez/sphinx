import React from 'react'
import {
  Grid,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
} from '@material-ui/core'

import Navigation from './Navigation'

const Layout = ({ children }) => (
  <Grid container direction="column">
    <Grid item>
      <AppBar position="static" color="inherit" style={{ borderBottom: '1px solid #ccc', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6">Sphinx</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
    <Grid item style={{ height: "calc(100vh - 56px - 56px)", padding: '0.5em', overflow: 'auto' }}>
      {children}
    </Grid>
    <Grid item>
      <Navigation />
    </Grid>
    <CssBaseline />
  </Grid >
)

export default Layout