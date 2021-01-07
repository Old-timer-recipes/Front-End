import React, {useState} from 'react'
import styled from "styled-components"

const LoginContainer = styled.div`
  background-color: #FFFFFF;
  width:50%;
  margin: 0 auto;
  display:flex;
  justify-content: center;
`
const TitleStyle = styled.div`
  color: #FEB5A5;
;
`

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
      <TitleStyle> 
        <h1>Secret Family Recipes</h1>
      </TitleStyle> 
      <LoginContainer>
        <div className="login-container">
            <h2>LOG IN</h2>
            <form className="loginForm">
                {/* /////EMAIL INPUT///// */}
                <label>
                    Email:
                    {/* <input id="nameInput"
                    value={#}
                    // onChange={onChange}
                    // name="name"
                    text="text"
                    /> */}
                </label>
                <br></br>
                {/* /////PASSWORD INPUT///// */}
                <label>
                    Password:
                    {/* <input id="nameInput"
                    value={#}
                    // onChange={onChange}
                    // name="name"
                    text="text"
                    /> */}
                </label>

            </form>
            
            
            <p>insert "LOGIN" button here</p>
            <p>insert Sign-Up button link here</p>
            <p>insert forgot password button link here</p>
        </div>
      </LoginContainer>
    </div>

  )
}
