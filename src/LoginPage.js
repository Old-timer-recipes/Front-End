import React, {useState} from 'react'



const initialLoginValues = {
  email: "",
  password: "",
} 
const initialLoginErrors = {
  email: "",
  password: "",
}


export default function LoginPage() {
const [loginValues, setLoginValues] = useState(initialLoginValues)
const [loginErrors, setLoginErrors] = useState(initialLoginErrors)

  return (
    <div>
      <h1>Secret Family Recipes</h1>
      <div className="login-container">
        <h2>LOG IN</h2>
        <p>insert email input here</p>
        <p>insert pw input here</p>
        <p>insert button here</p>
        <p>insert Sign-Up button link here</p>
        <p>insert forgot password button link here</p>
      </div>
    </div>

  )
}
