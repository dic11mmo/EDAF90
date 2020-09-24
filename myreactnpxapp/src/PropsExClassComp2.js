 
 import React from 'react';
 import PropTypes from 'prop-types';

 // we are using propTypes to specify type of values for ex name should be string 
 // telphon nbr should be a nbr ... ect 
// https://www.npmjs.com/package/prop-types 

 // https://www.youtube.com/watch?v=UhIUt-qA1Wk&list=PLUVqY59GNZQNTlOnGne0G7DXnmi7CeOtc&index=9
 // we can use <React.Fragment> </React.Fragment> instead of <div></div>
// WE CAN ALSO import {Fragment } from 'react'; and we can write <Fragment> instead of <React.Fragment>
// eller instead of <React.Fragment> </React.Fragment> we can simply write < >  </> empty 
 class PropsExClassComp2 extends React.Component{ 

constructor(props){

        super(props);
       this.state={
            name: this.props.name,
            id: this.props.id,
            address: this.props.address,
            town: this.props.town ,
            tel:this.props.tel ,
            count :0

        } 

        this.clickme= this.clickme.bind(this);
        this.clickmetoDraw= this.clickmetoDraw.bind(this);
    }

    clickme(){ 
        
        let count= this.state.count;
        // setState({what to change : how to change})
        this.setState( { count:count+1});
    }
    clickmetoDraw(){
        let count= this.state.count;
        // setState({what to change : how to change})
        this.setState( { count:count-1});
    }

    render(){
        return (<>
             <h1> Hello this is an example of state as a class in separate file name should be string </h1>
             <h1> Your name is , { this.state.name} </h1>
            <h1> your Id is { this.state.id } </h1> 
            <h1> your address is { this.state.address} </h1>
            <h1> your town is { this.state.town } </h1>
            <h1> your telfonnbr is { this.state.tel } </h1> 
            <h1> see in myreactnpxapp PropsExClassComp2 </h1> 
            <h1> count is { this.state.count } </h1> 
            <button onClick= {this.clickme}>Click to count </button>
           <br>
           
           </br>
          
            <button onClick= {this.clickmetoDraw}>Click to decreas </button> 
            
            <h1> Child class </h1>  
            <PropsExClassCompChild name = " Danile" lastname= " Nilsson"/>
            </>)
    }
 // 2 state example 
     /* state= {
        name: this.props.name,
        id= this.props.id,
        address= this.props.address,
        town= this.props.town ,
        tel= this.props.tel ,
        count = 0

     }
    render(){
        return (<React.Fragment>
             <h1> Hello this is an example of props as a class in separate file name should be string </h1>
             <h1> Your name is , { this.state.name} </h1>
            <h1> your Id is { this.state.id } </h1> 
            <h1> your address is { this.state.address} </h1>
            <h1> your town is { this.state.town } </h1>
            <h1> your telfonnbr is { this.state.tel } </h1> 
            <h1> Child class </h1>  
            <PropsExClassCompChild name = " Patrik" lastname= " Nilsson"/>
            </React.Fragment>)
    }*/

/// Props example without State
    /*render(){
        return (<React.Fragment>
             <h1> Hello this is an example of props as a class in separate file name should be string </h1>
             <h1> Your name is , { this.props.name} </h1>
            <h1> your Id is { this.props.id } </h1> 
            <h1> your address is { this.props.address} </h1>
            <h1> your town is { this.props.town } </h1>
            <h1> your telfonnbr is { this.props.tel } </h1> 
            <h1> Child class </h1>  
            <PropsExClassCompChild name = " Patrik" lastname= " Nilsson"/>
            </React.Fragment>)
    }*/
}

class PropsExClassCompChild extends React.Component{ 
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
PropsExClassComp2.propTypes={
    name:PropTypes.string,
  id:PropTypes.number.isRequired, // means id should be nbr like id={ 45335 }
} 


export default PropsExClassComp2; 