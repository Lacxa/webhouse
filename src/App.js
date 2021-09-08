import React from 'react';
import './App.css';
import Card from './components/Card';
import './components/Card.css';
import Greet from './components/Greet';


function app() {
   
    return (

      <div class='app'>
          <Greet/>
          <Card />
        </div>
      
    );
}


export default app;
