


import React , { Component } from "react"; 


function ShowText(){
    return (<div>  <h1 style={{ color: 'green' }}> welcome to salad bar we are so happy to have u   </h1>
      <h2 style={{ color: 'brown' }} > lab3  </h2>  </div>)
  } 
class About extends Component{
    render(){
        return(
 <div>
     
  <ShowText/> 

 </div>


        )
    }
}

export default About;

