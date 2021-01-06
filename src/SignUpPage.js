import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



   
   

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




const onSubmit = (evt) => {
    evt.preventDefault();
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
                    name= "name"
                    type= "text"
                    maxLength= "20"
                />
                </label>
                <label>
                    <input
                    id="SUemail"
                    placeholder="Email"
                    name= "email"
                    type= "email"
                    maxLength= "30"
                />
                </label>
               
                <label>
                    <input
                    id="pw"
                    placeholder="Password"
                    name= "password"
                    type= "password"
                    maxLength= "20"
                />
                </label>
                <label>
                    <input
                    id="pwconfirm"
                    placeholder="Confirm Password"
                    name= "passwordConfirm"
                    type= "password"
                    maxLength= "30"
                />
                </label>
                <button type="submit" > Submit </button>
                <div>
                    <p>Already have an account?</p> 
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    </div>
    )
}
