import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useHistory } from "react-router-dom"

const Settings = () => {
  const history = useHistory()

  return (
    <React.Fragment>
      <List>
        <ListItem button divider onClick={() => { history.push('/accounts/new') }}>
          <ListItemText primary="Add Account" secondary="Add ethereum account by address" />
          <ListItemSecondaryAction>
            <NavigateNextIcon />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </React.Fragment>
  )
}

export default Settings