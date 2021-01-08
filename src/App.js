import React from 'react'
import { Route } from 'react-router-dom'
import SignUpPage2 from './SignUpPage2'
import LoginPage2 from './LoginPage2'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div>
      
      <Route path="/sign-up">
        <SignUpPage2/>
      </Route>
      <Route path="/login">
        <LoginPage2/>
      </Route>
      <Route path ="/Dashboard">
        <Dashboard/>
      </Route>

    </div>
  )
}
