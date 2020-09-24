
import React, { Component } from 'react';
import './App.css';

import inventory from './inventory.ES6';
import ComposeSalad from "./ComposeSalad";
import ComposeSaladModel from './ComposeSaladModel';

class App extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>My Own Salad Bar</h1>
                    <p>Here you can order custom made salads!</p>
                </div>
                <div>
                    <ComposeSalad inventory={inventory} />
                </div>
                

            </div>
        );
    }
}

export default App;







/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
