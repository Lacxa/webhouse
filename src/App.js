import React,  { useState } from 'react';
import './App.css';
import Card from './components/Card';
import './components/Card.css';
import Greet from './components/Greet';
import Footer from './components/Footer';
import Route from "./components/Route";
import First from "./components/First";


export default () => {
   
    return (
     
      <div>
        <Route path="/">
          <Greet/>
          <Card />
          <Footer />
        </Route>
          <Route path="First">
            <First />
          </Route>
      </div>
      
    )  
  
}