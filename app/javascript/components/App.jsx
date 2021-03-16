import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StateProvider from '../context/StateProvider'
import Layout from './Layout'
import Dashboard from './Dashboard'
import Market from './Market'
import Settings from './Settings'
import AccountView from './dashboard/AccountView'

const App = () => (
  <StateProvider>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/market" component={Market} />
          <Route path="/settings" component={Settings} />
          <Route path="/accounts/:address" component={AccountView} />
        </Switch>
      </Layout>
    </Router>
  </StateProvider>

)

export default App