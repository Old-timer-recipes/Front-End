import styled  from 'styled-components'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

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

const RecipeFourm = styled.div`
padding:5rem;
z-index:9;
background: rgba(135, 141, 149, 0.5);
position: absolute ;
display:none;
margin-right:4rem;

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

const Rec = styled.div`
background-color: white;
text-align: center;
border-radius:80px;
display: inline-block;
padding:2rem;
cursor:pointer;
`

const Rec1 = styled.div`
background-color: white;
text-align: center;
border-radius:80px;
z-index:9;
background: rgba(135, 141, 149, 0.5);
position: absolute ;
padding:2rem;
display:none;
cursor:pointer;

`


function Dashboard() {
  const [name,setname] = useState('')
  const [Kitchen,setKitchen] = useState('')
  const [Category,setCategory] = useState('')
  const [Prep,setPrep] = useState('')
  const [Cook,setCook] = useState('')
  const [Servings,setServings] = useState('')
  const [Ingredient,setIngredient] = useState('')
  const [Directions,setDirections] = useState('')
  const [allrec, setAllrec] = useState([])
  const [search,setSearch] = useState('')
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const trainingFform = document.getElementById('Fourmm');
    const Output = document.getElementById('Ntitle')
    if(Output.style.display === 'none'){
      Output.style.display = 'inline-block';  };
    if(trainingFform.style.display === 'inline-block'){
      trainingFform.style.display = 'none';  }
      document.getElementById("create-form").reset()   
     }

  const toggleTForm = () => {
    const trainingForm = document.getElementById('Fourmm')
    if(trainingForm.style.display === 'none'){
        trainingForm.style.display = 'inline-block';
    }else {
        trainingForm.style.display = 'none'
        
    }
}

const toggleTFormForm = () => {
  const trainingFormForm = document.getElementById('Fourmmm')
  if(trainingFormForm.style.display === 'none'){
    trainingFormForm.style.display = 'inline-block';
}else {
  trainingFormForm.style.display = 'none'
    
}

}

const editSearchTerm = (e) =>{
  setSearch(e.target.value)
}

const dynamicSearch = () =>{
  return name.filter(names => names.toLowerCase().includes(search.toLowerCase()))
}

const [api1, setapi] = useState([])

useEffect(() =>{
  axios
    .get('https://secretfamily-recipes.herokuapp.com/api/recipes')
    .then(resp =>{
      console.log(resp.data[0])
      setapi(resp.data[0])
    })
    .catch(err => {
      console.log(err)
    })
},[])
  return (
    <div className="App" >
        <Container >
            <Logo>
                Secret Family Recipes
            </Logo>
            <Form>
                <Input type="text" value = {search} onChange={editSearchTerm} placeholder="Search"/>
               

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
        <Buttom onClick={toggleTForm}>+ Add a new Recipe</Buttom>

    <RecipeFourm id = "Fourmm"  >
      <form onSubmit={handleSubmit} id = "create-form">
      <h1>Add New Recipe</h1>
      <Input type="text" 
      placeholder="Recipe Title"
      value={name}
      onChange={e => setname(e.target.value)}></Input>
      <Input type="text" 
      placeholder="From the Kitchen of"
      onChange={e => setKitchen(e.target.value)}></Input>
      <Input type="text" 
      placeholder="Category"
      onChange={e => setCategory(e.target.value)}></Input>
      <Input type="text" 
      placeholder="Prep Time"
      onChange={e => setPrep(e.target.value)}></Input>
      <Input type="text" 
      placeholder="Cook Time"
      onChange={e => setCook(e.target.value)}></Input>
      <Input type="text" 
      placeholder="Number of Servings"
      onChange={e => setServings(e.target.value)}></Input>
      <h1>Ingredients</h1>
      <Input type="text" 
      placeholder="Ingredient Name"
      onChange={e => setIngredient(e.target.value)}></Input>
      <h1>Directions</h1>
      <Input type="text" 
      placeholder="Directions"
      onChange={e => setDirections(e.target.value)}></Input>
      <Buttom type="submit">+ Save Recipe</Buttom>
      </form>
    </RecipeFourm>

   <Rec id ="Ntitle">
  <h1 onClick={toggleTFormForm} name = {dynamicSearch}>{name}</h1>
  </Rec> 

   {/* {api.map((Obj) =>
  <Card api={Obj}/>
  )

  } */}


  <Card id ="Ntitle" name = {api1.recipe_title}/>
  <Card id ="Ntitle" />
  <Card id ="Ntitle" />
  <Card id ="Ntitle" />
  <Rec1 id = "Fourmmm">
  <h3>Recipe Title:</h3>
  <p>{api1.recipe_title}</p>
  <h3>From the Kitchen of</h3>
  <p>{api1.from_kitchen_of}</p>
  <h3>Category</h3>
  <p>{api1.category}</p>
  <h3>Prep Time</h3>
  <p>{api1.prep_time}</p>
  <h3>Cook Time</h3>
  <p>{api1.cook_time}</p>
  <h3>Number of Servings</h3>
  <p>{api1.servings}</p>
  <h3>Ingredient</h3>
  <p>{api1.recipe_title}</p>
  <h3>Directions</h3>
  <p>{api1.directions}</p>

  </Rec1> 


        </Dash>
        <Dash id = "Dash1">


        </Dash>
    </div>
  );
}

export default Dashboard;
