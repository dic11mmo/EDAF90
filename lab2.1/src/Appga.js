


import React from 'react';
import logo from './logo.svg';
import './App.css';
import inventory from './inventory.ES6';
import ComposeSalad from './ComposeSalad';
//import ViewOrder from './ViewOrder';
//import ComposeSaladModal from './ComposeSaladModal';
//<ComposeSalad inventory={this.props.inventory}/>

function ShowTheText(){
  return (<div>  <h1 style={{ color: 'green' }}> Welcome to the green salad house  </h1>
    <h2 style={{ color: 'brown' }} > Here you can make your green salad  </h2>  </div>)
}

class App extends React.Component {
  render( ){ 
  return (<div> 
  <ShowTheText />
  
  <ComposeSalad inventory={this.props.inventory}/>
    </div>

   
  );
}
}

export default App;
