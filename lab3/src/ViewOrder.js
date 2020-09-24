
import React, { Component } from "react";
// https://www.w3schools.com/tags/tag_thead.asp 



class ViewOrder extends Component{
  constructor(props) {
    super(props);

    
  }

 
  render(){

  return(
    <div className="container">
    <h3>Your order is  </h3>
    <table className="table">
      <thead>
        <tr>
        
          <th   >id_nbr</th>
          <th   >Price</th>
          <th   >Foundation</th>
          <th   >Protein</th>
          <th   >Extras</th>
          <th   >Dressing</th>
         
          
        </tr>
       
      </thead>
      <tbody>
        {this.props.salads.map((salad, id) => (
          <tr key={id}>
            <th scope="row">{id + 1}</th>
            <td>{salad.totalPrice}</td>
            <td>{salad.foundation}</td>
            <td>{salad.protein + " , "}</td>
            <td>{salad.extra + " , "}</td>
            <td>{salad.dressing}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
);
        }
      }
export default ViewOrder;




/*import React from "react";
// https://www.w3schools.com/tags/tag_thead.asp 
/*
function saladall(){
    return salad.foundation.concat( salad.protein, salad.extra, salad.dressing);
}*/

/*
const ViewOrder = props => (
  <div className="container">
    <h3>Your order is  </h3>
    <table className="table">
      <thead>
        <tr>
        
          <th   >id_nbr</th>
         
          <th   >Foundation</th>
          <th   >Protein</th>
          <th   >Extras</th>
          <th   >Dressing</th>
         
          
        </tr>
       
      </thead>
      <tbody>
        {props.salads.map((salad, id) => (
          <tr key={id}>
            <th scope="row">{id + 1}</th>
         
            <td>{salad.foundation}</td>
            <td>{salad.protein + " , "}</td>
            <td>{salad.extra + " , "}</td>
            <td>{salad.dressing}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ViewOrder;


 /// with price 
/* 
const ViewOrder = props => (
  <div className="container">
    <h3>Your order is  </h3>
    <table className="table">
      <thead>
        <tr>
        
          <th   >id_nbr</th>
          <th   > TotaltPrice  </th>  
          <th   >Foundation</th>
          <th   >Protein</th>
          <th   >Extras</th>
          <th   >Dressing</th>
         
          
        </tr>
       
      </thead>
      <tbody>
        {props.salads.map((salad, id) => (
          <tr key={id}>
            <th scope="row">{id + 1}</th>
            <th   > {salad.totaltPrice } </th> 
            <td>{salad.foundation}</td>
            <td>{salad.protein + " , "}</td>
            <td>{salad.extra + " , "}</td>
            <td>{salad.dressing}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ViewOrder;
 
*/ 
