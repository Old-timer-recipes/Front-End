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

const initialSU = {};
const initialDisabled = true;


export default function SignUpPage() {
const [signup, setSignup] = useState(initialSU)
const [signupValues, setSignupValues] = useState(initialSUValues)
const [signupErrors, setSignupErrors] = useState(initialSUErrors)
const [disabled, setDisabled] = useState(initialDisabled)




// const getSignup = () => {
//     axios
//         .get("https://secretfamily-recipes.herokuapp.com/api/auth/register")
//         .then((res) => {
//             setSignup(res.data.data);
//         })
//         .catch((err) => {
//             console.log(err)
//             debugger;
//         });
// };

const postNewSignup = (newSignup) => {
    const { name, username, password, passwordConfirm } = newSignup
    const newUser = { username, password }
    axios
        .post("https://secretfamily-recipes.herokuapp.com/api/auth/register", newUser)
        .then ((res) => {
            console.log(res)
            setSignupErrors([res.data.data, ...signup]);
            setSignupValues(initialSUValues);
        })
}

const inputChange = (name, value) => {
    yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
            setSignupErrors({
                ...signupErrors,
                [name]: "",
            });
        })
        .catch ((err) => {
            setSignupErrors({
                ...signupErrors,
                [name]: err.errors[0],
            });
        });
        setSignupValues({
            ...signupValues,
            [name]: value,
        });
}

const formSubmit = () => {
    const newSignup = {
        name: signupValues.name,
        username: signupValues.username,
        password: signupValues.password,
        passwordConfirm: signupValues.passwordConfirm,
    }
   return newSignup;
}

// useEffect(() => {
//     getSignup();
// }, []);

useEffect(() => {
    schema.isValid(signupValues)
    .then(valid => {
        setDisabled(!valid)
    })
}, [signupValues])

const onSubmit = (evt) => {
    evt.preventDefault();
    formSubmit();
}

const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange (name, value);
}


return (
    <div>
        <TitleStyle>
            <h1>Secret Family Recipes</h1>
        </TitleStyle>
        <SignUpContainer>
            <div className="signUpPage">
                <h2>SIGN UP</h2>
                <Form onSubmit={onSubmit}>
                    <Label>
                        <input
                        id="SUname"
                        className="input-box"
                        placeholder="Name"
                        value={signupValues.name}
                        onChange={onChange}
                        name= "name"
                        type= "text"
                        maxLength= "20"
                    />
                    </Label>
                    <Label>
                        <input
                        id="SUusername"
                        className="input-box"
                        placeholder="Username"
                        value={signupValues.username}
                        onChange={onChange}
                        name= "username"
                        type= "text"
                        maxLength= "30"
                    />
                    </Label>
                
                    <Label>
                        <input
                        id="pw"
                        className="input-box"
                        placeholder="Password"
                        value={signupValues.password}
                        onChange={onChange}
                        name= "password"
                        type= "password"
                        maxLength= "20"
                    />
                    </Label>
                    <Label>
                        <input
                        id="pwconfirm"
                        className="input-box"
                        placeholder="Confirm Password"
                        value={signupValues.passwordConfirm}
                        onChange={onChange}
                        name= "passwordConfirm"
                        type= "password"
                        maxLength= "30"
                    />
                    </Label>
                    <ButtonStyle type="submit" disabled={disabled}> Submit </ButtonStyle>
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
