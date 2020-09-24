import React ,{Component ,Fragment} from 'react';
 import PropTypes from 'prop-types';

 // we are using propTypes to specify type of values for ex name should be string 
 // telphon nbr should be a nbr ... ect 
// https://www.npmjs.com/package/prop-types 

 // https://www.youtube.com/watch?v=UhIUt-qA1Wk&list=PLUVqY59GNZQNTlOnGne0G7DXnmi7CeOtc&index=9
 // we can use <React.Fragment> </React.Fragment> instead of <div></div>
// WE CAN ALSO import {Fragment } from 'react'; and we can write <Fragment> instead of <React.Fragment>
// eller instead of <React.Fragment> </React.Fragment> we can simply write < >  </> empty 
 class ExampleState extends Component{ 
  
    // We can write state in two ways 
    // 1. through the constructor using this.state

    constructor(props){

        super(props);
       this.state={
        name: this.props.name,
        id: this.props.id,
        address:this.props.address,
        town: this.props.town ,
        tel: this.props.tel ,
        count :0

        } 

        this.clickme= this.clickme.bind(this);
        this.clickmetoDraw= this.clickmetoDraw.bind(this);
    }

   
  clickme(){ 
      
      let count= this.state.count;
      // setState({what to change : how to change})
      this.setState( { count:++count});
  }   


  clickmetoDraw(){
      let count= this.state.count;
      // setState({what to change : how to change})
      this.setState( { count:count-1});
  }


    render(){
        return (<Fragment>
             <h1> Hello this is an example of state as a class in separate file name should be string </h1>
             <h1> Your name is , { this.state.name} </h1>
            <h1> your Id is { this.state.id } </h1> 
            <h1> your address is { this.state.address} </h1>
            <h1> your town is { this.state.town } </h1>
            <h1> your telfonnbr is { this.state.tel } </h1> 
            <h1> count is { this.state.count } </h1> 
            <p> Salad 15 kr</p> 
            <button  onClick= {this.clickme}>Click to count </button>
          
           <br>
           
           </br>
          
            <button onClick= {this.clickmetoDraw}>Click to decreas </button> 
            
            <h1> Child class </h1>  
            <StateExChild name = " Danile" lastname= " Nilsson"/>
            </Fragment>)
    }



    // 2. or outside of constructor or without using constructor and this.
    /*
    
    state={
        name: this.props.name,
        id: this.props.id,
        address:this.props.address,
        town: this.props.town ,
        tel: this.props.tel ,
        count :0

    } 
      clickme= this.clickme.bind(this);
      clickmetoDraw= this.clickmetoDraw.bind(this);
    clickme(){ 
        
        let count= this.state.count;
        // setState({what to change : how to change})
        this.setState( { count:++count});
    }   


    clickmetoDraw(){
        let count= this.state.count;
        // setState({what to change : how to change})
        this.setState( { count:count-1});
    }
  
    render(){
        return (<Fragment>
             <h1> Hello this is an example of state as a class in separate file name should be string </h1>
             <h1> Your name is , { this.state.name} </h1>
            <h1> your Id is { this.state.id } </h1> 
            <h1> your address is { this.state.address} </h1>
            <h1> your town is { this.state.town } </h1>
            <h1> your telfonnbr is { this.state.tel } </h1> 
            <h1> count =  { this.state.count } </h1> 
            <button onClick= {this.clickme}>Click to count </button>
           <br>
           
           </br>
          
            <button onClick= {this.clickmetoDraw}>Click to decreas </button> 
            <h1> Child class </h1>  
            <StateExChild name = " Danile" lastname= " Nilsson"/>
            </Fragment>)
    } */




}

class StateExChild extends React.Component{ 
    render(){
        return (<div> 
            <h1> Your inside child class </h1>
            <h1> Your name is{ this.props.name} </h1>
            <h1> Your last name is{ this.props.lastname} </h1>

        </div>)
    }

} 

// https://www.npmjs.com/package/prop-types 
/// name:PropTypes.string.isRequired  is in case if we dont want blank or empty text
/*StateEx.propTypes={
    name:PropTypes.string,
  id:PropTypes.number.isRequired, // means id should be nbr like id={ 45335 }
} */


export default ExampleState; 