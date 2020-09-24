import React, { Component} from 'react';
// in jxs <a refer for link not working so we need to replace it with abd href replace with to
import {Link, Router } from 'react-router-dom'; 


class Navbar extends Component{

    render(){
return( 
    <Router>

    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className =  " container ">
      <Link className="navbar-brand" to="#">Top navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Link</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="#">Disabled</Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
    </Router>
)

    }
}
export default Navbar; 