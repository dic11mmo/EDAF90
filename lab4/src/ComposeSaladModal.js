

import React from "react";
import ComposeSalad from "./ComposeSalad";
 import ViewOrder from "./ViewOrder";

class ComposeSaladModal extends React.Component {

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
       <button
         type="button"
         className="btn btn-primary"
         data-toggle="modal"
         data-target="#ComposeSaladModal"
    >
         Komponera din egen sallad
       </button>
       <div
         className="modal fade"
         id="ComposeSaladModal"
         tabIndex="-1"
         role="dialog"
         aria-labelledby="composeSaladModalModalLabel"
         aria-hidden="true"
>
         <div className="modal-dialog" role="document">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="composeSaladModalModalLabel">
                 Komponera din egen sallad
               </h5>
               <button
                 type="button"
                 className="close"
                 data-dismiss="modal"
                 aria-label="Close"
>
                 <span aria-hidden="true">&times; </span>
               </button>
             </div>
             <div className="modal-body">

               
             <ComposeSalad inventory={this.props.inventory} addSalad={this.addSalad} />
           
        <ViewOrder salads={this.state.salads} />
             </div>
             <div className="modal-footer">
               <button
                 type="button"
                 className="btn btn-secondary"
                 data-dismiss="modal"
>
                 Stäng fönstret
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
}

export default ComposeSaladModal;
