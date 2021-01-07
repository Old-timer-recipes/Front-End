import styled  from 'styled-components'


const s = "Test"


const Container = styled.div`
display:flex;
justify-content:space-between;
background: #FFFFFF;
padding-bottom: 0.3rem;

`


const Logo = styled.div`
color:#FEB5A5;
padding-top: 1.5rem;
font-size: 1.7rem;
font-family: 'Homemade Apple', cursive;
padding-left: 2rem;

`

const Form = styled.div`
padding-right: 2rem;
padding-top: 1.5rem;
`

const Input = styled.input`
background-color: #F7F7F7;
border-radius: 2rem;
border:white;
height: 3rem;
width: 15rem;
font-size: 1.2rem;
padding-left: 1.4rem;
outline: none;

`
const Submit = styled.button`
background-color: #F7F7F7;
border-radius: 2rem;
border:white;
height: 3rem;
width: 15rem;
font-size: 1.2rem;
padding-left: 1.4rem;
cursor:pointer;


`



const Dash = styled.div`
background:#F2F2F2

`


const Buttom = styled.button`

border-radius: 2rem;
background-color:#FEB5A5;
color:white;
height: 3rem;
width: 15rem;
border: none;
cursor:pointer;
font-size: 1rem;

`




const Round = styled.button`
background-color: #FEB5A5;
border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 1.5rem;
font-family: 'Homemade Apple', cursive;
width:60px;
height:60px;
border-radius:50px;
cursor:pointer;

`

function Dashboard() {
  return (
    <div className="App">
        <Container>
            <Logo>
                Secret Family Recipes
            </Logo>
            <Form>
                <Input type="text"  placeholder="Search"/>
               

                <Submit type = "submit" > <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0982 21.5124C20.4887 21.9029 21.1218 21.9029 21.5124 21.5124C21.9029 21.1218 21.9029 20.4887 21.5124 20.0982L20.0982 21.5124ZM14.9988 16.413L20.0982 21.5124L21.5124 20.0982L16.413 14.9988L14.9988 16.413Z" fill="#FEB5A5"/>
<circle cx="10.6066" cy="10.6066" r="6.5" transform="rotate(-45 10.6066 10.6066)" stroke="#FEB5A5" stroke-width="2"/>
</svg></Submit>

                <Round>KO</Round>

                <Submit type = "submit" ><svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.47412 1.65381L7.08071 7.35484L12.7817 1.65381" stroke="#FEB5A5" stroke-width="2" stroke-linecap="round"/>
</svg></Submit>
            </Form>
        </Container>
        <Dash>
        <Buttom>+ Add a new Recipe</Buttom>

        </Dash>
    </div>
  );
}

export default Dashboard;
