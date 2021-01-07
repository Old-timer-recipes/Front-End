import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import schema from './formSchemas/LoginSchema'
import "./index.css"
////////////////////////////////////////// STYLES ARE HERE /////////////////////////////////////////////////


  const TitleStyle = styled.div`
  color:#FEB5A5;
  padding-top: 1.5rem;
  font-size: 1.2rem;
  font-family: 'Homemade Apple', cursive;
  padding-left: 2rem; 
  width:100%;
  display:flex;
  justify-content: center;
`
  
const LoginContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  display:flex;
  justify-content: center;
  padding: 3% 3% 6% 3%;
  text-align: center;
  box-shadow: 0px 30px 60px -40px rgba(31, 38, 23, 0.5);
  border-radius: 10px;
  font-family: 'Lato';
  color: #5D534C;
`

const ButtonStyle = styled.button`
  border-radius: 2rem;
  background-color:#FEB5A5;
  color:white;
  height: 2.2rem;
  width: 26rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;  
  margin: 0% 0% 1% 0%;
`
const Form = styled.form`
  display:flex;
  flex-direction: column;
`
const Label = styled.label`
  padding: 1%;
  margin: 0% 0% 4% 0%;
`
const Links = styled.div`
  font-family: 'Lato';
  color: #5D534C;
  text-align: right; 
`
///////////////////////////////////////////CODE BEGINS HERE///////////////////////////////////


const initialLoginValues = {
  username: "",
  password: "",
} 
const initialLoginErrors = {
  username: "",
  password: "",
}

const initialDisabled = true;


export default function LoginPage() {
const [signup, setSignUp] = useState(initialLoginValues);
const [errors, setErrors] = useState(initialLoginErrors);
const [disabled, setDisabled] = useState(initialDisabled);

const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
        .then(() => {setErrors({...errors, [name]:""});})
        .catch(err => {setErrors({...errors, [name]:err.errors[0]});});
}

const onChange = event => {
    const { name, value } = event.target
    setErrors(name, value)
    setSignUp({...signup, [name]:value});
}

const onSubmit = event => {
    event.preventDefault();
    const newSignup = {username: signup.username, password: signup.password}
    const {username, password} = newSignup
    const newUser = {username, password}
    axios
        .post("https://reqres.in/api/users", newUser)
        .then((res) => {
            setSignUp(initialLoginValues)
        })
        .catch((err) => {
            debugger;
        });
};

useEffect(() => {
    schema.isValid(signup).then(valid => {
        setDisabled(!valid);
    });
}, [signup])

  return (
    <div>
      <TitleStyle> 
        <h1>Secret Family Recipes</h1>
      </TitleStyle> 
      <LoginContainer>
        <div className="login-container">
            <h2>LOG IN</h2>
            <Form className="loginForm" onSubmit={onSubmit} >
                {/* /////USERNAME INPUT///// */}
                <Label>
                    <input id="usernameInput"
                    className="input-box"
                    placeholder= "Username"
                    value= {signup.username}
                    onChange={onChange}
                    name="username"
                    text="text"
                    />
                </Label>
                {/* <br></br> */}
                {/* /////PASSWORD INPUT///// */}
                <Label>
                    <input id ="pwInput"
                    className="input-box"
                    placeholder= "Password"
                    value={signup.password}
                    onChange={onChange}
                    name="password"
                    text="text"
                    />
                </Label>
                <div className="errors">
                  <div>{errors.username}</div>
                  <div>{errors.password}</div>
                </div>
                <ButtonStyle type="submit" disabled={disabled}>
                  LOG IN 
                </ButtonStyle> 
            </Form>
                  
            <Links>
              <Link className="links" to="/sign-up">Sign Up</Link>
              <span>   |   </span> 
              <Link className ="links" to="/password-reset">Forgot Password</Link>
            </Links>
        </div>
      </LoginContainer>
    </div>

  )
}
