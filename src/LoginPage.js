import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import schema from './formSchemas/LoginSchema'
import "./index.css"
////////////////////////////////////////// STYLES ARE HERE /////////////////////////////////////////////////

const Content = styled.div`
  /* width: 100%; */
  `
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
const H2 = styled.div`
  font-family: 'Lato';
  color: #5D534C;; 
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
  padding: 2%;
  margin: 0% 0% 4% 0%;
`
const Links = styled.div`
  font-family: 'Lato';
  color: #5D534C;
  text-align: right; 
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
const initialDisabled = true;


export default function LoginPage() {
const [user, setUser] = useState(initialUsers)
const [loginValues, setLoginValues] = useState(initialLoginValues)
const [loginErrors, setLoginErrors] = useState(initialLoginErrors)
const [disabled, setDisabled]=useState(initialDisabled);

const getUsers = () => {
    axios
        .get("https://reqres.in/api/users") // THIS IS AN OLD API FROM A PREVIOUS PROJECT?
        .then((res) =>{
            setUser(res.data.data);
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
            setLoginValues(initialLoginValues);
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
        email: loginValues.email,
        password: loginValues.password,
    }
    postNewUser(newUser);
}

useEffect(() => {
  getUsers();
}, []);

useEffect(() => {
  schema.isValid(loginValues)
  .then(valid => {
    setDisabled(!valid)
  })
}, [loginValues])

const onSubmit = (evt) => {
    evt.preventDefault();
    formSubmit();
}

const onChange = (evt) => {
  const { name, value } = evt.target;
  inputChange(name, value);
}

// const onChange = (evt) => {
//     setLoginValues(evt.target.value);
// }



  return (
    <Content>
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
                    className="input-box"
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
                    className="input-box"
                    placeholder= "Password"
                    value={loginValues.password}
                    onChange={onChange}
                    name="password"
                    text="text"
                    />
                </Label>
                <div className="errors">
                  <div>{loginErrors.email}</div>
                  <div>{loginErrors.password}</div>
                </div>
                <ButtonStyle type="submit" disabled={disabled}>
                  LOG IN 
                </ButtonStyle> 
            </Form>
                  
            <Links>
              <Link className="links" to="/sign-up">Sign-Up</Link>
              <span> | </span> 
              <Link className ="links" to="/password-reset">Forgot Password</Link>
            </Links>
        </div>
      </LoginContainer>
    </Content>

  )
}
