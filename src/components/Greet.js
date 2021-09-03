import React from 'react'
import img from './logo.jpeg';
import logo from './golo.png'
import './card.css';

function Greet() {
    return(
        <div calss="list">
          <img src={logo} class="logo" /> 
          <img src={img} class="house"/>
          <div class="text">
                <ul id="home">
                    <li>HOME</li>
                </ul>
                <ul id="features">
                    <li>Features</li>
                </ul>
                <ul id="work">
                    <li> How it Works</li>
                </ul>
                <ul id="help">
                    <li> Help</li>
                </ul>
           </div>

        </div>
    )
}
export default Greet;
