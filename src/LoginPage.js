import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import schema from './formSchemas/LoginSchema'
////////////////////////////////////////// STYLES ARE HERE /////////////////////////////////////////////////
const LoginContainer = styled.div`
  background-color: #FFFFFF;
  display:flex;
  justify-content: center;
  padding: 1% 3% 3% 3%;
  text-align: center;
  box-shadow: 0px 30px 60px -40px rgba(31, 38, 23, 0.5);
  border-radius: 10px;
  font-family: 'Lato';
  color: #5D534C;
`
const TitleStyle = styled.div`
  color:#FEB5A5;
  padding-top: 1.5rem;
  font-size: 1.3rem;
  font-family: 'Homemade Apple', cursive;
  padding-left: 2rem; 
`
const ButtonStyle = styled.button`
  border-radius: 2rem;
  background-color:#FEB5A5;
  color:white;
  height: 2rem;
  width: 15rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;  
`
const Form = styled.form`
  display:flex;
  flex-direction: column;
`
const Label = styled.label`
  padding: 2%;
  margin: 0% 0% 4% 0%;
`
const Links = styled.div`
  text-decoration: none;
  font-family: 'Lato';
  color: #5D534C;
  display: flex;
  justify-content: flex-end;
`
///////////////////////////////////////////CODE BEGINS HERE///////////////////////////////////


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

const getUsers = () => {
    axios
        .get("https://reqres.in/api/users") // THIS IS AN OLD API FROM A PREVIOUS PROJECT?
        .then((res) =>{
            setUser(res.data);
        })
        .catch((err) => {
            console.log(err);
            debugger;
        });
};

const postNewUser = (newUser) => {
    axios  
        .post("https://reqres.in/api/users", newUser)
        .then ((res) => {
            setUser([res.data, ...user]);
            setLoginValues(initialUsers);
        })
}

const inputChange = (name, value) => {
  yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setLoginErrors({
        ...loginErrors,
        [name]: "",
      });
    })
    .catch((err) => {
      setLoginErrors({
        ...loginErrors,
        [name]: err.errors[0],
      });
    });
    
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
}


const formSubmit = () => {
    const newUser = {
        email: loginValues.email.trim(),
        password: loginValues.password.trim(),
    }
    postNewUser(newUser);
}

useEffect(() => {
  getUsers();
}, []);

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
            <Form className="loginForm" onSubmit={onSubmit} >
                {/* /////EMAIL INPUT///// */}
                <Label>
                    <input id="emailInput"
                    placeholder= "Email"
                    value= {loginValues.email}
                    onChange={onChange}
                    name="email"
                    text="text"
                    />
                </Label>
                {/* <br></br> */}
                {/* /////PASSWORD INPUT///// */}
                <Label>
                    <input id ="pwInput"
                    placeholder= "Password"
                    value={loginValues.password}
                    onChange={onChange}
                    name="password"
                    text="text"
                    />
                </Label>
                <ButtonStyle type="submit">
                  LOG IN 
                </ButtonStyle> 
            </Form>
                  
            <Links>
              <Link to="/sign-up">Sign-Up</Link>
              <span> | </span> 
              <Link to="/password-reset">Forgot Password</Link>
            </Links>
        </div>
      </LoginContainer>
    </div>

  )
}
