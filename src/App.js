import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import LoginPage from "./LoginPage"

export default function App() {
  return (
    <div>
      <Route path="/login">
        <LoginPage/>

      </Route>
    </div>
  )
}
