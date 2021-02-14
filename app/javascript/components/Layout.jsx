import React from 'react'
import {
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
} from '@material-ui/core'

import EqualizerIcon from '@material-ui/icons/Equalizer';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SettingsIcon from '@material-ui/icons/Settings';

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
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction label="Dashboard" icon={<EqualizerIcon />} />
        <BottomNavigationAction label="Market" icon={<ShowChartIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Grid>
    <CssBaseline />
  </Grid >
)

export default Layout