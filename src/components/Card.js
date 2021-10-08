import React from 'react';
import './Card.css';
import g from "./imoj.png";
import h from './poo.png';
import e from './koo.png';
import j from './juju.jpg';

const user = () => {
    return(
      <div class='pua'>
        <div class="yote">
        <h2>BOOK FOR YOUR INTEREST APPARTMENTS </h2>
          <p> Don't Delivery a Product Delivery an Experience That make Our Heartfelt Hospitality and Personalized Service.</p>
          <p>Take the hassel out of securing your student home for the best years of your life</p>
        </div><br/><br/><br/>
        <br/><br/><br/>
      
      
          <div class="container">
            <div class="image-container">
              <img src={g} />
              <div class='button'>
                <a href="/home/library-07/webhouse/src/components/First.js"><button>
                  <h3>HOSTELS</h3>            
                </button></a>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="image-container">
              <img src={h} />
              <div class='button'>
                <button onClick="go()">
                    <h3>APPARTMENTS</h3>
                 </button>
              </div>

            </div>
          </div>
          <div class="container">
            <div class="image-container">
              <img src={e} />
              <div class='button'>
                <button>
                   <h3>HOTELS</h3>
                 </button>
              </div>
            </div>
          </div><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
            
          <div class="container">
            <div class="image-container">
              <img src={j} />
              <h3>BEST HOTELS</h3>
                  <p class="juju"> haya sio mapenzi bali ni juju</p>
              <div class='button'>
                <button>
                  <h3>MORE</h3>
                </button>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="image-container">
              <img src={h} />
              <h3>QUALITY APARTMENTS</h3>
              <p class="juju"> haya sio mapenzi bali ni juju</p>

              <div class='button'>
                <button>
                   <h3>MORE</h3>
                 </button>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="image-container">
              <img src={e} />
              <h3>1M BEDS</h3>
              <p class="juju"> haya sio mapenzi bali ni juju</p>

              <div class='button'>
                <button>
                    <h3>MORE</h3>
                 </button>
              </div>
            </div>
          </div>
      
      </div>
        
  )

};

export default user;