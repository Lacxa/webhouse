import React from 'react';
import './App.css';
import './components/card';
import './components/card.css';
import Greet from './components/Greet';
import Head from './components/Head';

function app() {
   
    return (

      <div class='app'>
          <Greet/>
          <Head />
        </div>
      
    );
}


export default app;
