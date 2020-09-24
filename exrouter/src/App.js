import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import RouterDemo from "./RouterDemo"
// https://www.youtube.com/watch?v=y5o81SU3KoQ&list=PLLCu4ndnReXJisFtSMftEsPSJ0ycZKffo&index=2
function ShowText(){
  return (<div>  <h1 style={{ color: 'green' }}> This is for router  </h1>
    <h2 style={{ color: 'brown' }} > lab3  </h2>  </div>)
}
/* <ShowText />
    <Navbar/>*/

/*  <Router>
    <div>
    <ShowText />
      <Router exact path= "/" component ={ Home } /> 
    

      <Route path="/m" component={Home}></Route>
            <Route path="/" component={Navbar}></Route>

    </div>
    </Router> */ 
  
class App extends Component {
  render( ) {  
  return (
   
        <Router>
    <div>
   
  
    <RouterDemo/> 

  
          

    </div>
    </Router>
  
  );
}
}

export default App ;
