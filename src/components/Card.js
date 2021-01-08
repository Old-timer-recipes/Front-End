import styled  from 'styled-components'
import React, { useState, useEffect } from 'react'
import axios from 'axios'










const Rec = styled.div`
background-color: white;
text-align: center;
border-radius:80px;
display: inline-block;
padding:2rem;
cursor:pointer;
`
const Card = (props) => {


    const toggleTFormForm = () => {
        const trainingFormForm = document.getElementById('Fourmmm')
        if(trainingFormForm.style.display === 'none'){
          trainingFormForm.style.display = 'inline-block';
      }else {
        trainingFormForm.style.display = 'none'
          
      }
    }


return (
    <div>
  <Rec id ="Ntitle">
  <h1 onClick={toggleTFormForm}>{props.name}</h1>
  </Rec>


</div>
)


}

export default Card