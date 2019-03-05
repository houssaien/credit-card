import React, { Component } from 'react';
import Code from './code';
import puce from './puce3.png';
import './card.css';


class Card extends Component {
  render() {
    return (
      <div className="App">
        
          <div  className="header-page">

         <p className="text-title"> CREDIT CARD</p>
         <img  src={puce} className="puce-page" alt="Logo" />
        
         <Code/>
        </div>
         
       
      </div>
    );
  }
}

export default Card;