const LOAD_TOKENS = 'LOAD_TOKENS'
const ADD_TOKEN = 'ADD_TOKEN'
const REMOVE_TOKEN = 'REMOVE_TOKEN'
const UPDATE_TOKEN = 'UPDATE_TOKEN'

const reducer = (state = [], { payload, type }) => {
  switch (type) {
    case LOAD_TOKENS:
      return payload
    case ADD_TOKEN:
      return [...state, ...payload]
    case UPDATE_TOKEN:
      return [
        ...state.filter(({ id }) => payload.id !== id),
        payload
      ]
    case REMOVE_TOKEN:
      return state.filter(({ id }) => payload.id !== id)
    default:
      return state;
  }
}

export default reducer;