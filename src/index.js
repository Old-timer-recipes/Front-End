import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import styled from 'styled-components'


const Styles = styled.div`
  background-color: #F2F2F2;
  display:flex;
  justify-content:center;
`
const Center = styled.div`
  background-color: #F2F2F2;
  display:flex;
  align-items:center;
`


ReactDOM.render(
  <Styles> 
    <Router>
      <Center>
        <App />
      </Center>
    </Router>
  </Styles>,
  document.getElementById('root')
);

