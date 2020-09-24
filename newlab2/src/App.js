
 

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
        <ComposeSaladModal inventory= { this.inventory} />
      
             
        
      </div>
    );
  }
}

export default App;

/*
function ShowTheText(){
  return (<div>  <h1 style={{ color: 'green' }}> Welcome to the green salad house  </h1>
    <h2 style={{ color: 'brown' }} > Here you can make your own favorit salad  </h2>  </div>)
}




//<ListOfSalad /> 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={ order:[]
      
    };
    this.addSalad = this.addSalad.bind(this);

  }


   addSalad(mysalad){
    this.state.order.push(mysalad)
    console.log("salad addsalad fuction ok app comp ");
  
  
  } 


  render( ){ 
    return (<div> 
  <ShowTheText />
  <ComposeSalad inventory={inventory} addSalad={this.addSalad} />
    </div>

   
  );
}
}
 
*/