import { useState } from 'react';
import styles from './CalculatorButton.module.css';
const CalaculatorButton =({display,onButtonClick})=>{
  

    return (
        <div className="row justify-content-center">
        {display.map((item)=>(
        <div className="col-3">
        <button key={item} onClick={()=>{
          onButtonClick(item);
          }}
        
        type="button" className={`btn btn-outline-secondary ${styles.calButton}`}>{item}</button>
        </div>))
        }
        
      </div>
    );
    
    
}
export default CalaculatorButton;