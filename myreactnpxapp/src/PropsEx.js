import React from 'react';

function PropsEx(props){
  
  return ( <div> 
       <h1> Hello this is an example of props as a function in separate file  </h1>
      <h1> Hello, { props.name} </h1>
  <h1> your Id is { props.id } </h1> 
  <h1> your address is { props.address} </h1>
  <h1> your town is { props.town } </h1>
  <h1> your telfonnbr is { props.tel } </h1> 

  </div>)
} 





export default PropsEx;