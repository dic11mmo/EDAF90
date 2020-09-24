import React , { Component } from "react"; 
import {BrowserRouter as Router , Route , Link} from "react-router-dom";
import WebsiteDesigning  from "./WebsiteDesigning";
function ShowText(){
    return (<div>  <h1 style={{ color: 'green' }}> Services  </h1>
      <ul>
         
          <li>  Mobile Services  </li>  
          <li>  Repaire computers </li> 
          </ul>  </div>)
  } 
class Services extends Component{
    render(){
        return (
         <div>
<Router>
<ShowText/> 
    <div>
        <ul>
            <li> <Link to ="/Website Designing"> Website Designing </Link> </li>
          
  

        </ul>
        
        <Route path="/Website Designing" component= {WebsiteDesigning}/>
        

    </div>

    
</Router> 
            </div>
        )
    }
}

export default Services;