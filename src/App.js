import React from 'react';
import './App.css';
import Card from './components/Card';
import './components/Card.css';
import Greet from './components/Greet';
import Footer from './components/Footer';

function app() {
   
    return (

      <div class='app'>
          <Greet/>
          <Card /><br/><br/><br/><br/>
          <Footer />
        </div>
      
    );
}


export default app;
