import React from 'react';
import './App.css';
import './components/card';
import './components/card.css';
import Greet from './components/Greet';
import Img from './components/hello.jpeg';
import hos from './components/hostel.png';
import m from './logo.svg';

function app() {
   
    return (

      <div class='app'>
          <Greet/>
        <div class="all">
          <div class="card">
            <img src={Img} alt="soh" width="150px" />
            <div class="container">
                <h4>Up Hill</h4>
                <p> Housing </p>
            </div>
          </div><br/><br/><br/>

          <div class="card">
            <img src={hos} alt="hos" width="150px" />
            <div class="container">
                <h4>Hostel</h4>
                <p>Ngeni hostel</p>
            </div>
          </div><br/><br/><br/>

          <div class="card">
            <img src={m} alt="hos" width="150px" />
            <div class="container">
                <h4>React</h4>
                <p>React hostel</p>
            </div>
          </div>
        </div>
      </div>
    );
}


export default app;
