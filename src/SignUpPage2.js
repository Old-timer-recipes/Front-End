import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import schema from './formSchemas/SignupSchema';
import "./index.css";
import styled from 'styled-components';

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

const SignUpContainer = styled.div`
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

    //////////////CODE BEGINS HERE////////////////
const initialSUValues = {
    name: "",
    username: "",
    password: "",
    passwordConfirm: "",
}

const initialSUErrors = {
    name: "",
    username: "",
    password: "",
    passwordConfirm: "",
}

// const initialSU = {};
const initialDisabled = true;


export default function SignUpPage() {
const [login, setLogin] = useState(initialSUValues);
const [errors, setErrors] = useState(initialSUErrors);
const [disabled, setDisabled] = useState(initialDisabled)

// const postNewSignUp = (newSignup) => {
//     // const { name, username, password, passwordConfirm } = newSignup
//     // const newUser = { username, password }
//     axios  
//         .post("https://secretfamily-recipes.herokuapp.com/api/auth/register", newSignup)
//         .then ((res) => {
//             console.log(res);
//             setLogin([res.data, ...login]);
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// }


const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
        .then(() => { setErrors({...errors, [name]: ""});})
        .catch(err => {setErrors({...errors, [name]:err.errors[0]});});
        // setLogin({
        //     ...login, [name]: value
        // });
}


const handleChange = event => {
    const { name, value } = event.target
    setFormErrors (name, value)
    setLogin({ ...login, [name]: value }); // IS THIS THE SAME AS SetFormErrors setLogin() area?
};

const handleSubmit = event => {
    event.preventDefault();
    const newSignup = {name: login.name,
        username: login.username,
        password: login.password,
        passwordConfirm: login.passwordConfirm,}
    axios  
            .post("https://secretfamily-recipes.herokuapp.com/api/auth/register", newSignup)
            .then ((res) => {
                setLogin(initialSUValues)
                // console.log(res);
                // setLogin([res.data, ...login]);
            })
            .catch((err) => {
                debugger;
            });
};

useEffect(() => {
    schema.isValid(login).then(valid => {
        setDisabled(!valid);
    });
}, [login])



return (
    <div>
        <TitleStyle>
            <h1>Secret Family Recipes</h1>
        </TitleStyle>
        <SignUpContainer>
            <div className="signUpPage">
                <h2>SIGN UP</h2>
                <Form onSubmit={event => handleSubmit(event)}>
                    <Label>
                        <input
                        id="SUname"
                        className="input-box"
                        placeholder="Name"
                        value={login.name}
                        onChange={event => handleChange(event)}
                        name= "name"
                        type= "text"
                        maxLength= "20"
                        />
                    </Label>
                     <p className="error">{errors.name}</p>
                    <Label>
                        <input
                        id="SUusername"
                        className="input-box"
                        placeholder="Username"
                        value={login.username}
                        onChange={event => handleChange(event)}
                        name= "username"
                        type= "text"
                        maxLength= "30"
                        />
                    </Label>
                    <p className="error">{errors.username}</p>
                    <Label>
                        <input
                        id="pw"
                        className="input-box"
                        placeholder="Password"
                        value={login.password}
                        onChange={event => handleChange(event)}
                        name= "password"
                        type= "password"
                        maxLength= "20"
                        />
                    </Label>
                    <p className="error">{errors.password}</p>
                    <Label>
                        <input
                        id="pwconfirm"
                        className="input-box"
                        placeholder="Confirm Password"
                        value={login.passwordConfirm}
                        onChange={event => handleChange(event)}
                        name= "passwordConfirm"
                        type= "password"
                        maxLength= "30"
                        />
                    </Label>
                    <p className="error">{errors.passwordConfirm}</p>
                    <ButtonStyle type="submit" disabled={disabled} > Submit </ButtonStyle>
                    <Links>
                        <span>Already have an account? </span> 
                        <Link to="/login" className="loginLink" >Login</Link>
                    </Links>
                </Form>
        </div>
        </SignUpContainer>
    </div>
    )
}
