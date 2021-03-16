import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'

import EqualizerIcon from '@material-ui/icons/Equalizer';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SettingsIcon from '@material-ui/icons/Settings';

const Navigation = () => {
  const history = useHistory()
  const location = useLocation()
  const [value, setValue] = useState('/')

  useEffect(() => {
    setValue(location.pathname)
  }, [location])

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_event, newValue) => {
        history.push(newValue)
      }}
    >
      <BottomNavigationAction label="Dashboard" value="/" icon={<EqualizerIcon />} />
      <BottomNavigationAction label="Market" value="/market" icon={<ShowChartIcon />} />
      <BottomNavigationAction label="Settings" value="/settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  )
}

export default Navigation