import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from "./LoginPage"
import SignUpPage from './SignUpPage'
import SignUpPage2 from './SignUpPage2'
import LoginPage2 from './LoginPage2'

export default function App() {
  return (
    <div>
      <Route path="/login">
        <LoginPage/>
      </Route>
      <Route path="/sign-up">
        <SignUpPage/>
      </Route>
      <Route path="/test">
        <SignUpPage2/>
      </Route>
      <Route path="/test2">
        <LoginPage2/>
      </Route>
    </div>
  )
}
