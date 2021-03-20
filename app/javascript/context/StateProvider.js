import React, { useReducer, useEffect } from "react";
import Context from "./Context";
import rootReducer from "../reducers";

const initialState = {
  accounts: [],
  tokens: [
    { symbol: 'dai', value: 1.0 },
    { symbol: 'usdc', value: 1.0 },
    { symbol: 'bat', value: 0.23 },
    { symbol: 'eth', value: 1800 },
  ]
}
const STORAGE_NAME = 'sphinx-data'

const withCache = reducer => {
  return (state, action) => {
    const newState = reducer(state, action);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));
    return newState;
  }
};

const getStateFromCache = () => JSON.parse(localStorage.getItem(STORAGE_NAME)) || initialState;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(withCache(rootReducer), getStateFromCache());

  useEffect(() => { console.log(state) }, [state])

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export default StateProvider;