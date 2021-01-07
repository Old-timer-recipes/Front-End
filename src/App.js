import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from "./LoginPage"
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div>
      <Dashboard/>
      {/* <Route path="/login">
        <LoginPage/>
      </Route> */}
    </div>
  )
}
