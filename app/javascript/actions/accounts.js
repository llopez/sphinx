const ADD_ACCOUNT = 'ADD_ACCOUNT'
const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT'
const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'

export const addAccount = (address) => {
  return {
    type: ADD_ACCOUNT,
    payload: {
      address
    }
  }
}

export {
  ADD_ACCOUNT,
  REMOVE_ACCOUNT,
  UPDATE_ACCOUNT,
}