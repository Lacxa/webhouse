import React from 'react'
import img from './mask.jpg';
import './Greet.css';

function Greet() {
    return(
        <header>
            <div class="navbar">
                <img src={img} class="house" />
            
                <ul class='main'>
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Feature</a></li>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
        </header>
    )
}
export default Greet;
