import React, { Component } from 'react'

class ViewOrder extends Component {
    constructor(props){
        super(props)
        this.state={displayOrder: false, currentOrder: []}
        this.newOrder= this.newOrder.bind(this)
        this.postOrder = this.postOrder.bind(this)
    }

    newOrder(event){
        this.setState({displayOrder: true, currentOrder: this.props.list})
        this.props.removeOrder()
    }

    postOrder(){
        if(this.state.displayOrder){
            return this.state.currentOrder.map((order) => {
                return <div key={order.id}>
                    <label>{order.foundation + ',' + order.protein + ',' + order.extra + ',' + order.dressing}</label>
                </div>
            })
        }
    }
    
    render(){
        return (
        <div>
            <button className="btn btn-primary" onClick={this.newOrder}>Create order</button>
            { this.postOrder()
            }
        </div>
        )
    }
}

export default ViewOrder
/*
import React, { Component } from 'react'; 

class ViewOrder extends Component {

    render() {
      return (
    <div className="container">
        <div>
          <h4 id="r2">{"Antal ordrar: "+ this.props.inputSalad.length}</h4>
        </div>
        <div className="list-group">
         <ol id="orders">
          {this.props.inputSalad.map(s => 
            <li key={this.props.inputSalad.indexOf(s)} className='list-group-item clearfix' >{s.print()}<button type='button' className='btn btn-danger' onClick={() => this.props.handleSaladRemove(s)}>Ta bort sallad</button></li>)}
        </ol>
        </div>  
        <div>
        <button type='button' className='btn btn-primary' onClick={() => this.props.submitOrder()}>Skicka beställning</button>
        </div>
    </div>
      )
    }
}

export default ViewOrder;*/