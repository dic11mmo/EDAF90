  
 
  
  
  

  // min new skriven code 
  import React from 'react';
  import logo from './logo.svg';
  import './App.css';
  //import inventory from "./inventory.ES6";
  
  ///import ViewOrder from './ViewOrder';
  import ComposeSaladModal from './ComposeSaladModal';
  
  import ComposeSalad from "./ComposeSalad";
  import ViewOrder from "./ViewOrder";
  import {BrowserRouter as Router , Route , Link} from "react-router-dom"; 


let inventory = {
  Sallad: {price: 10, foundation: true, vegan: true},
  Pasta: {price: 10, foundation: true, gluten: true},
  'Sallad + Pasta': {price: 10, foundation: true, gluten: true},
  'Sallad + Matvete': {price: 10, foundation: true, vegan: true, gluten: true},
  'Sallad + Glasnudlar': {price: 10, foundation: true, gluten: true},
  'Sallad + Quinoa': {price: 10, foundation: true, vegan: true},

  'Kycklingfilé': {price: 10, protein: true},
  'Rökt kalkonfilé': {price: 10, protein: true},
  'Norsk fjordlax': {price: 30, protein: true},
  'Handskalade räkor från Smögen': {price: 40, protein: true},
  'Pulled beef från Sverige': {price: 15, protein: true},
  'Marinerad bönmix': {price: 10, protein: true, vegan: true},

  Avocado: {price: 10, extra: true, vegan: true},
  Bacon: {price: 10, extra: true},
  'Böngroddar': {price: 5, extra: true, vegan: true},
  'Cashewnötter': {price: 5, extra: true, vegan: true},
  'Chèvreost': {price: 15, extra: true, lactose: true},
  Fetaost: {price: 5, extra: true, lactose: true},
  'Färsk koriander': {price: 10, extra: true, vegan: true},
  Gurka: {price: 5, extra: true, vegan: true},
  'Inlagd lök': {price: 5, extra: true, vegan: true},
  Jalapeno: {price: 5, extra: true, vegan: true},
  'Krossade jordnötter': {price: 5, extra: true, vegan: true},
  Krutonger: {price: 5, extra: true, gluten: true},
  'Körsbärstomater': {price: 5, extra: true, vegan: true},
  Lime: {price: 5, extra: true, vegan: true},
  Majs: {price: 5, extra: true, vegan: true},
  Oliver: {price: 5, extra: true, vegan: true},
  Paprika: {price: 5, extra: true, vegan: true},
  Parmesan: {price: 5, extra: true, lactose: true},
  'Rivna morötter': {price: 5, extra: true, vegan: true},
  'Rostade sesamfrön': {price: 5, extra: true, vegan: true},
  Ruccola: {price: 5, extra: true, vegan: true},
  'Rödlök': {price: 5, extra: true, vegan: true},
  'Sojabönor': {price: 5, extra: true, vegan: true},
  'Soltorkad tomat': {price: 5, extra: true, vegan: true},
  Tomat: {price: 5, extra: true, vegan: true},
  'Valnötter': {price: 5, extra: true, vegan: true},
  'Ägg': {price: 5, extra: true},

  Ceasardressing: {price: 5, dressing: true, lactose: true},
  Dillmayo: {price: 5, dressing: true},
  Honungsdijon: {price: 5, dressing: true, vegan: true},
  Kimchimayo: {price: 5, dressing: true},
  Pesto: {price: 5, dressing: true, lactose: true},
  Rhodeisland: {price: 5, dressing: true, lactose: true},
  'Rostad aioli': {price: 5, dressing: true},
  'Soyavinägrett': {price: 5, dressing: true, vegan: true},
  'Örtvinägrett': {price: 5, dressing: true, vegan: true},
};
 




function ShowTheText(){
  return (<div>  <h1 style={{ color: 'green' }}> Welcome to the green salad house  </h1>
    <h2 style={{ color: 'brown' }} > Here you can make your own favorit salad  </h2>  </div>)
}

              
  function Linkes(){
    return ( <div>
     <div className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav nav-pills nav-fill">
                  <li> <Link to ="/ComposeSalad"> ComposeSalad </Link> </li>
                  <li> <Link to ="/ViewOrder"> ViewOrder </Link> </li>
                
              </ul>
              </div> 
        </div>)
  }

  /*function AllPaths(){
    return ( <> 
    <Route path="/ComposeSaladModal" render={props => (
      <ComposeSalad {...props} inventory={inventory} addSalad={this.addSalad} /> )} /> 
  </>
    )
  }*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { salads: []};

    this.addSalad = this.addSalad.bind(this);
  }

  addSalad(salad) {
    // this.setState({ salads: this.state.salads.push(salad) });
    this.setState({ salads: this.state.salads.concat(salad) });
  }




   
  render() {
    
    return (


      <div>
      <Router>
          <ShowTheText/>
          <Linkes/> 
          
          <Route path="/ComposeSalad" render={params => (
      <ComposeSalad {...params} inventory={inventory} addSalad={this.addSalad}  /> )} /> 
      
      <Route path="/ViewOrder" render={params => (
      <ViewOrder {...params} inventory={inventory} salads={this.state.salads}  /> )} /> 
    
          
      </Router>
      
      
              </div>

    );
  }
}
     



export default App;







/*



 import React, { Component } from "react";
  import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
  import logo from "./logo.svg";
  import "./App.css";
  //import inventory from "./inventory.ES6";
  import ComposeSalad from "./ComposeSalad";
  import ViewSalad from "./ViewSalad";
  


  let inventory = {
    Sallad: {price: 10, foundation: true, vegan: true},
    Pasta: {price: 10, foundation: true, gluten: true},
    'Sallad + Pasta': {price: 10, foundation: true, gluten: true},
    'Sallad + Matvete': {price: 10, foundation: true, vegan: true, gluten: true},
    'Sallad + Glasnudlar': {price: 10, foundation: true, gluten: true},
    'Sallad + Quinoa': {price: 10, foundation: true, vegan: true},
  
    'Kycklingfilé': {price: 10, protein: true},
    'Rökt kalkonfilé': {price: 10, protein: true},
    'Norsk fjordlax': {price: 30, protein: true},
    'Handskalade räkor från Smögen': {price: 40, protein: true},
    'Pulled beef från Sverige': {price: 15, protein: true},
    'Marinerad bönmix': {price: 10, protein: true, vegan: true},
  
    Avocado: {price: 10, extra: true, vegan: true},
    Bacon: {price: 10, extra: true},
    'Böngroddar': {price: 5, extra: true, vegan: true},
    'Cashewnötter': {price: 5, extra: true, vegan: true},
    'Chèvreost': {price: 15, extra: true, lactose: true},
    Fetaost: {price: 5, extra: true, lactose: true},
    'Färsk koriander': {price: 10, extra: true, vegan: true},
    Gurka: {price: 5, extra: true, vegan: true},
    'Inlagd lök': {price: 5, extra: true, vegan: true},
    Jalapeno: {price: 5, extra: true, vegan: true},
    'Krossade jordnötter': {price: 5, extra: true, vegan: true},
    Krutonger: {price: 5, extra: true, gluten: true},
    'Körsbärstomater': {price: 5, extra: true, vegan: true},
    Lime: {price: 5, extra: true, vegan: true},
    Majs: {price: 5, extra: true, vegan: true},
    Oliver: {price: 5, extra: true, vegan: true},
    Paprika: {price: 5, extra: true, vegan: true},
    Parmesan: {price: 5, extra: true, lactose: true},
    'Rivna morötter': {price: 5, extra: true, vegan: true},
    'Rostade sesamfrön': {price: 5, extra: true, vegan: true},
    Ruccola: {price: 5, extra: true, vegan: true},
    'Rödlök': {price: 5, extra: true, vegan: true},
    'Sojabönor': {price: 5, extra: true, vegan: true},
    'Soltorkad tomat': {price: 5, extra: true, vegan: true},
    Tomat: {price: 5, extra: true, vegan: true},
    'Valnötter': {price: 5, extra: true, vegan: true},
    'Ägg': {price: 5, extra: true},
  
    Ceasardressing: {price: 5, dressing: true, lactose: true},
    Dillmayo: {price: 5, dressing: true},
    Honungsdijon: {price: 5, dressing: true, vegan: true},
    Kimchimayo: {price: 5, dressing: true},
    Pesto: {price: 5, dressing: true, lactose: true},
    Rhodeisland: {price: 5, dressing: true, lactose: true},
    'Rostad aioli': {price: 5, dressing: true},
    'Soyavinägrett': {price: 5, dressing: true, vegan: true},
    'Örtvinägrett': {price: 5, dressing: true, vegan: true},
  };
    

  class App extends Component {
    constructor() {
      super();
      this.state = {foundation: " " , Password: " ",error: " " };
       
     this.submit = this.submit.bind(this);
     this.handle=this.handle.bind(this);
     this.FindIt= this.FindIt.bind(this);
    }
    
    valid() {
let str = " välja ";
      if(this.state.foundation.includes("@")){
       // this.setState({error: " Invaled name "});
        console.log( this.state.error);
      // alert( " no no wait");
      }
    }
    submit(){
  if(this.valid()){
      alert ( " you have submit succesfully ");
  
    } 
  }
    Home() {
      return <p>Hello World!</p>;
    }


    FindIt(item){
      let inventory = this.props.inventory; 
      //console.log( " Foundaion is my  " + Object.keys(inventory).filter(name => inventory[name][item]))
        let foundations =  Object.keys(inventory).filter(name => inventory[name][item]);  
        //console.log(" foundations "+foundations);
    }
  
    handle(event){
      //let inventory = this.props.inventory;
      //Object.keys(inventory).filter(name => inventory[name].foundation); 
     //this.setState({foundation:event.target.value});

   
     // {(event)=>{this.setState({foundation:event.target.value})}}
    }
    render() {
      console.log(this.state.name);
      console.log(this.state.name);
      //let inventory = this.props.inventory; 
    
        let foundations =  Object.keys(inventory).filter(name => inventory[name].foundation);   

let list2 = foundations.map(name => name);
      console.log( " foundation in render " + list2);
      
      return (
    
    <>       <div className="navbar navbar-expand-lg navbar-light bg-light">
          
            <label> Foundation </label>
            <input type = "text"  onClick={this.handle()} /> 
        
            <option value = "">
            välja en 
            </option> 
          </div>

<    div className="navbar navbar-expand-lg navbar-light bg-light">
          
<label> Password  </label>
<input type = "text"  onClick={(event)=>{this.setState({Password:event.target.value})}} /> 


</div> 

<button onChange={this.submit()}> submit </button> 
     </>     
        
       
  
        /*
        <div>
          <div className="jumbotron text-center">
            <h1>My Own Salad Bar</h1>
            <p>Here you can order custom made salads!</p>
          </div>
          <ComposeSalad inventory={inventory} parentCallback={this.addSalad} />
          <br />
          <ViewSalad salads={this.state.salads} />
        </div>
        */
      
      
      /*
      /
        );
      }
    }
    
    export default App; */ 







// from lab2 
/* 
 import ComposeSalad from "./ComposeSalad";
  import ViewOrder from "./ViewOrder";
  
  
  // min new skriven code 
import React from 'react';
import logo from './logo.svg';
import './App.css';
//import inventory from "./inventory.ES6";
//import ComposeSalad from './ComposeSalad';
///import ViewOrder from './ViewOrder';
import ComposeSaladModal from './ComposeSaladModal';

let inventory = {
  Sallad: {price: 10, foundation: true, vegan: true},
  Pasta: {price: 10, foundation: true, gluten: true},
  'Sallad + Pasta': {price: 10, foundation: true, gluten: true},
  'Sallad + Matvete': {price: 10, foundation: true, vegan: true, gluten: true},
  'Sallad + Glasnudlar': {price: 10, foundation: true, gluten: true},
  'Sallad + Quinoa': {price: 10, foundation: true, vegan: true},

  'Kycklingfilé': {price: 10, protein: true},
  'Rökt kalkonfilé': {price: 10, protein: true},
  'Norsk fjordlax': {price: 30, protein: true},
  'Handskalade räkor från Smögen': {price: 40, protein: true},
  'Pulled beef från Sverige': {price: 15, protein: true},
  'Marinerad bönmix': {price: 10, protein: true, vegan: true},

  Avocado: {price: 10, extra: true, vegan: true},
  Bacon: {price: 10, extra: true},
  'Böngroddar': {price: 5, extra: true, vegan: true},
  'Cashewnötter': {price: 5, extra: true, vegan: true},
  'Chèvreost': {price: 15, extra: true, lactose: true},
  Fetaost: {price: 5, extra: true, lactose: true},
  'Färsk koriander': {price: 10, extra: true, vegan: true},
  Gurka: {price: 5, extra: true, vegan: true},
  'Inlagd lök': {price: 5, extra: true, vegan: true},
  Jalapeno: {price: 5, extra: true, vegan: true},
  'Krossade jordnötter': {price: 5, extra: true, vegan: true},
  Krutonger: {price: 5, extra: true, gluten: true},
  'Körsbärstomater': {price: 5, extra: true, vegan: true},
  Lime: {price: 5, extra: true, vegan: true},
  Majs: {price: 5, extra: true, vegan: true},
  Oliver: {price: 5, extra: true, vegan: true},
  Paprika: {price: 5, extra: true, vegan: true},
  Parmesan: {price: 5, extra: true, lactose: true},
  'Rivna morötter': {price: 5, extra: true, vegan: true},
  'Rostade sesamfrön': {price: 5, extra: true, vegan: true},
  Ruccola: {price: 5, extra: true, vegan: true},
  'Rödlök': {price: 5, extra: true, vegan: true},
  'Sojabönor': {price: 5, extra: true, vegan: true},
  'Soltorkad tomat': {price: 5, extra: true, vegan: true},
  Tomat: {price: 5, extra: true, vegan: true},
  'Valnötter': {price: 5, extra: true, vegan: true},
  'Ägg': {price: 5, extra: true},

  Ceasardressing: {price: 5, dressing: true, lactose: true},
  Dillmayo: {price: 5, dressing: true},
  Honungsdijon: {price: 5, dressing: true, vegan: true},
  Kimchimayo: {price: 5, dressing: true},
  Pesto: {price: 5, dressing: true, lactose: true},
  Rhodeisland: {price: 5, dressing: true, lactose: true},
  'Rostad aioli': {price: 5, dressing: true},
  'Soyavinägrett': {price: 5, dressing: true, vegan: true},
  'Örtvinägrett': {price: 5, dressing: true, vegan: true},
};
 


function ShowTheText(){
  return (<div>  <h1 style={{ color: 'green' }}> Welcome to the green salad house  </h1>
    <h2 style={{ color: 'brown' }} > Here you can make your own favorit salad  </h2>  </div>)
}
 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { salads: [] };

    this.addSalad = this.addSalad.bind(this);
  }

  addSalad(salad) {
    this.setState({ salads: this.state.salads.concat(salad) });
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          < ShowTheText/>
        </div>
        <ComposeSaladModal />
        
      </div>
    );
  }
}

export default App;

*/














// create with generated of lab3 
/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/ 






/*


  //import ComposeSalad from "./ComposeSalad";
  import ViewOrder from "./ViewOrder";
  import {BrowserRouter as Router , Route , Link} from "react-router-dom";
  
  // min new skriven code 
import React from 'react';
import logo from './logo.svg';
import './App.css';
//import inventory from "./inventory.ES6";
import ComposeSalad from './ComposeSalad';
///import ViewOrder from './ViewOrder';
import ComposeSaladModal from './ComposeSaladModal';

let inventory = {
  Sallad: {price: 10, foundation: true, vegan: true},
  Pasta: {price: 10, foundation: true, gluten: true},
  'Sallad + Pasta': {price: 10, foundation: true, gluten: true},
  'Sallad + Matvete': {price: 10, foundation: true, vegan: true, gluten: true},
  'Sallad + Glasnudlar': {price: 10, foundation: true, gluten: true},
  'Sallad + Quinoa': {price: 10, foundation: true, vegan: true},

  'Kycklingfilé': {price: 10, protein: true},
  'Rökt kalkonfilé': {price: 10, protein: true},
  'Norsk fjordlax': {price: 30, protein: true},
  'Handskalade räkor från Smögen': {price: 40, protein: true},
  'Pulled beef från Sverige': {price: 15, protein: true},
  'Marinerad bönmix': {price: 10, protein: true, vegan: true},

  Avocado: {price: 10, extra: true, vegan: true},
  Bacon: {price: 10, extra: true},
  'Böngroddar': {price: 5, extra: true, vegan: true},
  'Cashewnötter': {price: 5, extra: true, vegan: true},
  'Chèvreost': {price: 15, extra: true, lactose: true},
  Fetaost: {price: 5, extra: true, lactose: true},
  'Färsk koriander': {price: 10, extra: true, vegan: true},
  Gurka: {price: 5, extra: true, vegan: true},
  'Inlagd lök': {price: 5, extra: true, vegan: true},
  Jalapeno: {price: 5, extra: true, vegan: true},
  'Krossade jordnötter': {price: 5, extra: true, vegan: true},
  Krutonger: {price: 5, extra: true, gluten: true},
  'Körsbärstomater': {price: 5, extra: true, vegan: true},
  Lime: {price: 5, extra: true, vegan: true},
  Majs: {price: 5, extra: true, vegan: true},
  Oliver: {price: 5, extra: true, vegan: true},
  Paprika: {price: 5, extra: true, vegan: true},
  Parmesan: {price: 5, extra: true, lactose: true},
  'Rivna morötter': {price: 5, extra: true, vegan: true},
  'Rostade sesamfrön': {price: 5, extra: true, vegan: true},
  Ruccola: {price: 5, extra: true, vegan: true},
  'Rödlök': {price: 5, extra: true, vegan: true},
  'Sojabönor': {price: 5, extra: true, vegan: true},
  'Soltorkad tomat': {price: 5, extra: true, vegan: true},
  Tomat: {price: 5, extra: true, vegan: true},
  'Valnötter': {price: 5, extra: true, vegan: true},
  'Ägg': {price: 5, extra: true},

  Ceasardressing: {price: 5, dressing: true, lactose: true},
  Dillmayo: {price: 5, dressing: true},
  Honungsdijon: {price: 5, dressing: true, vegan: true},
  Kimchimayo: {price: 5, dressing: true},
  Pesto: {price: 5, dressing: true, lactose: true},
  Rhodeisland: {price: 5, dressing: true, lactose: true},
  'Rostad aioli': {price: 5, dressing: true},
  'Soyavinägrett': {price: 5, dressing: true, vegan: true},
  'Örtvinägrett': {price: 5, dressing: true, vegan: true},
};
 


function ShowTheText(){
  return (<div>  <h1 style={{ color: 'green' }}> Welcome to the green salad house  </h1>
    <h2 style={{ color: 'brown' }} > Here you can make your own favorit salad  </h2>  </div>)
}
 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { salads: [] };

    this.addSalad = this.addSalad.bind(this);
  }

  addSalad(salad) {
    this.setState({ salads: this.state.salads.concat(salad) });
  }

  render() {
    return (


      <div>
      <Router>
          
          <div className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav nav-pills nav-fill">
                  <li> <Link to ="/ComposeSaladModal"> ComposeSalad </Link> </li>
                  <li> <Link to ="/ViewOrder"> ViewOrder </Link> </li>
                
              </ul>
           
              <Route path="/ComposeSaladModal" render={props => (
              <ComposeSalad {...props} inventory={inventory} addSalad={this.addSalad}  /> )} />
                 <Route path="/ViewOrder" exact render={props => ( <ViewOrder {...props} salads={this.state.salads} />
            )}
          />
          </div>
      
          
      </Router>
      
      
              </div>

    );
  }
}


export default App;

*/ 