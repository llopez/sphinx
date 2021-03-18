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
    },
    {
      label: 'Ledger #4',
      address: '0x975787a4CF92e46c5f529b08da00AD90B0C35e92',
      ether: 2.3,
      total: 1000.34,
      erc20s: [
        { symbol: 'dai', balance: 1000 },
      ]
    },
    {
      label: 'Other',
      address: '0x0Bb22b99916B487B6A2699cD265b7bF2e986AFB0',
      ether: 2.3,
      total: 1000.34,
      erc20s: [
        { symbol: 'dai', balance: 1000 },
      ]
    },
    {
      label: 'Meta 1',
      address: '0x5aBB4561db04a0ddf6cdaE0c2369536309A8aC48',
      ether: 2.3,
      total: 1000.34,
      erc20s: [
        { symbol: 'dai', balance: 1000 },
      ]
    }
  ],
  tokens: [
    { symbol: 'dai', value: 1.0 },
    { symbol: 'usdc', value: 1.0 },
    { symbol: 'bat', value: 0.23 },
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