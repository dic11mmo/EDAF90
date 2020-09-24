import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function ShowText(){
  return (<div>  <h1 style={{ color: 'green' }}> This is for router  from home Component  </h1>
    <h2 style={{ color: 'brown' }} > lab3  </h2>  </div>)
}
///  <ShowText />
// <Navbar/>
class Home extends React.Component {
  render( ) { 
  return (
   
 <div>
   
   <h1>  Welcom to home </h1>
   <ShowText /> 
 
   
    </div>

  );
}
}

export default Home ;