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

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => { console.log(state) }, [state])

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export default StateProvider;