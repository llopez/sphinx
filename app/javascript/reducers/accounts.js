import {
  ADD_ACCOUNT,
  REMOVE_ACCOUNT,
  UPDATE_ACCOUNT,
} from '../actions/accounts'

const reducer = (state = [], { payload, type }) => {
  switch (type) {
    case ADD_ACCOUNT:
      return [...state, payload]
    case UPDATE_ACCOUNT:
      return [
        ...state.filter(({ address }) => payload.address !== address),
        payload
      ]
    case REMOVE_ACCOUNT:
      return state.filter(({ address }) => payload.address !== address)
    default:
      return state;
  }
}

export default reducer;