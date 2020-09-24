

import {BrowserRouter as Router , Route , Link, Switch} from "react-router-dom";
import React , { Component } from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import PageNotFound from "./PageNotFound";
class RouterDemo extends Component{
render (){
    return (

        <div>
<Router>
    <div>
        <ul>
            <li> <Link to ="/Home"> Home </Link> </li>
            <li> <Link to ="/About"> About </Link> </li>
            <li> <Link to ="/Services"> Services  </Link> </li>
            <li> <Link to ="/Contact"> Contact Us  </Link> </li>
  

        </ul>
        <Switch> 
        <Route path="/Home" component= {Home}/>
        <Route path="/About" component= {About}/>
        <Route path="/Services" component= {Services}/>
  
        <Route path="/Contact" component= {PageNotFound}/> 
        </Switch> 
    </div>

    
</Router>


        </div>
    )
}

}


function Home2(){
    return (
   <>
     <h1>  Welcom to home </h1>
     <p> This is my first time </p>
      </>
  
    );
  }

export default RouterDemo ;


/// or we can use class component or fuction  compnenet ti hide the <ul part or <Route part as follows  resuklt will be same 

/*



import {BrowserRouter as Router , Route , Link, Switch} from "react-router-dom";
import React , { Component } from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import PageNotFound from "./PageNotFound";
class RouterDemo extends Component{
render (){
    return (

        <div>
<Router>
    <div>
       <Header/>
       <RouterParts/>
        
    </div>

    
</Router>


        </div>
    )
}

}


function Header(){
    return (
   <>
    <ul>
            <li> <Link to ="/Home"> Home </Link> </li>
            <li> <Link to ="/About"> About </Link> </li>
            <li> <Link to ="/Services"> Services  </Link> </li>
            <li> <Link to ="/Contact"> Contact Us  </Link> </li>
  

        </ul>
      </>
  
    );
  }


function RouterParts(){
    return (
   <>
   <Switch> 
        <Route path="/Home" component= {Home}/>
        <Route path="/About" component= {About}/>
        <Route path="/Services" component= {Services}/>
  
        <Route path="/Contact" component= {PageNotFound}/> 
        </Switch> 
      </>
  
    );
  } 

  

export default RouterDemo ;*/



