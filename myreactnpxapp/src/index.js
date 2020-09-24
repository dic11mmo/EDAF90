
import React from 'react';
import ReactDOM from 'react-dom';
import CreatClassCompFooter from './CreatClassCompFooter';
import CreateFirstComponentHeader from './CreateFirstComponentHeader';
import PropsEx from './PropsEx';
import PropsExClassComp from './PropsExClassComp';
import PropsExClassComp2 from './PropsExClassComp2';

// state example 
 import ExampleState from './ExampleState';
/*ReactDOM.render(<div> 
   <header> Tutorial </header>
   <h1>Hello, world!</h1>
   <h2> Today is a good day </h2>
    </div> ,
   document.getElementById('root')
  
 );*/
 // Functional Component and class component examples
  function PrintIt(){
     
      return <h1> Hello everyone this is functional component example </h1>
  }

  function PrintIt2(){
   return <h1> I hope you enjoy </h1>
} 
// testing functional component PrintIt , PrintIt2
 /* ReactDOM.render(<div>
  <PrintIt/> <PrintIt2/> </div>,
   document.getElementById('root')
  
 );  */

 // class component redering() muste used in class componenet 
class PrintIt3 extends React.Component{
   render(){
       return <h1> Hello everyone this is class component example.</h1>;
   }
} 
// Testing class componenet 
 
/*ReactDOM.render(<PrintIt3/>,
    document.getElementById('root')
   
  );*/

  const PrintIt4=()=>{
   return <h1> Hello everyone this is PrintIt4=()=> result </h1>
} 

  /// Testing using div to test all four PrintIt together

 /*ReactDOM.render(<div>
  <PrintIt/> <PrintIt2/> <PrintIt3/> <PrintIt4/></div>,
   document.getElementById('root')
  
 ); */

 // Test class CreatClassCompFooter separete file 
 
 /*ReactDOM.render(<CreatClassCompFooter/>,
  document.getElementById('root')
 
);*/ 

/// to print out both so we need to write a function 

function PrintBoth(){
  return (<div> 
    <CreatClassCompFooter/> <CreateFirstComponentHeader/>
      </div>)
}

/*ReactDOM.render(<PrintBoth/>,
  document.getElementById('root')
 
); */

// props  example in same file 


/*function PropsExa(props){
  
  return ( <div> <h1> Hello, { props.name} </h1>
  <h1> your Id is { props.id } </h1> 
  <h1> your address is { props.address} </h1>
  <h1> your town is { props.town } </h1>
  </div>)
}*/
 // other varient of PropsExa( props )

/*const PropsExa =(props)=>{
  
  return ( <div> <h1> Hello, { props.name} </h1>
  <h1> your Id is { props.id } </h1> 
  <h1> your address is { props.address} </h1>
  <h1> your town is { props.town } </h1>
  </div>)
}*/ 

/*ReactDOM.render(<PropsExa name=" Mohammad Zafar" id= "101" address= " Per Albin Hanssonsväg 52 b " town =" Malmö"  />,
  document.getElementById('root')
 
); */

// props  example in separate file as a function 


/*ReactDOM.render(<PropsEx name=" Mohammad Zafar" id= "101" address= " Per Albin Hanssonsväg 52 b " town =" Malmö" tel= " 92296262"  />,
  document.getElementById('root')
 
); */

// props  example in separate file as a class 


/*ReactDOM.render(<PropsExClassComp name=" Mohammad Zafar" id= "101" address= " Per Albin Hanssonsväg 52 b " town =" Malmö" tel= " 92296262" />,
  document.getElementById('root')
 
);*/

// PropsExClassComp2 example aviod nbr in name it should be String 
/*ReactDOM.render(<PropsExClassComp2 name="Zafar" id= {101} address= " Per Albin Hanssonsväg 52 b " town =" Malmö" tel= " 92296262" />,
  document.getElementById('root')
 
);*/


/// State Examples 
ReactDOM.render(<ExampleState name="Zafar" id= {101} address= " Per Albin Hanssonsväg 52 b " town =" Malmö" tel= " 92296262" />,
  document.getElementById('root')
 
);






/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/
