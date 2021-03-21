import React, { useContext } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Avatar
} from "@material-ui/core";
import ArrowIcon from '@material-ui/icons/NavigateNext'
import AvatarGroup from "@material-ui/lab/AvatarGroup"
import { useHistory } from "react-router-dom"
import Context from '../../context/Context'
import { formatCurrency } from '../../utils/formatting'
import { calculateAccountTotal } from '../../utils/calcs'
import { assetImage } from '../../utils/images'

const Account = (props) => {
  const { account } = props
  const { label, erc20s, address } = account;

  const [{ tokens }] = useContext(Context)
  const history = useHistory()

  const erc20sList = (
    <AvatarGroup>
      {
        [{ symbol: 'ETH' }, ...erc20s].map(({ symbol }) => <Avatar key={symbol} src={assetImage(symbol)} style={{ width: 30, height: 30 }} />)
      }
    </AvatarGroup>
  )

  const total = calculateAccountTotal(account, tokens)

  return (
    <ListItem button onClick={() => { history.push(`accounts/${address}`) }} style={{ paddingLeft: 0 }}>
      <ListItemText primary={label} secondary={erc20sList} />
      <ListItemSecondaryAction style={{ right: 0 }}>
        <div style={{ textAlign: 'right' }}><ArrowIcon viewBox="0 0 10 24" /></div>
        <Typography component="div">{formatCurrency(total)}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Account;