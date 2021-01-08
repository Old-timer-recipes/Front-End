import React from 'react'
import { Route, Switch} from 'react-router-dom'
import SignUpPage2 from './SignUpPage2'
import LoginPage2 from './LoginPage2'
import Dashboard from './components/Dashboard'
import PrivateRoute from './utils/PrivateRoute'

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/sign-up">
         <SignUpPage2/>
        </Route>
        
        <Route exact path="/login">
          <LoginPage2/>
        </Route>

        <PrivateRoute path = "/dashboard">
          <Dashboard/>
        </PrivateRoute>
      </Switch>
    </div>
  )
}
