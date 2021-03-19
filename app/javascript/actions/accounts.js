const ADD_ACCOUNT = 'ADD_ACCOUNT'
const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT'
const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'

export const addAccount = ({ address, ether, label, erc20s, }) => {
  return {
    type: ADD_ACCOUNT,
    payload: {
      label,
      address,
      ether,
      erc20s,
    }
  }
}

export {
  ADD_ACCOUNT,
  REMOVE_ACCOUNT,
  UPDATE_ACCOUNT,
}