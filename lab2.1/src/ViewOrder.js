


import React from "react";
// https://www.w3schools.com/tags/tag_thead.asp 
/*
function saladall(){
    return salad.foundation.concat( salad.protein, salad.extra, salad.dressing);
}*/
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




/*
import React, { Component } from 'react';
class ViewIngredient extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
    const inventory = this.props.inventory;
    const ingredient = this.props.ingredient;
        return (
            <div  class="p-3 mb-2 bg-white text-dark">
                <p className="lead">
                    
                </p>
            
            </div>
        )
    }

}
export default ViewIngredient;*/