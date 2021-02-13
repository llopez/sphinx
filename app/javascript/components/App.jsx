import React from 'react'
import {
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AccountsList from './dashboard/accounts/List'

const App = () => (
  <Grid container direction="column">
    <Grid item>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Sphinx - Dashboard</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
    <Grid item style={{ height: "calc(100vh - 56px - 56px)", padding: '0.5em', overflow: 'auto' }}>
      <Card>
        <CardContent>
          <Typography>Portfolio</Typography>
          <Typography variant="h5">$ 40,000.21</Typography>
        </CardContent>
      </Card>
      <AccountsList />
    </Grid>
    <Grid item>
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Grid>
    <CssBaseline />
  </Grid >
)

export default App