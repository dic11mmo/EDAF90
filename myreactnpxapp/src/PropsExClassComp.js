 
 import React from 'react';
 // or props as class component 

 // https://www.youtube.com/watch?v=29uJmmiaQyM&list=PLUVqY59GNZQNTlOnGne0G7DXnmi7CeOtc&index=8 

 class PropsExClassComp extends React.Component{ 

    render(){
        return ( <div>
             <h1> Hello this is an example of props as a class in separate file </h1>
             <h1> Your name is , { this.props.name} </h1>
            <h1> your Id is { this.props.id } </h1> 
            <h1> your address is { this.props.address} </h1>
            <h1> your town is { this.props.town } </h1>
            <h1> your telfonnbr is { this.props.tel } </h1> 
            <h1> Child class </h1>  
            <PropsExClassCompChild name = " Patrik" lastname= " Nilsson"/>
            </div>)
    }
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

    export default PropsExClassComp; 