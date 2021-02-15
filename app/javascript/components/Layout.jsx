import React from 'react'
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core'

import Navigation from './Navigation'

const Layout = ({ children }) => (
  <Grid container direction="column" style={{ backgroundColor: '#fafafa' }}>
    <Grid item>
      <AppBar position="static" color="inherit" style={{ borderBottom: '1px solid #ccc', boxShadow: 'none', backgroundColor: '#3f51b5' }}>
        <Toolbar style={{ justifyContent: 'center' }}>
          <Typography variant="h6" style={{ color: 'white', letterSpacing: '1em', paddingLeft: '1em' }}>SPHINX</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
    <Grid item style={{ height: "calc(100vh - 56px - 56px)", padding: '0.5em', overflow: 'auto' }}>
      {children}
    </Grid>
    <Grid item>
      <Navigation />
    </Grid>
  </Grid >
)

export default Layout