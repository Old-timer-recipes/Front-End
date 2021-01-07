import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup';
import schema from './formSchemas/SignupSchema'



   
   

    //////////////CODE BEGINS HERE////////////////
const initialSUValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
}

const initialSUErrors = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
}

const initialSU = [];
const initialDisabled = true;


export default function SignUpPage() {
const[signup, setSignup] = useState(initialSU)
const [signupValues, setSignupValues] = useState(initialSUValues)
const [signupErrors, setSignupErrors] = useState(initialSUErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const onSubmit = (user) => {
    const {  name, email, password, passwordConfirm} = user
   const newUser = {name, email, password}
    console.log({newUser})
    axios.post('https://secretfamily-recipes.herokuapp.com/api/auth/register', newUser)
    .then((res) => {
       console.log('res',res)
    })
    .catch((err) => {
        console.log('error',err)
    })
}


const getSignup = () => {
    axios
        .get("https://reqres.in/api/users")
        .then((res) => {
            setSignup(res.data.data);
        })
        .catch((err) => {
            console.log(err)
            debugger;
        });
};

const postNewSignup = (newSignup) => {
    axios
        .post("https://reqres.in/api/users", newSignup)
        .then ((res) => {
            setSignupErrors([res.data, ...signup]);
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
        email: signupValues.email,
        password: signupValues.password,
        passwordConfirm: signupValues.passwordConfirm,
    }
    postNewSignup(newSignup);
}

useEffect(() => {
    getSignup();
}, []);

useEffect(() => {
    schema.isValid(signupValues)
    .then(valid => {
        setDisabled(!valid)
    })
}, [signupValues])

// const onSubmit = (evt) => {
//     evt.preventDefault();
//     formSubmit();
// }

const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange (name, value);
}


return (
    <div>

        <h1>Secret Family Recipes</h1>

        <div className="signUpPage">
            <form onSubmit={onSubmit}>
                <label>
                    <input
                    id="SUname"
                    placeholder="Name"
                    value={signupValues.name}
                    onChange={onChange}
                    name= "name"
                    type= "text"
                    maxLength= "20"
                />
                </label>
                <label>
                    <input
                    id="SUemail"
                    placeholder="Email"
                    value={signupValues.email}
                    onChange={onChange}
                    name= "email"
                    type= "email"
                    maxLength= "30"
                />
                </label>
               
                <label>
                    <input
                    id="pw"
                    placeholder="Password"
                    value={signupValues.password}
                    onChange={onChange}
                    name= "password"
                    type= "password"
                    maxLength= "20"
                />
                </label>
                <label>
                    <input
                    id="pwconfirm"
                    placeholder="Confirm Password"
                    value={signupValues.passwordConfirm}
                    onChange={onChange}
                    name= "passwordConfirm"
                    type= "password"
                    maxLength= "30"
                />
                </label>
                <button type="submit" disabled={disabled}> Submit </button>
                <div>
                    <p>Already have an account?</p> 
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    </div>
    )
}
