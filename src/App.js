import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';

import React, { Component } from 'react'


export class App extends Component {
  render() {
    return (
      
         <>
        <Navbar />

          <div className="container">
            
            <News /> 
                  
          </div>

    </>
    )
  }
}

export default App
