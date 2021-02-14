import React, { useReducer, useEffect } from "react";
import Context from "./Context";
import rootReducer from "../reducers";

const initialState = {
  accounts: [
    {
      label: 'Ledger #1',
      address: '0x86aB31721fa0e3d759E77A42aE4f8c76Cc38a7EA',
      ether: 2.3,
      total: 4000.34,
      erc20s: [
        { symbol: 'dai', balance: 1000 },
        { symbol: 'usdc', balance: 2000 },
        { symbol: 'bat', balance: 45 },
      ]
    },
    {
      label: 'Ledger #2',
      address: '0xfcD94d80eee769F74Eac7210277029dc216125Da',
      ether: 2.3,
      total: 2000.34,
      erc20s: [
        { symbol: 'dai', balance: 1000 },
        { symbol: 'usdc', balance: 2000 },
      ]
    },
    {
      label: 'Ledger #3',
      address: '0x976AA98DC7E2f93DfB0B74B2AafCD2abb05E8F15',
      ether: 2.3,
      total: 1000.34,
      erc20s: [
        { symbol: 'dai', balance: 1000 },
      ]
    }
  ]
}

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export default StateProvider;