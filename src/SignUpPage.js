import React from 'react'

export default function SignUpPage() {
    return (
        <div className="signUpPage">
            <form>
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
            </form>
        </div>
    )
}
