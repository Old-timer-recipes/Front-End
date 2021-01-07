import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import styled from 'styled-components'


const Styles = styled.div`
  background-color: #F2F2F2;
  display:flex;
  justify-content:center;
  padding-top: 7%;
`


ReactDOM.render(
  <Styles> 
    <Router>
        <App />
    </Router>
  </Styles>,
  document.getElementById('root')
);

