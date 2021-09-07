import React, { Component } from "react";
import "./card.css";
import h from './imoj.png';

function hope(title,imageurl,body){
   return(
       <div class="container">
            <div class="image-container">
                <img src={h} alt="" />
            </div>
       </div>
   )
}

export default hope;