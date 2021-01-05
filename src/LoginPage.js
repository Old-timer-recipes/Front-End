import axios from 'axios'
import React, {useState} from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

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
  font-size: 1.7rem;
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
            <Form className="loginForm" onSubmit={onSubmit} >
                {/* /////EMAIL INPUT///// */}
                <Label>
                    Email:
                    <input id="nameInput"
                    value= {loginValues.email}
                    onChange={onChange}
                    name="name"
                    text="text"
                    />
                </Label>
                {/* <br></br> */}
                {/* /////PASSWORD INPUT///// */}
                <Label>
                    Password:
                    <input id="nameInput"
                    value={loginValues.password}
                    onChange={onChange}
                    name="name"
                    text="text"
                    />
                </Label>

            </Form>
          <ButtonStyle>
             LOG IN 
          </ButtonStyle>         
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
