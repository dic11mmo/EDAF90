  
   // min new skriven code 
   import React from 'react';
   import logo from './logo.svg';
   import './App.css';
   //import inventory from "./inventory.ES6";
   
   ///import ViewOrder from './ViewOrder';
   import ComposeSaladModal from './ComposeSaladModal';
   
   import ComposeSalad from "./ComposeSalad";
   import ViewOrder from "./ViewOrder";
   import Salad from "./Salad";
   import {BrowserRouter as Router , Route , Link} from "react-router-dom"; 
 
 

  
 
 
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
 

  
   
 class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = { salads: [], inventory:{}};
     
 
     this.addSalad = this.addSalad.bind(this);
    // this.props.createSalad= this.props.createSalad.bind(this);

    this.componentDidMount = this.componentDidMount.bind(this);
      //this.componentWillMount = this.componentWillMount.bind(this);
      this.findTheURL =this.findTheURL.bind(this);
      this.postReq = this.postReq.bind(this);
      this.localOrders = this.localOrders.bind(this);
  }

 

   findTheURL(urls){
    var inven = {};

    Promise.all(urls.map(url =>  {
      return fetch( 'http://localhost:8080/'+url)
      .then(response => response.json())
      
      .then(items => {
        return Promise.all(items.map(item => {
          return fetch('http://localhost:8080/'+url+'/'+item)
          .then(response=> response.json())
          .then( contents => inven[item]=contents )
          .then(() => this.setState({inventory:inven}));
      
        }))
      })
    }))

    
   }
   
 

   
   postReq( url = '' , mysalad = {}){
   
    fetch(url, {
      method: 'post',
      body: JSON.stringify(mysalad)
    })
    .then(respose=> console.log(respose.json()))

  

  }
  
  localOrders(){
   // window.localStorage.clear();
 const saladInLocalStorage= JSON.parse(window.localStorage.getItem("salads") || "[]" );
 console.log(" viuuuvu"+ Object.values(saladInLocalStorage))
 console.log(" viuuuvu  "+ saladInLocalStorage)
 
    if(saladInLocalStorage!=null){
     saladInLocalStorage.forEach(order => Object.setPrototypeOf(order, Salad.prototype))
      //Object.setPrototypeOf(this.state.salads, Salad)
      this.setState({salads:saladInLocalStorage});
        
      }
    }
  
 
   addSalad(salad) {
     //this.setState({ salads: this.state.salads.push(salad) });
     let newSallads = [...this.state.salads, salad]

     
    
     this.setState({ salads: newSallads});
     
      window.localStorage.setItem("salads", JSON.stringify(newSallads))

      //window.localStorage.setItem("salads", Object.values(salad))

   this.postReq('http://localhost:8080/orders/',salad )
   }
 
 
 
   componentDidMount(){

    var urls= [ "foundations" , "proteins","extras", "dressings"];
    this.findTheURL(urls);
   this.localOrders();

  

   
   }
    
   render() {
   
   // console.log(" inventory is " + JSON.stringify(this.state.inventory));

 
     return (
   
 
       <div>
       <Router>
           <ShowTheText/>
           <Linkes/> 
        
         <Route path="/ComposeSalad" render={props => (
       <ComposeSalad {...props} inventory={this.state.inventory} addSalad={this.addSalad}  /> )} /> 
       
       <Route path="/ViewOrder" render={props => (
       <ViewOrder {...props} inventory={this.state.inventory} salads={this.state.salads}  /> )} />

       
     
     
           
       </Router>
      
     
               </div>
 
     );
   }
 }
      
 
 
 
 export default App; 
  
  
  















 
/* lab3 
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

  

  /*return Promise.all(requests).then(responses => {
        Promise.all(responses.map(r => r.json())).then(details => {
          let result= {}
          data.forEach((d, i) => result[d]=details[i])
          this.setState({inventory: {...this.state.inventory, ...result}})
        })
      })*/
      /// 
      /* 
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
 


componenetDidMount(){

  const url= "http://localhost:8080/foundations/";
  const response= fetch(url);
  const data = response.json();
}

function ShowTheText(){
  return (<div>  <h1 style={{ color: 'green' }}> Welcome to the green salad house  </h1>
    <h2 style={{ color: 'brown' }} > Here you can make your own favorit salad  </h2>  </div>)
}

              
 



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
          
          <Route path="/ComposeSalad" render={props => (
      <ComposeSalad {...props} inventory={inventory} addSalad={this.addSalad}  /> )} /> 
      
      <Route path="/ViewOrder" render={props => (
      <ViewOrder {...props} inventory={inventory} salads={this.state.salads}  /> )} /> 
    
          
      </Router>
      
      
              </div>

    );
  }
}
     



export default App; */ 








/*

  this.fetchFindbyItem=this.fetchFindbyItem.bind(this);
    this.fetchFindbyType = this.fetchFindbyType.bind(this);
    this.objectFlatter =  this.objectFlatter.bind(this);
    this.fetchInventory  =   this.fetchInventory.bind(this);

   }

   objectFlatter(data){

    let list = data.reduce((acc, curr)=>{
       return { ...curr, ...acc};

     }, {});
     console.log( " objectflatter" + list);
  return list;
   }

      fetchFindbyItem( type, item){
        fetch('http://localhost:8080/${type}/${item}')
        .then(res => res.json())
        .then(data => ({[item]:data} ));
        console.log(" Item is " + item)
        
      }

fetchFindbyType(type, item ){
  return  fetch('http://localhost:8080/${type}/${item}')
  .then(res => res.json())
  .then(data =>  this.setState({inventory: Promise.all(data.map(item => fetch('http://localhost:8080/${type}/${item}')))}))
    // this.setState({inventory:data})
  console.log(" inventroy " + this.state.inventory);
 
 // .then(data => this.objectFlatter( data))

}
fetchInventory(){
  const types  = [ "foundations" , "proteins", "extra","dressing"] ;
  Promise.all(types.map(type=> this.fetchFindbyType(type)))
  .then(data => this.objectFlatter(data))
  .then(inventory=> this.setState({inventory}));
  console.log("fetchInventory " + this.state.inventory);
}

findthem(type, item){
 console.log("findthem "+
 this.fetchFindbyType(type, item ))
}

*/



/* 


 componentDidMount(){

    var urls= [ "foundations" , "proteins","extras", "dressings"];
    this.findTheURL(urls);
  





    /*fetch('http://localhost:8080/foundations/')
    .then(response => response.json())
    .then(data => {

      let dressings = data.map(name => name)
     
      this.setState({inventory:dressings})
      //console.log(" Inventory " + this.state.inventory);

   */

   /* fetch('http://localhost:8080/foundations/')
    .then(response => response.json())
    .then(data => {
 let requests = data.map(name=>fetch('http://localhost:8080/foundations/${name') )
 console.log(" requests is " + requests);
return Promise.all(requests)

.then(responses => {Promise.all(responses.map(r=> r.json()))
  //console.log(" responses is " + responses)
.then(details => {
  let result = {}
  data.forEach((d,i) =>  result[d]= details[i] )
  //console.log(" result[d] is " + result)
  this.setState({inventory:  {... this.state.inventory, ...result}     
   
   
    
  });
})

})
 let dressings = data.map(name => name)
     
      this.setState({inventory:dressings})
      //console.log(" Inventory " + this.state.inventory);
      
      
      
      
  
      })
      .catch( r => console.log(r));



     /* fetch('http://localhost:8080/proteins/')
      .then(response => response.json())
      .then(data => {
   
        let dressings = Object.values(data.map(name =>  fetch('http://localhost:8080/proteins/[name]')))
        console.log(" dressings" + dressings);
        let obj = this.state.inventory + " \n  " +  " \n  " + dressings;
        this.setState({inventory:obj})
       console.log(" Inventory " + this.state.inventory);
          
      })
      .catch( r => console.log(r)); */
/*
      fetch('http://localhost:8080/proteins/')
      .then(response => response.json())
      .then(data => {
        let requests = data.map(name => fetch(`http://localhost:8080/proteins/${name}`))
       
       /* return Promise.all(requests).then(responses => {
          Promise.all(responses.map(r => r.json()))
          .then(details => {
            let result= {}
            console.log("result[d]" + Object.keys(details)); 
            data.forEach((d, i) => {result[d]=details[i]})
           
            this.setState({inventory: {...this.state.inventory, ...result}})
           
          })
        })*/
       /* })
/*
      fetch('http://localhost:8080/extras/')
      .then(response => response.json())
      .then(data => {
   
        let dressings = data.map(name => name)
        let obj = this.state.inventory + " \n  " +  " \n  " + dressings;
        this.setState({inventory:obj})
        //console.log(" Inventory " + this.state.inventory);
          
      })
      .catch( r => console.log(r)); 
      fetch('http://localhost:8080/dressings/')
      .then(response => response.json())
      .then(data => {
   
        let dressings = data.map(name => name)
        let obj = this.state.inventory + " \n  " +  " \n  " + dressings;
        this.setState({inventory:obj})
        console.log(" Inventory " + this.state.inventory);
          
      })
      .catch( r => console.log(r)); */
   
    //}



/// asfasfas,öfasfasjpfjaofjasofjsapfjasfpPFÅ
    /*
  
   // min new skriven code 
   import React from 'react';
   import logo from './logo.svg';
   import './App.css';
   //import inventory from "./inventory.ES6";
   
   ///import ViewOrder from './ViewOrder';
   import ComposeSaladModal from './ComposeSaladModal';
   
   import ComposeSalad from "./ComposeSalad";
   import ViewOrder from "./ViewOrder";
   import Salad from "./Salad";
   import {BrowserRouter as Router , Route , Link} from "react-router-dom"; 
 
 

  
 
 
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
 

  
   
 class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = { salads: [], inventory:{}};
     
 
     this.addSalad = this.addSalad.bind(this);
    // this.props.createSalad= this.props.createSalad.bind(this);

    this.componentDidMount = this.componentDidMount.bind(this);
      //this.componentWillMount = this.componentWillMount.bind(this);
      this.FindIT =this.FindIT.bind(this);
      this.postReq = this.postReq.bind(this);
      this.localOrders = this.localOrders.bind(this);
  }

 

   FindIT(urls){
    var inven = {};

    Promise.all(urls.map(url =>  {
      return fetch( 'http://localhost:8080/'+url)
      .then(response => response.json())
      
      .then(items => {
        return Promise.all(items.map(item => {
          return fetch('http://localhost:8080/'+url+'/'+item)
          .then(response=> response.json())
          .then( contents => inven[item]=contents )
          .then(() => this.setState({inventory:inven}));
      
        }))
      })
    }))

    
   }
   
 

   
   postReq( url = '' , mysalad = {}){
   
    fetch(url, {
      method: 'post',
      body: JSON.stringify(mysalad)
    })
    .then(respose=>respose.json())

  

  }
  
  localOrders(){
   
 const salads= JSON.parse(window.localStorage.getItem("salads"));
    if(salads !=null){
      salads.forEach(order => Object.setPrototypeOf(order, Salad))
      this.setState({salads});
        
      }
    }
  
 
   addSalad(salad) {
     // this.setState({ salads: this.state.salads.push(salad) });
     const allaSalads =this.setState({ salads: this.state.salads.concat(salad) });
      window.localStorage.setItem("salads", JSON.stringify(allaSalads))

     this.postReq('http://localhost:8080/orders/',salad )
   }
 
 
 
   componentDidMount(){

    var urls= [ "foundations" , "proteins","extras", "dressings"];
    this.FindIT(urls);
    this.localOrders();

  

   
   }
    
   render() {
   
   // console.log(" inventory is " + JSON.stringify(this.state.inventory));

 
     return (
   
 
       <div>
       <Router>
           <ShowTheText/>
           <Linkes/> 
        
         <Route path="/ComposeSalad" render={props => (
       <ComposeSalad {...props} inventory={this.state.inventory} addSalad={this.addSalad}  /> )} /> 
       
       <Route path="/ViewOrder" render={props => (
       <ViewOrder {...props} inventory={this.state.inventory} salads={this.state.salads}  /> )} />

       
     
     
           
       </Router>
      
     
               </div>
 
     );
   }
 }
      
 
 
 
 export default App; 


    */