import React, { Component } from 'react';
import visa from './master.png';
import './code.css';

class Code extends Component {
  render() {
    return (
      <div className="App">
        

         <p className="serie-card"> 7546 8964 867 522</p>
         <div class="flex-container">
  

         <div><p className="serie-code">5422<br/>BEN SALEM</p></div>
         
        
    

        

         
   

<div><p className= "serie-code2">
<div class="flex-container2">
<div><p  className= "text1"><br/><br/>VALID <br/>THRU</p></div>
<div>

 <p className= "text1">MONTH/YEAR<br/> <span className= "text3">11/05</span></p>
</div>
</div>
</p></div>

 
       
       

        
          
         <div>  <img  src={visa} className="visa-img" alt="Logo" /></div>
         
         
         </div>
         </div>
         
    );
  }
}

export default Code;