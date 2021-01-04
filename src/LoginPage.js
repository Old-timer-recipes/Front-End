import axios from 'axios'
import React, {useState} from 'react'
import styled from "styled-components"

const LoginContainer = styled.div`
  background-color: #FFFFFF;
  width:75%;
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
const initialUsers = [];


export default function LoginPage() {
const [user, setUser] = useState(initialUsers)
const [loginValues, setLoginValues] = useState(initialLoginValues)
const [loginErrors, setLoginErrors] = useState(initialLoginErrors)

const getUser = () => {
    axios
        .get("https://reqres.in/api/users") // THIS IS AN OLD API FROM A PREVIOUS PROJECT?
        .then((res) =>{
            setUser(res.data);
        })
        .catch((err) => {
            console.log(err);
            debugger;
        })
}

const postNewUser = (newUser) => {
    axios  
        .post("https://reqres.in/api/users", newUser)
        .then ((res) => {
            setUser([res.data, ...user]);
            setLoginValues(initialUsers);
        })
}

const formSubmit = () => {
    const newUser = {
        email: loginValues.email.trim(),
        password: loginValues.password.trim(),
    }
}
const onSubmit = (evt) => {
    evt.preventDefault();
    formSubmit();
}

const onChange = (evt) => {
    setLoginValues(evt.target.value)

}









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
                    <input id="nameInput"
                    value= {loginValues.email}
                    onChange={onChange}
                    name="name"
                    text="text"
                    />
                </label>
                <br></br>
                {/* /////PASSWORD INPUT///// */}
                <label>
                    Password:
                    <input id="nameInput"
                    value={loginValues.password}
                    onChange={onChange}
                    name="name"
                    text="text"
                    />
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
