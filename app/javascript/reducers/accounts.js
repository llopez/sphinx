const ADD_ACCOUNT = 'ADD_ACCOUNT'
const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT'
const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'

const reducer = (state = [], { payload, type }) => {
  switch (type) {
    case ADD_ACCOUNT:
      return [...state, ...payload]
    case UPDATE_ACCOUNT:
      return [
        ...state.filter(({ id }) => payload.id !== id),
        payload
      ]
    case REMOVE_ACCOUNT:
      return state.filter(({ id }) => payload.id !== id)
    default:
      return state;
  }
}

export default reducer;