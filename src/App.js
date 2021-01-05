import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from "./LoginPage"
import SignUpPage from './SignUpPage'

export default function App() {
  return (
    <div>
      <Route path="/login">
        <LoginPage/>
      </Route>
      <Route path="/sign-up">
        <SignUpPage/>
      </Route>
    </div>
  )
}
